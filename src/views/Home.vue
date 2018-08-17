<template>
  <div class='home'>
    <el-tabs v-model='activeName'>
      <el-tab-pane label='Common Examples' name='first'>
        <CommonExamples :data='rasaNLUData'/>
      </el-tab-pane>
      <el-tab-pane label='Regex Features' name='second'>
        <RegexFeatures :data='rasaNLUData' />
      </el-tab-pane>
      <el-tab-pane label='Entity Synonyms' name='third'>
        <EntitySynonyms :data='rasaNLUData' />
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script lang='ts'>
import { Component, Vue, Provide } from 'vue-property-decorator';
import CommonExamples from '@/components/common-example/CommonExamples.vue';
import RegexFeatures from '@/components/RegexFeatures.vue';
import EntitySynonyms from '@/components/entity-synonym/EntitySynonyms.vue';
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

<style scoped lang='scss'>
.home {
  padding: 1rem;
}
</style>
