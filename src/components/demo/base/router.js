
const router = [
  {
    path: '/demo/index',
    component: resolve => require(['@/components/demo/indexVue'], resolve),
    name: 'DemeIndex',
    meta: {
      // isShowBar: true,
      // keepAlive: true
    }
  },
  {
    path: '/demo/loading',
    component: resolve => require(['@/components/demo/loading'], resolve),
    name: 'Loading',
    meta: {
      // isShowBar: true,
      // keepAlive: true
    }
  },
  {
    path: '/demo/callPhone',
    component: resolve => require(['@/components/demo/callPhone'], resolve),
    name: 'callPhone',
    meta: {
      // isShowBar: true,
      // keepAlive: true
    }
  },
  {
    path: '/demo/message',
    component: resolve => require(['@/components/demo/message'], resolve),
    name: 'message',
    meta: {
      // isShowBar: true,
      // keepAlive: true
    }
  },
  {
    path: '/demo/toast',
    component: resolve => require(['@/components/demo/toast'], resolve),
    name: 'toast',
    meta: {
      // isShowBar: true,
      // keepAlive: true
    }
  },
  {
    path: '/demo/singlePicker',
    component: resolve => require(['@/components/demo/singlePicker'], resolve),
    name: 'singlePicker',
    meta: {
      // isShowBar: true,
      // keepAlive: true
    }
  },
  {
    path: '/demo/datePicker',
    component: resolve => require(['@/components/demo/datePicker'], resolve),
    name: 'datePicker',
    meta: {
      // isShowBar: true,
      // keepAlive: true
    }
  },
  {
    path: '/demo/muiltPicker',
    component: resolve => require(['@/components/demo/muiltPicker'], resolve),
    name: 'muiltPicker',
    meta: {
      // isShowBar: true,
      // keepAlive: true
    }
  }
]
export default router
