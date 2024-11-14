<template>
    <div class="parent" style="text-align: center;">
        <h1>这是 {{ boxName }} 的页面</h1>
        <button class="op-btn" @click = "goBack"> 返回</button>
    </div>
</template>

<script setup>
import { useRouter, useRoute } from 'vue-router';

const route = useRoute();
const router = useRouter();

const boxName = `Box ${route.params.id}`;
const goBack =()=> router.back();

</script>