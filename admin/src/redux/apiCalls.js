import { publicRequest } from "../requestMethods"
import {loginFailure, loginSuccess, loginStart} from "./userReducer"
import {toast, useToastContainer} from "react-toastify"

export const login = async(dispatch, user)=>{
    const toastcontainer = useToastContainer
    dispatch(loginStart())
    try {
        
        const res = await publicRequest.post("/auth/signin", user)
       dispatch(loginSuccess(res.data))
        toast.success("logging you in")
    } catch (error) {
        dispatch(loginFailure())
        toast.error(error.response.data||error.message )
        console.log(error)
    }
    toastcontainer
}
