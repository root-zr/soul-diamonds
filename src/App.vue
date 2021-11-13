<template>
  <div id="app">
    <top></top>
    <navigation-bar></navigation-bar>
    <!--缓存，第二次进入页面不会执行初始化与加载-->
    <keep-alive>
      <router-view></router-view>
    </keep-alive>

    <footer-view></footer-view>
  </div>
</template>

<script>
  // import Top from "./components/common/TopPartIntro";
  import NavigationBar from "./components/common/NavigationBar";
  import FooterView from "./components/common/Footer";  // 加上view防止和html原始标签footer冲突

  export default {
    name: 'app',
    components: {
      // Top,
      NavigationBar,
      FooterView,
    },
    data() {
      return {
        start: new Date(),  // date and time
      }
    },
    created() {

    },
    methods: {},
    mounted() {
      //在页面刷新时将信息保存到sessionStorage里
      window.addEventListener("beforeunload", () => {
        let timeDelta = (new Date().getTime() - this.start.getTime()) / 1000 / 3600  // in hours
        // getMonth: [0, 11], getHours, getDate -> Asia/Shanghai timezone
        let date = this.start.getFullYear() + '-' + (this.start.getMonth() + 1) + '-' + this.start.getDate()
        let url = ''
        if (process.env.NODE_ENV !== 'production') {
          url = devBaseURL + '/statistics/'
        } else {
          url = proBaseURL + '/statistics/'
        }
        var data = {
          'view_date': date,
          'delta': timeDelta
        }
        const formData = new FormData();
        Object.keys(data).forEach((key) => {
          let value = data[key];
          if (typeof value !== 'string') {
            // formData只能append string 或 Blob
            value = JSON.stringify(value);
          }
          formData.append(key, value);
        });
        navigator.sendBeacon(url, formData);
      });
    }
  }
</script>

<style>
  @import "assets/css/base.css";

  #app {
    margin: 0 auto;
  }
</style>

