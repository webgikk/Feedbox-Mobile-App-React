import React from 'react'

import { Helmet } from 'react-helmet'

import Navbar from '../components/navbar'
import FeatureCard from '../components/feature-card'
import Slide from '../components/slide'
import GridCard from '../components/grid-card'
import Footer from '../components/footer'
import Copyright from '../components/copyright'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Feedbox Mobile App</title>
        <meta property="og:title" content="Feedbox Mobile App" />
      </Helmet>
      <Navbar rootClassName="navbar-root-class-name"></Navbar>
      <main className="home-main">
        <div className="home-hero section-container">
          <section className="home-max-width max-content-container">
            <div className="home-content-container">
              <h2 className="home-text">
                <span>
                  Leverage today&apos;s AI Technology to accelerate your career
                  with our Management Trainee Program
                </span>
                <br></br>
              </h2>
              <div className="home-input-container">
                <div className="home-container1 input">
                  <svg viewBox="0 0 1024 1024" className="home-icon">
                    <path d="M854 342v-86l-342 214-342-214v86l342 212zM854 170q34 0 59 26t25 60v512q0 34-25 60t-59 26h-684q-34 0-59-26t-25-60v-512q0-34 25-60t59-26h684z"></path>
                  </svg>
                  <input
                    type="text"
                    placeholder="Your email id"
                    className="home-textinput input"
                  />
                </div>
                <button className="home-button button-primary button">
                  Get started
                </button>
              </div>
              <div className="home-features-container">
                <div className="home-feature">
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="home-icon02"
                  >
                    <path d="M733.714 419.429c0-9.714-3.429-19.429-10.286-26.286l-52-51.429c-6.857-6.857-16-10.857-25.714-10.857s-18.857 4-25.714 10.857l-233.143 232.571-129.143-129.143c-6.857-6.857-16-10.857-25.714-10.857s-18.857 4-25.714 10.857l-52 51.429c-6.857 6.857-10.286 16.571-10.286 26.286s3.429 18.857 10.286 25.714l206.857 206.857c6.857 6.857 16.571 10.857 25.714 10.857 9.714 0 19.429-4 26.286-10.857l310.286-310.286c6.857-6.857 10.286-16 10.286-25.714zM877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                  </svg>
                  <span className="home-text03">High quality education </span>
                </div>
                <div className="home-feature1">
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="home-icon04"
                  >
                    <path d="M733.714 419.429c0-9.714-3.429-19.429-10.286-26.286l-52-51.429c-6.857-6.857-16-10.857-25.714-10.857s-18.857 4-25.714 10.857l-233.143 232.571-129.143-129.143c-6.857-6.857-16-10.857-25.714-10.857s-18.857 4-25.714 10.857l-52 51.429c-6.857 6.857-10.286 16.571-10.286 26.286s3.429 18.857 10.286 25.714l206.857 206.857c6.857 6.857 16.571 10.857 25.714 10.857 9.714 0 19.429-4 26.286-10.857l310.286-310.286c6.857-6.857 10.286-16 10.286-25.714zM877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                  </svg>
                  <span className="home-text04">
                    Live projects and hand on experience
                  </span>
                </div>
                <div className="home-feature2">
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="home-icon06"
                  >
                    <path d="M733.714 419.429c0-9.714-3.429-19.429-10.286-26.286l-52-51.429c-6.857-6.857-16-10.857-25.714-10.857s-18.857 4-25.714 10.857l-233.143 232.571-129.143-129.143c-6.857-6.857-16-10.857-25.714-10.857s-18.857 4-25.714 10.857l-52 51.429c-6.857 6.857-10.286 16.571-10.286 26.286s3.429 18.857 10.286 25.714l206.857 206.857c6.857 6.857 16.571 10.857 25.714 10.857 9.714 0 19.429-4 26.286-10.857l310.286-310.286c6.857-6.857 10.286-16 10.286-25.714zM877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                  </svg>
                  <span className="home-text05">
                    Community driven learning experience 
                  </span>
                </div>
              </div>
            </div>
            <img
              alt="Illustration1839"
              src="/external/illustration1839-seaa-700h.png"
              loading="eager"
              className="home-illustration"
            />
          </section>
          <img
            alt="Vector1133"
            src="/external/vector1133-czo4.svg"
            className="home-vector"
          />
          <img
            alt="Vector1134"
            src="/external/vector1134-mmd.svg"
            className="home-vector1"
          />
        </div>
        <div className="home-section-one section-container">
          <div className="home-max-width1 max-content-container">
            <h2 className="home-text06">
              <span className="Heading2">
                A Swiss Knife for skills up-gradation which will
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="home-text08">propel your career</span>
            </h2>
            <div className="home-cards-container">
              <FeatureCard image_src="/stars-200h.png"></FeatureCard>
              <FeatureCard
                text="Gain practical experience by working 2 to 4 hours daily on real projects. Blurring the lines between learning and doing."
                text1="See how &gt;"
                heading="Real-World Experience"
                image_src="/hearth-200h.png"
              ></FeatureCard>
              <FeatureCard
                text="We've cultivated partnerships with forward-thinking companies, ensuring you're primed for an international career."
                text1="Learn more &gt;"
                heading="Global Connections"
                image_src="/mail-200h.png"
              ></FeatureCard>
              <FeatureCard
                text1="Learn more &gt;"
                heading="Read newspapers"
                image_src="/paper-200h.png"
              ></FeatureCard>
            </div>
          </div>
        </div>
        <div className="section-container">
          <div className="home-max-width2 max-content-container">
            <div className="home-image-container">
              <img
                alt="image"
                src="/section-image1-1200w.png"
                className="home-image"
              />
            </div>
            <div className="home-content-container1">
              <h1 className="home-text09 Heading2">
                <span>
                  Your favorite articles at your fingertips.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="home-text11">Always.</span>
              </h1>
              <span className="home-text12 Content-Light">
                <span>
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                  Velit officia consequat duis enim velit mollit.
                </span>
                <br></br>
                <span>Lorem ipsum dolor sit amet.</span>
              </span>
            </div>
          </div>
        </div>
        <div className="section-container">
          <div className="home-max-width3 max-content-container">
            <div className="home-content-container2">
              <h1 className="home-text15 Heading2">
                <span>
                  The best content, handpicked for you.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="home-text17">In the morning.</span>
              </h1>
              <span className="home-text18 Content-Light">
                <span>
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                  Velit officia consequat duis enim velit mollit.
                </span>
                <br></br>
                <span>Lorem ipsum dolor sit amet.</span>
              </span>
            </div>
            <div className="home-image-container1">
              <img
                alt="image"
                src="/section-image2-1200w.png"
                className="home-image1"
              />
            </div>
          </div>
        </div>
        <div className="home-section-four section-container">
          <div className="home-max-width4 max-content-container">
            <h2 className="home-text21">
              <span>People love Feedbox. </span>
              <span>So would you.</span>
            </h2>
          </div>
          <div data-type="slider" className="home-slider">
            <Slide></Slide>
            <Slide
              Role="DESIGN DIRECTOR"
              Author="Bill Smith"
              image_src="/vector%202-700w.png"
              Testimonial='“Stunning app! I use it everyday since I discovered it and love it every since. It really makes newsreading a pleasure. I enjoy all the customization options available, super highly recommended!"'
              Testimonial2="Super highly recommended!”"
              rootClassName="slide-root-class-name"
            ></Slide>
            <Slide
              Role="FREELANCE WRITER"
              Author="Julia Xang"
              image_src="/vector%202%20%5B2%5D-700w.png"
              Testimonial="“Feedbox is very easy to use and flexible! I especially like the pre-made templates that are accessible; they're extraordinary for monitoring a few feed sources and various RSS Feeds together.”"
              rootClassName="slide-root-class-name1"
            ></Slide>
          </div>
        </div>
        <div className="section-container">
          <div className="home-max-width5 max-content-container">
            <div className="home-heading-container">
              <h2 className="home-text24 Heading2">
                <span>If you love simplicity, you’ll </span>
                <span>
                  simply love
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="home-text27">Feedbox.</span>
              </h2>
              <span className="Content-Light">
                <span>
                  Go to App Store, install Feedbox and start changing your
                  reading habits to
                </span>
                <span className="home-text30"></span>
                <span>day!</span>
              </span>
            </div>
            <div className="home-get-the-app">
              <img alt="image" src="/frame-1200w.png" className="home-image2" />
              <img
                alt="image"
                src="/frame%2034-200h.png"
                className="home-image3"
              />
            </div>
            <div className="home-cards-container1">
              <GridCard image_src="/vector%203-200h.png"></GridCard>
              <GridCard
                text="Follow your friends"
                image_src="/vector%203%20%5B1%5D-200h.png"
              ></GridCard>
              <GridCard
                text="Declutter your life inbox"
                image_src="/vector%203%20%5B2%5D-200h.png"
              ></GridCard>
              <GridCard
                text="Less apps, more space"
                image_src="/vector%203%20%5B3%5D-200h.png"
              ></GridCard>
            </div>
          </div>
        </div>
        <div className="home-section-six section-container">
          <div className="home-max-width6 max-content-container">
            <div className="home-content-container3">
              <h1 className="home-text32 Heading2">
                <span>Get started today.</span>
                <br></br>
                <span className="home-text34">Try free for 30 days.</span>
              </h1>
              <span className="home-text35 Content-Light">
                Go to App Store, install Feedbox and start changing your reading
                habbits today!
              </span>
              <div className="home-input-container1">
                <div className="home-container2 input">
                  <svg
                    viewBox="0 0 804.5714285714286 1024"
                    className="home-icon08"
                  >
                    <path d="M804.571 708.571c0 20.571-9.143 60.571-17.714 79.429-12 28-44 46.286-69.714 60.571-33.714 18.286-68 29.143-106.286 29.143-53.143 0-101.143-21.714-149.714-39.429-34.857-12.571-68.571-28-100-47.429-97.143-60-214.286-177.143-274.286-274.286-19.429-31.429-34.857-65.143-47.429-100-17.714-48.571-39.429-96.571-39.429-149.714 0-38.286 10.857-72.571 29.143-106.286 14.286-25.714 32.571-57.714 60.571-69.714 18.857-8.571 58.857-17.714 79.429-17.714 4 0 8 0 12 1.714 12 4 24.571 32 30.286 43.429 18.286 32.571 36 65.714 54.857 97.714 9.143 14.857 26.286 33.143 26.286 50.857 0 34.857-103.429 85.714-103.429 116.571 0 15.429 14.286 35.429 22.286 49.143 57.714 104 129.714 176 233.714 233.714 13.714 8 33.714 22.286 49.143 22.286 30.857 0 81.714-103.429 116.571-103.429 17.714 0 36 17.143 50.857 26.286 32 18.857 65.143 36.571 97.714 54.857 11.429 5.714 39.429 18.286 43.429 30.286 1.714 4 1.714 8 1.714 12z"></path>
                  </svg>
                  <input
                    type="text"
                    placeholder="Your phone number..."
                    className="home-textinput1 input"
                  />
                </div>
                <button className="home-button1 button-primary button">
                  Get started
                </button>
              </div>
              <div className="home-features-container1">
                <div className="home-feature3">
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="home-icon10"
                  >
                    <path d="M733.714 419.429c0-9.714-3.429-19.429-10.286-26.286l-52-51.429c-6.857-6.857-16-10.857-25.714-10.857s-18.857 4-25.714 10.857l-233.143 232.571-129.143-129.143c-6.857-6.857-16-10.857-25.714-10.857s-18.857 4-25.714 10.857l-52 51.429c-6.857 6.857-10.286 16.571-10.286 26.286s3.429 18.857 10.286 25.714l206.857 206.857c6.857 6.857 16.571 10.857 25.714 10.857 9.714 0 19.429-4 26.286-10.857l310.286-310.286c6.857-6.857 10.286-16 10.286-25.714zM877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                  </svg>
                  <span className="home-text36">
                    Easiest way to read news and RSS Feeds.
                  </span>
                </div>
                <div className="home-feature4">
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="home-icon12"
                  >
                    <path d="M733.714 419.429c0-9.714-3.429-19.429-10.286-26.286l-52-51.429c-6.857-6.857-16-10.857-25.714-10.857s-18.857 4-25.714 10.857l-233.143 232.571-129.143-129.143c-6.857-6.857-16-10.857-25.714-10.857s-18.857 4-25.714 10.857l-52 51.429c-6.857 6.857-10.286 16.571-10.286 26.286s3.429 18.857 10.286 25.714l206.857 206.857c6.857 6.857 16.571 10.857 25.714 10.857 9.714 0 19.429-4 26.286-10.857l310.286-310.286c6.857-6.857 10.286-16 10.286-25.714zM877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                  </svg>
                  <span className="home-text37">
                    Works with all mail providers, including Google and Yahoo.
                  </span>
                </div>
                <div className="home-feature5">
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="home-icon14"
                  >
                    <path d="M733.714 419.429c0-9.714-3.429-19.429-10.286-26.286l-52-51.429c-6.857-6.857-16-10.857-25.714-10.857s-18.857 4-25.714 10.857l-233.143 232.571-129.143-129.143c-6.857-6.857-16-10.857-25.714-10.857s-18.857 4-25.714 10.857l-52 51.429c-6.857 6.857-10.286 16.571-10.286 26.286s3.429 18.857 10.286 25.714l206.857 206.857c6.857 6.857 16.571 10.857 25.714 10.857 9.714 0 19.429-4 26.286-10.857l310.286-310.286c6.857-6.857 10.286-16 10.286-25.714zM877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                  </svg>
                  <span className="home-text38">
                    Over 2000, highly recommended customer reviews.
                  </span>
                </div>
              </div>
            </div>
            <div className="home-image-container2">
              <img
                alt="image"
                src="/group%2032-1200w.png"
                className="home-image4"
              />
            </div>
          </div>
        </div>
      </main>
      <Footer></Footer>
      <Copyright></Copyright>
    </div>
  )
}

export default Home
