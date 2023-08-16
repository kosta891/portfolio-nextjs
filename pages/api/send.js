import { Resend } from 'resend';
import EmailTemplate from '../../components/EmailTemplate';
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
      from: 'Portfolio <milos@miloskostadinovic.com>',
      to: 'milos@miloskostadinovic.com',
      subject: 'Contact form miloskostadinovic.com',
      react: EmailTemplate({ name, email, message }),
    });

    res.status(200).json(data);
  } catch (error) {
    res.status(400).json(error);
  }
};
