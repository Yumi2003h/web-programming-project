<template>
  <main class="project-container">
    <div class="project">
      <h2>3. Nike Backend Web</h2>
      <div class="project-banner">
        <img src="@/assets/nikebackend.png" alt="Nike Backend Web 배너" />
      </div>

      <fieldset>
        <legend>백엔드 개요</legend>
        <p>
          Node.js와 Express로 RESTful API 서버를 구축해 사용자·상품·주문
          데이터를 처리했습니다.
        </p>
        <p>
          MongoDB(Mongoose)로 데이터 모델을 설계·연동하고, JWT 기반 인증·인가
          로직을 구현했습니다.
        </p>
        <p>Redis 캐싱을 활용해 멤버십 할인 정보와 세션 처리를 최적화했고,</p>
        <p>
          GitHub Actions와 Heroku를 연동해 CI/CD 파이프라인을 구성·자동
          배포했습니다.
        </p>
      </fieldset>
    </div>
  </main>
</template>

<script>
export default {
  name: "ProjectComp3",
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
