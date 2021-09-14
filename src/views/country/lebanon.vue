<template>
  <v-container>
    <h1>第12問 リストレンダリング</h1>
    <h2>配列をv-forを用いて表示せよ</h2>
    <p>第10問の機能も実装すること</p>
    <v-card class="mb-4">
      <!-- v-conatainerタグの中に記述すること -->
      <v-container>
        <v-form>
          <v-row>
            <v-col cols="3"
              ><p class="mt-5">
                1個{{ meats[0].price }}円の{{ meats[0].name }}
              </p></v-col
            >
            <v-col cols="3"
              ><v-text-field
                :placeholder="`${meats[0].name}の個数`"
              ></v-text-field
            ></v-col>
            <v-col cols="3"><p class="mt-5">合計: 円</p></v-col>
          </v-row>
          <v-row>
            <v-col cols="3"
              ><p class="mt-5">
                1個{{ meats[1].price }}円の{{ meats[1].name }}
              </p></v-col
            >
            <v-col cols="3"
              ><v-text-field
                :placeholder="`${meats[1].name}の個数`"
              ></v-text-field
            ></v-col>
            <v-col cols="3"><p class="mt-5">合計: 円</p></v-col>
          </v-row>
          <v-row>
            <v-col cols="3"
              ><p class="mt-5">
                1個{{ meats[2].price }}円の{{ meats[2].name }}
              </p></v-col
            >
            <v-col cols="3"
              ><v-text-field
                :placeholder="`${meats[2].name}の個数`"
              ></v-text-field
            ></v-col>
            <v-col cols="3"><p class="mt-5">合計: 円</p></v-col>
          </v-row>
        </v-form>
        <p class="mt-5">3種類のお肉の合計金額は: 円</p>
        <p class="red--text mt-5">クレジットカードが使用できます</p>
      </v-container>
    </v-card>
    <v-row>
      <v-col cols="1"
        ><v-btn small color="primary" to="kazakhstan">前へ</v-btn></v-col
      >
      <v-col cols="10"></v-col>
      <v-col cols="1"
        ><v-btn small color="primary" to="madagascar">次へ</v-btn></v-col
      >
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "lebanon",
  data() {
    return {
      meats: [
        {
          name: "chicken",
          price: 200,
          count: 1,
        },
        {
          name: "pork",
          price: 300,
          count: 2,
        },
        {
          name: "beef",
          price: 500,
          count: 3,
        },
      ],
    };
  },
};
</script>