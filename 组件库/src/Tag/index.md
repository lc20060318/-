# Tag
```
此组件主要实现四个功能
1.双击显示输入框 同时获得焦点
2.鼠标点击其他地方就还原为最初的状态
3.标签回显 双击后输入里默认是原来的数据
4.内容修改后 通过回车保存修改内容
```

```vue
<template>
  <Tag ></Tag>
</template>
<script setup>
import { ref } from 'vue';
import { Tag } from 'Lc-UI';
</script>
<style>

</style>
```
