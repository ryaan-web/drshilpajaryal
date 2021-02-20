import HeroCarousel from "react-hero-carousel";
import {ButtonBack, ButtonFirst, ButtonLast, ButtonNext,
  CarouselProvider, ImageWithZoom, Slide, Slider} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import './App.css';
import 'reset-css'

function App() {
  return (
    <div className="app">
      <div className="heroCarouselContainer" id="home-top">
        <HeroCarousel
          title={'sjdflsjdfi'}
          description={"sifahfsf iihsiefhsef"}
          interval={8000}
          className="heroCarouselHeight">
          {/* <img
            src="./images/Screenshot_20210211-225910.jpg"
            width="100%"
            height="auto"
          /> */}
          <img
            src="./images/Screenshot_20210220-124725.jpg"
            width="100%"
            height="auto"
          />
          <img
            src="./images/Screenshot_20210220-124714.jpg"
            width="100%"
            height="auto"
          />
        </HeroCarousel>
      </div>
      <div className="heroWrapper">
        <div className="heroNavBar">
          <a href="#home-top" className="heroNavBarText">Home</a>
          <a href="#home-activities" className="heroNavBarText">Activities</a>
          <a href="#home-work" className="heroNavBarText">Work</a>
          <a href="#home-lifestyle" className="heroNavBarText">Lifestyle</a>
          <a className="heroNavBarText">Publications (coming soon)</a>
        </div>
        <div className="heroDesc">
          <p className="heroDescText">
            A smile can save a life!
          </p>
          <br/>
          <p className="heroDescText">
            Whoever saves one life
          </p>
          <p className="heroDescText">
            saves the world entire.
          </p>
          <br/>
          <p className="heroDescText">
            - Oskar Schindler
          </p>
        </div>
        <div className="heroBio">
          <p className="heroBioText">
            Dr. Shilpa Jaryal
          </p>
          <p className="heroBioText">
            Dentist @ HP Govt. Dental College/Hospital (IGMC), Shimla
          </p>
          <br/>
          <p className="heroBioText smallDesc">
            MDS from Department of Periodontal surgery and Implantology at National Dental College/Hospital, Mohali, Punjab
          </p>
          <p className="heroBioText smallDesc">
            Bachelors in Dental Surgery from M.N. DAV College and Hospital, Solan
          </p>
          <p className="heroBioText smallDesc">
            Went to M.L. Syal's Helix Institute, Chandigarh
          </p>
          <p className="heroBioText smallDesc">
            Author of Botox-Ageless Aesthetic, Cosmetic and Clinical Application
          </p>
        </div>
        
      </div>
      <div className="carousel1Container" id="home-activities">
        <CarouselProvider
          visibleSlides={1}
          totalSlides={6}
          step={1}
          naturalSlideWidth={1}
          naturalSlideHeight={1}
          hasMasterSpinner
        >
          <h2 className="headline">Activities</h2>
          <Slider className="slider singleSlider">
            <Slide index={0} className="slide">
              <ImageWithZoom src="./images/Screenshot_20210211-225318.jpg" />
            </Slide>
            <Slide index={1} className="slide">
              <ImageWithZoom src="./images/Screenshot_20210211-225338.jpg" />
            </Slide>
            <Slide index={2} className="slide">
              <ImageWithZoom src="./images/Screenshot_20210211-225546.jpg" />
            </Slide>
            <Slide index={3} className="slide">
              <ImageWithZoom src="./images/Screenshot_20210211-230004.jpg" />
            </Slide>
            <Slide index={4} className="slide">
              <ImageWithZoom src="./images/Screenshot_20210211-230017.jpg" />
            </Slide>
            <Slide index={5} className="slide">
              <ImageWithZoom src="./images/Screenshot_20210211-230117.jpg" />
            </Slide>
          </Slider>
          <div className="sliderBtns">
            <ButtonFirst className="sliderBtn">First</ButtonFirst>
            <ButtonBack className="sliderBtn">Back</ButtonBack>
            <ButtonNext className="sliderBtn">Next</ButtonNext>
            <ButtonLast className="sliderBtn">Last</ButtonLast>
            {/* <DotGroup /> */}
          </div>
          
        </CarouselProvider>
      </div>
      <div className="carousel2Container" id="home-work">
        <CarouselProvider
          visibleSlides={3}
          totalSlides={6}
          step={1}
          naturalSlideWidth={1}
          naturalSlideHeight={1}
          hasMasterSpinner
        >
          <h2 className="headline">Routine</h2>
          <Slider className="slider">
            <Slide index={0} className="slide">
              <ImageWithZoom src="./images/Screenshot_20210215-142127.jpg" />
            </Slide>
            <Slide index={1} className="slide">
              <ImageWithZoom src="./images/Screenshot_20210215-142225.jpg" />
            </Slide>
            <Slide index={2} className="slide">
              <ImageWithZoom src="./images/Screenshot_20210215-142503.jpg" />
            </Slide>
            <Slide index={3} className="slide">
              <ImageWithZoom src="./images/Screenshot_20210215-142549.jpg" />
            </Slide>
            <Slide index={4} className="slide">
              <ImageWithZoom src="./images/Screenshot_20210215-142716.jpg" />
            </Slide>
          </Slider>
          <div className="sliderBtns">
            <ButtonFirst className="sliderBtn">First</ButtonFirst>
            <ButtonBack className="sliderBtn">Back</ButtonBack>
            <ButtonNext className="sliderBtn">Next</ButtonNext>
            <ButtonLast className="sliderBtn">Last</ButtonLast>
            {/* <DotGroup /> */}
          </div>
        </CarouselProvider>
      </div>
      <div className="carousel2Container" id="home-lifestyle">
        <CarouselProvider
          visibleSlides={3}
          totalSlides={9}
          step={1}
          naturalSlideWidth={1}
          naturalSlideHeight={1 }
          hasMasterSpinner
        >
          <h2 className="headline">Lifestyle</h2>
          <Slider className="slider">
            <Slide index={0} className="slide">
              <ImageWithZoom src="./images/Screenshot_20210211-230737.jpg" />
            </Slide>
            <Slide index={1} className="slide">
              <ImageWithZoom src="./images/Screenshot_20210211-231524.jpg" />
            </Slide>
            <Slide index={2} className="slide">
              <ImageWithZoom src="./images/Screenshot_20210211-225358.jpg" />
            </Slide>
            <Slide index={3} className="slide">
              <ImageWithZoom src="./images/Screenshot_20210211-230541.jpg" />
            </Slide>
            <Slide index={4} className="slide">
              <ImageWithZoom src="./images/Screenshot_20210211-230723.jpg" />
            </Slide>
            <Slide index={5} className="slide">
              <ImageWithZoom src="./images/Screenshot_20210211-225454.jpg" />
            </Slide>
            <Slide index={5} className="slide">
              <ImageWithZoom src="./images/Screenshot_20210211-232152.jpg" />
            </Slide>
            <Slide index={5} className="slide">
              <ImageWithZoom src="./images/Screenshot_20210211-231512.jpg" />
            </Slide>
            <Slide index={5} className="slide">
              <ImageWithZoom src="./images/Screenshot_20210211-230642.jpg" />
            </Slide>
          </Slider>
          <div className="sliderBtns">
            <ButtonFirst className="sliderBtn">First</ButtonFirst>
            <ButtonBack className="sliderBtn">Back</ButtonBack>
            <ButtonNext className="sliderBtn">Next</ButtonNext>
            <ButtonLast className="sliderBtn">Last</ButtonLast>
          </div>
        </CarouselProvider>
      </div>
      <div className="footer">
      By continuing past this page, you agree to our Terms of Service,
      Cookie Policy, Privacy Policy and Content Policies.
      All trademarks are properties of their respective owners.
      All rights reserved by Dr. Shilpa Jaryal
      </div>
    </div>
  );
}

export default App;
