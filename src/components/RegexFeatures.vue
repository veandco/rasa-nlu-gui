<template>
  <div class='regex-features'>
    <div class='buttons'>
      <el-button @click='onRegexFeaturesNew'>Add</el-button>
      <el-button type='primary' @click='onRegexFeaturesSave'>Save</el-button>
    </div>
    <el-form ref='form' :model='data'>
      <el-form-item v-for='(rf, i) in data.regex_features' :key='i'>
        <el-row :gutter='20'>
          <el-col :span='3'>
            <el-input v-model='rf.name' placeholder='name' />
          </el-col>
          <el-col :span='3'>
            <el-input v-model='rf.pattern' placeholder='pattern' />
          </el-col>
          <el-col :span='3'>
            <el-button type='danger' icon='el-icon-delete' @click='onRegexFeaturesDelete(i)'></el-button>
          </el-col>
        </el-row>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang='ts'>
import { Component, Prop, Vue } from 'vue-property-decorator';
import { IRasaNLUData } from '@/interfaces';
import API, { IGenericResult } from '@/api';

@Component
export default class RegexFeatures extends Vue {
  @Prop() private data!: IRasaNLUData;

  private onRegexFeaturesNew() {
    if (!this.data) {
      return;
    }

    this.data.regex_features.push({
      name: '',
      pattern: '',
    });
  }

  private onRegexFeaturesDelete(i: number) {
    if (!this.data) {
      return;
    }

    this.data.regex_features.splice(i, 1);
  }

  private onRegexFeaturesSave() {
    if (!this.data) {
      return;
    }

    API.putRegexFeatures(this.data.regex_features)
      .then((res: IGenericResult) => {
        if (res.status === 0) {
          this.$message(res.message);
        } else {
          this.$message.error(res.message);
        }
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
