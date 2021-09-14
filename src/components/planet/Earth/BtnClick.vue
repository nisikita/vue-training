<template>
  <v-container>
    <v-btn color='primary'>表示内容を変更する</v-btn>
    <p>{{text}}</p>
  </v-container>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: true,
    }
  },
  data(){
    return {
      altText: 'ボタンがクリックされました　'
    }
  }
};
</script>