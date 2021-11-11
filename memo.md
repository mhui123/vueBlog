## router

- 페이지 쪼개기

1. 라우터설치 : npm install vue-router@4
2. 라우터 세팅 - main.js - createApp(App).use(라우터만든거).mount('#app')
3. src에 라우터 설정 파일 : router.js 아래와 같이 작성

   import { createWebHistory, createRouter } from "vue-router";
   import List from './components/List.vue';
   const routes = [
   {
   path: "/list",
   component: List,
   }
   ];

   const router = createRouter({
   history: createWebHistory(),
   routes,
   });

   export default router;

4. main.js에 router.js를 import하여 use()에 기입한다.
5. app.vue 에 <router-view>태그를 사용하여 설정한 라우터를 불러온다.

- <router-link to="/path">링크내용</router-link> 으로 링크로 표기할 수도 있다.

## 다중 router page

- router.js에
  path:"/detail/:작명",로 설정한 오브젝트 추가

  /:작명(검증 정규식 : \\d+) : 숫자만 입력
