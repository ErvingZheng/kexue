<script setup lang="ts">
import { ref } from 'vue';
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
};
</script>

<template>
  <div class="news-container">
    <div>
      <div
        v-if="activeContentNav === 1"
        class="situation animate__animated animate__fadeIn"
      >
        <el-scrollbar height="4.15365rem">
          <div class="scroll-content">
            <div id="new">
              <swiper
                :pagination="{
                  clickable: true,
                }"
                :modules="modules"
              >
                <swiper-slide>
                  <img src="../../assets/banner/news1.jpg" alt="" />
                </swiper-slide>
                <swiper-slide
                  ><img src="../../assets/banner/news2.jpg" alt=""
                /></swiper-slide>
                <swiper-slide
                  ><img src="../../assets/banner/news3.jpg" alt=""
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
              <div>
                The Chongqing City, the largest metropolitan administration in
                the world that serves more than 32 million people, is devoted to
                supporting brain research by founding a major multidisciplinary
                science and technology infrastructure since 2022, the Chongqing
                Institute for Brain and Intelligence (CIBI). On the 'bench
                side',CIBI investigates the fundamental mechanisms underlying
                sleep, wakefulness and memory, and develops brain-inspired
                artificial intelligence technologies. On the 'bedside', CIBI
                aims at advancing therapeutical technologies by pioneering
                deeper understanding of pathogenesis of major brain diseases,
                including Alzheimer's disease, stroke, and epilepsy.
                Furthermore, a complete chain of technology transfer 'from bench
                side to bedside' is furnished by attracting venture capital
                investments directly to each research team. Notably, CIBI offers
                funding schemes that support long-term single-goal research
                teams for 10 years and more, as depicted by an old Chinese
                saying, 'ten years to sharpen one sword.'
              </div>
            </div>
          </div>
        </el-scrollbar>
      </div>

      <div v-if="activeContentNav === 2" class="layout">
        <img
          src="../../assets/banner/0102.png"
          class="animate__animated animate__fadeIn"
          alt=""
        />
      </div>

      <div v-if="activeContentNav === 3" class="organization">
        <img
          src="../../assets/banner/0103.png"
          class="animate__animated animate__fadeIn"
          alt=""
        />
      </div>

      <div v-if="activeContentNav === 4" class="goals">
        <img
          src="../../assets/banner/0104.png"
          class="animate__animated animate__fadeIn"
          alt=""
        />
      </div>

      <div v-if="activeContentNav === 5" class="departments">
        <img
          src="../../assets/banner/0105.png"
          class="animate__animated animate__fadeIn"
          alt=""
        />
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
</template>

<style scoped>
.news-container {
  position: relative;
  width: 2049px;
  height: 1595px;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 1) 100%
  );
  box-shadow: 0px 6px 49px 11px rgba(79, 77, 170, 0.28),
    0px 4px 27px 0px rgba(98, 95, 240, 0.31);
  margin-left: 61px;
  border-radius: 0 0 30px 30px;
}
.situation {
}
.scroll-content {
  padding: 130px 206px 107px 136px;
}
.layout {
  padding: 143px 102px 0 143px;
}
.organization {
  padding: 233px 105px 0 66px;
}
.goals {
  padding: 185px 150px 0 168px;
}
.departments {
  padding: 157px 79px 0 70px;
}
.news-text {
  margin-top: 42px;
  text-indent: 2em;
  font-size: 33px;
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
  align-items: flex-start;
  background-color: rgba(255, 255, 255, 0.77);
  border-radius: 0 30px 30px 0;
  cursor: pointer;
  padding-left: 46px;

  transform: perspective(1px) translateZ(0px);
  box-shadow: rgba(0, 0, 0, 0) 0px 0px 1px;
}
.content-nav-item-title {
  font-size: 54px;
  font-weight: bold;
}
.content-nav-item-subtitle {
  font-size: 24px;
  font-family: hel;
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
