import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Tooltip as ReactTooltip} from 'react-tooltip';

import { AppWrap ,MotionWrap} from '../../wrapper';
// import { urlFor, client } from '../../client';
import './Skills.scss';
import ReviewsBar from './ReviewsBar';

const Skills = () => {

  const [skills, setSkills] = useState([]);

  
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
      setSkills(user.skills);
  
    } catch (error) {
      console.error('Error fetching data:', error);
      
    }
  }

  return (
    <>
    <h2 className="head-text">Skills </h2>

<div className="app__skills-container">
  <motion.div className="app__skills-list">
    {skills.map((skill,index) => (
      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="app__skills-item app__flex"
        key={index}
      >
        <div
          className="app__flex"
         
        >
          <ReviewsBar score={skill?.percentage} />
          <img src={skill.image?.url} alt={skill.name} style={{height:"150px",width:"150px"}} />
        </div>
        <p className="p-text">{skill.name}</p>
      </motion.div>
    ))}
  </motion.div>
 
</div>
    </>
  )
}

export default AppWrap(
  MotionWrap(Skills, 'app__skills'),
  'skills',
  'app__whitebg',
);


// import Carousel from 'react-multi-carousel';
// import 'react-multi-carousel/lib/styles.css';

// import ReviewsBar from './ReviewsBar';

//  const Skills = () => {
//   const [skills, setSkills] = useState([]);
//   const responsive = {
//     superLargeDesktop: {
//       // the naming can be any, depends on you.
//       breakpoint: { max: 4000, min: 3000 },
//       items: 5
//     },
//     desktop: {
//       breakpoint: { max: 3000, min: 1024 },
//       items: 3
//     },
//     tablet: {
//       breakpoint: { max: 1024, min: 464 },
//       items: 2
//     },
//     mobile: {
//       breakpoint: { max: 464, min: 0 },
//       items: 1
//     }
//   };


//   useEffect(()=>{

//     fetchData();
//     console.log(skills,"jnajfmd");

//   },[])

//   async function fetchData() {
//     try {
//       const response = await fetch('https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae');
//       if (!response.ok) {
//         throw new Error('Network response was not ok');
//       }
//       const {user} = await response.json();
//       setSkills(user.skills);
  
//     } catch (error) {
//       console.error('Error fetching data:', error);
      
//     }
//   }

//   console.log(skills[0]);
//   return (
//     <section className="skill" id="skills">
//         <div className="container">
//             <div className="row">
//                 <div className="col-12">
//                     <div className="skill-bx wow zoomIn">
//                         <h2>Skills</h2>
//                         <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br></br> Lorem Ipsum has been the industry's standard dummy text.</p>
//                         <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            
//                             {skills.map((item,index)=>(
//                                <div className="item" key={index} style={{height:"15px",width:"15px"}} >
//                                 <img src={item.image?.url} alt="Image"  />
//                                 <ReviewsBar score={item?.percentage} />
//                               </div>

//                             ))}
                           
//                         </Carousel>
//                     </div>
//                 </div>
//             </div>
//         </div>
       
//     </section>
//   )
// }


// export default AppWrap(
//   MotionWrap(Skills,'app__skills'),
  
//   'app__whitebg',
// );