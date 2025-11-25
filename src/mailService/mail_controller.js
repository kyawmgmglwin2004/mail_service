import sentMailService from './mail_service.js';

async function mailSenter(req, res) {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ success: false, message: 'All fields are required.' });
  }

  try {

    const info = await sentMailService(name, email, message);

    // respond success
    return res.status(200).json({
      success: true,
      message: 'Mail sent successfully!',
      info: info // optional, can remove in production
    });

  } catch (error) {
    console.error("Mail sending error:", error);
    return res.status(500).json({ success: false, message: 'Server Error' });
  }
};

export default mailSenter;
