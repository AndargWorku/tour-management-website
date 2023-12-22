import React from 'react'
import {Container,Row,Col} from "reactstrap"
import '../styles/home.css'
import heroImg from "../assets/images/hero-img01.jpg"
import heroImg02 from '../assets/images/hero-img02.jpg'
import heroVideo from "../assets/images/hero-video.mp4"
import worldImg from "../assets/images/world.png"
import Subtitle from "../shared/Subtitle"
import SearchBar from "../shared/SearchBar"
import ServicesList from "../services/ServicesList"
import FeaturedTourList from "../components/featured-tours/FeaturedTourList"
import experienceImg from "../assets/images/experience.png"
import MasonryImagesGallery from "../components/gallery-images/MasonryImagesGallery"
import Testimonials from "../components/Testimonials/Testimonials"
import Newsletter from "../shared/Newsletter"
const Home = () => {
  return (
    <>
     <section>
      <Container>
        <Row>
          <Col lg='6'>
            <div className="hero__content">
              <div className="hero__subtitle d-flex align-items-center">
                <Subtitle subtitle={'Know Before you go'}/>
                <img src={worldImg} alt=''/>

              </div>
              <h1>Traveling opens the door to creating <span className='highLight'>Memories</span></h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum eveniet enim iusto non eligendi, at labore! Ipsam voluptatem autem illum asperiores, quasi inventore illo optio, tempore tempora similique necessitatibus est.</p>
            </div>
          </Col>
          <Col lg='2'>
            <div className="hero__img-box">
              <img src={heroImg} alt=''/>
            </div>
          </Col>
          <Col lg='2'>
            <div className="hero__img-box mt-4">
              <img src={heroVideo} alt='' controls/>
            </div>
          </Col>
          <Col lg='2'>
            <div className="hero__img-box mt-5">
              <img src={heroImg02} alt=''/>
            </div>
          </Col>
          <SearchBar/>
        </Row>
      </Container>
     </section>
     <section>
      <Container>
        <Row>
          <Col lg='3'>
            <h5 className="services__subtitle">What we Services?</h5>
            <h2 className="services__title">We offer our best Services</h2>
          </Col>
          <ServicesList/>
        </Row>
      </Container>
     </section>
     {/* ===============feature tour section====== */}
     <section>
      <Container>
        <Row>
          <Col lg='12' className="mb-5">
            <Subtitle subtitle={"Explore"}/>
            <h2 className="featured__tour-title">
              Our Featured tours
            </h2>
          </Col>
          <FeaturedTourList/>
        </Row>
      </Container>
     </section>
     <section>
      <Container>
        <Row>
          <Col lg="6">
            <div className="experience__content">
              <Subtitle subtitle={"Experience"}/>
              <h2> With Our all experience <br /> we will serve you</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate dolores omnis, nam est aspernatur ipsa accusantium, dolorem voluptatibus iste odit sit temporibus quos accusamus laboriosam, doloribus at? Impedit, natus asperiores?<br/> Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim suscipit tenetur et laudantium beatae reprehenderit eaque facere ipsum consectetur, obcaecati voluptatum placeat quo sint mollitia ipsa quas sunt praesentium fuga!</p>
            </div>
            <div className="counter_wrapper d-flex align-items-center gap-3">
              <div className="counter__box">
                <span>12k+</span>
                <h6>Successfully trip</h6>
              </div>
              <div className="counter__box">
                <span>2k+</span>
                <h6>Regular clients</h6>
              </div>
              <div className="counter__box">
                <span>15</span>
                <h6>years of experience</h6>
              </div>

            </div>
          </Col>
          <Col lg='6'>
                 <div className="experience__img">
                  <img src={experienceImg} alt=""/>
                 </div>
          </Col>
        </Row>
      </Container>
     </section>
     <section>
      <Container>
       <Col lg='12'>
        <Subtitle subtitle={"Gallery"}/>
        <h2 className="gallery__title">
          Visit our customer tour Gallery
        </h2>
       </Col>
       <Col lg='12'>
       <MasonryImagesGallery />
       </Col>
      </Container>
     </section>
     {/* =============testimonial========== */}
     <section>
      <Container>
        <Row>
          <Col lg='12'>
            <Subtitle subtitle={'Fans Love'}/>
            <h2 className="testimonial__title">What our Fans say about us</h2>
          </Col>
          <Col lg="12">
            <Testimonials/>
          </Col>
        </Row>
      </Container>
     </section>
     <Newsletter/>
    </>
  )
}

export default Home
