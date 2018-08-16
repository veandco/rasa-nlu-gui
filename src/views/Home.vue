<template>
  <div class='home'>
    <el-tabs v-model='activeName'>
      <el-tab-pane label='Common Examples' name='first'><CommonExamples :data='rasaNLUData.common_examples'/></el-tab-pane>
      <el-tab-pane label='Regex Features' name='second'><RegexFeatures /></el-tab-pane>
      <el-tab-pane label='Entity Synonyms' name='third'><EntitySynonyms /></el-tab-pane>
    </el-tabs>
  </div>
</template>

<script lang='ts'>
import { Component, Vue, Provide } from 'vue-property-decorator';
import CommonExamples from '@/components/CommonExamples.vue';
import RegexFeatures from '@/components/RegexFeatures.vue';
import EntitySynonyms from '@/components/EntitySynonyms.vue';
import API from '@/api';
import {
  IRasaNLUDataResult,
  IRasaNLUData,
ICommonExamplesResult,
} from '@/interfaces';

@Component({
  components: {
    CommonExamples,
    RegexFeatures,
    EntitySynonyms,
  },
})
export default class Home extends Vue {
  @Provide()
  private activeName = 'first';

  @Provide()
  private rasaNLUData: IRasaNLUData = {
    common_examples: [],
    regex_features: [],
    entity_synonyms: [],
  };

  private created() {
    API.fetchRasaNLUData()
      .then((res: IRasaNLUDataResult) => {
        if (res.data) {
          this.rasaNLUData = res.data;
        }
      });
  }
}
</script>
