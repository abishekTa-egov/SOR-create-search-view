import React, { useState } from 'react';


const dummyData = [
  {
    stepsArray: [
      {
        text: "Step 1: Introduction",
        bannerImage: "https://cdn.worldvectorlogo.com/logos/world-health-organization-logo-1.svg"
      },
      {
        text: "Step 2: Getting Started",
        bannerImage: "venice1.png"
      },
      {
        text: "Step 3: Advanced Techniques",
        bannerImage: "Venice3.png"
      },
      {
        text: "Step 4: Conclusion",
        bannerImage: "Venice4.png"
      }
    ]
  }
];

const Slider = ({ data = dummyData }) => {
  const [currentStep, setCurrentStep] = useState(0);

  const handleNext = () => {
    setCurrentStep((prevStep) => 
      prevStep < data[0].stepsArray.length - 1 ? prevStep + 1 : 0
    );
  };

  const handlePrevious = () => {
    setCurrentStep((prevStep) => 
      prevStep > 0 ? prevStep - 1 : data[0].stepsArray.length - 1
    );
  };

  const { text, bannerImage } = data[0].stepsArray[currentStep];

  return (
    <div className="slider-container">
     
        <img src={bannerImage} alt={`Slide ${currentStep}`} className="slider-image" />
        <div className="slider-card">
        <p className="slider-text">{text}</p>
        </div>
        <div className="slider-buttons">
          <button onClick={handlePrevious} className="slider-button">
            <img alt="just a button" className='previous' src="Previous.png"/>
          </button>
          <button onClick={handleNext} className="slider-button">
          <img alt="just a button" className='next' src="Next.png"/>
          </button>
        </div>
     
    </div>
  );
};

export default Slider;
