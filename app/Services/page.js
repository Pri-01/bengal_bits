import React from 'react'
import Web from '@/app/assets/web.jpg'
import App from '@/app/assets/app.jpg'
import Ser from '@/app/assets/ser.jpg'
import './sec2.css'
import './sec3.css'
import './sec4.css'
import Image from 'next/image'
import "../Home/home.css"

const page = () => {
  return (
    <> 

<div className="background-video home" id="home">
        {/* <video autoPlay loop muted playsInline>
            <source src="https://supportsoft.com.au/web/video/banner-bg.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video> */}
        <div className="image__item">
          <Image src={Ser} alt="" className="image" />
        </div>

        <div className="video-overlay"></div>
        <div className="home__container container">
          <h1>
            APPLICATION DEVELOPMENT AND SOFTWARE CONSULTING FOR YOUR DIGITAL
            SUCCESS
          </h1>
          <p>
            Since 2013. We have been providing innovative, result-driven, and
            versatile digital solutions to assist businesses in connecting with
            their customers and scaling new heights.
          </p>
          
        </div>
      </div>

    <section className="sec3" id='web'>
        <div className="sec3__container container">
            <div className="sec3__heading section__title">
                <h1>Website Development</h1>
                <h2 className='section__subtitle'>We Create Powerful Software Solutions That Help Businesses Succeed</h2>

                <div className="btns btns1">
                <button className="btn sec3__btn">Get in touch</button>
                <button className="btn sec3__btn">learn More</button>
                </div>
             
            </div>

            <div className="sec3__content">
                <div className="img__content">
                    <Image className='img__sec3' src={Web} alt="" />
                </div>
                <div className="text__content">
                    <h1>Softwares, 100% Tailored To your Needs</h1>
                    <p className='section__subtitle'>Website development is the digital backbone of a company, shaping its online presence and customer interaction. It begins with understanding the company&apos;s goals, target audience, and branding identity. Designing a website involves creating a visually appealing layout that is intuitive to navigate. Development encompasses coding, ensuring functionality across various devices and browsers. Content creation is pivotal, conveying the company&apos;s message effectively. Integration of features like e-commerce or contact forms enhances user experience. Security measures must be implemented to protect sensitive data and maintain trust. Regular updates and maintenance keep the website running smoothly and up-to-date. Optimization for search engines boosts visibility and traffic. Ultimately, website development is a dynamic process, reflecting the company&apos;s growth and evolution in the digital era. 

                    </p>
                </div>
            </div>
        </div>
    </section>


         <section className="sec2" id='app'>
        <div className="container sec2__container">
            <div className="text">
                <h1 className='section__title'>App Development</h1>
                <p className='section__subtitle'>
                App development is a dynamic process that merges creativity with technical skill. It begins with brainstorming and refining ideas before moving into the design phase to craft intuitive user interfaces. Development involves coding, rigorous testing, and fine-tuning to ensure a seamless user experience. Compatibility across devices and stringent security measures are critical considerations. Integration with backend systems and APIs enhances functionality. Continuous iteration based on user feedback drives improvement. App store optimization is key for visibility and user acquisition. Ultimately, successful app development demands innovation, user-centric design, and robust engineering.

                </p>
<div className="btns">
<button href='#' className='btn sec3__btn'>View Projects</button>
        <button href='#' className='btn sec3__btn'>Book free consultation</button>
</div>
       

            </div>

        <div className="side-bar">
                            <div className="row img__sec">
                                     <span className="span1" aria-hidden="true"><Image src={App} alt="feature image" className="img-fluid rounded-custom"/></span> 
                                     <span className="span1" aria-hidden="true"><Image src={App} alt="feature image" className="img-fluid rounded-custom"/></span> 
                                     <span className="span1" aria-hidden="true"><Image src={App} alt="feature image" className="img-fluid rounded-custom"/></span> 
                                 
                            </div>
            </div>
        </div>
    </section>


    <section className="sec4" id='ui'>
        <div className="sec4__container container">
        <div className="sec4__heading section__title">
                <h1>UI/UX design</h1>
                <h5 className='section__subtitle'>UI/UX design combines creativity and user understanding for great digital experiences. It focuses on easy interfaces, accessibility, and a strong brand look. Testing makes sure it works well. Teamwork between designers, developers, and others makes it even better. We keep making it better with feedback.</h5>

                <div className="btns btns1">
               
                <button className="btn sec3__btn">learn More</button>
                <button className="btn sec3__btn">Free consultation</button>
                </div>
             
            </div>

        <div className="sec4__content">
                <div className="content__item container" style={{backgroundImage:'Url(https://supportsoft.com.au/uploads/project_images/0612010288ef9b903279172358fc004f.jpg)'}}>
                  
                </div>
                <div className="content__item container"  style={{backgroundImage:'url(https://supportsoft.com.au/uploads/project_images/638c383dfb959bbe5d4df77eaa243c14.jpg)'}}>
               
                </div>
                <div className="content__item container"  style={{backgroundImage:'Url(https://supportsoft.com.au/uploads/project_images/4b86b45df99fd266eac9ca452627a7e9.jpg)'}}>
               
                </div>
                <div className="content__item container" style={{backgroundImage:'url(https://supportsoft.com.au/uploads/project_images/130eef601e5be6b34bc49191464a4892.jpg)'}}>
               
                </div>
        </div>
               </div>
       


    </section>
    </>
  )
}

export default page
