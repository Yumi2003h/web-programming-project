<template>
  <div id="app">
    <!-- 헤더 -->
    <header>
      <h1>허유미의 <span class="hl">portfolio</span></h1>
      <span class="tagline">“미래를 바꾸는 개발자”</span>
    </header>

    <div class="container">
      <!-- 메인 히어로 섹션 -->
      <main>
        <section class="hero">
          <img
            src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80"
            alt="도로"
          />
          <div class="hero-caption">코딩 여정에 오신 것을 환영합니다!</div>
        </section>
      </main>

      <!-- 내비게이션 -->
      <nav id="nav">
        <button class="hamburger" @click="toggleMenu">☰ MENU</button>
        <ul :class="['menu', { active: isMenuOpen }]">
          <!-- 나의 소개 -->
          <li>
            <span class="menu-title">나의 소개</span>
            <ul class="submenu">
              <li><router-link to="/login">로그인</router-link></li>
              <li><router-link to="/resume">이력서</router-link></li>
              <li><router-link to="/selfintro">자기소개</router-link></li>
            </ul>
          </li>
          <!-- 프로젝트 -->
          <li>
            <span class="menu-title">프로젝트</span>
            <ul class="submenu">
              <li><router-link to="/project1">프로젝트1</router-link></li>
              <li><router-link to="/project2">프로젝트2</router-link></li>
              <li><router-link to="/project3">프로젝트3</router-link></li>
              <li><router-link to="/project4">프로젝트4</router-link></li>
            </ul>
          </li>
          <!-- 공모전 -->
          <li>
            <span class="menu-title">공모전</span>
            <ul class="submenu">
              <li><router-link to="/contest1">공모전1</router-link></li>
              <li><router-link to="/contest2">공모전2</router-link></li>
              <li><router-link to="/contest3">공모전3</router-link></li>
            </ul>
          </li>
          <!-- 나의 경력 -->
          <li>
            <span class="menu-title">나의 경력</span>
            <ul class="submenu">
              <li><router-link to="/career1">아르바이트·인턴</router-link></li>
              <li><router-link to="/career2">해외경험</router-link></li>
              <li><router-link to="/career3">자격증·스펙</router-link></li>
            </ul>
          </li>
        </ul>
      </nav>
    </div>

    <!-- 라우터 뷰 -->
    <router-view />

    <!-- 푸터 -->
    <footer>
      <div>© 2025 허유미. All rights reserved.</div>
      <div>Contact: 010-2700-0326</div>
    </footer>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      isMenuOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
  },
};
</script>
