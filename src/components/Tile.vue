<template>
    <v-card
        outlined
        elevation=6
        align="center"
        justify="center"
        v-on:click="onClick"
        class="grid-cell text-center align-center">
            {{getValue}}
    </v-card>
</template>

<script>
  export default {
    name: 'Tile',

    props: {
      x: Number,
      y: Number,
    },

    data: function() {
        return {
          xId: this.x,
          yId: this.y
        }
    },

    computed: {
        getValue() {
            var props = {
                x: this.xId,
                y: this.yId,
            }
            var value = this.$store.getters['getValue'](props);
            return (value>0 && value<16)?value: '';
        },
    },

    methods: {
        onClick: function() {
            console.log('[Tile::onClicked] x=' + this.xId + ' y=' + this.yId);
            var props = {
                x: this.xId,
                y: this.yId,
            }
            this.$store.commit('move', props);
        },
    }
  }
</script>

<style scoped>

.grid-cell {
    width: 70px;
    height: 70px;
}

</style>