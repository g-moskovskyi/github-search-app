import axios from 'axios';


const apiUrl = process.env.REACT_APP_API_URL;

interface RequestOptions {
  token: string;
}

export class ApiRequest {
  public static get = async <T>(uri: string, options: RequestOptions) => {
    try {
      const { token } = options;
      const requestOptions = {
        headers: {
          Authorization: `Bearer ${token}`
        }
      };
      const response = await axios.get<T>(apiUrl + uri, requestOptions);
      return response.data;
    } catch (e) {
      throw e;
    }
  };

  public static post = async <T>(uri: string, body: any, options: RequestOptions) => {
    try {
      const requestOptions = {};
      const response = await axios.post<T>(apiUrl + uri, requestOptions);
      return response.data;
    } catch (e) {
      throw e;
    }
  };

  public static delete = async <T>(uri: string, body: any, options: RequestOptions) => {
    try {
      const requestOptions = {};
      const response = await axios.delete<T>(apiUrl + uri, requestOptions);
      return response.data;
    } catch (e) {
      throw e;
    }
  };
}
