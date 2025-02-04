import { useState } from 'react';
import { data } from '../../../data';

const ArrayState = () => {
    const [people, setPeople] = useState(data);
    console.log(people);
    const delatePerson = (id) => {
        // let newPerson = people.filter(el => el.id !== id);
        setPeople(oldPeople =>{
            return oldPeople.filter(el => el.id !== id);
        })
    }
    return (
        <>
            {people.map(ele => {
                const { id, name } = ele
                return <div className='item shadow' key={id}>
                    <h2 > {name} </h2>
                    <button type='button' 
                        className='button delete-button' 
                        onClick={() => delatePerson(id)}
                    >
                        X
                    </button>
                </div>
            })}
        </>
    );
};

export default ArrayState;
