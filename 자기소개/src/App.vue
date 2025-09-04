<template>
  <div id="app">
    <!-- ───────────────────────────────────────────────────────────────────
         1. Header
    ─────────────────────────────────────────────────────────────────── -->
    <header class="app-header">
      <h1>허유미의 <span class="hl">portfolio</span></h1>
      <span class="tagline">“미래를 바꾸는 개발자”</span>
    </header>

    <!-- ───────────────────────────────────────────────────────────────────
         2. Container: 히어로 섹션 + 네비게이션
    ─────────────────────────────────────────────────────────────────── -->
    <div class="container">
      <!-- 2-1. Hero Section -->
      <main class="hero-section">
        <div class="hero">
          <img
            class="hero-image"
            src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80"
            alt="도로"
          />
          <div class="hero-caption">코딩 여정에 오신 것을 환영합니다!</div>
        </div>
      </main>

      <!-- 2-2. Navigation (사이드바) -->
      <nav :class="{ active: navActive }" id="nav">
        <!-- Hamburger (모바일) -->
        <button class="hamburger" @click="navActive = !navActive">
          ☰ MENU
        </button>

        <!-- Main Menu -->
        <ul class="menu">
          <!-- 1) 나의 소개 -->
          <li>
            <a href="#" @click.prevent>나의 소개</a>
            <ul class="submenu">
              <li><router-link to="/resume">이력서</router-link></li>
              <li><router-link to="/selfintro">자기소개</router-link></li>
            </ul>
          </li>

          <!-- 2) 프로젝트 -->
          <li>
            <a href="#" @click.prevent>프로젝트</a>
            <ul class="submenu">
              <li><router-link to="/project1">프로젝트1</router-link></li>
              <li><router-link to="/project2">프로젝트2</router-link></li>
              <li><router-link to="/project3">프로젝트3</router-link></li>
            </ul>
          </li>

          <!-- 3) 공모전 -->
          <li>
            <a href="#" @click.prevent>공모전</a>
            <ul class="submenu">
              <li><router-link to="/contest1">공모전1</router-link></li>
              <li><router-link to="/contest2">공모전2</router-link></li>
              <li><router-link to="/contest3">공모전3</router-link></li>
            </ul>
          </li>

          <!-- 4) 나의 경력 -->
          <li>
            <a href="#" @click.prevent>나의 경력</a>
            <ul class="submenu">
              <li><router-link to="/career1">아르바이트·인턴</router-link></li>
              <li><router-link to="/career2">해외경험</router-link></li>
              <li><router-link to="/career3">자격증·스펙</router-link></li>
            </ul>
          </li>
        </ul>
      </nav>
    </div>

    <!-- ───────────────────────────────────────────────────────────────────
         3. Footer
    ─────────────────────────────────────────────────────────────────── -->
    <footer class="app-footer">
      <div>© 2025 허유미. All rights reserved.</div>
      <div>Contact: 010-2700-0326</div>
    </footer>

    <!-- ───────────────────────────────────────────────────────────────────
         4. Router View
         클릭된 메뉴(예: /resume, /project1 등)의 컴포넌트가 이곳에 표시됩니다.
    ─────────────────────────────────────────────────────────────────── -->
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      // 모바일에서 햄버거 메뉴 토글 상태
      navActive: false,
    };
  },
};
</script>

<style scoped>
/* 이곳에는 scoped 스타일이 별도로 필요 없으며,
   전역 스타일(App.css 또는 style.css)에 따라 디자인이 적용됩니다. */
</style>
