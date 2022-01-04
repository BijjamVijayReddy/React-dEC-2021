import {GM,GA}from "../Message/Message.action";
let initialState={
    message:"Hello "
}
let messageReducer=(state=initialState,action)=>{
   
    switch(action.type){

        case GM:
            return{ message:"Good Moring"};
            case GA:
                return{ message:"GOOD Afternnon"};
                default:
                    return state
    }


}
export {messageReducer}

// reducer is pure Function it expect  two arugements is state,actions