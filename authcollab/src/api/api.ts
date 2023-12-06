import axios from "axios";

const URL: string = "";

export const createAccount = async (data: any) => {
  try {
    return await axios.post(`${URL}/create-User`, data).then((res: any) => {
      return res.data;
    });
  } catch (error) {
    return error;
  }
};

export const verifyAccount = async (data: any) => {
  try {
    return await axios.patch(`${URL}/verify-user`, data).then((res: any) => {
      return res.data;
    });
  } catch (error) {
    return error;
  }
};

export const signInAccount = async (data: any) => {
  try {
    return await axios.post(`${URL}/sign-in-user`, data).then((res: any) => {
      return res.data;
    });
  } catch (error) {
    return error;
  }
};

export const getAccountOwner = async (userID: string) => {
  try {
    return await axios.get(`${URL}/get-one-user/${userID}`).then((res: any) => {
      return res.data;
    });
  } catch (error) {
    return error;
  }
};
