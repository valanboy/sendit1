import { publicRequest } from "../requestMethods";
import { loginFailure, loginSuccess, loginStart } from "./userRedux";
import { toast, useToastContainer } from "react-toastify";

export const login = async (dispatch, user) => {
  const toastcontainer = useToastContainer;
  try {
    dispatch(loginStart());
    const res = await publicRequest.post("/auth/signin", user);
    await dispatch(loginSuccess(res.data));
  } catch (error) {
    await dispatch(loginFailure());
    toast.error(error.response.data || error.message);
    console.log(error);
  }
  toastcontainer;
};
