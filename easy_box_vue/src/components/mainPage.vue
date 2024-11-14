<template>
  <div class="parent">
    <div class="buttons-container">
      <button class="op-btn" @click="addBox">加号按钮</button>
      <button class="op-btn" @click="deleteBox">减号按钮</button>
    </div>
    <div class="child-boxes-container" >
        <button  class="child-box"
          v-for = "box in boxes"
          :key = "box.id"
          @click="navigateBox(box.id)">
        {{ box.name }}
        </button>
    </div>
  </div>
</template>

<script setup>
import { useBoxStore } from '@/stores/boxStore';
import { useRouter } from 'vue-router';

const router = useRouter();
const boxStore = useBoxStore();
const boxes = boxStore.boxes;

const addBox = ()=>  boxStore.addBox();
const deleteBox = ()=> boxStore.deleteBox();
const navigateBox = (id) =>{
  router.push(`/box/${id}`);
  console.log(id);
} 

</script>

<style lang="scss">

</style>
