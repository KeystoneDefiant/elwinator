<template>

		<v-text-field
            :label="label"
			v-model="textValue"
            outlined
			rounded
			v-on:keyup.enter="changeData"
			v-on:keyup="dirtyBird"
			v-bind:class="{dirtyBird: isDirty, saved: isSaving}"
			class="transition-swing"
          ></v-text-field>

</template>

<script>
const jetpack = require('fs-jetpack');
const os = require('os');

export default{
	props:['label','filename'],
	data: function() {
		return{
			textLocation: os.homedir()+"\\elwinator\\"+this.filename+".txt",
			textValue: "",
			isSaving: false,
			isDirty: false,
			propIcon: "place"
		}
	},
	created: function(){
		if (!jetpack.read(this.textLocation)){
			jetpack.write(this.textLocation, " ");
		}else{
			this.textValue = jetpack.read(this.textLocation)
		}
	},
	methods: {
		changeData: function(){
			this.isSaving = true;
			jetpack.writeAsync(this.textLocation, this.textValue)
			.then((data) => {
				
				this.isDirty = false;
				var me=this
				setTimeout(function(){ 
					me.isSaving = false; 
				}, 1000);
			});
		},

		dirtyBird: function(){
			this.isDirty = true;
		}
	}
}
</script>
<style>

.v-input__slot{
	background: inherit !important;
}

.dirtyBird .v-text-field__slot input, .dirtyBird .v-text-field__slot label, .v-application .dirtyBird.primary--text{
	color: orange !important;
	caret-color: orange !important;
}

.saved .v-text-field__slot input, .saved .v-text-field__slot label, .v-application .saved.primary--text{
	color: lightgreen !important;
	caret-color: lightgreen !important;
}


</style>