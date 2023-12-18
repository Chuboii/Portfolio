import { Container, Box, H2, Text, Icons, Img, Wrapper, SkillText } from "./Skills.style";
import leftArrow from "../../assets/arrow1.svg";
import rightArrow from "../../assets/arrow2.svg";
import progressBar1 from "/src/assets/untitled (1).png";
import progressBar2 from '/src/assets/untitled (2).png'
import progressBar3 from "/src/assets/untitled (3).png"
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";



interface skillProp {
  skill: string;
  img: string;
}

const skills: skillProp[] = [
  {
    skill: "javascript",
    img:'/src/assets/untitled (3).png'
  },
  {
    skill: "typescript",
    img:'/src/assets/untitled (3).png'
  },
  {
    skill: "React",
    img:'/src/assets/untitled (1).png'
  },
  {
    skill: "Redux",
    img:'/src/assets/untitled (1).png'
  },
  {
    skill: "Nodejs",
    img:"/src/assets/untitled (2).png"
  },
  {
    skill: "express",
    img:"/src/assets/untitled (2).png"
  },
  {
    skill: "mongodb",
    img:'/src/assets/untitled (1).png'
  },
  {
    skill: "restful apis",
    img:"/src/assets/untitled (2).png"
  },
];

export default function Skills() {

  
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 1 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 1 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
  };
  
  return (
    <>
      <Container id="skills">
        <H2>Skills</H2>
        <Text>
          With proficiency spanning a diverse array of technologies, I excel in JavaScript, React, Node.js, and MongoDB, consistently delivering high-quality solutions. My robust skill set is complemented by a nuanced understanding of front-end and back-end development, underscored by a meticulous approach to problem-solving and a demonstrated track record of successful project implementations.
          </Text>
          <Box>
        <Carousel
  responsive={responsive}
  infinite={true}
  containerClass="slider"
          >
            {skills.map((el, id) => (
              <Wrapper  key={id} >
              <Img alt="ek" src={el.img}/>
                <SkillText>{el.skill}</SkillText>
              </Wrapper>
           )) }
          </Carousel>
        </Box>
        
  
        

  
      </Container>
    </>
  );
}
