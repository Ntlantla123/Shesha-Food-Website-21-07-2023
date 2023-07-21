import React, { useRef } from 'react';
import { TopNav } from './TopNav';
import './Lesson.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from "swiper";
import "swiper/css/free-mode";
import 'swiper/swiper-bundle.min.css';
import HomeCard from './HomeCard';
import { Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';


//Import Images
import logoshesha from './images/logoshesha.png';
import viewpancake2 from './images/viewpancake2.png';
import viewburger from './images/viewburger.png';
import shushi from './images/shushi.jpg';
import tandooriChicken from './images/tandooriChicken.jpg';
import butternutrisotto from './images/butternutrisotto.jpg';
import minestroneSoup from './images/minestroneSoup.jpg';
import chickenTetrazzini from './images/chickenTetrazzini.jpg';


export const Lessons = () => {

  const pancakeIngredientsEl = useRef();
  const burgerEl = useRef();
  const shushiEl = useRef();
  const tandooriChickenEl = useRef();
  const butternutrisottoEl = useRef();
  const minestroneSoupEl = useRef();
  const chickenTetrazziniEl = useRef();


  return (
    <React.Fragment>
      <TopNav />
      <header className="masthead">
        <div className="container h-100">
          <div className="col-12 text-center">
            <h1 className="fw-light" style={{position:"relative",top:"250px",}}>Recipes Side</h1>
            <p className="text-center text-light my-5" style={{ position: "relative", left: "1%", top: "80px", fontSize: "20px",}}>Explore More Recipes</p>
          </div>
        </div>
      {/*<img src="images/lessonimageheader.jpg" style={{ width: "125%", height: "90vh", position: "relative", top: "0px", }} className="Imageheader" />*/}
      </header>


      <h1 className="text-center text-dark my-5" style={{ position: "relative", left: "10%", top: "110px", fontSize: "50px", }}>Try More Of Our New Recipes :</h1>
      {/*Slider images section started*/}
      <div className="container py-4 px-4 justify-content-center" style={{ position: "relative", left: "12%", top: "220px", }}>
        <Swiper
          freeMode={true}
          grabCursor={true}
          modules={[FreeMode]}
          className="mySwiper"
          slidesPerView={5}
          spaceBetween={30}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            480: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 15,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 10,
            },
            1280: {
              slidesPerView: 5,
              spaceBetween: 30,
            }
          }}
        >

          <SwiperSlide>
            <HomeCard data={{ imagesSrc: viewpancake2, price: '10 mins', title: 'Pancake', }} />
            <Button style={{ width: "100%", backgroundColor: "green", fontWeight: "600", }} onClick={() => pancakeIngredientsEl.current.click()} ><NavLink ref={pancakeIngredientsEl} to='/ViewIngredients' />View Recipe</Button>
          </SwiperSlide>

          <SwiperSlide>
            <HomeCard data={{ imagesSrc: viewburger, price: '35 mins', title: 'Burger' }} />
            <Button style={{ width: "100%", backgroundColor: "green", fontWeight: "600", }} onClick={() => burgerEl.current.click()} ><NavLink ref={burgerEl} to='/ViewIngredientsburger' hidden />View Recipe</Button>
          </SwiperSlide>

          <SwiperSlide>
            <HomeCard data={{ imagesSrc: shushi, price: '15 mins', title: 'Shiki Shushi' }} />
            <Button style={{ width: "100%", backgroundColor: "green", fontWeight: "600", }} onClick={() => shushiEl.current.click()} ><NavLink ref={shushiEl} to='/shushi' />View Recipe</Button>
          </SwiperSlide>

          <SwiperSlide>
            <HomeCard data={{ imagesSrc: tandooriChicken, price: '23 mins', title: 'Tandoori Chicken' }} />
            <Button style={{ width: "100%", backgroundColor: "green", fontWeight: "600", }} onClick={() => tandooriChickenEl.current.click()} ><NavLink ref={tandooriChickenEl} to='/TandooriChicken' />View Recipe</Button>
          </SwiperSlide>

          <SwiperSlide>
            <HomeCard data={{ imagesSrc: butternutrisotto, price: '45 mins', title: 'Butternut Risotto' }} />
            <Button style={{ width: "100%", backgroundColor: "green", fontWeight: "600", }} onClick={() => butternutrisottoEl.current.click()} ><NavLink ref={butternutrisottoEl} to='/ButternutRisotto' />View Recipe</Button>
          </SwiperSlide>

          <SwiperSlide>
            <HomeCard data={{ imagesSrc: minestroneSoup, price: 'R45', title: 'Minestrone Soup' }} />
            <Button style={{ width: "100%", backgroundColor: "green", fontWeight: "600", }} onClick={() => minestroneSoupEl.current.click()} ><NavLink ref={minestroneSoupEl} to='/minestroneSoup' />View Recipe</Button>
          </SwiperSlide>

          <SwiperSlide>
            <HomeCard data={{ imagesSrc: chickenTetrazzini, price: 'R10', title: 'Chicken Tetrazzini' }} />
            <Button style={{ width: "100%", backgroundColor: "green", fontWeight: "600", }} onClick={() => chickenTetrazziniEl.current.click()} ><NavLink ref={chickenTetrazziniEl} to='/chickenTetrazzini' />View Recipe</Button>
          </SwiperSlide>
        </Swiper>
      </div>
      {/*End the slider images section*/}


      {/*Slider images section started*/}
      <h1 className="text-center text-dark my-5" style={{ position: "relative", left: "10%", top: "290px", fontWeight: "500", }}>More Related Recipes</h1>
      <div className="container py-4 px-4 justify-content-center" style={{ position: "relative", left: "12%", top: "300px", }}>
        <Swiper
          freeMode={true}
          grabCursor={true}
          modules={[FreeMode]}
          className="mySwiper"
          slidesPerView={5}
          spaceBetween={30}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            480: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 15,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 10,
            },
            1280: {
              slidesPerView: 5,
              spaceBetween: 30,
            }
          }}
        >

          <SwiperSlide>
            <HomeCard data={{ imagesSrc: viewpancake2, price: '10 mins', title: 'Pancake', }} />
            <Button style={{ width: "100%", backgroundColor: "green", fontWeight: "600", }} onClick={() => pancakeIngredientsEl.current.click()} ><NavLink ref={pancakeIngredientsEl} to='/ViewIngredients' />View Recipe</Button>
          </SwiperSlide>

          <SwiperSlide>
            <HomeCard data={{ imagesSrc: viewburger, price: '35 mins', title: 'Burger' }} />
            <Button style={{ width: "100%", backgroundColor: "green", fontWeight: "600", }} onClick={() => burgerEl.current.click()} ><NavLink ref={burgerEl} to='/ViewIngredientsburger' hidden />View Recipe</Button>
          </SwiperSlide>

          <SwiperSlide>
            <HomeCard data={{ imagesSrc: shushi, price: '15 mins', title: 'Shiki Shushi' }} />
            <Button style={{ width: "100%", backgroundColor: "green", fontWeight: "600", }} onClick={() => shushiEl.current.click()} ><NavLink ref={shushiEl} to='/shushi' />View Recipe</Button>
          </SwiperSlide>

          <SwiperSlide>
            <HomeCard data={{ imagesSrc: tandooriChicken, price: '23 mins', title: 'Tandoori Chicken' }} />
            <Button style={{ width: "100%", backgroundColor: "green", fontWeight: "600", }} onClick={() => tandooriChickenEl.current.click()} ><NavLink ref={tandooriChickenEl} to='/TandooriChicken' />View Recipe</Button>
          </SwiperSlide>

          <SwiperSlide>
            <HomeCard data={{ imagesSrc: butternutrisotto, price: '45 mins', title: 'Butternut Risotto' }} />
            <Button style={{ width: "100%", backgroundColor: "green", fontWeight: "600", }} onClick={() => butternutrisottoEl.current.click()} ><NavLink ref={butternutrisottoEl} to='/ButternutRisotto' />View Recipe</Button>
          </SwiperSlide>

          <SwiperSlide>
            <HomeCard data={{ imagesSrc: minestroneSoup, price: 'R45', title: 'Minestrone Soup' }} />
            <Button style={{ width: "100%", backgroundColor: "green", fontWeight: "600", }} onClick={() => minestroneSoupEl.current.click()} ><NavLink ref={minestroneSoupEl} to='/minestroneSoup' />View Recipe</Button>
          </SwiperSlide>

          <SwiperSlide>
            <HomeCard data={{ imagesSrc: chickenTetrazzini, price: 'R10', title: 'Chicken Tetrazzini' }} />
            <Button style={{ width: "100%", backgroundColor: "green", fontWeight: "600", }} onClick={() => chickenTetrazziniEl.current.click()} ><NavLink ref={chickenTetrazziniEl} to='/chickenTetrazzini' />View Recipe</Button>
          </SwiperSlide>
        </Swiper>
      </div>
      {/*End the slider images section*/}

      
        {/*Card Image Section Started*/}
        <h1 className="text-center text-dark my-5" style={{ position: "relative", left: "10%", top: "380px", }}>More Related Recipes</h1>
        <div className="container" style={{ position: "relative", top: "490px", left: "13%", }}>
          <div className="row">
            <div className="col-md-3">
              <div className="card" >
                <img src="images/4x4-Bread.webp" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title" style={{ fontWeight: "600", }}>4x4 Bread</h5>
                  <p className="card-text"></p>
                  <a href="#" className="btn btn-primary" style={{ borderRadius: "50px", fontWeight: "600", backgroundColor: "white", color: "black", }}>View Recipe</a>
                </div>
              </div>
            </div>

            <div className="col-md-3">
              <div className="card" >
                <img src="images/pasta.jpeg" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title" style={{ fontWeight: "600", }}>Creamy Pasta & Tomato</h5>
                  <p className="card-text"></p>
                  <a href="#" className="btn btn-primary" style={{ borderRadius: "50px", fontWeight: "600", backgroundColor: "white", color: "black", }}>View Recipe</a>
                </div>
              </div>
            </div>

            <div className="col-md-3">
              <div className="card">
                <img src="images/meatBalls.jpg" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title" style={{ fontWeight: "600", }}>Meat Balls</h5>
                  <p className="card-text"></p>
                  <a href="#" className="btn btn-primary" style={{ borderRadius: "50px", fontWeight: "600", backgroundColor: "white", color: "black", }}>View Recipe</a>
                </div>
              </div>
            </div>

            <div className="col-md-3">
              <div className="card" >
                <img src="images/Taco.jpg" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title" style={{ fontWeight: "600", }}>Carne Asada Tacos</h5>
                  <p className="card-text"></p>
                  <a href="#" className="btn btn-primary" style={{ borderRadius: "50px", fontWeight: "600", backgroundColor: "white", color: "black", }}>View Recipe</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*End Card Image Section*/}


        {/*Footer Section Started*/}
        <div className="footer" style={{ position: "relative", top: "550px", }}>
          <div className="sb_footer section_padding">
            <div className="sb_footer-links">
              <a href='/Home'><img src={logoshesha} alt="logoshesha.png" style={{ color: "white", }} /><em style={{ fontSize: "30px", textDecoration: "none", }}></em></a>
              <div className="sb_footer-links_div">
                <h3>Contact</h3>
                <a href="/Contact">
                  <p style={{ fontWeight: "600", }}><i>Linkedin</i></p>
                </a>
                <a href="/Lessons">
                  <p style={{ fontWeight: "600", }}><i>Facebook</i></p>
                </a>
                <a href="/Recipes">
                  <p style={{ fontWeight: "600", }}><i>GitHub</i></p>
                </a>
              </div>
              <div className="sb_footer-links_div">
                <h3>Resources</h3>
                <a href="/Home">
                  <p>Youtube</p>
                </a>
                <a href="/Recipes">
                  <p>Royco Website</p>
                </a>
                <a href="/Recipes">
                  <p>STV</p>
                </a>
              </div>

              <div className="sb_footer-links_div">
                <h3>Company</h3>
                <a href="/Home">
                  <p>Home</p>
                </a>
                <a href="/Lessons">
                  <p>Lessons</p>
                </a>
                <a href="/Recipes">
                  <p>Recipe</p>
                </a>
                <a href="/Categories">
                  <p>Categories</p>
                </a>
              </div>
              <div className="sb_footer-links_div">

              </div>
            </div>

            <hr></hr>
            <h5 className="text-center text-light my-5" style={{ color: "white", position: "relative", top: "20px", left: "-15%", color: "white", }}>Copyright @ Shesha Food Recipe. All right reserved.</h5>

            <div className="sb_footer-below">
              <div className="sb_footer-copyright">
                <p>

                </p>
              </div>
            </div>
          </div>
        </div>
        {/*End the footer Section Started*/}

      
    </React.Fragment>
  )
}
