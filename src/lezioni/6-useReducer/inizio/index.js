import  { useReducer } from "react";
import Modal from "./Modal";
import reducer from "./reducer";
import { APRI_MODAL , CHIUDI_MODAL} from "./../finale/action";


const initialState = {
    isModalOpen: false,
    modalContent: 'eccomi, sono un modal',
}

const Index = () => {

    const [state, dispatch] = useReducer(reducer, initialState);

    const apriModal = () => {
        dispatch({ type: APRI_MODAL,payload: 'il mio nuovo modal' })
    }

    const chiudiModal =()=>{
        dispatch({ type: CHIUDI_MODAL })
    }

    return (
        <>
            <div>
                premi qui per eseguire il bottone
            </div>
            <button className="button" onClick={apriModal} >premimi</button>
            <Modal modalContent={state.modalContent} modalState={state.isModalOpen} chiudiModal={chiudiModal}/>
        </>
    );
};

export default Index;
