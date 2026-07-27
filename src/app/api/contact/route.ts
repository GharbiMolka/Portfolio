import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, message } = body;

    // Validation des champs requis
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Veuillez remplir tous les champs (Nom, Email et Message)." },
        { status: 400 }
      );
    }

    // Email simple validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Adresse email invalide." },
        { status: 400 }
      );
    }

    const smtpHost = process.env.SMTP_HOST || "smtp.gmail.com";
    const smtpPort = Number(process.env.SMTP_PORT) || 465;
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;

    // Adresses destinataires (par défaut celles demandées par l'utilisateur)
    const recipientEmails =
      process.env.RECIPIENT_EMAIL ||
      "gharbimolka4@gmail.com, Molka.Gharbi@esprit.tn";

    if (!smtpUser || !smtpPass) {
      console.warn("SMTP_USER ou SMTP_PASS non définis dans l'environnement.");
      return NextResponse.json(
        {
          error:
            "Le service d'envoi n'est pas encore configuré sur le serveur (SMTP_USER/SMTP_PASS absents dans .env.local).",
          code: "SMTP_NOT_CONFIGURED",
        },
        { status: 503 }
      );
    }

    // Création du transporteur SMTP
    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpPort === 465,
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    // Options du mail
    const mailOptions = {
      from: `"${name} via Portfolio" <${smtpUser}>`,
      replyTo: email,
      to: recipientEmails,
      subject: `📩 Nouveau message de ${name} via votre Portfolio`,
      text: `Vous avez reçu un nouveau message depuis votre site Portfolio.\n\nNom: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      html: `
        <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 12px; background-color: #ffffff;">
          <div style="background: linear-gradient(135deg, #6366f1 0%, #4f46e5 100%); padding: 20px; border-radius: 8px; text-align: center; color: white;">
            <h2 style="margin: 0; font-size: 22px;">Nouveau message du Portfolio</h2>
          </div>
          
          <div style="padding: 20px 10px;">
            <p style="font-size: 15px; color: #333333; margin-bottom: 8px;"><strong>Expéditeur :</strong> ${name}</p>
            <p style="font-size: 15px; color: #333333; margin-bottom: 20px;"><strong>Email :</strong> <a href="mailto:${email}" style="color: #6366f1; text-decoration: none;">${email}</a></p>
            
            <div style="background-color: #f8fafc; padding: 16px; border-left: 4px solid #6366f1; border-radius: 6px;">
              <p style="margin: 0 0 8px 0; font-weight: bold; color: #475569; font-size: 13px; text-transform: uppercase;">Message :</p>
              <p style="margin: 0; font-size: 15px; color: #1e293b; white-space: pre-wrap; line-height: 1.6;">${message}</p>
            </div>
          </div>

          <div style="border-top: 1px solid #f1f5f9; padding-top: 15px; text-align: center; font-size: 12px; color: #94a3b8;">
            Ce message a été envoyé depuis le formulaire de contact de votre portfolio.
          </div>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({
      success: true,
      message: "Votre message a bien été envoyé ! Merci de m'avoir contactée.",
    });
  } catch (error: any) {
    console.error("Erreur serveur lors de l'envoi du message :", error);
    return NextResponse.json(
      {
        error:
          "Une erreur est survenue lors de l'envoi du message. Veuillez réessayer plus tard.",
        details: error?.message,
      },
      { status: 500 }
    );
  }
}
