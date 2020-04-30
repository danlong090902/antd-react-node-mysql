import PATH from '@/utils/util';
import request from '@/utils/request';


export const Login = ({ payload }) => {
  return request(`${PATH.APIPATH}/login`, { method: 'post', body: JSON.stringify(payload) })
}