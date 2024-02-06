
import React, { useEffect, useRef, useState } from "react";
import {motion} from "framer-motion"
import "../styles/_review.scss";
import image1 from "../assets/img/image1.jpg";
import image2 from "../assets/img/image2.jpeg";
import image3 from "../assets/img/image3.jpeg";
import image4 from "../assets/img/image4.jpeg";



const reviews = [
    {
      image: image1,
      review: "EduCavity surpassed all our expectations in bringing our project to life. Their team demonstrated exceptional talent and expertise, customizing their approach to perfectly match our unique requirements. I wholeheartedly endorse EduCavity to anyone seeking a dependable and results-driven partner.",
      name: "Joy S",
    },
    {
      image: image2,
      review: "Collaborating with EduCavity felt like having our dream team right beside us. They were remarkably cooperative and responsive, always going above and beyond to ensure our absolute satisfaction. Their extensive global network provided us access to a diverse pool of resources and talent, making our project a resounding success.",
      name: "John L",
    },
    {
      image: image3,
      review: "Initially hesitant about consulting firms, EduCavity swiftly dispelled any doubts. They emerged not just as service providers but genuine partners. Taking the time to grasp our business intricacies, they devised a creative and effective solution tailored precisely to our needs.",
      name: "Blessing R",
    },
    {
      image: image4,
      review: "Our journey with EduCavity transformed our business trajectory. Struggling amidst market saturation, their expertise helped us refine our brand, devise targeted marketing strategies, and forge key partnerships. Thanks to their guidance, we witnessed remarkable growth and cemented our position as industry leaders.",
      name: "Sophie W",
    },
    {
      image: image2,
      review: "Partnering with EduCavity was a game-changer. Their collaborative spirit, responsiveness, and global network of partners provided us with unparalleled resources and expertise. With their support, we achieved milestones we never thought possible.",
      name: "ac T",
    },
  ];
  



const Review = () => {
    const [cwidth, setCWidth] = useState('0')

    const carousel = useRef()

    useEffect(()=> {
        setCWidth(carousel.current.scrollWidth - carousel.current.offsetWidth)
    },[])
  return (
    <div className="testimonials">
      <h1>What our Clients are Saying</h1>
      <motion.div ref={carousel} 
        
      className="carousel">
        <motion.div drag='x' 
          animate={{ x: -cwidth }}
          transition={{
            type: "spring", // Use spring animation for smooth scrolling
           
            duration: 5, 
            repeat: Infinity, // Repeat the animation infinitely
            repeatType: "mirror", // Reverse the animation on each repeat
          }}
       dragConstraints={{  right: 0, left:-cwidth}}
        whileTap={{cursor: "grabbing"}}
       className="testContainer">
            {reviews.map((testimonial, index) => (
            <motion.div className="testCard" key={index}>
                <p>"{testimonial.review}"</p>
                <div className="cardbottom">
                <img src={testimonial.image} alt={testimonial.name} />
                <p>{testimonial.name}</p>
                </div>
            </motion.div>
            ))}
        </motion.div>

      </motion.div>

          <div    className="testContainer2">
              {reviews.map((testimonial, index) => (
              <div className="testCard" key={index}>
                  <p>"{testimonial.review}"</p>
                  <div className="cardbottom">
                  <img src={testimonial.image} alt={testimonial.name} />
                  <p>{testimonial.name}</p>
                  </div>
              </div>
              ))}
          </div>
  
   
    </div>
  );
};

export default Review;
