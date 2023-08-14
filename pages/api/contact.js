const mail = require('@sendgrid/mail');

mail.setApiKey(process.env.SENDGRID_API_KEY);

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;
    console.log(name, email, message);
    if (
      !email ||
      !email.includes('@') ||
      !email.includes('.') ||
      !name ||
      name.trim() === '' ||
      !message ||
      message.trim() === ''
    ) {
      res.status(422).json({ message: 'Invalid input. Please try again' });
      return;
    }

    const data = await {
      to: ['milos@miloskostadinovic.com', email],
      from: { email: 'milos@miloskostadinovic.com', name: 'Milos' },

      subject: 'Contact form miloskostadinovic.com',
      text: `Successfuly sent message.\n name:${name};\n email:${email};\n message:${message};\n`,
    };

    await mail.send(data);
    res
      .status(201)
      .json({ status: 'Successfuly stored message!', message: message });
  } else {
    res.status(403).json({
      status: 'Forbidden',
      message: `No access. Method ${req.method} not allowed.`,
    });
  }
}
