import axios from 'axios';
import ApiResultModel from '../models/ApiResultModel';
import Constant from '../Common/Constants';
import LoginModel from '../models/LoginModel';
const loginApi = (data, response) => {
  return axios
    .post(Constant.domain + Constant.LoginEndPoint, {
      email: data.usernameText,
      password: data.passwordText,
    })
    .then(function (response) {
      let loginModelResult;
      if (response.data.status==true) {
        loginModelResult = new LoginModel(response.data.data);
      }
      let apiResult = new ApiResultModel(
        response.data.status,
        response.data.message,
      );
      return apiResult;
    
     })
    .catch(function (error) {
      return false;
    });
};

export default {loginApi};
