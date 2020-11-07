<template>
  <v-app>
    <v-app-bar app color="primary">
        <div class="d-flex align-center">
          <v-img src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png" alt="Logo" transition="scale-transition" width="40"/>
          <div class="title font-weight-light font-italic">The 15 puzzle game</div>
        </div>

        <v-spacer></v-spacer>

        <div class="d-flex align-center">
          <div class="title font-weight-light font-italic">Moves: {{getMoves}}</div>
        </div>

        <v-btn @click="onRestartGame" text rounded>
          <span class="mr-2">Restart</span>
          <v-icon>mdi-autorenew</v-icon>
        </v-btn>

        <v-btn @click="onToggleTheme" text rounded>
          Toggle theme
          <v-icon ref="brightness">mdi-brightness-2</v-icon>
        </v-btn>
    </v-app-bar>
    <v-main>
      <Board :xSize="getSizeX" v-bind:ySize="getSizeY"/>
    </v-main>
  </v-app>
</template>

<script>
import Board from './components/Board';

export default {
  name: 'App',

  components: {
    Board,
  },

  methods: {
    onToggleTheme() {
        console.log("[App::onToggleTheme]");
        this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
    },
    onRestartGame() {
        console.log("[App::onRestartGame]");
        this.$store.commit('restart');
    },
  },

  computed: {
    getSizeX() {
        return this.$store.getters.getSizeX;
    },
    getSizeY() {
        return this.$store.getters.getSizeY;
    },
    getData() {
        return this.$store.getters.getData;
    },
    getMoves() {
        return this.$store.getters.getMoves;
    },
  }

};
</script>
