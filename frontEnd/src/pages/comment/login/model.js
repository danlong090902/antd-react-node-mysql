import { routerRedux } from 'dva/router';
import { Login } from './service'
import { ROUTER } from '@/utils/util'
export default {
  namespace: 'login',
  state: [
    { name: 'dva', id: 'dva' },
    { name: 'antd', id: 'antd' },
  ],
  reducers: {
    delete (state, { payload: id }) {
      return state.filter(item => item.id !== id);
    },
  },
  effects: {
    *login ({ payload }, { call, put }) {
      const data = yield call(Login, { payload });
      if (data.code === 0) {
        yield put(routerRedux.replace(ROUTER.PRODUCTS))
      }
    }
  }
};