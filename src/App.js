import React ,{useState, useEffect} from 'react';
import './App.css';
import Header from './components/Header';
import Axios from 'axios';
import Recipes from './components/Recipes';

function App() {
 
  const [search, setSearch] = useState("Paneer");
  const [recipes, setRecipes] = useState([]);

  const APP_ID = "a96e5a0d";
  const APP_KEY = "727d1818743857cbbeda261287b98fae";
   
  useEffect(async () => {
   await getRecipes();
  },[]);

  const getRecipes = async () => {
    const res = await Axios.get(`https://api.edamam.com/search?q=${search}&app_id=${APP_ID}&app_key=${APP_KEY}`);
  
    setRecipes(res.data.hits);
  }

  const onInputChange = (e) => {
    setSearch(e.target.value);
  };

  const onSearchClick = () => {
    getRecipes();
  };
  return (
    
    <div className="App">
      <Header  search={search} onInputChange={onInputChange} onSearchClick={onSearchClick}/>
      <div className="container">
      <Recipes recipes= {recipes}/>
      </div>
    </div>
  );
}

export default App;
