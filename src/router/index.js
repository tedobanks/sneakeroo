import { createRouter, createWebHistory } from "vue-router"

const Homeview = () => import("../views/Homeview.vue")
const Aboutview = () => import("../views/Aboutview.vue")
const Quizview = () => import("../views/Quizview.vue")
const Notfoundview = () => import("../views/404view.vue")



const router = createRouter(
    {
        history: createWebHistory(import.meta.env.BASE_URL),
        routes: [
            {
                path: "/",
                name: "home",
                component: Homeview
            },
            {
                path: "/about",
                name: "about",
                component: Aboutview
            },
            {
                path: "/quiz/:id",
                name: "quiz",
                component: Quizview
            },
            {
                path: "/:catchall(.*)*",
                name: "404",
                component: Notfoundview
            },
        ]
    }
)

export default router