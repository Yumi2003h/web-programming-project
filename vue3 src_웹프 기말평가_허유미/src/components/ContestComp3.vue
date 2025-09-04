<template>
  <main class="contest-container">
    <div class="contest">
      <h2>3. 아르테크네 슬로건 공모전입니다.</h2>
      <div class="contest-banner">
        <img
          src="../assets/contest3.png"
          alt="아르테크네 슬로건 공모전 포스터"
        />
      </div>

      <fieldset class="slide-in-left">
        <legend>프로젝트 개요</legend>
        아이디어 공모전
      </fieldset>

      <fieldset>
        <legend>공모전 개요</legend>
        <p>아르테크네센터만의 매력을 담은 특별한 슬로건을 제안해주세요!</p>
        <p>주제 : 아르테크네센터의 매력과 특색을 나타내는 슬로건 공모</p>
        <p>
          이 공모전은 아르테크네센터의 매력을 알리고, 창의적인 아이디어를
          발굴하기 위해 개최되었습니다.
        </p>
        <p>
          예시 ▷ 가천 통합 10주년 ‘가천 슬로건’ 공모전(아르테크네센터) 수상작 -
          작은 바람으로 세계를 흔드는 무한의 가능성 - 세상을 위해 환희 불을
          켜다, gach-on
        </p>
        <p>
          글자 수 : 20자 내외 심사를 위해 서류 제출 시 반드시 한글(hwp)원본 파일
          제출(PDF변환 시 심사 불가) 제출 파일명 : 슬로건 공모전(학과_이름)으로
          통일 (EX_ 슬로건 공모전(행정학과_김가천))
        </p>
      </fieldset>
    </div>
  </main>
</template>

<script>
export default {
  name: "ContestComp3",
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
