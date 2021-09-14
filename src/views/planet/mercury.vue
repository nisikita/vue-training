<template>
  <v-container>
    <h1>第1問 コンポーネントを使おう</h1>
    <h2>importされているコンポーネントを読み込め</h2>
    <v-card class="mb-4">
      <!-- v-conatainerタグの中に記述すること -->
      <v-container> </v-container>
    </v-card>
    <v-row>
      <v-col cols="11"></v-col>
      <v-col cols="1">
        <v-btn small color="primary" to="venus">次へ</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import HelloVue from "../../components/planet/Mercury/HelloVue.vue"; // 相対パスで読み込んでいる
export default {
  name: "mercury",
};
</script>