import { useEffect, useState } from "react";
import {Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { Link } from "react-router-dom";


function Vegetarian() {

    const [vegetarian, setVegetarian] = useState([]);

    useEffect(() => {
        getVegetarian();
    }, []);

    const getVegetarian = async () => {

      const check = localStorage.getItem('vegetarian');

      if(check){
        setVegetarian(JSON.parse(check));
      }
      else{
        const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9&tags=vegetarian`);
        const data = await api.json();

        localStorage.setItem('vegetarian', JSON.stringify(data.recipes));
        setVegetarian(data.recipes);
        console.log(data.recipes);
      };

     
      
    }
             
  return (

    <div className="font-josefin p-6 mx-6 md:mx-14 mt-10 lg:px-20">
        <div className="flex flex-col  ">
          <h3 className="self-center font-bold text-2xl md:text-3xl lg:text-4xl mb-2">Vegetarian Picks</h3>

          <Splide options={{
            perPage:3,
            arrows: false,
            pagination: false,
            drag: 'free',
            gap: '3rem'
          }}> 
          {vegetarian.map((recipe) => {
            return (
              <SplideSlide key={recipe.id} className='relative '>
                <Link to={'/recipe/' + recipe.id}>
                    <div className="relative flex center min-w-img">
                        <div>
                            <img className="z-0 rounded-lg object-cover" src={recipe.image} alt={recipe.title} />
                        </div>
                    </div>
                </Link>
                <center className="text-xs md:text-sm lg:text-base w-full font-semibold self-center justify-center items-center top-24 text-black">{recipe.title}</center>
              </SplideSlide>
            );
          })}
          </Splide>
        </div>
    </div>
  )

  ;}

  export default Vegetarian; 