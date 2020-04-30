import PATH from '@/utils/util';
import request from '@/utils/request';


export const getMessage = () => {
  return request(`${PATH.APIPATH}/getMessage`)
}

export const sendMessage = ({ payload }) => {
  return request(`${PATH.APIPATH}/sendMessage`, { method: 'post', body: JSON.stringify(payload) })
}