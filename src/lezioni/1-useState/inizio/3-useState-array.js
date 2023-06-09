import { useState } from 'react';
import { data } from '../../../data';

const ArrayState = () => {
    const [people, setPeople] = useState(data);
    console.log(people);
    const delatePerson = (id) => {
        let newPerson = people.filter(el => el.id !== id);
        setPeople(newPerson);
    }
    return (
        <>
            {people.map(ele => {
                const { id, name } = ele
                return <div className='item shadow'>
                    <h2 key={id}> {name} </h2>
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
