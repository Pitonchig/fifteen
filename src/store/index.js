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

      if(x==state.position.x && y==state.position.y) {
        console.log('[STORE::move] move == position!');
        return;
      }

      if(!(y == state.position.y && x == state.position.x+1) &&
         !(y == state.position.y && x == state.position.x-1) &&
         !(x == state.position.x && y == state.position.y+1) &&
         !(x == state.position.x && y == state.position.y-1)) {

        console.log('[STORE::move] not bordering tile!');
        return;
      }

      console.log('[STORE::move] x=' + x + ' y=' + y);
      Vue.set(state.data[state.position.y], state.position.x, state.data[y][x])
      Vue.set(state.data[y], x, 0);
      state.position.x = x;
      state.position.y = y;
      state.moves++;

      var flag = true;
      for (let y = 0; y < state.ySize ; y++){
        for (let x = 0; x < state.xSize ; x++){
          if(state.data[y][x] != y * state.xSize + x + 1 &&
            !( x == state.xSize-1 && y == state.ySize-1 && state.data[y][x] == 0)) {
            flag = false;
          }
        }
      }

      if(flag) {
        console.log('[STORE::move] isFinished = true!');
        state.isFinished = true;
      }
    },

    restart(state) {
      console.log('[STORE::restart]');

      var field = new Array(state.ySize);
      var data = new Array(state.xSize * state.ySize);
      for (let i = 0; i < state.xSize * state.ySize; i++) {
        data[i] = i;
      }
      data = data.sort( () => Math.random() - 0.5 );

      for (let y = 0; y < state.ySize ; y++){
        let row = new Array(state.xSize);
        for (let x = 0; x < state.xSize ; x++){
          var element = data.pop();
          if(element == 0) {
            state.position = {x: x, y: y};
          }
          row[x] = element;
        }
        field[y] = row;
      }
      state.data = field;
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
