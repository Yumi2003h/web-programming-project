<template>
  <main class="career-container">
    <div class="career">
      <h1>자격증 / 스펙</h1>

      <!-- 국내 기술자격증 -->
      <fieldset>
        <legend>국내 기술자격증</legend>
        <p>정보처리기사</p>
        <p>정보보안기사</p>
        <p>전자계산기조직응용기사</p>
        <p>네트워크관리사</p>
      </fieldset>

      <!-- 데이터 분석 관련 -->
      <fieldset>
        <legend>데이터 분석 관련</legend>
        <p>SQLD</p>
        <p>ADP</p>
      </fieldset>
    </div>
  </main>
</template>

<script>
export default {
  name: "CareerComp3",
};
</script>

<style scoped>
.career-container {
  padding: 2rem;
  font-family: "Nanum Pen Script", "Patrick Hand", sans-serif;
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

.career p {
  margin: 0.5rem 0;
  line-height: 1.6;
}
</style>
