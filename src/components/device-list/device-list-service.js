import API from "../../shared/services/api";
import authenticationService from "../../shared/services/authentication-service/authentication-service";

const deviceListService = {
    getLinkedDevices: async () => {
    // Promise is resolved and value is inside of the response const.
    try {
      const response = await API.get(`Device/GetLinkedDevices/${authenticationService.getUserId()}`);

      return response;
    } catch (error) {
      if (error.status === 422) {
        return error;
      }
      console.log(error);
    }
  }
};

export default deviceListService;
