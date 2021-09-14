<template>
  <v-container>
    <h1>最終問題</h1>
    <h2>次のページの家計簿アプリケーションを実装せよ</h2>
    <p>次のページに家計簿アプリの雛形が表示される<br/>これまでの知識を使って実装をせよ</p>
    
    <h3>仕様</h3>
    <p>家計簿のCRUDシステム（もどき）を作成せよ。データの一覧機能は実装済みのため以下の順に機能を実装せよ
    <br/>データベースがないのでもどきです。ごめんなさい(人ω&lt;`;)</p>
    <ol>
      <li>詳細（account-book/read）</li>
      <li>登録（account-book/create）</li>
      <li>編集（account-book/edit）</li>
      <li>削除</li>
    </ol>
    <p>上記の4つの機能が実装できたら、「使用状況」「残高」の編集機能を実装せよ</p>
    <p>詳細、登録、編集機能はそれぞれ別々のページとして新規ページとして実装せよ。ページの形式は任せる。
    <br/>また、共通化できる部分はコンポーネント化すること。
    <br/>※新規実装ページのリンク設定は行っていない。時間が経てば説明するが、このアプリ内にヒントは隠されているので探してみること。</p>
    <v-row>
      <v-col cols='6'><p class='mt-2 text-h6'>無茶苦茶なお題ですけど頑張ってくださーい。<span class="font-weight-black">Let's Go →</span></p></v-col>
      <v-col cols='3'><v-btn color='primary' to='/account-book/top' block large>問題へ</v-btn></v-col>
    </v-row>
  </v-container>  
</template>

