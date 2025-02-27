import axios from 'axios';
import { Cookies } from 'react-cookie';

const cookies = new Cookies();

const getCookie = (name: string) => {
  let matches = document.cookie.match(
    new RegExp('(?:^|; )' + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + '=([^;]*)'),
  );
  return matches ? decodeURIComponent(matches[1]) : undefined;
};

const api = axios.create({
  baseURL: 'https://onulstore.breon.ml/',
  headers: {
    'content-type': 'application/json',
  },
});

api.interceptors.request.use((config) => {
  const token = cookies.get('accessToken');
  config.headers = {
    Authorization: ` Bearer ${token}`,
  };
  return config;
});

api.interceptors.response.use(
  (config) => {
    console.log(config);
    return config;
  },
  async (error) => {
    console.log('해당 페이지에 문제가 있습니다! Q&N에 문의 해 주세요!');
    if (error?.response?.status === 403) {
      const prevRequest = error?.config;
      const actoken = cookies.get('accessToken');
      const retoken = cookies.get('refreshToken');

      const { new_at, new_rt }: any = await api
        .post('auth/refresh', {
          accessToken: actoken,
          refreshToken: retoken,
        })
        .then((res) => {
          return {
            new_at: res.data.accessToken,
            new_rt: res.data.refreshToken,
          };
        })
        .catch((err) => {
          //로그아웃 처리
        });
      prevRequest.headers['Authorization'] = `Bearer ${new_at}`;
      //setToken

      console.log('New Access Token is', new_at);
      console.log('New refresh Token is', new_rt);
      console.log('Previous request', prevRequest);
      // return request(prevRequest)
    }
    return Promise.reject(error);
  },
);

export default api;
