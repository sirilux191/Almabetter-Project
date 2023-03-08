import React from 'react';
import './About.css';

function About() {
  const shareUrl = 'https://resumealmabettersirilux.netlify.app';
  const title = 'Check out this amazing resume builder site!';

  const handleFacebookShare = () => {
    window.open(
      `https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`,
      'facebook-share-dialog',
      'width=626,height=436'
    );
  };

  const handleTwitterShare = () => {
    const twitterUrl = `https://twitter.com/share?url=${shareUrl}&text=${title}`;
    window.open(twitterUrl, 'twitter-share-dialog', 'width=626,height=436');
  };

  const handleLinkedinShare = () => {
    window.open(
      `https://www.linkedin.com/shareArticle?mini=true&url=${shareUrl}&title=${title}`,
      'linkedin-share-dialog',
      'width=626,height=436'
    );
  };

  return (
    <div className='about-us-container'>
      <h1 className='title'>Welcome to our resume builder site!</h1>
      <p className='description'>
        Our platform is designed to help job seekers create impressive and
        professional resumes in just a few easy steps.
      </p>
      <p className='description'>
        Our team of developers has carefully crafted our platform to ensure that
        it is intuitive, responsive, and packed with features that help you
        create a polished and effective resume.
      </p>
      <p className='description'>
        We believe that a resume is more than just a document; it's a reflection
        of your career aspirations and potential. That's why we offer a variety
        of templates and design options to choose from, allowing you to create a
        personalized resume that suits your needs and showcases your unique
        strengths.
      </p>

      <p className='thank-you'>
        Thank you for choosing our resume builder site, and we look forward to
        helping you achieve your career goals!
      </p>
      <div className='sharing-icons'>
        <button className='facebook-icon' onClick={handleFacebookShare}>
          <i className='fab fa-facebook-f'></i>
        </button>
        <button className='twitter-icon' onClick={handleTwitterShare}>
          <i className='fab fa-twitter'></i>
        </button>
        <button className='linkedin-icon' onClick={handleLinkedinShare}>
          <i className='fab fa-linkedin-in'></i>
        </button>
      </div>
    </div>
  );
}

export default About;

//About us page where info project is given
//Social Icon buttons are provided to let user share this project
