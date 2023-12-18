<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

const modules = [Pagination];

const activeContentNav = ref(1);
const contentNav = [
  {
    label: '情况概述',
    value: 1,
  },
  {
    label: '研究布局',
    value: 2,
  },
  {
    label: '组织结构',
    value: 3,
  },
  {
    label: '总体目标',
    value: 4,
  },
  {
    label: '各院分布',
    value: 5,
  },
];

const activeFooterNav = ref(1);
const footerNav = [
  {
    label: '中心简介',
    value: 1,
  },
  {
    label: '研发部',
    value: 2,
  },
  {
    label: '实验中心',
    value: 3,
  },
  {
    label: '艺术展厅',
    value: 4,
  },
  {
    label: '会议区',
    value: 5,
  },
];

onMounted(() => {
  // console.log(anime);
});
</script>

<template>
  <div class="home-page">
    <div class="header">
      <img src="../../assets/logo.png" class="logo" alt="" />
    </div>
    <div class="content">
      <div class="content-left">
        <img class="map" src="../../assets/map.png" alt="" />
      </div>
      <div class="content-right">
        <div class="content-right-bar">
          <div class="content-right-bar-title">Introduction | 中心简介</div>
          <img class="arrow-left" src="../../assets/arrow-left.png" alt="" />
        </div>

        <div id="new" class="animate__animated animate__fadeIn">
          <swiper
            :pagination="{
              clickable: true,
            }"
            :modules="modules"
          >
            <swiper-slide>
              <img src="../../assets/banner/news1.png" alt="" />
            </swiper-slide>
            <swiper-slide
              ><img src="../../assets/banner/news1.png" alt=""
            /></swiper-slide>
            <swiper-slide
              ><img src="../../assets/banner/news1.png" alt=""
            /></swiper-slide>
          </swiper>
        </div>

        <div class="news-text">
          <div>
            为建设具有全国影响力的科技创新中心，大力实施国家“脑计划”战略，并落实重庆市政府工作为建设具有全国影响力的科技创新中心，报告精神，重庆南岸区、重庆经开区于2022年启动建立重庆脑与智能科学中心(简称重庆脑中心)。
          </div>
          <div>
            重庆脑中心坐落在广阳湾智创生态城迎龙创新港，毗邻南山风景区和长江上游江心绿岛一广阳岛具有独特的生态自然景观和资源。一期规划近5万平方米实验载体，下辖“六院多中心”，到2035年建成实验室50个，集聚脑与智能领域高层次人才300名，争创觉醒睡眠与认知全国重点实验室。
          </div>
          <div>
            重庆脑中心立足“四个面向”，聚焦觉醒和认知机理等基础研究，以此推动探索老年痴呆、卒中颤痛等重大疾病发病机理和防治策略，建立生物脑启发的人工智能技术。中心坚持十年一剑、集智攻关，围绕上述科学技术目标，将基础研究、应用基础研究、应用研究、成果转化、产业发展、国际交流、科学普及等多方面全链条融合，力争打造聚集“解读脑、康复脑、调控脑和模拟脑”为一体的综合性一流科学中心。
          </div>
        </div>

        <div class="content-nav">
          <div
            v-for="item in contentNav"
            :key="item.value"
            class="content-nav-item"
            :class="{
              'content-nav-item-active': activeContentNav === item.value,
            }"
            @click="activeContentNav = item.value"
          >
            {{ item.label }}
          </div>
        </div>
      </div>
    </div>
    <div class="footer">
      <div class="footer-nav">
        <div
          v-for="item in footerNav"
          :key="item.value"
          class="footer-nav-item"
          :class="{
            'footer-nav-item-active': activeFooterNav === item.value,
          }"
          @click="activeFooterNav = item.value"
        >
          {{ item.label }}
        </div>
        <span class="footer-nav-item-seperator">|</span>
        <div class="footer-nav-item">
          <img src="../../assets/icon/search.png" alt="" />
          搜索
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.home-page {
  width: 100%;
  height: 100%;
  background: url('../../assets/bg.png') no-repeat;
  background-size: 100% 100%;
}
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 260px;
  background: url('../../assets/header-bg.png') no-repeat;
  background-size: 100% 100%;
  z-index: 999;
}
.logo {
  display: block;
  width: 870px;
  height: 141px;
  margin: 50px 0 0 132px;
}
.footer {
  position: fixed;
  right: 0;
  bottom: 0;
  width: 2610px;
  height: 172px;
  background: url('../../assets/footer-bg.png') no-repeat;
  background-size: 100% 100%;
  padding-left: 252px;
}
.footer-nav {
  display: flex;
  align-items: center;
  height: 100%;
}
.footer-nav-item {
  color: #fff;
  font-size: 59px;
  padding: 16px 38px;
  cursor: pointer;
  font-weight: bold;
  display: flex;
  align-items: center;

  transform: perspective(1px) translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  transition-duration: 0.3s;
  transition-property: border-radius;
}
.footer-nav-item-seperator {
  margin: 0 52px;
  font-size: 62px;
  color: #fff;
}
.footer-nav-item img {
  width: 54px;
  height: 54px;
  margin-right: 33px;
}
.footer-nav-item-active {
  border-radius: 65px;
  background-color: #fff;
  color: #000;
}
.footer-nav-item + .footer-nav-item {
  margin-left: 77px;
}
.content {
  display: flex;
}
.content-left {
  position: relative;
  width: 1140px;
  height: calc(100vh - 89px - 93px);
  border-radius: 10px;
  /* background: url('../../assets/map-bg.png') no-repeat; */
  /* background-size: cover; */
  margin-left: 20px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  margin-left: 105px;
  margin-top: 89px;
  margin-right: 108px;
}
.map {
  position: absolute;
  display: block;
  width: 1440px;
  height: 77%;
  max-width: unset;
  top: 250px;
  left: 50%;
  transform: translateX(-49%);
}
.content-right {
  width: 2050px;
  height: calc(100vh - 246px - 275px);
  border-radius: 10px;
  /* background: url('../../assets/news-bg.png') no-repeat; */
  /* background-size: 100% 100%; */
  position: relative;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  margin-top: 246px;
  padding: 0 210px 0 138px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.content-right-bar {
  position: fixed;
  width: 2543px;
  height: 150px;
  /* left: -10px; */
  right: 0;
  top: 140px;
  /* background: url('../../assets/news-bar.png') no-repeat;
  background-size: 100% 100%; */
  background-color: #fff;
  border-radius: 75px 0 0 75px;
  display: flex;
  align-items: center;
  padding: 0 153px 0 125px;
}
.content-right-bar-title {
  flex: 1;
  font-size: 75px;
}
.arrow-left {
  height: 74px;
}
.news-text {
  margin-top: 42px;
  text-indent: 2em;
}
.content-nav {
  position: absolute;
  right: -338px;
  bottom: 145px;
  width: 338px;
}
.content-nav-item {
  width: 100%;
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  border-radius: 0 20px 20px 0;
  font-size: 54px;
  font-weight: bold;
  cursor: pointer;

  /* transform: perspective(1px) translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  position: relative;
  transition-property: color;
  transition-duration: 0.3s; */
  transform: perspective(1px) translateZ(0px);
  box-shadow: rgba(0, 0, 0, 0) 0px 0px 1px;
}

.content-nav-item-active {
  color: #fff;
  background: #2098d1;

  animation-name: hvr-wobble-vertical;
  animation-duration: 1s;
  animation-timing-function: ease-in-out;
  animation-iteration-count: 1;
}
.content-nav-item.content-nav-item-active::before {
  transform: scaleY(1);
}
.content-nav-item + .content-nav-item {
  margin-top: 25px;
}
</style>
