<template>
  <!-- 主题模板插件 -->
  <div class="theme-container xingorg1-layout">
    <header>
      <Content slot-key="header" />
    </header>
    <main>
      <Content />
    </main>
    <footer>
      <Content slot-key="footer" />
    </footer>
  </div>
</template>
  </div>
</template>
<script>
export default {
  data() {
    return {
      msg: 'layout'
    }
  },
  mounted() {}
}
</script>