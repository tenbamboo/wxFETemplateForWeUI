
const router = [
  {
    path: '/qa/qaDetail',
    component: resolve => require(['@/components/qa/QaDetail'], resolve),
    name: '问卷详情',
    meta: {
      background: 'white',
      isShowBar: true,
      keepAlive: true
    }
  }
  // {
  //   path: '/meeting/meetingDetail',
  //   component: resolve => require(['@/components/meeting/MeetingDetail'], resolve),
  //   name: '患教会详情',
  //   meta: {
  //     background: 'white',
  //     isShowBar: false,
  //     keepAlive: true
  //   }
  // }

]
export default router
