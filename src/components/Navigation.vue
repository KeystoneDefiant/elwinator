<template>
  <v-navigation-drawer permanent app clipped>
    <v-list dense rounded nav>
      <!-- <v-list-item to="/">Fuck</v-list-item> -->
      <v-list-item
        v-for="(data, index) in navData"
        v-bind:key="data.label"
        :to="'/options/' + index"
      >
        <v-list-item-action>
          <v-icon>{{ data.icon }}</v-icon>
        </v-list-item-action>

        <v-list-item-content>
          <v-list-item-title>{{ data.label }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>

        </v-list-item>

      </v-list>

      <template v-slot:append>
        <div class="pa-2">
          <v-img src="@/assets/img/levelonelogo.png"></v-img>
        </div>
      </template>
      
    </v-navigation-drawer>
</template>

<script>
import dataFile from "@/assets/data/navigation.json";
export default {
  data() {
    return {
      navData: dataFile
    };
  }
};
</script>
