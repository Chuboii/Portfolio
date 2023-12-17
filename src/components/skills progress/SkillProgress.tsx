
import { CircularProgressbar } from 'react-circular-progressbar';

import 'react-circular-progressbar/dist/styles.css';

interface skillProp {
  skill: string,
  score: number
}
export default function SkillProgress(){
  const skills : skillProp = [
    {
      skill:"javascript",
      score:97
    },
    {
    skill: "React",
    score: 95
  },
  {
    skill: "Nodejs",
    score:90
  },
  {
    skill: "express",
    score: 92
  },
  {
    skill: "mongodb",
    score:92
  }
  ]
  
  return (

    <CircularProgressbar value={70} text={`${70}%`} /> 
    ))
    )
}