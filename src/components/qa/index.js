import ChildRouter from '@/components/qa/base/router'

export default {
  install: function (Vue, opt) {
    opt.router.addRoutes(ChildRouter)

    // event
    // updateUserInfoEvent 更新之后触发
  }
}
