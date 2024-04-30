import React from "react";

const AboutCard = () => {
  return (
    <>
      <div className="container-right-choice">
        <div className="container-text-right">
          <h1>Why We are The Right Choice?</h1>
        </div>
        <div className="container-right">
          <div className="card-right-choice">
            <div>
              <img
                className="img-card"
                src="/assets/img-card-1.png"
                alt="Discussion form"
              />
            </div>
            <div className="text-bold-card">
              <h5>
                <u>Discussion form</u>
              </h5>
            </div>
            <div className="text-card">
              <p>
                Our Discussion Forum offers continuous support post-training,
                workshops, and seminars. Join our community to stay connected,
                and grow your knowledge.
              </p>
            </div>
          </div>
          <div className="card-right-choice">
            <div>
              <img
                className="img-card"
                src="/assets/img-card-2.png"
                alt="Customized Solutions"
              />
            </div>
            <div className="text-bold-card">
              <h5>
                <u>Customized Solutions</u>
              </h5>
            </div>
            <div className="text-card">
              <p>
                Customized Solutions, Every company is unique from one another,
                we provide you solution which meets your situations and budget
                with high quality.
              </p>
            </div>
          </div>
          <div className="card-right-choice">
            <div>
              <img
                className="img-card"
                src="/assets/img-card-3.png"
                alt="International and National Standard"
              />
            </div>
            <div className="text-bold-card">
              <h5>
                <u>International and National Standard</u>
              </h5>
            </div>
            <div className="text-card">
              <p>
                Our solutions are built on official government acknowledgments,
                ensuring compliance with national and international standards.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Right Choice Section */}
    </>
  );
};

export default AboutCard;
