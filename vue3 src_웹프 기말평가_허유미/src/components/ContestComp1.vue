<template>
  <main class="contest-container">
    <div class="contest">
      <h2>1. 경제 on 공모전입니다.</h2>
      <div class="contest-banner">
        <img src="../assets/economyon.png" alt="경제 on 포스터" />
      </div>

      <fieldset class="slide-in-left">
        <legend>프로젝트 개요</legend>
        경제 공모전
      </fieldset>

      <fieldset class="slide-in-left">
        <legend>공모전 개요</legend>
        <p>경제 on 공모전은 경제 관련 주제로 진행된 공모전입니다.</p>
        <p>
          이 공모전은 경제에 대한 관심을 높이고, 창의적인 아이디어를 발굴하기
          위해 개최되었습니다.
        </p>
        <p>여러분은 용돈, 장학금, 아르바이트비를 어떻게 관리하시나요?</p>
        <p>
          금융이 어렵고 멀게만 느껴진다면 친구들과 저축부터 함께 시작해보세요!
        </p>
        <p>
          저축은 하고 있는데 투자를 하고 싶다면 친구들과 활동하며 도전해보세요!
        </p>
      </fieldset>
    </div>
  </main>
</template>

<script>
export default {
  name: "ContestComp1",
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

/* slide-in-left 애니메이션 (글로벌 CSS에 추가하거나 여기에도 적을 수 있습니다) */
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
