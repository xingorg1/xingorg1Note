<template>
  <div class="xingorg1-container">
    <button @click="count++">{{msg}}</button>
    {{count}}
    <p>源数据</p>
    <pre>
      {{ $page }}
    </pre>
  </div>
</template>
<script>
export default {
  data() {
    return {
      msg: '不要点我',
      count: 0
    }
  },
  mounted() {}
}
</script>