import React from 'react'
import viewburger from './images/viewburger.png';
import viewpicture from './images/viewpicture.png';
import { TopNav } from './TopNav';


import logoshesha from './images/logoshesha.png';

export const ViewIngredientsburger = () => {
  return (
    <React.Fragment>
      <style>
        {
          `
            
            }`
        }
      </style>
      <TopNav />
      <h4 className="text-center text-dark my-5" style={{ position: "relative", left: "10%", top: "60px", fontWeight: "550", }}><i>Recipe</i></h4>
      <h1 className="text-center text-success my-5" style={{ position: "relative", left: "10%", top: "40px", fontWeight: "600", fontSize: "60px", }}>Good Burgers</h1>

      
      <h1 style={{ position: "relative", top: "50px", left: "15%", color: "green", }}>Ingredients</h1>
      <ul style={{ fontWeight: "500", fontSize: "1.4rem", }}>

        <li> 2 medium russet potatoes</li>
        <li> 8 cups peanut oil for frying</li>
        <li>  14 ounces ground chuck</li>
        <li>  4 thick slices American cheese</li>
        <li>  1 teaspoon hot sauce</li>
        <li>  1 tablespoon mayonnaise</li>
        <li>  2 medium sesame seed burger buns</li>
        <li>  ½ cup shredded iceberg lettuce</li>
        <li>  2 thick slices tomato</li>
        <li>  2 tablespoons diced onion</li>
        <li>  1 tablespoon pickle slices</li>
        <li>  2 teaspoons mustard</li>
        <li>  2 teaspoons ketchup</li>
        <li> 1 teaspoon kosher salt</li>
        <li>2 tablespoon with white sugar</li>
        <li>2 teaspons baking powder</li>
        <li>1 teaspons salt, or to taste</li>
        <li>1 cup milk</li>
        <li>2 tablespoons vegaetable oil</li>
        <li>1 egg, beaten</li>
      </ul>

      <img src={viewpicture} style={{ position: "relative", height: "25rem", borderRadius: "50%", width: "35%", left: "70%", top: "-690px", }} alt='viewpicture' />
      <img src={viewburger} style={{ position: "relative", height: "2", borderRadius: "50%", width: "35%", left: "-25%", top: "290px", }} alt='viewpanburger.png' />

      
      <h3 className="text-center text-dark my-5" style={{ position:"relative", left:"10%", top:"-290px", fontWeight: "600", }}>Follow these Steps to make your yummy Burger</h3>

      <h4 style={{ position: "relative", left: "60%", top: "-240px", color: "green", fontSize: "1.9rem", }}>Step 1</h4>
      <p style={{ position: "relative", left: "60%", top: "-230px", fontSize: "1.3rem", }}>Cut potatoes in 1/2-inch wide strips. Place in a large bowl filled <br />with warm water and soak for 20 minutes.</p>
      <h4 style={{ position: "relative", left: "60%", top: "-200px", color: "green", fontSize: "1.9rem", }}>Step 2</h4>
      <p style={{ position: "relative", left: "60%", top: "-180px", fontSize: "1.3rem", }}>Pour oil in a Dutch oven and heat<br /> over medium-high heat until it reaches 350 degrees F (175 degrees C).<br /> Line a rimmed baking sheet with paper towels and set a wire rack on top.</p>
      <h4 style={{ position: "relative", left: "60%", top: "-150px", color: "green", fontSize: "1.9rem", }}>Step 3</h4>
      <p style={{ position: "relative", left: "60%", top: "-130px", fontSize: "1.3rem", }}> Drain potatoes well and dry thoroughly with paper towels.<br /> Add 1/2 of the dried potatoes to the hot oil and cook,<br /> stirring often, until they soften slightly, about 3 minutes.<br /> Remove potatoes to the wire rack to drain.<br /> Repeat with remaining potatoes.<br /> Maintain oil temperature at 350 degrees F (175 degrees C)<br /> for finishing fries just before serving</p>


      <button type='button' style={{ position: "relative", left: "90%", backgroundColor: "green", color: "white", borderRadius: "20px", width: "10%", top: "-70px", height: "40px", }}>Watch Video</button>

      {/*Footer Section Started*/}
      <div className="footer" style={{ position: "relative", top: "50px", }}>
        {/*<h3 style={{ position: "relative", top: "10px", left: "4%", color: "lightgrey", fontWeight: "700", }}>Thank You For Visting Our Website<br /></h3>*/}
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
