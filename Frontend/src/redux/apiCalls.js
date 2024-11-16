import { publicRequest } from "../requestMethods"
import {loginFailure, loginSuccess, loginStart} from "./userRedux"

export const login = async(dispatch, user)=>{
    try {
        dispatch(loginStart)
        const res = await publicRequest.post("/auth/signin", user)
        dispatch(loginSuccess(res.data))
    } catch (error) {
        dispatch(loginFailure())
    }
}