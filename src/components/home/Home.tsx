import { Container, WrapImage, Welcome, Text, Intro, WrapText, Image } from './Home.style'
import img from '../../assets/header-img.svg'

function Home() {
  return (
      <>
          <Container>
              <WrapText>
                  <Welcome>Welcome to my space</Welcome>
                  <Intro>Hi! I'm Onyechere Favour</Intro>
                  <Text>I am an accomplished Full Stack Web Developer with five(5) years of experience, proficient in front-end and back-end technologies. I specialize in delivering innovative and user-centric web applications, tackling challenges with a problem-solving mindset. As a continuous learner and collaborative team player. Elevate your digital presence with my expertise in creating robust and dynamic web solutions.</Text>
              </WrapText>

              <WrapImage className='animate__animated animate__bounce'>
                  <Image src={ img} />
              </WrapImage>
      </Container>
      </>
  )
}

export default Home