<template>
		<div class="broadcast">
			<transition-group name="trans">
				<textWriter v-for="(item, index) in navData[id].contents" v-bind:key="index" :label="item.label" :filename="index"></textWriter>
			</transition-group>
		</div>

</template>

<script>
import textWriter from "@/components/textWriter.vue";
import dataFile from "@/assets/data/navigation.json"
export default {
	props: ['id'],
	components:{
		textWriter
	},
	data () {
      return {
		  navData: dataFile
	  }
	}
}
</script>

<style scoped>
.broadcast{
	height: 100vh;
	padding: 10% 5%;
}
.trans-enter-active, .trans-leave-active {
  transition: opacity 0.25s ease-out;
  transition-delay: 0.2s;
}

.trans-enter, .trans-leave-to {
  opacity: 0;
  transition-delay: -.1s;
}
</style>
