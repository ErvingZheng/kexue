<script setup lang="ts">
import { ref, onMounted, shallowRef, reactive } from 'vue';
import { useAnimate } from '@vueuse/core';
import type { MaybeElement } from '@vueuse/core';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

const modules = [Pagination];

const activeContentNav = ref(1);
const side = ref();
const contentNav = [
  {
    label: '情况概述',
    value: 1,
    subtitle: 'Overview',
  },
  {
    label: '研究布局',
    value: 2,
    subtitle: 'Research',
  },
  {
    label: '组织结构',
    value: 3,
    subtitle: 'Organization',
  },
  {
    label: '总体目标',
    value: 4,
    subtitle: 'Goals',
  },
  {
    label: '各院分布',
    value: 5,
    subtitle: 'Departments',
  },
];
const clickContentNav = (val) => {
  activeContentNav.value = val;
  side.value = contentNav.find((item) => item.value === val);
};

const activeFooterNav = ref(1);
const current = ref({
  label: '中心简介',
  value: 1,
  subtitle: 'Introduction',
});
const footerNav = [
  {
    label: '中心简介',
    value: 1,
    subtitle: 'Introduction',
  },
  {
    label: '研发部',
    value: 2,
    subtitle: 'Research Department',
  },
  {
    label: '公共实验平台',
    value: 3,
    subtitle: 'Public Experimental Platform',
  },
  {
    label: '艺术中心',
    value: 4,
    subtitle: 'Intelligent Art Center',
  },
  {
    label: '会议中心',
    value: 5,
    subtitle: 'Conference Center',
  },
];
const clickFooterNav = (val) => {
  activeFooterNav.value = val;
  current.value = footerNav.find((item) => item.value === val);
  play();
};

const topTitle = shallowRef<MaybeElement>();
const { play } = useAnimate(topTitle, [{ opacity: 0 }, { opacity: 1 }], {
  duration: 400,
  iterations: 1,
  direction: 'alternate',
  easing: 'cubic-bezier(0.46, 0.03, 0.52, 0.96)',
});

const form = reactive({
  searchValue: '',
});
const inSearch = ref(false);

function clickSearch() {
  inSearch.value = true;
  play();
}

onMounted(() => {});
</script>

<template>
  <div class="home-page">
    <div class="header">
      <img src="../../assets/logo.png" class="logo" alt="" />
    </div>

    <div class="content">
      <div class="content-left">
        <img class="map" src="../../assets/map.png" alt="" />
        <div class="content-left-description">
          <div class="content-left-description-item">
            <img src="../../assets/icon/current.png" alt="" /><span
              >当前位置</span
            >
          </div>
          <div class="content-left-description-item">
            <img src="../../assets/icon/destination.png" alt="" /><span
              >目标位置</span
            >
          </div>
        </div>
      </div>
      <div v-if="!inSearch" class="content-right">
        <div class="content-right-bar">
          <div ref="topTitle" class="content-right-bar-title">
            <template v-if="!inSearch">
              <span>{{ current.subtitle }}</span> |
              <span>{{ current.label }}</span>
            </template>
            <template v-else>
              <span>Search</span><el-input v-model="form.searchValue" />
            </template>
          </div>
          <img class="arrow-left" src="../../assets/arrow-left.png" alt="" />
        </div>

        <div class="news-container">
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
              @click="clickContentNav(item.value)"
            >
              <div class="content-nav-item-title">
                {{ item.label }}
              </div>
              <div class="content-nav-item-subtitle">
                {{ item.subtitle }}
              </div>
            </div>
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
        >
          <div
            class="footer-nav-item-title"
            :class="{
              'footer-nav-item-title-active': activeFooterNav === item.value,
            }"
            @click="clickFooterNav(item.value)"
          >
            <span>
              {{ item.label }}
            </span>
          </div>
          <div class="footer-nav-item-subtitle">
            {{ item.subtitle }}
          </div>
        </div>
        <span class="footer-nav-item-seperator">|</span>
        <div class="footer-nav-item" @click="clickSearch">
          <div class="footer-nav-item-title">
            <span> <img src="../../assets/icon/search.png" alt="" />查找 </span>
          </div>
          <div class="footer-nav-item-subtitle">Search</div>
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
.footer-nav-item-title {
  text-align: center;
}
.footer-nav-item-title span {
  display: inline-block;
  color: #fff;
  font-size: 59px;
  line-height: 59px;
  padding: 8px 38px;
  cursor: pointer;
  font-weight: bold;

  transform: perspective(1px) translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  transition-duration: 0.3s;
  transition-property: border-radius;
}
.footer-nav-item-title-active span {
  border-radius: 65px;
  background-color: #fff;
  color: #000;
}
.footer-nav-item + .footer-nav-item {
  margin-left: 60px;
}
.footer-nav-item-subtitle {
  font-size: 24px;
  color: #bbb6e0;
  line-height: 24px;
  margin-top: 10px;
  text-align: center;
}
.footer-nav-item-seperator {
  margin: 0 52px;
  font-size: 62px;
  color: #fff;
}
.footer-nav-item img {
  display: inline-block;
  width: 54px;
  height: 54px;
  margin-right: 33px;
  vertical-align: top;
}

