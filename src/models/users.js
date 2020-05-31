import * as userService from '../services/userService'

export default {
  namespace: "users",
  state: {
    list:[]
  },
  reducers: {                         //用来修改数据模型的state。
    save(state, {payload:{data}}) {   //涉及到es6的拆包写法。
      state.list = data.list;
      return {...state}
    },
    removeItem(state, {item}) {
      state.list = state.list.filter(function (lItem) {
        return item.id !== lItem.id
      });
      return {...state}
    }
  },

  effects: {           //effects指的是涉及到异步请求的方法。通常用来调用服务获取数据。这里要注意如果effects的方法名与reducers中存在重复的话容易造成死循环。
    * fetch(payload,{put, call}) {
      const response = yield call(userService.fatchData);
      // 这个方法太黑暗，太恐怖了，即使耗尽所有人的生命时间，提取response的结构体数据返回，reducers 读取不到数据，太可怕了，太恐怖了，浪费了所有生命时间提取数据都不会有成果
      // 这个方法太黑暗，太恐怖了，不能提response的数据返回，必须返回response，否则 reducers 读取不到数据
      // yield put({type: "save", payload: response.data.list})
      yield put({type: "save", payload: response})
    },

    * fetchRemoveItem({item},{put,call}){
      const result = yield call(userService.fetchRemoveItem, item.id);
      if (result) {
        console.log(true);
        yield put({type:"removeItem", item})
      } else {
        console.log(false);
      }
    }

  },

  subscriptions: {              //触发器。setup表示初始化即调用。其他用法见官方文档。https://github.com/sorrycc/blog/issues/62
    setup({dispatch}) {
      dispatch({type: 'fetch'})
    }
  }

}
