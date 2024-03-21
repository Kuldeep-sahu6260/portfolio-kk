import React,{useState,useEffect} from 'react'
import {motion} from "framer-motion"

import "./About.scss";

import { AppWrap ,MotionWrap} from '../../wrapper';

const About = () => {
  const [abouts, setAbouts] = useState([]);

  useEffect(()=>{

    fetchData();

  },[])

  async function fetchData() {
    try {
      const response = await fetch('https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const {user} = await response.json();
      setAbouts(user.services)
  
    } catch (error) {
      console.error('Error fetching data:', error);
      
    }
  }



 
  return (
   
    <>
    <h2 className='head-text'>I Know that <span>Good Apps</span> <br/> means <span>Good Business</span>
    </h2>
    <div className='app__profiles'>
     {
      abouts.map((about,index)=>(
        <motion.div
        whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween' }}
            className="app__profile-item"
            key={about._id}
        >
          <img src={about.image?.url} />
          <h2 className="bold-text" style={{ marginTop: 20 }}>{about.name}</h2>
            <p className="p-text" style={{ marginTop: 10 }}>{about.desc}</p>
        </motion.div>
      ))
     }
    </div>
    </>
  )
}

export default AppWrap(
  MotionWrap(About, 'app__about'),
  'about',
  'app__whitebg',
);