import express from 'express';
import nodemailer from 'nodemailer'
import cors from 'cors'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import SubscribedUsers from './model/SubscribedUsers.js';

const app = express()


app.use(express.json())
dotenv.config()

const connect = () => {
    mongoose.connect(process.env.MONGO)
        .then(() => console.log("Connected to Mongo"))
        .catch(e => console.log(e))
} 


const router = express.Router()
const emailListRouter = express.Router()

app.use(cors())

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL,
        pass: process.env.SECRET_KEY
        
    }
})


emailListRouter.post('/newsletter', async (req, res) => {
    try {
        const { email } = req.body
        
        const checkEmails = await SubscribedUsers.find({ email })
        
  
        if (checkEmails.length > 0) return res.status(500).json("Email already subscribbed")
        
        const subscribedUser = new SubscribedUsers({
            email
        })

        subscribedUser.save()

        res.status(200).json("User subscribed successfully")
    }
    catch (e) {
        res.status(500).json(e)
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
                res.status(500).json("Error sending email")
            } else {
                res.status(200).send("email sent successfully")
            }
        });
    }
    catch (e) {
        res.status(500).json("internal server error")
    }
})

app.use(`/api`, router)
app.use("/api", emailListRouter)

const port = process.env.PORT || 8080

app.listen(port, () => {
    console.log("listening on port 8080")
    connect()
})