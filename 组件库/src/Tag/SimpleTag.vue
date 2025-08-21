<template>
  <div class="tag-container">
    <!-- 非编辑状态：双击进入编辑 -->
    <div 
      v-if="!isEdit" 
      class="tag-view"
      @dblclick="handleDoubleClick"
    >
      {{ currentValue }}  
    </div>

  
    <input 
      v-else 
      ref="inputRef"
      v-model="tempValue"
      class="tag-input"
      placeholder="请输入内容"
      @blur="handleBlur"
      @keyup.enter="handleSave"
    >
  </div>
</template>

<script setup lang="ts">
import { ref, nextTick } from 'vue';

const isEdit = ref(false);
const inputRef = ref<HTMLInputElement | null>(null);
const currentValue = ref("点击编辑"); // 用于显示的当前值
const tempValue = ref(''); // 编辑时的临时值


// 双击进入编辑状态
const handleDoubleClick = () => {
  isEdit.value = true;
  // 编辑前同步当前值到临时变量
  tempValue.value = currentValue.value;
  
  // 等待DOM更新后聚焦输入框
  nextTick(() => {
    inputRef.value?.focus();
  });
};

// 失去焦点时退出编辑状态
const handleBlur = () => {
  isEdit.value = false;
};

// 回车保存
const handleSave = () => {
  // 只有当值发生变化时才触发更新
  if (tempValue.value !== currentValue.value) {
    currentValue.value = tempValue.value; // 同步显示值
  }
  isEdit.value = false;
};
</script>

<style scoped>
.tag-container {
  display: inline-block;
}


.tag-view {
  padding: 8px 16px; 
  background-color: #f0f0f0;
  border-radius: 6px;
  cursor: default;
  user-select: none;
  font-size: 14px;
  transition: background-color 0.2s;
}

.tag-view:hover {
  background-color: #e0e0e0;
}

/* 编辑状态样式 */
.tag-input {
  padding: 8px 16px; 
  border: 1px solid #4096ff;
  border-radius: 6px;
  outline: none;
  font-size: 14px; 
  width: auto;
  min-width: 100px; 
}
</style>
