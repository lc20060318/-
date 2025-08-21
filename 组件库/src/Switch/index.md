# Switch

Switch组件基础用法

```vue
<template>
  <div class="switch-demo">
    <!-- 基础用法 -->
    <Switch v-model="basicSwitch" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import {Switch} from 'Lc-UI';

const basicSwitch = ref(false);
</script>
```
自定义开关时的颜色
```vue
<template>
  <div class="switch-demo">
    
    <!-- 自定义颜色 -->
    <Switch 
      v-model="colorSwitch" 
      activeColor="#13ce66" 
      inactiveColor="#ff4949" 
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import {Switch} from 'Lc-UI';

const colorSwitch = ref(true);
</script>
```
禁用按钮
```vue
<template>
  <div class="switch-demo">
    <Switch 
      v-model="disabledSwitch" 
      disabled 
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import {Switch} from 'Lc-UI';

const disabledSwitch = ref(false);
</script>
```
### Props

<API id="Switch" type="props"></API>