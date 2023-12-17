import {Container,Box, H2, Text } from './Skills.style'
import leftArrow from '../../assets/arrow1.svg'
import rightArrow from '../../assets/arrow2.svg'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import "./Skills.css"
import SkillProgress from "../skills progress/SkillProgress"
export default function Skills() {
    
 
1

    return (
        <>
        <Container id='skills'>
                <H2>Skills</H2>
    <Box>
     <Swiper
     modules={[Pagination, Scrollbar, A11y]}
      spaceBetween={30}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
    >
      <SwiperSlide><SkillProgress/></SwiperSlide>
    </Swiper>
</Box>
{/*
<CircularProgressbar value={66} text={`${66}%`} />
         
<CircularProgressbar value={66} text={`${66}%`} />
*/}
            </Container>
       </>
    )
}