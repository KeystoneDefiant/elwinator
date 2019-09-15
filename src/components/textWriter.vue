<template>
  <v-text-field
    :label="label"
    v-model="textValue"
    outlined
    rounded
    v-on:keyup.enter="changeData"
  ></v-text-field>
</template>

<script>
const jetpack = require("fs-jetpack");
const os = require("os");

export default {
  props: ["label", "filename"],
  data: function() {
    return {
      textLocation: os.homedir() + "\\elwinator\\" + this.filename + ".txt",
      textValue: ""
    };
  },
  created: function() {
    if (!jetpack.read(this.textLocation)) {
      jetpack.write(this.textLocation, " ");
    } else {
      this.textValue = jetpack.read(this.textLocation);
    }
  },
  methods: {
    changeData: function() {
      jetpack.write(this.textLocation, this.textValue);
    }
  }
};
</script>
