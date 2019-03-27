import API from "../../shared/services/api";
import authenticationService from "../../shared/services/authentication-service/authentication-service";

const addDeviceService = {
  searchDevice: async searchText => {
    // Promise is resolved and value is inside of the response const.
    try {
      const response = await API.get(`Device/SearchDevice/${searchText}`);

      return response;
    } catch (error) {
      if (error.status === 422) {
        return error;
      }
      console.log(error);
    }
  },
  
  linkDevices: async devices => {
    const linkedDevices = [];

    for (let i = 0; i < devices.length; i++) {
      linkedDevices.push({
        id: devices[i].deviceId,
        linkUserId: authenticationService.getUserId()
      });
    }

    // Promise is resolved and value is inside of the response const.
    try {
      const response = await API.post(`Device/LinkDevices`, linkedDevices);

      return response;
    } catch (error) {
      if (error.status === 422) {
        return error;
      }
      console.log(error);
    }
  },
  
  linkDevice: async device => {
    const url = device.isDeviceLinked? `Device/UnLinkDevice`: `Device/LinkDevice`;


    // Promise is resolved and value is inside of the response const.
    try {
      const response = await API.post(url, device);

      return response;
    } catch (error) {
      if (error.status === 422) {
        return error;
      }
      console.log(error);
    }
  }
};

export default addDeviceService;
