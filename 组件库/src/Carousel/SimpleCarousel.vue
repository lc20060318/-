<template>
  <div class="carousel">
    <!-- 图片容器 -->
    <div class="carousel-inner">
      <div 
        class="slides"
        :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
      >
        <!-- 插槽：用于插入轮播项 -->
        <slot />
      </div>
    </div>

    <!-- 左右切换按钮 -->
    <button
      class="prev-btn"
      aria-label="上一张"
      @click="prev"
    >
      ←
    </button>
    <button
      class="next-btn"
      aria-label="下一张"
      @click="next"
    >
      →
    </button>

    <!-- 指示器 -->
    <div class="indicators">
      <span 
        v-for="(item, index) in slideCount" 
        :key="index"
        :class="{ active: index === currentIndex }"
        :aria-label="`第${index + 1}张`"
        @click="goTo(index)"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, nextTick } from 'vue';
import { VNodeChild } from 'vue';
defineSlots<{
  /**
   * 插入图片
   * 
   */
  default:VNodeChild
}>();
const props = defineProps<{
   /**
   * 定义轮播的时间
   */
  interval?: number;
}>();


const currentIndex = ref(0); // 当前显示的索引
const slideCount = ref(0);   // 轮播项总数
const timer = ref<number | null>(null); // 自动播放计时器

// 计算实际使用的间隔时间
const autoPlayInterval = props.interval || 3000;

// 获取轮播项数量并开始自动播放
onMounted(() => {
  // 等待DOM渲染完成后获取轮播项数量
  nextTick(() => {
    const slides = document.querySelectorAll('.slides > *');
    slideCount.value = slides.length;
    startAutoPlay();
  });
});

// 组件卸载时清除计时器
onUnmounted(() => {
  if (timer.value) clearInterval(timer.value);
});

// 切换到上一张
const prev = () => {
  currentIndex.value = (currentIndex.value - 1 + slideCount.value) % slideCount.value;
  resetAutoPlay();
};

// 切换到下一张
const next = () => {
  currentIndex.value = (currentIndex.value + 1) % slideCount.value;
  resetAutoPlay();
};

// 跳转到指定索引
const goTo = (index: number) => {
  currentIndex.value = index;
  resetAutoPlay();
};


const startAutoPlay = () => {
  if (slideCount.value <= 1) return;  
  timer.value = window.setInterval(() => {
    next();
  }, autoPlayInterval);
};


const resetAutoPlay = () => {
  if (timer.value) {
    clearInterval(timer.value);
  }
  startAutoPlay();
};
</script>

<style scoped>
.carousel {
  position: relative;
  width: 100%;
  max-width: 800px; 
  margin: 0 auto;
  overflow: hidden;
  border-radius: 8px;
}


.carousel-inner {
  width: 100%;
  height: 400px; 
}


.slides {
  display: flex;
  height: 100%;
  transition: transform 0.5s ease; 
}


.slides > * {
  flex: 0 0 100%; 
  height: 100%;
}


.prev-btn, .next-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 40px;
  height: 40px;
  background-color: rgba(0, 0, 0, 0.3);
  color: white;
  border: none;
  font-size: 20px;
  cursor: pointer;
  z-index: 10;
  transition: background-color 0.3s;
}

.prev-btn { left: 10px; }
.next-btn { right: 10px; }

.prev-btn:hover, .next-btn:hover {
  background-color: rgba(0, 0, 0, 0.6);
}


.indicators {
  position: absolute;
  bottom: 15px;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  gap: 8px;
}

.indicators span {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.5);
  cursor: pointer;
  transition: all 0.3s;
}

.indicators span.active {
  background-color: white;
  width: 30px;
  border-radius: 5px;
}
</style>
