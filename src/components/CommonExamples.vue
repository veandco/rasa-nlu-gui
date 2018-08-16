<template>
  <div class='common-examples'>
    <p v-for='(example, i) in data' :key='i'>{{ example.intent + ' ' + i }}</p>
  </div>
</template>

<script lang='ts'>
import { Component, Prop, Vue } from 'vue-property-decorator';
import { ICommonExample } from '@/interfaces';

@Component
export default class HelloWorld extends Vue {
  @Prop() private data?: ICommonExample[];
}
</script>

<style scoped lang='scss'>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
