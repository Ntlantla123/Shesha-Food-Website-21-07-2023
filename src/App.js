import React from 'react';
import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Landing } from './components/Landing';
import Register from './components/Register';
import Login from './components/Login';
import { TopNav } from './components/TopNav';
import { Home } from './components/Home';
import { Lessons } from './components/Lessons';
import { Recipes } from './components/Recipes';
import { ToastContainer } from 'react-toastify'; // Message Notification //
import { ViewIngredients } from './components/ViewIngredients';
import { ViewIngredientsburger } from './components/ViewIngredientsburger';
import { Video } from './components/Video';
import { Videoburger } from './components/Videoburger';
import  HomeCard from './components/HomeCard';
import { Shushi } from './components/Shushi';
import { TandooriChicken } from './components/TandooriChicken';
import { ButternutRisotto } from './components/ButternutRisotto';


function App() {
  const [messages, setMessages] = useState([])
  const [message, setMessage] = useState("");
  const [showNotification, setShowNotification] = useState(true);
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [isDoneLoading, setIsDoneLoading] = useState("loading");
  const API_KEY = "0d226b2d19b6426dad13000aac1c2c16";


  return (
    <div className="App">
      <ToastContainer theme='colored'></ToastContainer>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Landing />}></Route>
          <Route path='/Register' element={<Register />}></Route>
          <Route path='/Login' element={<Login />}></Route>
          <Route path='/TopNav' element={<TopNav />}></Route>
          <Route path='/home' element={<Home />}></Route>
          <Route path='/Lessons' element={<Lessons />}></Route>
          <Route path='/recipes' element={<Recipes isDoneLoading={isDoneLoading} setIsDoneLoading={setIsDoneLoading} query={query} setQuery={setQuery} recipes={recipes} setRecipes={setRecipes} />}></Route>
          <Route path='/viewingredients' element={< ViewIngredients />}></Route>
          <Route path='/viewingredientsburger' element={< ViewIngredientsburger />}></Route>
          <Route path='/video' element={<Video />}></Route>
          <Route path='/videoburger' element={<Videoburger />}></Route>
          <Route path='/homecard' element={<HomeCard />}></Route>
          <Route path='/shushi' element={<Shushi />}></Route>
          <Route path='/tandoorichicken' element={<TandooriChicken />}></Route>
          <Route path='/butternutristto' element={<ButternutRisotto />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
