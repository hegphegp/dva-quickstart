export default {

    namespace: 'countObj',
  
    state: {
      count: 12
    },

    reducers: {
      add(state) {
        console.log("countObj add(state)");
        state.count = state.count+1;
        return {...state};
      },
      minus(state) {
        console.log("countObj minus(count)");
        state.count = state.count-1;
        return {...state};
      }
    }
  
  };
