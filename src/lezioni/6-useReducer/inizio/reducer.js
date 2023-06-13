import { APRI_MODAL , CHIUDI_MODAL} from "./../finale/action";

const reducer = (state, action) => {
    if (action.type === CHIUDI_MODAL) {
        return {
            ...state,
            isModalOpen:false,
           } 
    }else if (action.type === APRI_MODAL){
        console.log(action.payload)
       return {
        ...state,
        isModalOpen:true,
        modalContent: action.payload,
       } 
    }
    throw new Error(`Nessuna funzione corrisponde ha: ${action.type}`);
}

export default reducer;