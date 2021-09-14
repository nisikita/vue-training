<template>
  <v-container>
    <h1>第3問 コンポーネントから値を変更しよう</h1>
    <h2>コンポーネント内のボタンクリックで表示内容を変更せよ</h2>
    <p>変更する文章はコンポーネント内で定義されている</p>
    <v-card class="mb-4">
      <!-- v-conatainerタグの中に記述すること -->
      <v-container>
        <BtnClick text="ボタン"/>
      </v-container>
    </v-card>
    <v-row>
      <v-col cols="1"><v-btn small color="primary" to="venus">前へ</v-btn></v-col>
    </v-row>
  </v-container>
</template>

<script>
import BtnClick from '../../components/planet/Earth/BtnClick.vue'
export default {
  name: "venus",
  components:{
    BtnClick
  },
  data(){
    return {
      propsData: 'コンポーネントに値が渡せました'
    }
  }
};
</script>