import React from 'react'
import { useEffect, useState } from 'react'


const Api = () => {
    const [characters, setCharacters] = useState([]);
    const [page, setPage] = useState(1);
    const urlPage = `https://rickandmortyapi.com/api/character?page=${page}`
     console.log(urlPage) 

     const nextPage = () => {
       if (page >= 42) {return page === 42}
        setPage( page + 1);
    }
    const backPage = () => {
       if (page <= 1) {return page === 1};
        setPage( page - 1)
    }
    const home = () => {
        setPage(1);
    }

    useEffect(() => {     
        fetch(urlPage)
          .then((response) => response.json())
          .then(
            (response) => {     
              setCharacters(response.results);
            },
          );
      }, [urlPage]);

  return (
    <>   
          
        
        <div className='pageSelector'> 
        <div className='home'>
        <button className='btn' onClick={home}>🏠</button>
        </div>
        <div className='pageSelector'>
        <button className='btn' onClick={backPage}>⬅️</button> 
          <h1>{page}</h1>
          <button className='btn' onClick={nextPage}>➡️</button> 
        </div>
        </div>
        <div className='cards'>
        {characters.map((character) => {
        return (
            
            <div className='card' key={character.id}>
                <div className='info'>
                <h2>{character.name}</h2>
                <p>{character.status}</p>
                <p>{character.species}</p>
                </div>
            <div className='img-container'>
                <img src={character.image} alt={character.name}/>
            </div>
            </div>
            
        
        );
      })}
      </div>
    </>
  )
}

export default Api