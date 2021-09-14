<template>
  <v-container>
    <h1>第11問 リストレンダリング</h1>
    <h2>配列をv-forを用いて表示せよ</h2>
    <v-card class="mb-4">
      <!-- v-conatainerタグの中に記述すること -->
      <v-container>
        <ul>
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
          <li>5</li>
          <li>6</li>
          <li>7</li>
          <li>8</li>
          <li>9</li>
          <li>0</li>
        </ul>
      </v-container>
    </v-card>
    <v-row>
      <v-col cols="1"
        ><v-btn small color="primary" to="japan">前へ</v-btn></v-col
      >
      <v-col cols="10"></v-col>
      <v-col cols="1"
        ><v-btn small color="primary" to="lebanon">次へ</v-btn></v-col
      >
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "kazakhstan",
  data() {
    return {
      number: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
    };
  },
};
</script>