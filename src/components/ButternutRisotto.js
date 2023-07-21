import React, {useRef} from 'react'
import { TopNav } from './TopNav';
import { NavLink } from 'react-router-dom';


import viewpicture from './images/viewpicture.png';
import butternutrisotto from './images/butternutrisotto.jpg';
import logoshesha from './images/logoshesha.png';

export const ButternutRisotto = () => {

  const pancakeEl = useRef();


  return (
    <React.Fragment>
      <TopNav/>
        <h1 style={{position:"relative",top:"50px", left:"15%",color:"green",}}>Ingredients<br/><span style={{color:"red",fontWeight:"600",}}>TandooriChicken</span></h1>
        <ul style={{fontWeight:"600",fontSize:"1.4rem",}}>
          <li>1 cup all-purpose flour</li>
          <li>2 tablespoon with white sugar</li>
          <li>2 teaspons baking powder</li>
          <li>1 teaspons salt, or to taste</li>
          <li>1 cup milk</li>
          <li>2 tablespoons vegaetable oil</li>
          <li>1 egg, beaten</li>
        </ul>

        <img src={viewpicture} style={{ position: "relative",borderRadius:"50%", width: "35%", left: "70%", top: "-260px", }} alt='viewpicture.png' />
        <img src={butternutrisotto} style={{ position: "relative", height: "2",borderRadius:"50%", width: "35%", left: "-25%", top: "490px", }} alt='butternutrisotto.jpg' />

        <h3  style={{position:"relative", left:"35%", top:"-190px",}}>Follow these Steps to make your yummy pancake</h3>

        <h4 style={{position:"relative", left:"60%", top:"-100px", color:"green",fontSize:"1.9rem",}}>Step 1</h4>
        <p style={{position:"relative", left:"60%", top:"-80px",fontSize:"1.3rem",}}>Combine flour, sugar, baking powder, and salt in<br/> a large bowl. Make a well in the center, and pour in<br/> milk, oil, and egg. Mix until smooth.</p>
        <h4 style={{position:"relative", left:"60%", top:"-50px", color:"green",fontSize:"1.9rem",}}>Step 2</h4>
        <p style={{position:"relative", left:"60%", top:"-40px",fontSize:"1.3rem",}}>Heat a lightly oiled griddle or frying pan over medium-high heat.<br/> Pour or scoop batter onto the griddle, using approximately 1/4<br/> cup for each pancake; cook until bubbles form and the edges are dry,<br/> 1 to 2 minutes. Flip and cook until browned on the other side.<br/> Repeat with remaining batter.<br/> a large bowl. Make a well in the center, and pour in<br/> milk, oil, and egg. Mix until smooth.</p>
        <h4 style={{position:"relative", left:"60%", top:"-20px", color:"green",fontSize:"1.9rem",}}>Step 2</h4>
        <p style={{position:"relative", left:"60%", top:"-10px",fontSize:"1.3rem",}}> Serve hot and <br/>enjoy!</p>

        <button onClick={() => pancakeEl.current.click()} type='button' style={{position:"relative", left:"90%",backgroundColor:"green",color:"white",borderRadius:"20px",width:"10%",}}>Watch Video <NavLink ref={pancakeEl} to="/Video" hidden /></button>

        {/*Footer Section Started*/}
      <div className="footer" style={{position:"relative",top:"150px",}}>
        <div className="sb_footer section_padding">
          <div className="sb_footer-links">
            <a href='/Home'><img src={logoshesha} alt="logoshesha.png" style={{ color: "white", }} /><em style={{ fontSize: "30px", textDecoration: "none", }}></em></a>
            <div className="sb_footer-links_div">
              <h3>Contact</h3>
              <a href="/Contact">
                <p style={{fontWeight:"600",}}><i>Linkedin</i></p>
              </a>
              <a href="/Lessons">
                <p style={{fontWeight:"600",}}><i>Facebook</i></p>
              </a>
              <a href="/Recipes">
                <p style={{fontWeight:"600",}}><i>GitHub</i></p>
              </a>
            </div>
            <div className="sb_footer-links_div">
              <h3>Resources</h3>
              <a href="/Home">
               <a href="https://www.youtube.com/"> <p>Youtube</p></a>
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

          <h6 style={{ color: "white", position: "relative", top: "20px", left: "18%", }}>Copyright @ Shesha Food Recipe. All right reserved.</h6>
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