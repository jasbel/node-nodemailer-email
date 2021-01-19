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

    let transporter = nodemailer.createTransport({
        // host: "mail.iiotatlas.com",
        // port: 587,
        // secure: false,
        service: 'gmail',
        auth: {
            user:'iiotatlas.test',
            pass: 'AtlasAutomation777'
        }
    });

    let mailInfo = {
        from: 'iiotatlas.test@gmail.com',
        to: 'iiotatlas@gmail.com',
        subject: 'Sending email using Node JS',
        // text: "That was easy, facilito",
        html: contentHTML
    };

    transporter.sendMail(mailInfo, function(error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });

    // res.send('received');
    res.redirect('/success.html')
});

module.exports = router;

/** view:  */