<template>
    <v-card outlined elevation=6 class="grid-cell">
        {{y}}-{{x}}
    </v-card>
</template>

<script>
  export default {
    name: 'Tile',

    props: {
      x: Number,
      y: Number,
    },

    data: () => ({
    }),
  }
</script>

<style scoped>

.grid-cell {
    width: 2rem;
    height: 2rem;
}

</style>