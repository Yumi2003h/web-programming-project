<template>
  <main class="project-container">
    <div class="project">
      <h2>2. Alo Frontend Web</h2>
      <div class="project-banner">
        <img src="@/assets/alo.png" alt="Alo Frontend Web 배너" />
      </div>

      <fieldset>
        <legend>프로젝트 개요</legend>
        <p>
          회원 가입·로그인, 리워드 페이지, 여성·남성·액세서리·신발 카테고리
          네비게이션 등 핵심 기능을 React로 구현했습니다.
        </p>
        <p>
          React Router와 Context API로 유저 인증 상태와 장바구니·관심상품 상태를
          관리했고,
        </p>
        <p>
          Swiper.js를 활용해 “aloversary” 프로모션 배너 슬라이더를 자연스럽게
          동작하도록 만들었습니다.
        </p>
        <p>
          Styled-Components로 일관된 디자인 시스템을 적용하고, GitHub Actions +
          Netlify로 CI/CD 배포 자동화를 완성했습니다.
        </p>
      </fieldset>
    </div>
  </main>
</template>

<script>
export default {
  name: "ProjectComp2",
};
</script>

<style scoped>
.project-container {
  padding: 2rem;
  font-family: "Quicksand", sans-serif;
}

.project h2 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

.project-banner {
  text-align: center;
  margin-bottom: 1.5rem;
}

.project-banner img {
  max-width: 100%;
  height: auto;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

fieldset {
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 1rem;
  margin: 0;
}

legend {
  font-weight: bold;
  padding: 0 0.5rem;
}

.project p {
  margin: 0.5rem 0;
  line-height: 1.6;
}
</style>
