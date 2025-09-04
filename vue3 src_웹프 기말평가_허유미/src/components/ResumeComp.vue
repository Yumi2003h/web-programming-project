<template>
  <main class="resume-container">
    <h1>이력서</h1>

    <!-- 1. 기초 자료 -->
    <section>
      <h2 class="section-title" @click="toggle(0)">1. 기초 자료</h2>
      <table v-show="visible[0]">
        <tr>
          <th rowspan="7" style="width: 120px">
            <img
              src="@/assets/selfimage.jpg"
              alt="프로필 사진"
              class="selfimage"
            />
          </th>
          <th>성명</th>
          <td>허유미</td>
          <th>영문</th>
          <td>YUMI HUR</td>
        </tr>
        <tr>
          <td colspan="4">주민등록번호 : 030326-4xxxxxx</td>
        </tr>
        <tr>
          <td colspan="4">E-mail : ym663255@gmail.com</td>
        </tr>
        <tr>
          <td colspan="2">전화번호 : 010-2700-0326</td>
          <td colspan="2">휴대폰 : 010-0000-0000</td>
        </tr>
        <tr>
          <td colspan="2">우편번호 : 12345</td>
          <td colspan="2">비상연락처 : 010-1234-5678</td>
        </tr>
        <tr>
          <td colspan="4">
            주소 : 경기도 성남시 수정구 성남대로 지하1332 (태평동)
          </td>
        </tr>
      </table>
    </section>

    <!-- 2. 학력사항 -->
    <section>
      <h2 class="section-title" @click="toggle(1)">2. 학력사항</h2>
      <table v-show="visible[1]">
        <thead>
          <tr>
            <th>기간</th>
            <th>학교명</th>
            <th>비고</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>2010~2016</td>
            <td>소래 초등학교</td>
            <td>개근</td>
          </tr>
          <tr>
            <td>2017~2019</td>
            <td>논현 중학교</td>
            <td>인재상</td>
          </tr>
          <tr>
            <td>2020~2022</td>
            <td>고잔 고등학교</td>
            <td>학업 우수상</td>
          </tr>
          <tr>
            <td>2024~</td>
            <td>가천대학교</td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </section>

    <!-- 3. 경력사항 -->
    <section>
      <h2 class="section-title" @click="toggle(2)">3. 경력사항</h2>
      <table v-show="visible[2]">
        <thead>
          <tr>
            <th>기간</th>
            <th>관련</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>2022~2023</td>
            <td>ZARA 파트타이머</td>
          </tr>
          <tr>
            <td>2023~2024</td>
            <td>카페 아르바이트</td>
          </tr>
          <tr>
            <td>2024.01~2024.02</td>
            <td>세무서 신고 도우미</td>
          </tr>
          <tr>
            <td>2024.08~</td>
            <td>CU 아르바이트</td>
          </tr>
        </tbody>
      </table>
    </section>

    <!-- 4. 개인능력 및 장단점 -->
    <section>
      <h2 class="section-title" @click="toggle(3)">4. 개인능력 및 장단점</h2>
      <table v-show="visible[3]">
        <tr>
          <th>자격증 및 포상</th>
          <td>정보처리기사</td>
          <td>합격</td>
        </tr>
        <tr>
          <th rowspan="2">컴퓨터능력</th>
          <td>MS Office</td>
          <td>상</td>
        </tr>
        <tr>
          <td>HTML / CSS / JavaScript</td>
          <td>중</td>
        </tr>
        <tr>
          <th>취미</th>
          <td colspan="2">헬스</td>
        </tr>
      </table>
    </section>

    <!-- 작성일 표시 -->
    <div class="date-box">작성일 : 2025-04-27 작성자 : ___________ (인)</div>
  </main>
</template>

<script>
export default {
  name: "ResumeComp",
  data() {
    return {
      // 각 section의 표시 상태
      visible: [true, true, true, true],
    };
  },
  methods: {
    toggle(idx) {
      this.visible[idx] = !this.visible[idx];
    },
  },
};
</script>

<style scoped>
.resume-container {
  padding: 2rem;
  font-family: "Nunito Rounded", "Jua", sans-serif;
  line-height: 1.6;
}

h1 {
  margin-bottom: 1rem;
}

.section-title {
  cursor: pointer;
  margin-top: 1.5rem;
  margin-bottom: 0.5rem;
  font-size: 1.25rem;
  font-weight: 600;
}

table {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 1rem;
}

th,
td {
  border: 1px solid #ccc;
  padding: 0.5rem;
  text-align: left;
}

.selfimage {
  width: 120px;
  display: block;
  margin: 0 auto;
}

.date-box {
  margin-top: 2rem;
  font-size: 0.9rem;
  color: #555;
}
</style>
