<template>
  <el-row :gutter='20'>
    <el-col :span='3'>
      <el-input placeholder='intent' v-model='commonExamples[index].intent'></el-input>
    </el-col>
    <el-col :span='9'>
      <el-input class='intent-text' placeholder='text' v-model='commonExamples[index].text'></el-input>
    </el-col>
    <el-col class='buttons' :span='9'>
      <el-button type='danger' icon='el-icon-delete' size='mini' @click='onCommonExampleDelete'></el-button>
    </el-col>
  </el-row>
</template>

<script lang='ts'>
import { Component, Prop, Vue, Provide } from 'vue-property-decorator';
import { ICommonExample } from '@/interfaces';

@Component
export default class CommonExample extends Vue {
  @Prop() private commonExamples!: ICommonExample[];
  @Prop() private index!: number;

  private onCommonExampleDelete() {
    this.commonExamples.splice(this.index, 1);
  }
}

</script>

<style scoped lang='scss'>
.buttons {
  text-align: right;
}
</style>