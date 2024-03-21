import React, { useState, useEffect } from 'react';

import { motion } from 'framer-motion';

import { AppWrap, MotionWrap } from '../../wrapper';

import './Testimonial.scss';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Testimonial = () => {
 
  const [testimonials, setTestimonials] = useState([]);


  useEffect(() => {

    fetchData();


  }, [])
  console.log(window.innerWidth);



  async function fetchData() {
    try {
      const response = await fetch('https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const { user } = await response.json();
      setTestimonials(user.testimonials);

    } catch (error) {
      console.error('Error fetching data:', error);

    }
  }


  return (
    <>
      {testimonials.length && (
        <>
          <div className='app__testimonial-item app__flex' >

            <Swiper
              breakpoints={{
                0: {
                  slidesPerView: 1,
                },
                600: {
                  slidesPerView: 2,
                },
                950: {
                  slidesPerView: 3,
                },
              }

              }
              centeredSlides={true}
              spaceBetween={30}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              navigation={true}


              pagination={{
                clickable: true,
              }}

              modules={[Autoplay, Pagination, Navigation]}
              className="mySwiper"


            >

              {testimonials.map((item, index) => (

                <SwiperSlide key={index} >
                  <motion.div
                    whileInView={{ opacity: 1 }}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.5, type: 'tween' }}
                    className="app__profile-item"

                  >
                    <img src={item.image?.url} />
                    <h2 className="bold-text" style={{ marginTop: 20, textAlign: 'center' }}>{item.name}</h2>
                    <h3 className="p-text" style={{ marginTop: 20, textAlign: 'center' }}>{item.position}</h3>

                    <p className="p-text" style={{ marginTop: 10 }}>{item.review}</p>
                  </motion.div>
                </SwiperSlide>


              ))}

            </Swiper>

          </div>


        </>
      )}


    </>
  )
}

export default AppWrap(
  MotionWrap(Testimonial, 'app__testimonial'),
  'testimonial',
  'app__primarybg',
);