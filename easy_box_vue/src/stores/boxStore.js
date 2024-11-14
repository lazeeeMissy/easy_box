import { defineStore } from "pinia";
import {ref} from 'vue';

export const useBoxStore = defineStore('boxStore', ()=>{
    const count = ref(0);
    const boxes = ref([]);
    function addBox(){
        count.value++;

        boxes.value.push({
            id:count.value, name:`Box ${count.value}`
        })
    }
    function deleteBox(){
        if(count.value >0){
            count.value--;
            boxes.value.pop();
        }
  
    }
    return {count, boxes, addBox, deleteBox}},
    {
        persist:true,//持久化存储，刷新页面保留boxes
});