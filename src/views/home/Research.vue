<script setup lang="ts">
import { ref, computed } from 'vue';

const menuList = [
  {
    value: 1,
    title: '觉醒睡眠与认知研究部',
    subtitle: 'Department of Wakefulness/Sleep and Cognition',
  },
  {
    value: 2,
    title: '记忆原理研究部',
    subtitle: 'Department of Learning and Memory',
    floor: '2F(N213-N237)',
  },
  {
    value: 3,
    title: '神经感知与智能调控研究部',
    subtitle: 'Department of Neural Perception and Smart Neuromodulation',
  },
  {
    value: 4,
    title: '神经损伤与修复研究部',
    subtitle: 'Department of Neural Injury and Repair',
  },
  {
    value: 5,
    title: '认知障碍研究部',
    subtitle: 'Department of Cognitive Impairment',
  },
  {
    value: 6,
    title: '代谢性心血管病与脑功能研究部',
    subtitle: 'Department of Cardiometabolic Diseases and Brain Function',
  },
  {
    value: 7,
    title: '脑-肠交互研究部',
    subtitle: 'Department of Brain-gut Interaction',
  },
  {
    value: 8,
    title: '神经精神障碍研究部',
    subtitle: 'Department of Neuropsychiatric Disorder',
  },
  {
    value: 9,
    title: '智能认知研究部',
    subtitle: 'Department of Intelligent Cognition',
  },
  {
    value: 10,
    title: '神经光子学研究部',
    subtitle: 'Department of Neurophotonics',
  },
];
const active = ref(0);
function clickMenu(val) {
  active.value = val;
}
const nav = computed(() => {
  if ([2].includes(active.value)) {
    return [
      {
        label: '研究方向',
        value: 1,
        subtitle: 'Research Interests',
      },
      {
        label: '研究人员',
        value: 2,
        subtitle: 'Investigators',
      },
      {
        label: '科研成果',
        value: 3,
        subtitle: 'Research Achievements',
      },
      {
        label: '返回菜单',
        value: 0,
        subtitle: 'Return',
      },
    ];
  }
  return [];
});
const activeNav = ref(1);
const clickNav = (val) => {
  if (val === 0) {
    activeNav.value = 1;
    active.value = 0;
  } else {
    activeNav.value = val;
  }
};
</script>

<template>
  <div>
    <div
      v-if="active === 0"
      class="menu-container animate__animated animate__fadeIn"
    >
      <div class="menu-list">
        <div
          v-for="item in menuList"
          :key="item.value"
          class="menu-item"
          @click="clickMenu(item.value)"
        >
          <div class="menu-item-title">{{ item.title }}</div>
          <div class="menu-item-subtitle">{{ item.subtitle }}</div>
        </div>
      </div>
    </div>
    <div v-else class="news-container">
      <div v-if="active === 1"></div>
      <div v-if="active === 2">
        <div class="animate__animated animate__fadeIn">
          <div class="member-item-container">
            <div class="member-item">
              <div class="member-item-title">谌小维｜Chen Xiaowei</div>
              <div class="member-item-content">
                <div>
                  重庆脑与智能科学中心学术主任、记忆原理研究部负责人，国家杰出青年基金获得者，国家重大仪器研发计划首席。
                </div>
                <div>Research Director, Head of Department</div>
              </div>
            </div>
          </div>
          <div class="member-item-container">
            <div class="member-item">
              <div class="member-item-title">覃涵｜Qin Han</div>
              <div class="member-item-content">
                <div>博士，重庆脑与智能研究中心记忆研究部青年研究员。</div>
                <div>
                  Ph. D, Junior PI of Department of Learning and Memory.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-if="active === 3"></div>
      <div v-if="active === 4"></div>
      <div v-if="active === 5"></div>
      <div v-if="active === 6"></div>
      <div v-if="active === 7"></div>
      <div v-if="active === 8"></div>
      <div v-if="active === 9"></div>
      <div v-if="active === 10"></div>
      <div class="content-nav">
        <div
          v-for="item in nav"
          :key="item.value"
          class="content-nav-item"
          :class="{
            'content-nav-item-active': activeNav === item.value,
          }"
          @click="clickNav(item.value)"
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
</template>

<style scoped>
.menu-container {
  width: 2331px;
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
.menu-list {
  display: flex;
  flex-wrap: wrap;
  row-gap: 30px;
  align-items: center;
  justify-content: center;
  padding-top: 111px;
}
.menu-item {
  width: 985px;
  height: 248px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(45deg, #5079ff 0%, #63a2ff 82%);
  border-radius: 23px;
  cursor: pointer;
}
.menu-item:nth-child(odd) {
  margin-right: 44px;
}
.menu-item-title {
  font-size: 68px;
  color: #fff;
}
.menu-item-subtitle {
  font-size: 29px;
  font-family: hel;
  color: #fff;
  opacity: 0.6;
}
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
.member-item-container {
  padding: 128px 61px 61px 61px;
  box-shadow: 0px 6px 49px 11px rgba(79, 77, 170, 0.36);
  width: 1874px;
  border-radius: 40px;
}
.member-item-container + .member-item-container {
  margin-top: 67px;
}
.member-item {
  background: linear-gradient(90deg, #517cff 0%, #33aafc 99%);
  border-radius: 27px;
  width: 1752px;
  height: 432px;
  padding: 86px 134px 0 91px;
}
.member-item-title {
  font-size: 61px;
  color: #fff;
}
.member-item-content {
  font-size: 39px;
  color: #fff;
}
.content-nav {
  position: absolute;
  right: -338px;
  bottom: 20px;
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
