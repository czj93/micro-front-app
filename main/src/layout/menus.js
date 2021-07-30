export default {
  'app1': [
    {
      path: '/',
      redirect: '/dashboard',
      children: [{
        path: 'dashboard',
        name: 'Dashboard',
        meta: { title: 'Dashboard', icon: 'dashboard' }
      }]
    },
    {
      path: '/list',
      meta: {
        title: '列表页',
        icon: 'table'
      }
    },
  ],
  'app2': [
    {
      path: '/',
      redirect: '/dashboard',
      children: [{
        path: 'dashboard',
        name: 'Dashboard',
        meta: { title: 'Dashboard', icon: 'dashboard' }
      }]
    },
    {
      path: '/list',
      meta: {
        title: '列表页',
        icon: 'table'
      }
    }
  ]
}
