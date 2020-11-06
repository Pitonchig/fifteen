import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    data: [
    [ 1, 2, 3, 4],
    [ 5, 6, 7, 8],
    [ 9,10,11,12],
    [13,14,15, 0]
    ],
    xSize: 4,
    ySize: 4,
    position: {
      x: 3,
      y: 3,
    }
  },
  mutations: {
    move(state, payload) {
      console.log('[STORE::move]');
      if( payload === undefined || payload.x === undefined || payload.y === undefined) {
        console.log('[STORE::move] payload is undefined!');
        return;
      }

      var x = payload.x - 1;
      var y = payload.y - 1;

      if( x==state.position.x && y==state.position.y) {
        console.log('[STORE::move] move == position!');
        return;
      }
      Vue.set(state.data[state.position.y], state.position.x, state.data[y][x])
      Vue.set(state.data[y], x, 0);
      state.position.x = x;
      state.position.y = y;

      console.log('[STORE::move] data=' + state.data);
      console.log('tmp=' + state.data[y]);

    }
  },

  actions: {

  },

  getters: {
    getData: state => state.data,
    getSizeX: state => state.xSize,
    getSizeY: state => state.ySize,
    getValue: state => props => {
      console.log('[STORE::getValue] x=' + props.x + " y=" + props.x + ' value=' + state.data[props.y-1][props.x-1]);
      return state.data[props.y-1][props.x-1];
    },
  },

  modules: {
  }

})
