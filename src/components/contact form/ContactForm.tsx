import { FC, useState, memo, useEffect } from "react";
import {Form, Button, H1, Wrapper, Box, Input, Textarea} from './ContactForm.style'
import axios from 'axios';
import { useForm } from 'react-hook-form'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

interface FormDataProps {
    firstname: string;
    lastname: string;
    email: string;
    phone: string;
    message: string;
}




    
const ContactForm: FC = memo (() => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm<FormDataProps>({ mode: "onChange" })
    const [loading, setLoading] = useState(false)


    const registerOptions = {
        firstname: {
            required: true,
        },
        lastname: {
            required: true,
        },
        email: {
            required: true,
        },
        phone: {
            required: true,
        },
        message: {
            required:true
        }

    }



    useEffect(() => {
        if (errors.firstname) {
          toast.error('Your firstname must be provided!', {
            position: 'top-right',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'colored',
          })
        }
        else if (errors.lastname) {
            toast.error('Your lastname must be provided!', {
                position: 'top-right',
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: 'colored',
              }) 
        }
        else if (errors.email) {
            toast.error('Your email must be provided!', {
                position: 'top-right',
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: 'colored',
              }) 
        }
        else if (errors.phone) {
            toast.error('Your phone number must be provided!', {
                position: 'top-right',
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: 'colored',
              }) 
        }
        else if (errors.message) {
            toast.error('Message must be provided!', {
                position: 'top-right',
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: 'colored',
              }) 
        }
      
    }, [errors.firstname, errors.lastname, errors.email, errors.phone, errors.message]);


    const submitForm = async (data: FormDataProps) => {
        try {
            setLoading(true)
                  axios.post("https://portfolio-nog1.onrender.com/api/contact", {
                    firstname: data.firstname,
                    lastname: data.lastname,
                    email: data.email,
                    phone: data.phone,
                    message: data.message
                })
    
                toast.success('Email sent successfully!', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                });
                reset()
                setLoading(false)
        }
        catch (e) {   
            setLoading(false)
            if (axios.isAxiosError(e)) {
                if (e?.response?.data === "Error sending email") {
                    toast.error('Please provide a verified email!', {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "colored",
                    });
                }
            }
           
        }
    }
    return (
        <>
            <ToastContainer/>
            <Form onSubmit={handleSubmit(submitForm)}>
                <H1>Get in Touch</H1>
                <Wrapper>
                    <Box>
                        <Input placeholder="first name" {...register("firstname", registerOptions.firstname)} />
        
                        <Input placeholder="last name"  {...register("lastname", registerOptions.lastname)} />
                    </Box>
                    <Box>
                        <Input placeholder="email address" {...register("email", registerOptions.email)}/>
                        <Input placeholder="phone no"  {...register("phone", registerOptions.phone)}/>
                    </Box>
                    <Box>
                        <Textarea placeholder="message"  {...register("message", registerOptions.message)}/>
                    </Box>

                    <Button>{loading ? "Sending..." : "Send"} </Button>
                </Wrapper>
        </Form>
        </>
    )
})

export default ContactForm