
const routes = [
  {
    path: '/',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/home.vue')
      },
      {
        path: 'contacts',
        component: () => import('pages/contacts.vue')
      },
      {
        path: 'reg',
        component: () => import('pages/reg.vue')
      }
    ]
  },
  {
    path: '/',
    component: () => import('layouts/CleanLayout.vue'),
    children: [
      { path: 'login', component: () => import('pages/login.vue') },
      { path: 'register', component: () => import('pages/register.vue') }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
