<template>
  <main class="career-container">
    <div class="career">
      <h1>해외경험</h1>

      <!-- 유럽 섹션 -->
      <fieldset>
        <legend>유럽</legend>
        <img src="@/assets/turkey.jpg" alt="터키" />
        <p>터키</p>
      </fieldset>

      <!-- 동남아 섹션 -->
      <fieldset>
        <legend>동남아</legend>
        <img src="@/assets/thailand.jpg" alt="태국" />
        <p>태국</p>
      </fieldset>

      <!-- 동북아 섹션 -->
      <fieldset>
        <legend>동북아</legend>
        <img src="@/assets/hongkong.jpg" alt="홍콩" />
        <p>홍콩</p>
      </fieldset>
    </div>
  </main>
</template>

<script>
export default {
  name: "CareerComp2",
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
