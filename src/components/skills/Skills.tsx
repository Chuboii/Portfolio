import { Container, Box, H2, Text, Img, Wrapper, SkillText } from "./Skills.style";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {FC} from "react"
import ninety from "/src/assets/untitled (3).png"
import ninetyFive from "/src/assets/untitled (1).png"
import eighty from "/src/assets/untitled (2).png"
import TrackVisibility from 'react-on-screen';
 

interface skillProp {
  skill: string;
  img: string;
}

const skills: skillProp[] = [
  {
    skill: "javascript",
    img:ninety
  },
  {
    skill: "typescript",
    img:ninety
  },
  {
    skill: "React",
    img:ninetyFive
  },
  {
    skill: "Redux",
    img:ninetyFive
  },
  {
    skill: "Nodejs",
    img:eighty
  },
  {
    skill: "express",
    img:eighty
  },
  {
    skill: "mongodb",
    img:eighty
  },
  {
    skill: "restful apis",
    img: ninetyFive
  },
];

const Skills:FC = () => {

  
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
      <TrackVisibility>
        {({isVisible}) =>
          <Container id="skills" className={isVisible && 'animate__animated animate__bounce'}>
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
                  <Wrapper key={id} >
                    <Img alt="ek" src={el.img} />
                    <SkillText>{el.skill}</SkillText>
                  </Wrapper>
                ))}
              </Carousel>
            </Box>
        
  
        

  
          </Container>
        }
        </TrackVisibility>
    </>
  );
}

export default Skills