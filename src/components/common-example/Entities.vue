<template>
  <div class='entities'>
    <Entity :entities='commonExample.entities' :index='i' v-for='(entity, i) in commonExample.entities' :key='i' />
    <el-button class='btn-new' icon='el-icon-plus' size='small' @click='onEntityNew'></el-button>
  </div>
</template>

<script lang='ts'>
import { Component, Prop, Vue, Provide } from 'vue-property-decorator';
import { ICommonExample } from '@/interfaces';
import Entity from '@/components/common-example/Entity.vue';

@Component({
  components: {
    Entity,
  },
})
export default class Entities extends Vue {
  @Prop() private commonExample!: ICommonExample;

  private onEntityNew() {
    this.commonExample.entities.push({
      entity: '',
      value: '',
      start: 0,
      end: 0,
    });
  }
}

</script>

<style scoped lang='scss'>
.entities {
  background: #F7F7F7;
  padding: .5rem;
}

.btn-new {
  margin-left: .5rem;
}
</style>
