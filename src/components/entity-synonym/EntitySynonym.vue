<template>
  <div class='entity-synonym'>
    <div class='synonym' v-for='(synonym, i) in entitySynonyms[index].synonyms' :key='i'>
      <el-input v-model='entitySynonyms[index].synonyms[i]' />
      <el-button type='danger' icon='el-icon-delete' size='small' @click='onEntitySynonymDelete(i)'></el-button>
    </div>
    <el-button class='btn-new' icon='el-icon-plus' size='small' @click='onEntitySynonymNew'></el-button>
  </div>
</template>

<script lang='ts'>
import { Component, Prop, Vue, Provide } from 'vue-property-decorator';
import { IEntitySynonym } from '@/interfaces';

@Component
export default class Entities extends Vue {
  @Prop() private entitySynonyms!: IEntitySynonym[];
  @Prop() private index!: number;

    private onEntitySynonymNew() {
        this.entitySynonyms[this.index].synonyms.push('');
    }

    private onEntitySynonymDelete(i: number) {
        this.entitySynonyms[this.index].synonyms.splice(i, 1);
    }
}

</script>

<style scoped lang='scss'>
.entity-synonym {
    background: #F7F7F7;
    padding: .5rem;
}

.synonym {
    margin: .5rem;
}

.btn-new {
    margin-left: .5rem;
}
</style>