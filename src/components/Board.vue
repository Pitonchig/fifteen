<template>
  <v-container>
    <v-row class="justify-center" v-for="yIndex in ySize" :key="yIndex" no-gutters>
        <v-col v-for="xIndex in xSize" :key="xIndex+yIndex">
            <Tile :x="xIndex" :y="yIndex"></Tile>
        </v-col>
    </v-row>
  </v-container>
</template>


<script>
import Tile from './Tile';

  export default {
    name: 'Board',

    props: {
      xSize: Number,
      ySize: Number
    },

    data: () => ({
    }),

  components: {
    Tile
  },

  }
</script>

<style scoped>
.col {
  flex-grow: 0;
}
</style>