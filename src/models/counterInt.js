export default {

    namespace: 'countInt',
  
    state: 13,

    reducers: {
      add(countInt) {
        console.log("countInt add(state)");
        return countInt + 1;
      },
      minus(countInt) {
        console.log("countInt minus(count)");
        return countInt - 1;
      }
    }
  
  };
