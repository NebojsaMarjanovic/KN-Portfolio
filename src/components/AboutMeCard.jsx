function AboutMeCard() {
    return (
        <div className="about-me-container">
          <div className="about-me-content">
            <h2>About Me</h2>
            <p className="about-me-paragraph">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <button className="download-button">
              <a href={process.env.PUBLIC_URL + '/docs/resume.pdf'} download="resume.pdf">
                Get my resume!
              </a>
            </button>
          </div>
        </div>
    )
}

export default AboutMeCard;
