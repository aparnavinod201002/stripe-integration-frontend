import axios from "axios";

export const commonAPI = async (httpRequest, url, reqBody, reqHeader) => {
  const reqConfig = {
    method: httpRequest,
    url,
    data: reqBody,
    headers: reqHeader || { "Content-Type": "application/json" },
    withCredentials: true
  };

  return await axios(reqConfig); 
};
