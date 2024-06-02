const nodemailer = require("nodemailer");

export default async (req, res) => {
  const { firstName, name, email, message } = req.body;

  const transporter = nodemailer.createTransport({
    host: "mail.infomaniak.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  // Personnalisation du message en HTML pour toi
  const customMessage = `
  <html>
    <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
      <div style="max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #7947FF; border-radius: 5px;">
        <h2>🍀 Nouveau message de <span style="color: #7947FF;">${firstName} ${name}</span></h2>
        <p style="font-size: 16px;">Vous avez reçu un nouveau message depuis votre formulaire de contact :</p>
        <table style="width: 100%;">
          <tr>
            <td style="font-weight: bold; padding: 5px 0;">Nom : ${firstName} ${name}</td>
          </tr>
          <tr>
            <td style="font-weight: bold; padding: 5px 0;">Email : ${email}</td>
          </tr>
          <tr>
            <td style="font-weight: bold; padding: 5px 0;">Message :</td>
          </tr>
          <tr>
            <td style="padding: 10px 0;">
              <div style="background-color: #f9f9f9; padding: 10px; border-left: 5px solid #7947FF; margin: 0;">
                ${message}
              </div>
            </td>
          </tr>
        </table>
        <p style="margin-top: 20px;">Cordialement,</p>
        <p style="margin: 0;">Votre site web</p>
      </div>
    </body>
  </html>
  `;

  const mailOptions = {
    from: "hello@gael-dev.fr",
    replyTo: `${firstName} ${name} <${email}>`,
    to: "hello@gael-dev.fr",
    subject: `🚀 Nouveau message de ${firstName} ${name}.`,
    html: customMessage, // Utilisez le champ 'html' pour le contenu HTML
  };

  // Personnalisation du message de confirmation pour le destinataire
  const confirmationMessage = `
  <html>
    <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
      <div style="max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #7947FF; border-radius: 5px;">
        <h2>Merci, ${firstName} ${name}!</h2>
        <p style="font-size: 16px;">Nous avons bien reçu votre message et nous vous répondrons dans les plus brefs délais.</p>
        <p style="margin-top: 20px;">Cordialement,</p>
        <p style="margin: 0;">Votre site web</p>
      </div>
    </body>
  </html>
  `;

  const confirmationMailOptions = {
    from: "hello@gael-dev.fr",
    to: email,
    subject: "Confirmation de réception de votre message",
    html: confirmationMessage, // Utilisez le champ 'html' pour le contenu HTML
  };

  if (req.method === "POST") {
    try {
      // Envoyer l'email à toi-même
      let info = await transporter.sendMail(mailOptions);
      console.log("🍀 Email envoyé avec succès : ", info.response);

      // Envoyer l'email de confirmation au destinataire
      let confirmationInfo = await transporter.sendMail(
        confirmationMailOptions
      );
      console.log(
        "🍀 Email de confirmation envoyé avec succès : ",
        confirmationInfo.response
      );

      res.status(200).send("🚀 Email envoyé avec succès !");
    } catch (err) {
      console.error("🛑 Erreur lors de l'envoi : ", err);
      res.status(500).send(`🛑 Erreur lors de l'envoi : ${err.message}`);
    }
  } else {
    res.status(405).json({ message: "Méthode non autorisée" });
  }
};
