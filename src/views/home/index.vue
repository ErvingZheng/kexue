<script setup lang="ts">
import { ref, onMounted, shallowRef } from 'vue';
import { useAnimate } from '@vueuse/core';
import type { MaybeElement } from '@vueuse/core';
import Introduction from './Introduction.vue';
import Research from './Research.vue';

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
  current.value = footerNav.find((item) => item.value === val)!;
  play();
};

const topTitle = shallowRef<MaybeElement>();
const { play } = useAnimate(topTitle, [{ opacity: 0 }, { opacity: 1 }], {
  duration: 400,
  iterations: 1,
  direction: 'alternate',
  easing: 'cubic-bezier(0.46, 0.03, 0.52, 0.96)',
});

// const form = reactive({
//   searchValue: '',
// });
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
      <div class="content-right">
        <div class="content-right-bar">
          <div ref="topTitle" class="content-right-bar-title">
            <span>{{ current.subtitle }}</span> |
            <span>{{ current.label }}</span>
          </div>
          <img class="arrow-left" src="../../assets/arrow-left.png" alt="" />
        </div>

        <Introduction v-if="activeFooterNav === 1"></Introduction>
        <Research v-else-if="activeFooterNav === 2"></Research>
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
  font-size: 60px;
  line-height: 76px;
  padding: 0 38px;
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
  font-family: hel;
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
  width: 1150px;
  height: calc(100vh - 89px - 93px);
  border-radius: 30px;
  margin-left: 20px;
  background: linear-gradient(
    180deg,
    #ffffff 0%,
    rgba(77, 77, 210, 0.28) 50%,
    #ffffff 100%
  );
  box-shadow: 0px 6px 49px 11px rgba(79, 77, 170, 0.28),
    0px 4px 27px 0px rgba(98, 95, 240, 0.23);
  margin: 89px 106px 0;
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
</style>
