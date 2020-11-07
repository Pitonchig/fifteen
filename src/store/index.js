import Vue from 'vue'
import Vuex from 'vuex'

import * as utils from './utils/utils.js'

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
    },
    moves: 0,
    isFinished: false
  },
  mutations: {
    move(state, payload) {
      if(state.isFinished) {
        console.log('[STORE::move] game is finished!');
        return;
      }

      if(payload === undefined || payload.x === undefined || payload.y === undefined) {
        console.log('[STORE::move] payload is undefined!');
        return;
      }

      var x = payload.x - 1;
      var y = payload.y - 1;

      if(!utils.validateMove(state.position.x, state.position.y, x, y)) {
        console.log('[STORE::move] move not valid! x=' + x + ' y=' + y);
        return;
      }

      console.log('[STORE::move] x=' + x + ' y=' + y);
      Vue.set(state.data[state.position.y], state.position.x, state.data[y][x])
      Vue.set(state.data[y], x, 0);
      state.position.x = x;
      state.position.y = y;
      state.moves++;

      if(utils.checkForWin(state.data, state.xSize, state.ySize)) {
        console.log('[STORE::move] isFinished = true!');
        state.isFinished = true;
      }
    },

    restart(state) {
      console.log('[STORE::restart]');

      do {
        console.log('[STORE::restart] generate random field and check math solution!');
        state.data = utils.generateField(state.xSize, state.ySize, state.position);
      } while( !utils.hasMathSolution(state.data, state.xSize, state.ySize) );

      state.position = utils.findZeroPosition(state.data, state.xSize, state.ySize);
      state.moves = 0;
      state.isFinished = false;
    }
  },

  actions: {

  },

  getters: {
    isFinished: state => state.isFinished,
    getData: state => state.data,
    getMoves: state => state.moves,
    getSizeX: state => state.xSize,
    getSizeY: state => state.ySize,
    getValue: state => props => state.data[props.y-1][props.x-1],
  },

  modules: {
  }

})
