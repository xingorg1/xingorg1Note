<template>
  <div class="xingorg1-container"></div>
</template>
<script>
// import L2Dwidget from 'live2d-widget/lib/L2Dwidget.min.js';
// import 'live2d-widget/lib/L2Dwidget.0.min.js';
export default {
  data() {
    return {};
  },
  mounted() {
    L2Dwidget.init({
      model: {
        jsonPath: "./tororo.model.json",
        scale: 1
      },
      display: {
        position: "right",
        width: 100,
        height: 200,
        hOffset: -20,
        vOffset: -20
      },
      mobile: {
        show: true,
        scale: 0.5
      },
      react: {
        opacityDefault: 1,
        opacityOnHover: 1
      }
    });
  }
};
</script>
