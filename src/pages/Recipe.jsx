import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import React from 'react';

function Recipe() {

    let params = useParams();
    const [details, setDetails] =useState({});
    const [activeTab, setActiveTab] = useState('instructions');

    const fetchDetails = async () => {
        const data = await fetch(
            `https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}`)
        const detailData = await data.json();
        setDetails(detailData);
    };

    useEffect(() => {
        fetchDetails();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [params.name]);

    return (
        <div className='mt-28 font-josefin flex flex-col weird3:flex-row mx-5 mb-8'>
            <div className='flex flex-col items-center px-12 box-border '>
                <h2 className='font-bold text-xl mb-3'>{details.title}</h2>
                <img className='rounded-xl' src={details.image} alt={details.title} />
            </div>
            <div className='mt-5 max-w-md'>
                <Button className={activeTab === 'instructions' ? 'active' : ''} onClick={() => setActiveTab('instructions')}>
                    <div className='text-sm px-3 py-1.5 active:bg-slate-500 active:text-white'>
                        Instructions
                    </div>
                </Button>
                <Button  className={activeTab === 'ingredients' ? 'active' : ''} onClick={() => setActiveTab('ingredients')}>
                    <div className=' text-sm px-3 py-1.5 active:bg-slate-500 active:text-white'>
                        Ingredients
                    </div>
                </Button>
                <div className='mt-3 font-semibold'>
                {activeTab === 'instructions' && (
                    <div>
                        <h3 dangerouslySetInnerHTML={{ __html: details.instructions }}></h3>
                    </div>
                )}
                
                {activeTab === 'ingredients' && (
                    <ul className='px-5'>
                        {details.extendedIngredients.map((ingredients) => (
                            <li className='list-disc mt-4 leading-tight font-semibold' key={ingredients.id}>{ingredients.original}</li>
                        ))}
                    </ul>
                )}
                </div>
            </div>
        </div>
    )
};

const Button = styled.button`
    color: #313131;
    background: white;
    border: 2px solid black;
    margin-right: 2rem;
    font-weight: 600;
`;


export default Recipe
