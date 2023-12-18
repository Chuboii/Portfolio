import express from 'express';
import nodemailer from 'nodemailer'
import cors from 'cors'
import dotenv from 'dotenv'

const app = express()


app.use(express.json())
dotenv.config()

const router = express.Router()


app.use(cors())

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL,
        pass: process.env.SECRET_KEY
        
    }
})



router.post('/contact', (req, res) => {
    const { email, firstname,lastname, message,phone } = req.body
 
    try { 
        const mailOptions = {
            from: process.env.EMAIL,
            to: email,
            subject: "Contact Form Submission ~ Portfolio",
            html: `
            <h1> Here's the contact information of user: </h1>

            <p>Firstname: ${firstname} </p>
            <p>Lastname: ${lastname} </p>
            <p>Phone: ${phone} </p>
            <p>Email: ${email} </p>
            <p>Message: ${message} </p>
            `
        }

        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.error('Error sending email:', error);
                res.status(500).json("Error sending email")
            } else {
                res.status(200).send("email sent successfully")
                console.log('Email sent:', info.response);
            }
        });
    }
    catch (e) {
        console.log(e)
        res.status(500).json("internal server error")
    }
})

app.use(`/api`, router)

const port = process.env.PORT || 8080

app.listen(port, () => {
    console.log("listening on port 8080")
})