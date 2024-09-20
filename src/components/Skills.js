
import meter_react from "../assets/img/meter-react.png";
import meter_tailwind from "../assets/img/meter-tailwind.png";
import meter_nextjs from "../assets/img/meter-nextjs.png";
import meter_unity from "../assets/img/meter-unity.png";
import meter_ps from "../assets/img/meter-ps.png";
import meter_ue5 from "../assets/img/meter-ue5.png";
import meter_aseprite from "../assets/img/meter-aseprite.png";


import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br></br> Lorem Ipsum has been the industry's standard dummy text.</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={meter_react} alt="Image" />
                                <h5>React</h5>
                            </div>
                            <div className="item">
                                <img src={meter_ps} alt="Image" />
                                <h5>Photoshop</h5>
                            </div>
                            <div className="item">
                                <img src={meter_unity} alt="Image" />
                                <h5>Unity</h5>
                            </div>
                            <div className="item">
                                <img src={meter_ue5} alt="Image" />
                                <h5>Unreal Engine</h5>
                            </div>
                            <div className="item">
                                <img src={meter_aseprite} alt="Image" />
                                <h5>Aseprite</h5>
                            </div>
                            <div className="item">
                                <img src={meter_tailwind} alt="Image" />
                                <h5>Tailwind</h5>
                            </div>
                            <div className="item">
                                <img src={meter_nextjs} alt="Image" />
                                <h5>Next.js</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
