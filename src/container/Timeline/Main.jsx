import React,{useState,useEffect} from 'react'
import { AppWrap, MotionWrap } from '../../wrapper';
import "./Main.scss";
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
// import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import ExperienceCard from './ExperienceCard';



const Main = () => {
    const [data, setData] = useState([]);
    let forEducationArray = [];
    let notForEducationArray = [];

    for (let i = 0; i < data.length; i++) {
        if (data[i].forEducation) {
          forEducationArray.push(data[i]);
        } else {
          notForEducationArray.push(data[i]);
        }

    }

    console.log(forEducationArray,"this exp");
    console.log(notForEducationArray,"this is eductaion")
    

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
          setData(user?.timeline);
      
        } catch (error) {
          console.error('Error fetching data:', error);
          
        }
      };
      

  


  return (
    <>
     <h2 className="head-text">Educations & Experiences</h2>

     <div className="app__container-exp" >
     <div >
     
     <Timeline>
      {forEducationArray.map((experience,index) => (
          <TimelineItem>
              <TimelineSeparator>
                  <TimelineDot variant="outlined" color="secondary" />
                  {/* {index !== experiences.length - 1 && <TimelineConnector style={{ background: '#854CE6' }} />} */}
              </TimelineSeparator>
              <TimelineContent sx={{ py: '12px', px: 2 }}>
                  <ExperienceCard experience={experience}/>
              </TimelineContent>
          </TimelineItem>
      ))}
  </Timeline>
  

     </div>
  <div>
   
      <Timeline>
      {notForEducationArray.map((experience,index) => (
          <TimelineItem>
              <TimelineSeparator>
                  <TimelineDot variant="outlined" color="secondary" />
                  {/* {index !== experiences.length - 1 && <TimelineConnector style={{ background: '#854CE6' }} />} */}
              </TimelineSeparator>
              <TimelineContent sx={{ py: '12px', px: 2 }}>
                  <ExperienceCard experience={experience}/>
              </TimelineContent>
          </TimelineItem>
      ))}
  </Timeline>
 
  </div>


     </div>

    </>
  )


}


export default AppWrap(
    MotionWrap(Main, 'app__skills'),
    'Experience',
    'app__whitebg',
  );