<template>
  <!-- 结构示例，指令基础用法同vue -->
  <div class="minos-system-setting" v-if="hideHeader">
    <h3>结构示例</h3>
    <span>{{selfKey1}}</span>
    <ul>
      <li :key="item" v-for="item in fatherKey">{{item}}</li>
    </ul>
    <button @click="addText">追加文字</button>
    <AnotherVue :class="['default-class', selfKey1.length > 10 ? 'one' : 'two']" />
  </div>
</template>

<script lang='ts'>
import { Component, Vue, Prop, Watch } from 'vue-property-decorator'
import { Route } from 'vue-router'
import AnotherVue from '@/components/AnotherVue.vue'
@Component({
  // 组件注册
  components: {
    AnotherVue
    // 'another-vue': AnotherVue,
  },
  // 过滤器
  filters: {
    filterFn1() {}
  },
  props: {
    hideHeader: {
      type: Boolean,
      required: false,
      default: false // 默认属性的默认值
    }
  }
})
export default class ComponentName extends Vue {
  @Prop({
    type: Boolean,
    required: false,
    default: false // 默认属性的默认值
  })
  private hideHeader!: boolean | undefined
  @Prop() private fatherKey: string[] // 其他没有默认值的传值
  selfKey1: string = '自己的一个变量'
  // 生命周期
  created() {}
  mounted() {}
  // 计算属性
  get computedKey() {
    return this.selfKey1.length
  }
  // 监听器
  @Watch('computedKey')
  getcomputedKey(newVal) {
    console.log(newVal)
  }
  // 导航守卫函数
  private beforeRouteEnter(to: Route, from: Route, next: () => void): void {
    console.log('beforeRouteEnter', to, from, next)
    next()
  }
  // 方法
  addText() {
    this.selfKey1 += '，追加文字！'
  }
}
</script>
<style lang='scss' scoped>
@import '@/assets/styles/demo.scss';
</style>
