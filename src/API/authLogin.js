import axios from "axios";

export const userLogin = async (email, password) => {
  try {
    const { data } = await axios.post('/auth/login', {
      email: email,
      password: password,
    }, {
        withCredentials : true
      });
    return data;
  } catch (err) {
    return err;
  }
};
