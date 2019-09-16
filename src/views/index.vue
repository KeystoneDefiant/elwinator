<template>
  <section>
    <v-img src="@/assets/img/elwinator.png"></v-img>

    <v-card
      :elevation="6"
      raised>
        <v-card-title>Sup Bruh.</v-card-title>
        <v-card-text>I'm lifting all this heavy text to <span class="font-weight-black">{{textLocation}}</span></v-card-text>
    </v-card>

  </section>
</template>

<script>
const os = require('os');
export default {
  data: function() {
		return{
			textLocation: os.homedir()+"\\elwinator\\"
		}
	},
};
</script>

<style scoped>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.btn {
  margin: 0 8px;
}
</style>
