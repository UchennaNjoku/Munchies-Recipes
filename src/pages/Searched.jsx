import React from 'react'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

function Searched() {

    const [searchedRecipes, setSearchedRecipes] = useState([]);
    let params = useParams();

    const getSearched = async (name) => {
        const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${name}&number=20`)
        const recipes = await data.json();
        setSearchedRecipes(recipes.results);
    };

    useEffect(() =>{
        getSearched(params.search);
    }, [params.search])

  return (
    <div className='mt-28 font-josefin md:mx-8'>
        <div className='text-2xl font-bold'>Recipe results for '{params.search}'</div>
        <div className=' mt-10 grid grid-cols-unusual gap-12 w-full'>
        {searchedRecipes.map((item) => {
            return (
                <div key={item.id} className="">
                    <Link to={'/recipe/' + item.id}>
                        <div className='flex flex-col justify-center items-center '>
                            <img className='rounded-2xl' src={item.image} alt='' />
                            <h4 className='font-bold'>{item.title}</h4>
                        </div>
                    </Link>
                </div>
            )
        })}
        </div>
    </div>
  )
}


export default Searched
