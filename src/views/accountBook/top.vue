<template>
  <v-container>
    <h1>家計簿</h1>
    <v-card>
      <v-container>
        <v-row>
          <v-card-title>残高</v-card-title>
          <v-card-actions><v-btn>編集</v-btn></v-card-actions>
        </v-row>
        <v-row>
          <v-col cols="1"
            ><v-card-actions
              ><v-icon large color="brown">mdi-wallet</v-icon></v-card-actions
            ></v-col
          >
          <v-col cols="3"
            ><v-card-title>￥{{ assets.wallet }}</v-card-title></v-col
          >
          <v-col cols="1"
            ><v-card-actions
              ><v-icon large color="red">mdi-bank</v-icon></v-card-actions
            ></v-col
          >
          <v-col cols="3"
            ><v-card-title>￥{{ assets.bank }}</v-card-title></v-col
          >
          <v-col cols="1"
            ><v-card-actions
              ><v-icon large color="green"
                >mdi-chart-line</v-icon
              ></v-card-actions
            ></v-col
          >
          <v-col cols="3"
            ><v-card-title>￥{{ assets.stock }}</v-card-title></v-col
          >
        </v-row>
      </v-container>
    </v-card>
    <v-card class="mt-4">
      <v-container>
        <v-row>
          <v-card-title>使用状況</v-card-title>
          <v-card-actions><v-btn>編集</v-btn></v-card-actions>
        </v-row>
        <v-card-actions>
          <v-progress-linear value="50" class="mb-4" color="blue" height="25"
            ><strong>{{ budGet }}</strong></v-progress-linear
          >
        </v-card-actions>
      </v-container>
    </v-card>
    <v-card class="mt-4">
      <v-container>
        <v-row>
          <v-card-title>履歴</v-card-title>
          <v-card-actions><v-btn>登録</v-btn></v-card-actions>
        </v-row>
        <v-data-table
          :headers="headers"
          :items="items"
          :items-per-page="10"
          class="elevation-1 mt-4"
        >
          <template v-slot:[`item.action`]>
            <v-btn text
              ><v-icon color="secondary">mdi-text-box-search</v-icon></v-btn
            >
            <v-btn text><v-icon color="primary">mdi-pencil</v-icon></v-btn>
            <v-btn text><v-icon color="red">mdi-delete</v-icon></v-btn>
          </template>
        </v-data-table>
      </v-container>
    </v-card>
  </v-container>
</template>

<script>
import {
  getAccountBookData,
  getAssets,
  getBudGet,
} from "../../data/accountBook.js";
export default {
  data() {
    return {
      assets: {
        wallet: null,
        bank: null,
        stock: null,
      },
      budGet: null,
      headers: [
        { text: "日付", value: "date", width: "10%" },
        { text: "カテゴリ", value: "category", width: "20%" },
        { text: "品目名", value: "item", width: "20%" },
        { text: "金額", value: "money", width: "20%" },
        {
          text: "action",
          value: "action",
          sortable: false,
          align: "center",
          width: "30%",
        },
      ],
      items: [],
    };
  },
  created() {
    // dbからデータを取得したとして、
    // この方法でデータを定義しなおさないと、assetsとbudGetはリアクティブを失う
    this.$set(this, "assets", getAssets());
    this.$set(this, "budGet", getBudGet());
    this.items.push(...getAccountBookData());
  },
};
</script>