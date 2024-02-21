// import { setupLayouts } from 'virtual:generated-layouts'
import { createRouter, createWebHistory } from 'vue-router'
import AlunoRoutes from './aluno'

// import routes from '~pages'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    AlunoRoutes,
 
  ],
  scrollBehavior() {
    return { top: 0 }
  },
})
export default router
