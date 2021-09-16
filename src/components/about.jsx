import React from "react";
//import myImage from "../img/myImage.png";

const About = () => {
  let state = {
    skills: [
      {
        id: "HTML5_skill",
        content: "HTML5",
        porcentage: "80%",
        value: "80",
        src: "https://github.com/devSudhir/Priceline-Clone/raw/main/PreviewImageGallery/html.png",
      },
      {
        id: "CSS3_skill",
        content: "CSS3",
        porcentage: "75%",
        value: "75",
        src: "https://github.com/devSudhir/Priceline-Clone/raw/main/PreviewImageGallery/css.png",
      },
      {
        id: "JavaScript_skill",
        content: "JavaScript",
        porcentage: "90%",
        value: "90",
        src: "https://github.com/devSudhir/Priceline-Clone/raw/main/PreviewImageGallery/JavaScript.png",
      },
      {
        id: "ReactJS_skill",
        content: "ReactJS",
        porcentage: "70%",
        value: "70",
        src: "https://github.com/devSudhir/Priceline-Clone/raw/main/PreviewImageGallery/React.png",
      },
      {
        id: "Redux_skill",
        content: "Redux",
        porcentage: "50%",
        value: "50",
        src: "data:image/png;base64,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",
      },
      {
        id: "Material-UI_skill",
        content: "Material-UI",
        porcentage: "75%",
        value: "75",
        src: "https://github.com/devSudhir/Priceline-Clone/raw/main/PreviewImageGallery/material-ui.png",
      },
      {
        id: "MongoDB_skill",
        content: "MongoDB",
        porcentage: "85%",
        value: "85",
        src: "data:image/jpeg;base64,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",
      },
      {
        id: "ExpressJS_skill",
        content: "ExpressJS",
        porcentage: "80%",
        value: "80",
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPWWXVohNdns_Rh_2jxf6VwpXiGNuuuuDQ_Q&usqp=CAU",
      },
      {
        id: "NodeJS_skill",
        content: "NodeJS",
        porcentage: "80%",
        value: "80",
        src: "data:image/png;base64,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",
      },
    ],
    about_me: [
      {
        id: "first-p-about",
        content:
          "Aspiring Full Stack Web Developer, a passionate coder, and capable of writting efficient code using MERN Stack. Ambitious to work and collaborate with other dedicated and enterprising developers.",
      },
      {
        id: "second-p-about",
        content:
          "Eager to takeup up a responsible role within an exciting and inspiring organization, and deliver products that after a great user experience.",
      },
    ],
  };

  return (
    <section id="about" className="about-mf sect-pt4 route">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="box-shadow-full">
              <div className="row">
                <div className="col-md-6">
                  <div className="row">
                    <div
                      className="col-sm-6 col-md-5"
                      style={{ margin: "0 auto" }}
                    >
                      <div
                        className="about-img"
                        style={{ textAlign: "center" }}
                      >
                        <img className="img-fluid rounded b-shadow-a" alt="" />
                      </div>
                    </div>
                  </div>
                  <div
                    className="skill-mf"
                    style={{
                      display: "grid",
                      gridTemplateColumns: "auto auto",
                    }}
                  >
                    {/* <h3 className="title-s">Skill</h3> */}
                    {/* <div className="title-box-2">
                      <h5 className="title-left">Tech Skills</h5>
                    </div> */}
                    {state.skills.map((skill) => {
                      return (
                        <div
                          key={skill.id}
                          style={{
                            display: "flex",
                            alignItems: "center",
                            textAlign: "center",
                            justifyItems: "center",
                            marginBottom: "20px",
                          }}
                        >
                          <img
                            src={skill.src}
                            alt=""
                            style={{ width: "40px", marginRight: "20px" }}
                          />
                          <span>{skill.content}</span>{" "}
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="about-me pt-4 pt-md-0">
                    <div className="title-box-2">
                      <h5 className="title-left">About Me</h5>
                    </div>
                    {state.about_me.map((content) => {
                      return (
                        <p className="lead" key={content.id}>
                          {content.content}
                        </p>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
