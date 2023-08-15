import { UserType } from "../types/userType";
import api from "./api";

const usersPath = "/api/";
const paramUser = "?results=";

export const getUsers = async (limit: number) => {
  try {
    const result = await api.get(`${usersPath}${paramUser}${limit}`);
    if (result.status === 200) {
      return result.data as UserType;
    } else {
      throw Error(result.status.toString());
    }
  } catch (ex) {
    throw ex;
  }
};
