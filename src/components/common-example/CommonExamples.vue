<template>
  <div class='common-examples'>
    <div class='buttons'>
      <el-button @click='onCommonExamplesNew'>Add</el-button>
      <el-button type='primary' @click='onCommonExamplesSave'>Save</el-button>
    </div>
    <el-form ref='form' :model='data'>
      <el-form-item v-for='(ce, i) in data.common_examples' :key='i'>
        <el-collapse v-model='activeName' accordion>
          <el-collapse-item :name='i'>
            <template slot='title'>
              <CommonExample :commonExamples='data.common_examples' :index='i' />
            </template>
            <Entities :commonExample='ce' />
          </el-collapse-item>
        </el-collapse>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang='ts'>
import { Component, Prop, Vue, Provide } from 'vue-property-decorator';
import { IRasaNLUData, ICommonExample } from '@/interfaces';
import API, { IGenericResult } from '@/api';
import CommonExample from '@/components/common-example/CommonExample.vue';
import Entities from '@/components/common-example/Entities.vue';

@Component({
  components: {
    CommonExample,
    Entities,
  },
})
export default class CommonExamples extends Vue {
  @Prop() private data?: IRasaNLUData;
  @Provide() private activeName = '';

  private onCommonExamplesSave() {
    if (!this.data) {
      return;
    }

    API.putCommonExamples(this.data.common_examples)
      .then((res: IGenericResult) => {
        if (res.status === 0) {
          this.$message(res.message);
        } else {
          this.$message.error(res.message);
        }
      });
  }

  private onCommonExamplesNew() {
    if (!this.data) {
      return;
    }

    this.data.common_examples.push({
      text: '',
      intent: '',
      entities: [],
    });
  }
}
</script>

<style scoped lang='scss'>
.buttons {
  margin: .5rem;
  text-align: right;
}
</style>
