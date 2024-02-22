import React from 'react'
import Navbar from './Navbar'

const About = () => {
  return (
    <>
      <Navbar />
      <div className="mx-3 md:container md:mx-auto my-5 rounded-xl p-5 md:w-1/2 bg-[#D4F1F4] min-h-[80vh]">
        <div className="about my-5 ">
          <h1 className='text-xl font-bold'>About Goal Grid</h1>

          <p>Welcome to Goal Grid, where your aspirations meet organized execution! We present a powerful yet user-friendly platform designed to transform your goals into tangible achievements.</p>

        </div>

        <div className='h-[1px] bg-[#05445E] w-3/4 mx-auto my-2'></div>
        <div className="why my-5">
          <h2 className='text-md font-bold'>Why Goal Grid?</h2>

          <p>At Goal Grid, we recognize that turning dreams into reality requires more than just ambition; it demands strategic planning and consistent effort. Our app is crafted to be your digital ally in this journey, providing the tools you need to navigate your goals with precision and purpose.</p>
        </div>

        <div className='h-[1px] bg-[#05445E] w-3/4 mx-auto my-2'></div>
        <div className="keyFeatures">
          <h2 className='text-md font-bold py-3'>Key Features:</h2>

          <ol>
            <li><strong>Effortless Goal Setting:</strong> Seamlessly add and articulate your goals. Goal Grid ensures a straightforward and efficient goal-setting process, allowing you to define your ambitions with clarity.</li>

            <li><strong>Dynamic Progress Tracking:</strong> Witness your progress dynamically with our interactive grid. Track milestones, accomplishments, and setbacks, gaining insights into your journey's ebb and flow.</li>

            <li><strong>Intuitive Goal Filtering:</strong> Tailor Goal Grid to your unique approach. Filter and categorize your goals based on priority, timeline, or any customized criteria that align with your personal or professional objectives.</li>

            <li><strong>Achievement Celebration:</strong> Celebrate victories, no matter how small, by marking goals as complete. Revel in the satisfaction of each achievement as you move closer to your overarching aspirations.</li>

            <li><strong>Responsive Design:</strong> Access Goal Grid seamlessly across devices. Whether you're on your desktop, tablet, or smartphone, our responsive design ensures a consistent and enjoyable user experience.</li>
          </ol>
        </div>

        <div className='h-[1px] bg-[#05445E] w-3/4 mx-auto my-2'></div>
        <div className="mission">
          <h2 className='text-md font-bold py-3'>Our Mission:</h2>

          <p>Goal Grid is on a mission to empower individuals to not only set ambitious goals but to conquer them systematically. We believe that every goal achieved is a step toward a more fulfilling life, and we're committed to being the platform that propels you forward.</p>
        </div>

        <div className='h-[1px] bg-[#05445E] w-3/4 mx-auto my-2'></div>
        <div className="getStarte">
          <h2 className='text-md font-bold py-3'>Get Started:</h2>

          <p>Ready to turn your aspirations into accomplishments? Embrace the power of Goal Grid today. Sign up and embark on a journey of intentional and successful goal pursuit.</p>
        </div>

      </div>
    </>

  )
}

export default About
