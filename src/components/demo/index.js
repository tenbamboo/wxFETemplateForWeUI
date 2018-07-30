import ChildRouter from '@/components/demo/base/router'

export default {
  install: function (Vue, opt) {
    opt.router.addRoutes(ChildRouter)
  }
}
