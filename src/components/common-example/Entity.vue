<template>
  <div class='entity'>
    <el-row>
      <el-col :span='20'>
        <el-form ref='form' :model='entities.entity' label-width='120px'>
          <el-row :gutter='20'>
            <el-col :span='3'>
              <el-input class='input' v-model='entities[index].entity' placeholder='name' size='small'></el-input>
            </el-col>
            <el-col :span='3'>
              <el-input class='input' v-model='entities[index].value' placeholder='value' size='small'></el-input>
            </el-col>
            <el-col :span='3'>
              <el-input class='input' v-model='entities[index].start' placeholder='start' size='small'></el-input>
            </el-col>
            <el-col :span='3'>
              <el-input class='input' v-model='entities[index].end' placeholder='end' size='small'></el-input>
            </el-col>
            <el-col :span='3'>
              <el-button type='danger' icon='el-icon-delete' size='small' @click='onDelete'></el-button>
            </el-col>
          </el-row>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>

<script lang='ts'>
import { Component, Prop, Vue, Provide } from 'vue-property-decorator';
import { ICommonExample, IEntity } from '@/interfaces';

@Component
export default class Entity extends Vue {
  @Prop() private entities!: IEntity[];
  @Prop() private index!: number;

  private onDelete() {
    this.entities.splice(this.index, 1);
  }
}

</script>

<style scoped lang='scss'>
.entity {
  margin: .5rem;
}

.entity .title {
  margin-left: 1rem;
}
</style>