import { FC, useEffect, useState } from 'react'
import {Container, Wrapper, H1, Form, Input, Button} from './NewsLetter.style'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import {useForm} from 'react-hook-form'

interface FormDataProps {
    email: string;
  }
  


const NewsLetter: FC = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm<FormDataProps>({ mode: "onChange" })
    const [loading, setLoading] = useState(false)

    const registerOptions = {
        email: {
            required: "email is required",
            pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Invalid email address',
              }
        }
    }


    useEffect(() => {
        if (errors.email) {

            if (errors.email.message === 'email is required') {
                toast.error('Email is required', {
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
            else if (errors.email.message === 'Invalid email address') {
                toast.error('Email is invalid', {
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
    }, [errors.email])
 

    const submitForm = async(data : FormDataProps) => {
        try {
            setLoading(true)

            await axios.post('https://portfolio-nog1.onrender.com/api/newsletter', {
                email: data.email
            })

            setLoading(false)
            toast.success("Success! You've successfully subscribed", {
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
        }
        catch (e) {
            if (axios.isAxiosError(e)) {
                if (e?.response?.data === 'Email already subscribbed') {
                    setLoading(false)
                    reset()
                    toast.error('Oops! Email is subscribed already', {
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
            <Container>
                <Wrapper>
                    <H1>Subscribe to my Newsletter & Never miss latest updates</H1>
                </Wrapper>

                <Wrapper>
                    <Form onSubmit={handleSubmit(submitForm)}>
                        <Input placeholder="Email Address" {...register("email", registerOptions.email)} />
                        <Button>{loading ? "Submitting" : "Submit"}</Button>
                    </Form>
                </Wrapper>
                
        </Container>
        </>
    )
}

export default NewsLetter