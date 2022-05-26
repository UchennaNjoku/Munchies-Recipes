import { useEffect, useState } from "react";
import {Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { Link } from "react-router-dom";


function Popular() {

    const [popular, setPopular] = useState([]);

    useEffect(() => {
        getPopular();
    }, []);

    const getPopular = async () => {

      const check = localStorage.getItem('popular');

      if(check){
        setPopular(JSON.parse(check));
      }
      else{
        const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`);
        const data = await api.json();

        localStorage.setItem('popular', JSON.stringify(data.recipes));
        setPopular(data.recipes);
        console.log(data.recipes);
      };

     
      
    }
             
  return (

    <div className="font-josefin p-6 mx-6 md:mx-14 mt-10 weird2:mt-24 weird3:mt-32 md:mt-36 weird4:mt-38 weird5:mt-44 lg:mt-28 lg:px-20">
        <div className="flex flex-col  ">
          <h3 className="self-center font-bold text-2xl md:text-3xl lg:text-4xl mb-2">Our Picks</h3>

          <Splide options={{
            perPage:3,
            arrows: false,
            pagination: false,
            drag: 'free',
            gap: '3rem'
          }}> 
          {popular.map((recipe) => {
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

  export default Popular; 