import { FC } from "react";
import {Form, Button, H1, Wrapper, Box, Input, Textarea} from './ContactForm.style'


const ContactForm: FC = () => {
    

    return (
        <>
            <Form>
                <H1>Get in Touch</H1>
                <Wrapper>
                    <Box>
                        <Input  placeholder="first name" name="first name"/>
                        <Input placeholder="last name" name="last name"/>
                    </Box>
                    <Box>
                        <Input placeholder="email address" name="email address"/>
                        <Input placeholder="phone no" name="phone no"/>
                    </Box>
                    <Box>
                        <Textarea placeholder="message" name="message"/>
                    </Box>

                    <Button>Send</Button>
                </Wrapper>
        </Form>
        </>
    )
}

export default ContactForm