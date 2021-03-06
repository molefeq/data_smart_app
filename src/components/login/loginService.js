import API from "../../shared/services/api";
import authenticationService from "../../shared/services/authentication-service/authentication-service";

const loginService = {
  login: async model => {
    // Promise is resolved and value is inside of the response const.
    try {
      const response = await API.post(`Account/Login`,  model );

      authenticationService.authenticate(response);
      console.log(response);
      console.log(response.data);

      return response;
    } catch (error) {
      if (error.status === 422) {
        return error;
      }
    }
  },
  signout(cb) {
    this.isAuthenticated = false;
    setTimeout(cb, 100);
  }
};

export default loginService;
