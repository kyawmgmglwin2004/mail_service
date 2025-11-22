import sentMailService from './mail_service.js';

 async function mailSenter(req, res) {
  const { name, email, message } = req.body;

  // Basic validation
  if (!name || !email || !message) {
    return res.status(400).json({ success: false, message: 'All fields are required.' });
  }
 try {
     const result = await sentMailService(name, email, message);
    return res.status(result.status).json({ success: result.success, message: result.message });
  
 } catch (error) {
    return res.status(500).json({ success: false, message: 'Server Error' });
 }
};

export default mailSenter;