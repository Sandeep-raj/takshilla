import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import car1 from "../../assets/images/car1.jpg";
import car2 from "../../assets/images/car2.jpg";
import car3 from "../../assets/images/car3.jpg";
import car4 from "../../assets/images/car4.jpg";

import "./Home.css";

const Home = () => {
  return (
    <>
      <div className="home_car">
        <Carousel
          showArrows={true}
          autoPlay={true}
          infiniteLoop={true}
          interval={3000}
          showThumbs={false}
        >
          <div className="carimg">
            <img src={car1} alt="car1" />
          </div>
          <div className="carimg">
            <img src={car2} alt="car2" />
          </div>
          <div className="carimg">
            <img src={car3} alt="car3" />
          </div>
          <div className="carimg">
            <img src={car4} alt="car4" />
          </div>
        </Carousel>
        <div className="home_car_text">
          <h1>Takshilla Classes</h1>
          <h3>Your Gateway to IIT-JEE Success</h3>
        </div>
      </div>
      {/* Programs */}

      {/* Our Faculty */}

      {/* Admission Process */}
    </>
  );
};

export default Home;
