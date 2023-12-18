import { FC } from 'react'
import {Container, Wrapper, H1, Form, Input, Button} from './NewsLetter.style'

const NewsLetter: FC = () => {
    
    return (
        <>
            <Container>
                <Wrapper>
                    <H1>Subscribe to our Newsletter & Never miss latest updates</H1>
                </Wrapper>

                <Wrapper>
                    <Form>
                        <Input placeholder="Email Address"/>
                        <Button>Submit</Button>
                    </Form>
                </Wrapper>
                
        </Container>
        </>
    )
}

export default NewsLetter