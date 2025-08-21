<template>
  <!-- 遮罩层：全屏覆盖 -->
  <div 
    v-if="visible"
    class="dialog-mask"
  />

  <!-- 对话框主体：居中显示在整个窗口 -->
  <div 
    v-if="visible"
    class="dialog-wrapper"
  >
    <div class="dialog-content">
      <div class="dialog-header">
        <slot name="title">
          提示
        </slot>
        <button
          class="dialog-close"
          @click="onClose"
        />
      </div>
      <div class="dialog-body">
        <slot>这是一个全屏显示的对话框</slot>
      </div>
      <div class="dialog-footer">
        <button @click="onClose">
          关闭
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { VNodeChild } from 'vue';
defineSlots<{
  /**
   * 标题内容
   * 
   */
   title:VNodeChild,
   /**
   * 对话框内容
   * 
   */
   default:VNodeChild
}>();

const props = defineProps<{
  /**
   * 控制对话框的显示与隐藏
   */
  visible: boolean;
  
}>();


const emit = defineEmits<{
  // 关闭对话框事件
  (e: 'update:visible', value: boolean): void;
  
}>();

// 关闭对话框
const onClose = () => {
  emit("update:visible",false)
};


</script>

<style scoped>
/* 遮罩层 */
.dialog-mask {
  position: fixed; 
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 9998; /* 确保在内容之上，但低于对话框 */
}

/* 对话框容器*/
.dialog-wrapper {
  position: fixed; 
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999; /* 确保在遮罩层之上 */
  padding: 20px;
}

/* 对话框内容 */
.dialog-content {
  width: 100%;
  max-width: 500px;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
}

.dialog-header {
  padding: 16px;
  border-bottom: 1px solid #eee;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: bold;
}

.dialog-close {
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
  color: #999;
}

.dialog-body {
  padding: 16px;
}

.dialog-footer {
  padding: 16px;
  border-top: 1px solid #eee;
  text-align: right;
}

.dialog-footer button {
  padding: 6px 16px;
  background-color: #4096ff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
</style>
