<template>
  <div 
    class="switch"
    :class="{ 'is-checked': isChecked, 'is-disabled': isDisabled }"
    role="switch"
    :aria-checked="isChecked"
    :aria-disabled="isDisabled"
    :style="switchStyles"
    @click="toggle"
  >
    <span class="switch__track" />
    <span class="switch__thumb" />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{
  /**
   * 控制开关初始的状态
   */
  modelValue: boolean;
  /**
   * 是否禁用开关
   */
  disabled?: boolean;
  /**
   * 激活状态的颜色
   */
  activeColor?: string;
  /**
   * 非激活状态的颜色
   */
  inactiveColor?: string;
}>();

const emit = defineEmits<{
  (e: 'update:modelValue', value: boolean): void;
  (e: 'change', value: boolean): void;
}>();

const isChecked = computed(() => props.modelValue);
const isDisabled = computed(() => props.disabled || false);

const switchStyles = computed(() => ({
  '--active-color': props.activeColor || '#42b983',
  '--inactive-color': props.inactiveColor || '#e0e0e0'
}));

const toggle = () => {
  if (isDisabled.value) return;
  const newValue = !isChecked.value;
  emit('update:modelValue', newValue);
  emit('change', newValue);
};
</script>

<style scoped>
.switch {
  position: relative;
  display: inline-block;
  width: 50px;
  height: 24px;
  cursor: pointer;
  transition: opacity 0.2s;
}

.switch.is-disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.switch__track {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 12px;
  transition: background-color 0.3s ease;
}


.switch.is-checked .switch__track {
  background-color: var(--active-color);
}

.switch:not(.is-checked) .switch__track {
  background-color: var(--inactive-color);
}

.switch__thumb {
  position: absolute;
  top: 2px;
  left: 2px;
  width: 20px;
  height: 20px;
  background-color: white;
  border-radius: 50%;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease;
}

.switch.is-checked .switch__thumb {
  transform: translateX(26px);
}
</style>
    