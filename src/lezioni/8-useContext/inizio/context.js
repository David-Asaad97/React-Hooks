import React, { useContext, useState } from 'react';
import { data } from '../../../data'

const AppContext = React.createContext();

const MainComponent = () => {
    const [people, setPeople] = useState(data)

    const remuvePeople = (id) => setPeople(people.filter(el => el.id !== id))

    return (

        <AppContext.Provider value={{ people, remuvePeople }} >
            <h2>createContext & useContext</h2>
            <Elenco />
        </AppContext.Provider>

    );
};

const Elenco = () => {
    const { people } = useContext(AppContext);
    return <div>
        {people.map((el, i) => {
            return <Persona key={el.id + i} {...el} />
        })}
    </div>

}

const Persona = ({ name, id }) => {

    const { remuvePeople } = useContext(AppContext);

    return <article className='item shadow'>
        <h5>{name}</h5>
        <button className='button delete-button' onClick={() => remuvePeople(id)}>X</button>
    </article>
}

export default MainComponent;
