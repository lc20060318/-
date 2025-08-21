# Carousel

轮播图组件基础用法

```vue
<template>
  <div class="carousel-demo">
    <Carousel interval="3000">
      <!-- 轮播项1 -->
      <div class="carousel-slide">
        <img src="https://picsum.photos/800/400?random=1" alt="山脉风景" class="carousel-img">
      </div>
      
      <!-- 轮播项2 -->
      <div class="carousel-slide">
        <img src="https://picsum.photos/800/400?random=2" alt="海洋风景" class="carousel-img">
      </div>
      
      <!-- 轮播项3 -->
      <div class="carousel-slide">
        <img src="https://picsum.photos/800/400?random=3" alt="森林风景" class="carousel-img">
      </div>
    </Carousel>
  </div>
</template>

<script setup lang="ts">
import {Carousel} from 'Lc-UI';
</script>
```
<style>
/* 确保轮播图样式在Markdown环境中生效 */
.carousel-demo {
  margin: 20px auto;
  max-width: 800px;
}

/* 轮播项必须设置的样式（关键） */
.carousel-slide {
  width: 100%;
  height: 100%;
}

/* 轮播图片样式 */
.carousel-img {
  width: 100%;
  height: 100%;
  object-fit: cover; /* 保持图片比例并充满容器 */
  display: block; /* 去除图片底部间隙 */
}

/* 引入轮播组件的核心样式（确保在Markdown中生效） */
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
    


### Props

<API id="Carousel" type="props"></API>

### Slots

<API id="Carousel" type="slots"></API>