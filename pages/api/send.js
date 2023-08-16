import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async (req, res) => {
  const { name, email, message } = req.body;
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
  try {
    const data = await resend.emails.send({
      from: 'Porfolio <milos@miloskostadinovic.com>',
      to: email,
      subject: 'Contact form miloskostadinovic.com',
      react: `Successfuly sent message.\n name:${name};\n email:${email};\n message:${message};\n`,
    });

    res.status(200).json(data);
  } catch (error) {
    res.status(400).json(error);
  }
};
