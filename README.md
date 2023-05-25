# 솔로 프로젝트 - 나만의 쇼핑몰 앱

<br>

> 코드스테이츠 SEB FE 44기 솔로 프로젝트 과제로 북마크 기능이 들어있는 쇼핑몰 앱을 구현했습니다.

<br>

- **기간 :** 2023.5.13. ~ _(진행 중)_
- **프로젝트 요구사항 분석 및 플래닝** :
  - 페어와 함께 이슈 티켓을 생성하고 플래닝 포커를 통해 스프린트 범위를 설정했습니다.
  - [요구사항 분석 및 플래닝 링크](https://github.com/users/Doyu-Lee/projects/2)
- coz-shopping 폴더로 진입하여 `npm run dev`로 프로젝트를 실행합니다.

<br>

## ⚒ 기술 스택

[![redux/toolkit](https://img.shields.io/badge/redux/toolkit-%2300BFFF?style=plastic&logo=redux&logoColor=white)](https://redux-toolkit.js.org/) <br>
[![nextjs](https://img.shields.io/badge/nextjs-%23000000?style=plastic&logo=next.js&logoColor=white)](https://nextjs.org/)<br>
[![tailwindcss](https://img.shields.io/badge/tailwindcss-%231572B6?style=plastic&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)<br>
[![styled-components](https://img.shields.io/badge/styled--components-%23DB7093?style=plastic&logo=styled-components&logoColor=white)](https://styled-components.com/)<br>

<br>

## 📢 주요 기능

- **메인 페이지 :** 무작위 상품 4개, 북마크한 상품 4개를 전시합니다.
- **상품 리스트 페이지 :** 모든 상품을 전시하며, 필터링 기능이 있습니다.
- **북마크 페이지 :** 북마크한 상품을 전시하며, 필터링 기능이 있습니다.
- **공통 기능 :**
  - 반응형 페이지로 구현했습니다.
  - 상품을 클릭하면 해당 상품과 관련된 모달창이 뜹니다.
  - 상품의 북마크 아이콘을 클릭하면 아이콘이 활성화 되며 북마크 페이지에 상품이 보관이 됩니다.
    - 한 번 더 누를 경우 아이콘이 비활성화되며 삭제가 됩니다.
    - 북마크 추가 아이콘을 누르면 '북마크에 추가되었습니다', 다시 해당 아이콘을 누르면 '북마크에서 삭제되었습니다'라는 문구를 담은 알림 토스트가 출력이 됩니다.
  - 상품 리스트와 북마크 페이지에서 무한 스크롤이 됩니다.
    - 요구 조건에 따라 서버에서 전체 데이터를 먼저 받아와 로직을 구성하였습니다.
    - 반응형 화면에 따라 예를 들어 4개가 보이는 화면에서는 그에 맞춰 마지막 줄을 4의 배수로 상품이 채워지도록 구현했습니다.

<br>

## 💬 요약

### 1. 커스텀 훅을 활용한 Header & Footer 섹션 기능 개발

- Next.js의 `Layout.js` 파일을 활용하여 고정된 Header & Footer 섹션을 생성했습니다.
- UI를 고려하여 hover 시에는 햄버거 버튼이 약간 확대되고, 클릭하면 드롭 다운 메뉴가 나옵니다.
  - 드롭 다운은 메뉴 혹은 해당 컴포넌트 바깥을 클릭하면 사라지도록 구현했습니다.

### 2. redux/toolkit의 `createApi`를 사용하여 데이터 받아오기

- Redux Toolkit의 `createApi`를 사용하여 API를 관리하기 위한 설정과 엔드포인트를 정의했습니다.
- `createApi`함수를 사용하여 'productApi'라는 API 인스턴스를 생성한 후, `useGetProductsQuery` 등의 훅을 내보냈습니다.
  - `useGetProductsQuery`는 전체 상품 데이터를 받아옵니다.
  - `useGetProductByCountQuery(number)` 는 number 만큼의 상품 데이터를 받아옵니다.

### 3. redux/toolkit을 사용하여 전역 데이터 관리하기

- 상품의 북마크 아이콘을 클릭하면 업데이트된 북마크된 상품 데이터들을 localStorage에 저장했습니다.
  - `isBookmarked : true` 데이터를 추가하여 북마크된 상품 데이터들의 북마크 아이콘이 어느 페이지에 가든 일관적으로 활성화되도록 구현했습니다.
- 북마크 아이콘을 클릭하면 토스트 알림이 뜨도록 구현했습니다.
  - 전역 데이터 관리가 필수적이지는 않지만, 간결한 코드 정리를 위해 ToastReducer을 생성하여 데이터를 관리했습니다.

### 4. 무한스크롤 기반 반응형 페이지 개발

- 상품 리스트와 북마크 리스트 마크업과 반응형에 맞춰 CSS 적용을 했습니다.
  - breakpoint는 임의로 1000, 700, 400px로 최대한 UI를 고려한 레이아웃을 구성하였습니다.
  - flex-start를 적용하여 4개의 상품이 있어야 할 공간에 1개의 상품이 있을 때 (북마크 컴포넌트) 레이아웃이 깨지지 않도록 구현했습니다.
- 무한 스크롤은 프로젝트 요구사항에 기반하여 서버에서 전체 100개의 상품 데이터를 이미 받아온 상태로 가정하고 진행했습니다.
  - 실제로 무한 스크롤을 구현한다면 `IntersectionObserver`을 사용하여 스크롤 감지에 따른 데이터 fetch로 로직을 구현해야 되기에 향후 리팩토링을 하고자 합니다.
  - viewport 넓이에 따라 추가로 보여줄 상품 개수를 계산하여 한 행에 4개의 상품이 있는 경우 다음 데이터를 불러올 때 4의 배수에 맞게 불러오도록 하였습니다.

### 5. 컴포넌트 재사용을 위한 상품 컴포넌트 생성

- 컴포넌트들을 최대한 재사용하고자 단일 상품 컴포넌트를 생성하여 4가지 타입에 따른 이미지 소스와 텍스트 등을 각각 추출하여 적용했습니다.
- 북마크 기능을 위한 별표 아이콘 컴포넌트를 생성하여 추가하였습니다.

<br>

## 💖 해결 중인 문제들

### Next.js 13 관련 문제

#### 1. layout.js에서 page.js로 props를 내려 보내는 방법

- Next.js 13은 폴더 기반 라우팅으로 폴더 구조 자체가 라우팅을 정의하는 방식으로 동작합니다.
  - app 폴더 바로 아래의 layout.js 파일은 여러 페이지에 공통으로 적용되는 구성 요소 및 스타일을 포함합니다.
  - Next.js 13 버전의 폴더링 구조를 활용하여, '상품 전체 페이지'와 '북마크 페이지' 위의 공통된 카테고리를 layout.js 파일로 구현했습니다.
  - 문제는 layout.js에서 특정 카테고리 버튼을 클릭하면, '상품 전체 페이지'와 '북마크 페이지'에서 데이터 필터링 로직이 구현되어야 하는데, layout.js에서 각각의 페이지인 `{children}`에 해당하는 page.js로 props를 내려주는 방법을 찾고자 노력 중에 있습니다.

#### 1-1. 해결하고자 한 시도들
- 물론, 컴포넌트로 만들어 페이지 컴포넌트에 import 하는 방법과 redux를 활용한 데이터 전역 관리 등 해결방법이 있습니다.
- Next.js의 폴더링 구조를 활용한 문제 해결 방법이 있는 지에 대해 좀 더 알아볼 예정입니다.
  - [문제 해결에 참고한 stackoverflow 질문](https://stackoverflow.com/questions/60457262/next-js-layout-component-pass-props-to-children)
  - 위의 방법으로 해결하고자 하였지만 해결되지 않았습니다.
#### 1-2. 문제 해결
- Next.js 공식 문서에서 Layout을 통해 데이터를 내려보내는 것을 불가능하다는 것을 알게 되었습니다.
> Passing data between a parent layout and its children is not possible. However, you can fetch the same data in a route more than once, and React will automatically dedupe the requests without affecting performance.
- 출처 : [Next.js Docs](https://nextjs.org/docs/app/building-your-application/data-fetching#fetching-data-at-the-component-level)
> It's supposed to be just an "UI that is shared between multiple pages" of a segment (page.js, loading.js, etc).
- 출처 : [ stackoverflow 질문](https://stackoverflow.com/questions/75238942/how-to-pass-data-from-a-layout-to-the-children-in-the-app-folder-of-next-js)
- 따라서, 간단히 기존 방식인 카테고리 컴포넌트를 생성하여 props를 내려주었습니다.


<br>

## ▶️ 향후 리팩토링 예정

- 타입 스크립트로 프로젝트를 리팩토링
- `IntersectionObserver` 또는 `Virtualized` 라이브러리를 사용하여 무한 스크롤 기능 다시 구현
