<template>
  <main class="career-container">
    <div class="career">
      <h1>아르바이트 및 인턴</h1>

      <!-- 아르바이트 섹션 -->
      <fieldset>
        <legend>아르바이트</legend>
        <img src="@/assets/cafe.jpg" alt="카페 아르바이트" />
        <p>카페 아르바이트 1년</p>

        <img src="@/assets/zara.jpg" alt="ZARA 파트타이머" />
        <p>ZARA 파트타이머 1년</p>

        <img src="@/assets/tax.jpg" alt="세무서 신고도우미" />
        <p>세무서 신고도우미 1달</p>

        <img src="@/assets/cu.jpg" alt="CU 아르바이트" />
        <p>CU 아르바이트 현재 근무중</p>
      </fieldset>

      <!-- 인턴 섹션 -->
      <fieldset>
        <legend>인턴</legend>
        <p>아직 인턴 경험 없음</p>
      </fieldset>
    </div>
  </main>
</template>

<script>
export default {
  name: "CareerComp1",
};
</script>

<style scoped>
.career-container {
  padding: 2rem;
  font-family: "Quicksand", sans-serif;
}

.career h1 {
  font-size: 2rem;
  margin-bottom: 1rem;
  text-align: center;
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

.career img {
  display: block;
  max-width: 100%;
  height: auto;
  margin: 0.5rem auto;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.career p {
  margin: 0.5rem 0;
  text-align: center;
}
</style>
