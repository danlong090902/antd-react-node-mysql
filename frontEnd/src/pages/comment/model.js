import { routerRedux } from 'dva/router';
import { getMessage, sendMessage } from './service'
import { ROUTER } from '@/utils/util'
export default {
  namespace: 'comment',
  state: {
    comments: [],
    value: ''
  },
  reducers: {
    delete (state, { payload: id }) {
      return state.filter(item => item.id !== id);
    },
    save (state, { payload }) {
      return { ...state, ...payload };
    },
  },
  effects: {
    *getMessage ({ payload }, { call, put }) {
      const data = yield call(getMessage);
      if (data.code === 0) {
        yield put({
          type: 'save',
          payload: {
            comments: data.data,
            value: ''
          }
        })
      }
    },
    *sendMessage ({ payload }, { call, put }) {
      const data = yield call(sendMessage, { payload });
      if (data.code === 0) {
        yield put({
          type: 'save',
          payload: {
            comments: data.data
          }
        })
      }
      yield put({ type: 'getMessage' })
    }
  },
  subscriptions: {
    set ({ dispatch, history }) {
      return history.listen(({ pathname }) => {
        if (pathname === '/comment') {
          dispatch({
            type: 'getMessage'
          })
        }
      })
    }
  }
};