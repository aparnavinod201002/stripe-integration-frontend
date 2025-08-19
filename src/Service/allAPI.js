import { serverURL } from './serverurl';
import { commonAPI } from "./commonAPI";

//GET ALL STUDENTS API
export const loginAPI = async (reqBody) => {
  return await commonAPI("POST", `${serverURL}/routes/login`, reqBody, {});
};

//EDIT STUDENT API
export const createUserAPI = async (reqBody) => {
  return await commonAPI("POST", `${serverURL}/routes/user`, reqBody, {});
};

//
export const paymentAPI = async (reqBody) => {
    console.log("inside");
    
  return await commonAPI("POST", `${serverURL}/routes/payment`, reqBody, {});
};

//DELETE STUDENT API
// export const deleteStudentAPI = async (reqBody) => {
//   return await commonAPI("PATCH", `${serverURL}/admin/deleteUser`, reqBody, {});
// };

// //BLOCK STUDENT API
// export const blockStudentAPI = async (reqBody) => {
//   return await commonAPI("PATCH", `${serverURL}/admin/blockUser`, reqBody, {});
// };
