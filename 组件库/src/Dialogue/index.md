# Dialogue

Dialogue组件基础用法

```vue
<template>
  <div>
    <Dialogue v-model:visible="visible" />
    <button @click="opendialogue">click me to open diagloue</button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import {Dialogue} from 'Lc-UI';
const visible = ref(false);
const opendialogue = () => {
    visible.value = true
    
}

</script>
```
自定义对话框内容与标题
```vue
<template>
  <div>
    <Dialogue v-model:visible="visible">
      <template #title>what a wonderful world</template>
      自定义对话框内容</Dialogue>
    <button @click="opendialogue">click me to open diagloue</button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import {Dialogue} from 'Lc-UI';
const visible = ref(false);
const opendialogue = () => {
    visible.value = true
    
}

</script>
```
### Props

<API id="Dialogue" type="props"></API>

### Slots

<API id="Dialogue" type="slots"></API>