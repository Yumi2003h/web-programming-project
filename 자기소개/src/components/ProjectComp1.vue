<template>
  <main class="project-container">
    <div class="project">
      <h2>1. Nike Frontend Web</h2>
      <div class="project-banner">
        <img src="@/assets/nike.png" alt="Nike Frontend Web 배너" />
      </div>
      <fieldset>
        <legend>프로젝트 개요</legend>
        <p>Login, Member Days, 매장찾기 등의 기능을 구현했습니다.</p>
        <p>
          React와 Swiper.js를 활용해 “Member Days” 배너 슬라이더를 동적으로
          구현했고,
        </p>
        <p>
          Context API로 사용자 인증·관심 상품 상태를 관리하며
          Styled-Components로 일관된 디자인 시스템을 구축했습니다.
        </p>
        <p>
          GitHub Actions와 Netlify를 이용해 CI/CD 파이프라인을 구성해 배포
          자동화를 완성했습니다.
        </p>
      </fieldset>
    </div>
  </main>
</template>

<script>
export default {
  name: "ProjectComp1",
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