.content {
  display: flex;
}
.content-left {
  position: relative;
  width: 1140px;
  height: calc(100vh - 89px - 93px);
  border-radius: 10px;
  margin-left: 20px;
  background: linear-gradient(
    180deg,
    #ffffff 0%,
    rgba(77, 77, 210, 0.28) 50%,
    #ffffff 100%
  );
  box-shadow: 0px 6px 49px 11px rgba(79, 77, 170, 0.28),
    0px 4px 27px 0px rgba(98, 95, 240, 0.23);
  margin-left: 105px;
  margin-top: 89px;
  margin-right: 108px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}
.map {
  position: absolute;
  display: block;
  width: 1430px;
  height: 77%;
  max-width: unset;
  top: 250px;
  left: 50%;
  transform: translateX(-48%);
}
.content-left-description {
  margin: 0 0 80px 80px;
}
.content-left-description-item {
  display: flex;
  align-items: flex-end;
}
.content-left-description-item + .content-left-description-item {
  margin-top: 16px;
}
.content-left-description-item img {
  width: 49px;
  height: 63px;
  margin-right: 25px;
}
.content-left-description-item span {
  font-size: 34px;
  line-height: 36px;
}
.content-right {
  width: 2543px;
  /* height: calc(100vh - 246px - 275px); */
  margin-top: 141px;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
}
.content-right-bar {
  width: 2543px;
  height: 150px;
  background: linear-gradient(90deg, #ffffff 0%, rgba(198, 210, 255, 0.2) 100%);
  box-shadow: 0px 6px 49px 11px rgba(79, 77, 170, 0.28),
    0px 4px 27px 0px rgba(98, 95, 240, 0.23);
  border-radius: 75px 0 0 75px;
  display: flex;
  align-items: center;
  padding: 0 153px 0 125px;
}
.content-right-bar-title {
  flex: 1;
  font-size: 75px;
}
.content-right-bar-title span {
  font-weight: bold;
}
.news-container {
  position: relative;
  width: 2049px;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 1) 100%
  );
  box-shadow: 0px 6px 49px 11px rgba(79, 77, 170, 0.28),
    0px 4px 27px 0px rgba(98, 95, 240, 0.31);
  margin-left: 61px;
  padding: 130px 136px 100px;
  border-radius: 0 0 30px 30px;
}
.el-input {
  width: 1000px;
}
:deep(.el-input__inner) {
  height: 75px;
  line-height: 75px;
}
:deep(.el-input__wrapper) {
  border-radius: 38px;
}
.arrow-left {
  height: 74px;
}
.news-text {
  margin-top: 42px;
  text-indent: 2em;
  font-size: 32px;
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
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.77);
  border-radius: 0 30px 30px 0;
  cursor: pointer;

  transform: perspective(1px) translateZ(0px);
  box-shadow: rgba(0, 0, 0, 0) 0px 0px 1px;
}
.content-nav-item-title {
  font-size: 54px;
  font-weight: bold;
}
.content-nav-item-subtitle {
  font-size: 24px;
}
.content-nav-item-active {
  color: #fff;
  background: linear-gradient(-90deg, #4e96fd 40%, #3d6dd0 100%);

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
