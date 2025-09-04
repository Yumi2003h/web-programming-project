// src/router/index.js
import { createRouter, createWebHistory } from "vue-router";

// 로그인 라우트는 제거했습니다.
import ResumeComp from "@/components/ResumeComp.vue";
import SelfIntroComp from "@/components/SelfIntroComp.vue";

import ProjectComp1 from "@/components/ProjectComp1.vue";
import ProjectComp2 from "@/components/ProjectComp2.vue";
import ProjectComp3 from "@/components/ProjectComp3.vue";
// ProjectComp4.vue가 있으면, 필요에 따라 Router에 추가하세요.

import ContestComp1 from "@/components/ContestComp1.vue";
import ContestComp2 from "@/components/ContestComp2.vue";
import ContestComp3 from "@/components/ContestComp3.vue";

import CareerComp1 from "@/components/CareerComp1.vue";
import CareerComp2 from "@/components/CareerComp2.vue";
import CareerComp3 from "@/components/CareerComp3.vue";

// 라우트 설정 (Login 관련 경로는 제거)
const routes = [
  // “나의 소개” 하위 라우트
  {
    path: "/resume",
    name: "Resume",
    component: ResumeComp,
  },
  {
    path: "/selfintro",
    name: "SelfIntro",
    component: SelfIntroComp,
  },

  // “프로젝트” 하위 라우트
  {
    path: "/project1",
    name: "Project1",
    component: ProjectComp1,
  },
  {
    path: "/project2",
    name: "Project2",
    component: ProjectComp2,
  },
  {
    path: "/project3",
    name: "Project3",
    component: ProjectComp3,
  },

  // “공모전” 하위 라우트
  {
    path: "/contest1",
    name: "Contest1",
    component: ContestComp1,
  },
  {
    path: "/contest2",
    name: "Contest2",
    component: ContestComp2,
  },
  {
    path: "/contest3",
    name: "Contest3",
    component: ContestComp3,
  },

  // “나의 경력” 하위 라우트
  {
    path: "/career1",
    name: "Career1",
    component: CareerComp1,
  },
  {
    path: "/career2",
    name: "Career2",
    component: CareerComp2,
  },
  {
    path: "/career3",
    name: "Career3",
    component: CareerComp3,
  },

  // 기본 경로(/)는 이력서 페이지로 리디렉션하도록 설정 (원하는 곳으로 변경 가능)
  {
    path: "/",
    redirect: "/resume",
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
