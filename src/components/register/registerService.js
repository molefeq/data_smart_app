import API from "../../shared/services/api";

const registerService = {
  register: async model => {
    // Promise is resolved and value is inside of the response const.
    const response = await API.post(`Account/Register`, model);

    console.log(response);
    console.log(response.data);

    return response;
  },
  countries: async () => {
    // Promise is resolved and value is inside of the response const.
    const response = await API.get(`ReferenceData/GetCountries`);

    return response.data.map(item => {
      return { key: item.id, value: item.id, text: item.name };
    });
  }
};

export default registerService;
