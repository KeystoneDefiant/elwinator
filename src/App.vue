<template>
  <v-app>

    <AppBar></AppBar>

    <Nav></Nav>

    <v-content>  
        <router-view></router-view>
    </v-content>

  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import Nav from '@/components/Navigation.vue';
import AppBar from '@/components/AppBar.vue';

export default Vue.extend({
  name: 'App',
  components:{
    Nav,
    AppBar
  },
  created () {
      this.$vuetify.theme.dark = true
    },
});
</script>
<style>
  ::-webkit-scrollbar {
    display: none;
}
</style>