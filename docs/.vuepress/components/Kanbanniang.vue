<template>
  <div id="live2d-widget">
    <h1>看板娘</h1>
  </div>
  <!-- <script src="//cdn.jsdelivr.net/npm/live2d-widget@3.0.4/lib/L2Dwidget.min.js"></script> -->
<!-- // <script src="//cdn.jsdelivr.net/npm/live2d-widget@3.0.4/lib/L2Dwidget.min.js"></script> -->
</template>
<script type="text/javascript">
// import * as L2Dwidget from "live2d-widget/lib/L2Dwidget.min.js";
// import { L2Dwidget }  from "live2d-widget/lib/L2Dwidget.min.js";
// import 'hexo-helper-live2d/index.js'
// require('hexo-helper-live2d/index.js')
// import { L2Dwidget } from "live2d-widget/src/index.js";
console.log(L2Dwidget);
export default {
  created() {
    setTimeout(() => {
      window.L2Dwidget.init({
        pluginRootPath: "static/live2dw/",
        pluginJsPath: "lib/",
        pluginModelPath: "live2d-widget-model-koharu/assets/",
        tagMode: false,
        debug: false,
        model: {
          jsonPath:
            "/static/live2dw/live2d-widget-model-      koharu/assets/koharu.model.json"
        },
        display: { position: "left", width: 150, height: 300 },
        mobile: { show: true },
        log: false
      });
    }, 1000);
  },
  mounted() {
    // L2Dwidget.init({
    //   react: {
    //     opacityDefault: 0.7,
    //     opacityOnHover: 1
    //   }
    // });
  }
};
</script>
