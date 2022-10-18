import React, {useState, useEffect} from 'react';
import CinemealCard from './CinemealCard'

function Cinemeals() {
    const [meals, setMeals] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/cinemeals')
        .then(res => res.json())
        .then(data => setMeals(data))
    }, []);

    const renderMeals = meals.map(meal =>
        <CinemealCard 
            key={meal.id}
            meal={meal}
        />
        )

    return (
        <>
        <h1>Cinemeals</h1>
            <div style={{display:"flex", flexWrap: "wrap", width:"100vw", alignItems:"center", justifyContent:"center"}}>
                <div style={{display:"flex", flexWrap:"wrap", width:"80vw", justifyContent:"center", alignContent:"center", gap:"2rem"}}>
                    <div>
                        {renderMeals}
                    </div>
                </div>
             </div>
        </>
    )
}

export default Cinemeals;