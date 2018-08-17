<template>
  <div class='entity-synonyms'>
    <div class='buttons'>
      <el-button @click='onEntitySynonymsNew'>Add</el-button>
      <el-button type='primary' @click='onEntitySynonymsSave'>Save</el-button>
    </div>
    <el-form ref='form' :model='data'>
      <el-form-item v-for='(es, i) in data.entity_synonyms' :key='i'>
        <el-collapse v-model='activeName' accordion>
          <el-collapse-item :name='i'>
            <template slot='title'>
              <input v-model='es.value' />
              <el-button class='btn-del' type='danger' icon='el-icon-delete' @click='onEntitySynonymsDelete(i)' size='small'></el-button>
            </template>
            <EntitySynonym :entitySynonyms='data.entity_synonyms' :index='i' />
          </el-collapse-item>
        </el-collapse>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang='ts'>
import { Component, Prop, Provide, Vue } from 'vue-property-decorator';
import { IEntitySynonym, IRasaNLUData } from '@/interfaces';
import EntitySynonym from '@/components/entity-synonym/EntitySynonym.vue';
import API, { IGenericResult } from '@/api';

@Component({
  components: {
    EntitySynonym,
  },
})
export default class EntitySynonyms extends Vue {
  @Prop() private data!: IRasaNLUData;
  @Provide() private activeName = '';

  private onEntitySynonymsNew() {
    if (!this.data) {
      return;
    }

    this.data.entity_synonyms.push({
      value: '',
      synonyms: [],
    });
  }

  private onEntitySynonymsDelete(i: number) {
    if (!this.data) {
      return;
    }

    this.data.entity_synonyms.splice(i, 1);
  }

  private onEntitySynonymsSave() {
    if (!this.data) {
      return;
    }

    API.putEntitySynonyms(this.data.entity_synonyms)
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

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped lang='scss'>
.buttons {
  margin: .5rem;
  text-align: right;
}

.btn-del {
  margin-left: 1rem;
}
</style>
