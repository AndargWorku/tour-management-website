import {Children, CreateContext, useEffect, useReducer} from "react"

const initial_state={
    user:localStorage.getItem('user')!==undefined ? JSON.parse(localStorage.getItem('user')): null,
    loading:false,
    error:null,
}
export const AuthContext= CreateContext(initial_state);

const AuthReducer=(sate, action)=>{
    switch (action.type){
    case "LOGIN_START":
        return {
            user:null,
            loading:true,
            error:null,
        };
        case "LOGIN_SUCCESS":
            return {
                user:action.payload,
                loading:false,
                error:null,
            };

    case "LOGIN_FAIURE":
        return {
            user:null,
            loading:false,
            error:action.payload,
        };

        case "REGISTER_SUCCESS":
        return {
            user:null,
            loading:false,
            error:null,
        };
        case "LOGOUT":
        return {
            user:null,
            loading:false,
            error:null,
        };

        default:

    }
};
export const AuthContextProvider=({Children})=>{
    
    const [state, dispatch]=useReducer(AuthReducer, initial_state)
    useEffect(()=>{
        localStorage.setItem('user', JSON.stringify(state.user))
    }, [state.user])
    return <AuthContext.Provider value={{
        user:state.user,
        loading:state.loading,
        error:state.error,
        dispatch,
    }}>
      {Children}  

    </AuthContext.Provider>
}