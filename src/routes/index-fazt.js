const { Router } = require('express');
const nodemailer = require('nodemailer')
const router = Router();

router.post('/send-email', async (req, res) => {
    // console.log(req.body);
    /** Desestructuracion */
    const { name, email, phone, message } = req.body;

    contentHTML = `
        <h1> User Information</h1>
        <ul>
            <li>Username: ${name}</li>
            <li>User Email: ${email}</li>
            <li>Phone: ${phone}</li>
            <li>Message: ${message}</li>
        </ul>
    `;

    /** configuracion del email */
    let transporter = nodemailer.createTransport({
        host: 'mail.iiotatlas.com',
        // port: 587,
        port: 587,
        secure: false,
        auth: {
            user: 'dev@iiotatlas.com',
            pass: '?O!P+37aQx;b'
        },
        tls: {
            rejectUnauthorized: false
        }
    });

    let info = await transporter.sendMail({
        from: '"developer" <dev@iiotatlas.com>',
        to: 'iiotatlas@gmail.com',
        subject: 'Sending email using Node JS',
        text: 'hola mundillo'
    });

    console.log('Message sent', info.messageId);

    // console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
    
    // res.send('received');
    res.redirect('/success.html')
});

module.exports = router;