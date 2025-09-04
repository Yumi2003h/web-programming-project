<template>
  <main class="contest-container">
    <div class="contest">
      <h2>2. 공모전을 부탁해 공모전입니다.</h2>
      <div class="contest-banner">
        <!-- import 한 contest2를 바인딩 -->
        <img :src="contest2" alt="공모전을 부탁해 포스터" />
      </div>

      <fieldset class="slide-in-left">
        <legend>프로젝트 개요</legend>
        가천대학교 학생 역량 개발을 위한 공모전 아이디어 제안
      </fieldset>

      <fieldset>
        <legend>공모전 개요</legend>
        <p>가천대학교 학생 역량 개발을 위한 공모전 아이디어 제안</p>

        <p>
          이 공모전은 경제에 대한 관심을 높이고, 창의적인 아이디어를 발굴하기
          위해 개최되었습니다.
        </p>

        <p>
          다양한 방면에서 개인의 도전, 경험을 실현시킬 수 있도록 지원하는 공모전
        </p>

        <p>
          프로젝트 아이디어를 제출 할 경우 5주간의 활동을 할 수 있도록 계획해야
          함
        </p>

        <p>
          (아르테크네센터 프로젝트 프로그램 예시 - JUST DO IT /T.M.I / 경제ON
          등)
        </p>
      </fieldset>
    </div>
  </main>
</template>

<script>
import contest2 from "@/assets/contest2.png"; // @는 src 폴더를 가리킵니다.

export default {
  name: "ContestComp2",
  data() {
    return {
      contest2,
    };
  },
};
</script>

<style scoped>
.contest-container {
  padding: 2rem;
  font-family: "Quicksand", sans-serif;
}

.contest h2 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  text-align: center;
}

.contest-banner {
  text-align: center;
  margin-bottom: 1.5rem;
}

.contest-banner img {
  max-width: 100%;
  height: auto;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

fieldset {
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 1rem;
  margin-bottom: 1.5rem;
}

legend {
  font-weight: bold;
  padding: 0 0.5rem;
}

/* slide-in-left 애니메이션 */
@keyframes slideInLeft {
  from {
    opacity: 0;
    transform: translateX(-20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}
.slide-in-left {
  animation: slideInLeft 0.6s ease-out both;
}

.contest p {
  margin: 0.5rem 0;
  line-height: 1.6;
}
</style>
