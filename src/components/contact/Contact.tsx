import { FC } from "react";
import { Container, Img, Wrapper } from './Contact.style'
import img from '/src/assets/untitled.png'
import ContactForm from "../contact form/ContactForm";

const Contact: FC = () => {

    return (
        <>
            <Container id="contact">
                <Wrapper>
                <Img src={img} />
                    <ContactForm />
                    </Wrapper>
        </Container>
        </>
    )
}

export default Contact