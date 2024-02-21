const AlunoRoutes = {
    path: '/',
    component: () => import('@/views/aluno/layouts/AlunoLayout.vue'),
    children: [
        {
            path: '/:pathMatch(.*)*',
            meta: {
                header: {status:'hello', text: 'Marcelo Medeiros'}
            },
            component: () => import('@/pages/NotFound.vue')
        },
        {
            name: 'Inicio',
            path: '/',
            meta: {
                header: {status:'hello', text: 'Marcelo Medeiros'}
            },
            component: () => import('@/views/aluno/pages/gamification/Ciencias.vue')
        },
        {
            name: 'Gamification',
            path: '/gamification',
            meta: {
               header: {status:'hello', text: 'Marcelo Medeiros'}
            },
            component: () => import('@/views/aluno/pages/gamification/Dashboard.vue')
        },
        
    ]
};

export default AlunoRoutes;
