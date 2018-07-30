<template>
  <div class="indexContainer ">
    

    
  </div>
</template>

<script>
import 'swiper/dist/css/swiper.css'

import { swiper, swiperSlide } from 'vue-awesome-swiper'

// import Cain from '@cain/'
// import weui from 'weui'
export default {
  data () {
    return {
      infoData: {
        date: '2018-10-10',
        noticeList: [
          // {
          //   title: 'xxx护士，会与您电话请假常打开了家里肯定是房价'
          // },
          // {
          //   title: 'xxx护士，会与您电话请假常打开了家里肯定是房价'
          // }
        ]
      },
      bannerList: [
        // bannerList数据
        'static/image/banner/banner_1.jpg',
        'static/image/banner/banner_2.jpg',
        'static/image/banner/banner_3.jpg',
        'static/image/banner/banner_4.jpg',
        'static/image/banner/banner_5.jpg'
      ],
      swiperOption: {
        // swipe 数据
        autoplay: {
          delay: 3000
        },
        pagination: {
          el: '.swiper-pagination'
        }
      }
    }
  },
  created () {},
  mounted () {},
  methods: {
    clickMe () {
      // weui.alert('123123')
      this.$router.push('/user/register')
    },
    callToast () {
      this.$cain.toast.error('Test')
    }
  },
  components: {
    swiper,
    swiperSlide
  }
}
</script>

<style     lang="scss">
.indexContainer {
  padding-bottom:$navigationHeight;
  .swiper {
    img {
      width: 100%;
      height: 230px;
    }
  }
  .swiper-pagination-bullet-active {
    background: $mainColor;
  }
  .swiper-pagination-bullet {
    width: 16px;
    height: 16px;
  }
  .dateArea {
    margin-top: -20px;
    color: #000;
    background-color: #fff;
    font-size: $fs26;
    padding: 0 20px;
    p {
      padding: 20px;
      border-bottom: 1px solid #d9d9d9;
    }
  }
  .noticeListWrap {
    .noData {
      color: #d9d9d9;
      padding: 44px;
      text-align: center;
      font-size: $fs34;
    }
    .noticeList {
      background-color: #fff;
      padding: 0 20px;
      max-height: 300px;
      overflow: auto;
      li {
        font-size: $fs34;
        display: flex;
        position: relative;
        padding: 20px 40px 20px 10px;
        margin-top: -2px;
        border-top: 1px solid #d9d9d9;
        border-bottom: 1px solid #d9d9d9;
        p {
          flex: 1;
          text-overflow: ellipsis;
          display: -webkit-box;
          overflow: hidden;
          line-height: 50px;
          -webkit-line-clamp: 1;
          /* autoprefixer: off */
          -webkit-box-orient: vertical;
          /* autoprefixer: on */
        }
        span {
          margin-right: 20px;
          height: 44px;
          color: #fff;
          padding: 4px 14px;
          border-radius: 20px;
          background-color: $mainColor;
          font-size: $fs28;
        }
        &::after {
          content: " ";
          display: inline-block;
          height: 12px;
          width: 12px;
          border-width: 2px 2px 0 0;
          border-color: $mainColor;
          border-style: solid;
          transform: matrix(0.71, 0.71, -0.71, 0.71, 0, 0);
          position: absolute;
          top: 50%;
          right: 5px;
          margin-top: -4px;
        }
      }
    }
  }
  .gridListWrap {
    .gridList {
      display: flex;
      .grid {
        // height: 368px;
        padding: 80px 0;
        flex: 1;
        margin-top: 10px;
        background-color: #fff;
        text-align: center;
        img {
          width: 80px;
          height: 80px;
          margin-bottom:15px;
        }
        .title {
          font-size: $fs40;
          color: $mainColor;
          padding-bottom: 10px;
        }
        .desc{
          font-size: $fs34;
          color:#000;
          font{
            font-weight: 900;
          }
        }
      }
      .noArea{
         background-color:inherit;
      }
      & > .grid:first-child {
        margin-right: 10px;
      }
    }
  }
}
</style>
