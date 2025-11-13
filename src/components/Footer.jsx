import React from 'react';

const Footer = () => {
  return (
    <div id="footer" className="footer">
      <div className="links">
        <a href="/Cory Gold Resume.pdf" target="_blank" rel="noreferrer">
          <img className="social-icon" src="/images/resume.png" alt="resume" />
        </a>
        <a
          href="https://github.com/corygold-dev"
          target="_blank"
          rel="noreferrer"
        >
          <img className="social-icon" src="/images/github.png" alt="github" />
        </a>
        <a
          href="https://www.linkedin.com/in/corygold/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            className="social-icon"
            src="/images/linkedin.png"
            alt="linkedin"
          />
        </a>
        <a href="mailto:goldcorum@gmail.com">
          <img className="social-icon" src="/images/email.png" alt="email" />
        </a>
      </div>
      <p>Created with love by Cory Gold | © twentytwentytwo</p>
    </div>
  );
};

export default Footer;
