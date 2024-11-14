import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
    history: createWebHistory(),
    routes:[
        {
            path:"/",
            name:"mainPage",
            component:()=>import("../components/mainPage.vue"),
        },
       { path:"/box/:id", // 传递id，让页面有差异
        name:"box",
        component:()=>import("../components/boxPage.vue"),
       }

    ]
});
export default router;