# 솔로 프로젝트 - 나만의 쇼핑몰 앱 

<br>

> 코드스테이츠 SEB FE 44기 솔로 프로젝트 과제로 간단한 북마크 기능이 들어있는 쇼핑몰 앱을 구현했습니다.

<br>

- __기간 :__ 2023.5.13. ~ _(진행 중)_
- __프로젝트 요구사항 분석 및 플래닝__ : 
    - 페어와 함께 이슈 티켓을 생성하고 플래닝 포커를 통해 스프린트 범위를 설정했습니다.
    - [요구사항 분석 및 플래닝 링크](https://github.com/users/Doyu-Lee/projects/2)
- npm run dev로 프로젝트를 실행합니다.

<br>

## ⚒ 기술 스택
[![redux/toolkit](https://img.shields.io/badge/redux/toolkit-%2300BFFF?style=plastic&logo=redux&logoColor=white)](https://redux-toolkit.js.org/) <br>
[![nextjs](https://img.shields.io/badge/nextjs-%23000000?style=plastic&logo=next.js&logoColor=white)](https://nextjs.org/)<br>
[![tailwindcss](https://img.shields.io/badge/tailwindcss-%231572B6?style=plastic&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)<br>
[![styled-components](https://img.shields.io/badge/styled--components-%23DB7093?style=plastic&logo=styled-components&logoColor=white)](https://styled-components.com/)<br>

<br>

## 📢 주요 기능 

- __메인 페이지 :__ 무작위 상품 4개, 북마크한 상품 4개를 전시합니다.
- __상품 리스트 페이지 :__ 모든 상품을 전시하며, 필터링 기능이 있습니다. (Next.js 13 버전 관련 문제 - 필터링 기능 진행 중)
- __북마크 페이지 :__ 북마크한 상품을 전시하며, 필터링 기능이 있습니다. (Next.js 13 버전 관련 문제 - 필터링 기능 진행 중)
- __공통 기능 :__ 
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
### 커스텀 훅을 활용한 Header & Footer 섹션 기능 개발 
- Next.js의 Layout.js 파일을 활용하여 고정된 Header & Footer 섹션을 생성했습니다.
- UI를 고려하여 hover 시에는 햄버거 버튼이 약간 확대되고, 클릭하면 드롭 다운 메뉴가 나옵니다.
  - 드롭 다운은 메뉴 혹은 해당 컴포넌트 바깥을 클릭하면 사라지도록 구현했습니다.

### redux/toolkit의 `createApi`를 사용하여 데이터 받아오기
- Redux Toolkit의 `createApi`를 사용하여 API를 관리하기 위한 설정과 엔드포인트를 정의했습니다.
- `createApi`함수를 사용하여 'productApi'라는 API 인스턴스를 생성한 후, useGetProductsQuery 등의 훅을 내보냈습니다.
  - useGetProductsQuery는 전체 상품 데이터를 받아옵니다.
  - useGetProductByCountQuery(number) 는 number 만큼의 상품 데이터를 받아옵니다. 

### redux/toolkit을 사용하여 전역 데이터 관리하기
- 상품의 북마크 아이콘을 클릭하면 업데이트된 북마크된 상품 데이터들을 localStorage에 저장했습니다.
  - isBookmarked : true 데이터를 추가하여 북마크된 상품 데이터들의 북마크 아이콘이 어느 페이지에 가든 일관적으로 활성화되도록 구현했습니다.
- 북마크 아이콘을 클릭하면 토스트 알림이 뜨도록 구현했습니다.
  - 전역 데이터 관리가 필수적이지는 않지만, 간결한 코드 정리를 위해 ToastReducer을 생성하여 데이터를 관리했습니다.

### 무한스크롤 기반 반응형 페이지 개발
- 상품 리스트와 북마크 리스트 마크업과 반응형에 맞춰 CSS 적용을 했습니다.
  - breakpoint는 임의로 1000, 700, 400px로 최대한 UI를 고려한 레이아웃을 구성하였습니다.
  - flex-start를 적용하여 4개의 상품이 있어야 할 공간에 1개의 상품이 있을 때 (북마크 컴포넌트) 레이아웃이 깨지지 않도록 구현했습니다.
- 무한 스크롤은 프로젝트 요구사항에 기반하여 서버에서 전체 100개의 상품 데이터를 이미 받아온 상태로 가정하고 진행했습니다.
  - 실제로 무한 스크롤을 구현한다면 IntersectionObserver을 사용하여 스크롤 감지에 따른 데이터 fetch로 로직을 구현해야 되기에 향후 리팩토링을 하고자 합니다.
  - viewport 넓이에 따라 추가로 보여줄 상품 개수를 계산하여 한 행에 4개의 상품이 있는 경우 다음 데이터를 불러올 때 4의 배수에 맞게 불러오도록 하였습니다.

### 컴포넌트 재사용에 위한 상품 컴포넌트 생성
- 컴포넌트들을 최대한 재사용하고자 단일 상품 컴포넌트를 생성하여 4가지 타입에 따른 이미지 소스와 텍스트 등을 각각 추출하여 적용했습니다.
- 북마크 기능을 위한 별표 아이콘 컴포넌트를 생성하여 추가하였습니다.

### 카테고리 컴포넌트 개발
- Next.js 13은 폴더 기반 라우팅으로 폴더 구조 자체가 라우팅을 정의하는 방식으로 동작합니다.
  - app 폴더 바로 아래의 layout.js 파일은 여러 페이지에 공통으로 적용되는 구성 요소 및 스타일을 포함합니다.
  - layout.js 파일을 활용해 Header, Footer를 넣고 그 안의 layout.js 파일로는 메인 페이지 상단에 고정된 카테고리 섹션을 생성했습니다.
-> _ 이로 인한 children에 props를 내려 보내 주는 방법에 대한 고민 중에 있습니다. [(아래 'Next.js 13 관련 문제 ' 섹션에서 서술)](#nextjs-13-관련-문제)


<br>

## 💖 해결 중인 문제들

### 
1. 모달 / 토스트 애니메이션 구현
  - 조건부 렌더링을 활용하여 특정 조건에서 컴포넌트를 mount 시킬 때 자연스러운 UI를 구현하고자 했습니다.
  -> useEffect를 활용하여 className을 조건부 스타일링 하는 방법으로 문제를 해결했습니다. 

``` javascript
// 예시
  useEffect(() => {
    let mounted = true;
    setTimeout(() => { if (mounted) {setIsFading(true);}
    }, dismissTime - 500);
    return () => {
      mounted = false;};
  }, [dismissTime]);
```
  - 그러나, 토스트 애니메이션의 경우 클릭수에 맞춰 여러 토스트가 mount 되면서 다시 unmount되는 구조로, flex를 사용하여 순서대로 나오고, 사라지도록 구현하고자 했지만 연속해서 클릭했을 때 레이아웃이 깨지는 문제와 사라지는 토스트에 맞춰 새로 생성된 토스트가 함께 바로 사라지는 문제가 생겼습니다.
    - useEffect 의존성 배열을 변경하여 새로운 토스트가 나타날 때 이전 토스트의 효과가 영향을 받지 않고자 했으나 아직 문제 해결이 되지 않은 상태입니다.

### Next.js 13 관련 문제 
1. 로딩이 뜨지 않는 문제
  - [위에서 설명한 바와 같이](#카테고리-컴포넌트-개발) Next.js 13은 폴더 기반 라우팅으로 폴더 구조 자체가 라우팅을 정의하는 방식으로 동작합니다.
    - app 폴더 바로 아래의 layout.js 파일은 여러 페이지에 공통으로 적용되는 구성 요소 및 스타일을 포함합니다.
    - app 폴더 바로 아래의 page.js 파일은 실제 웹 애플리케이션의 페이지를 나타내는 파일 중에서도 메인 페이지를 가리킵니다.
    - app 폴더 바로 아래의 loading.js 파일은 로딩 상태를 나타내기 위한 컴포넌트를 정의하는 데 사용됩니다.
  - 이렇게 이해한 바에 따라 app 폴더 바로 아래에 loading.js 폴더를 생성하여 로딩 컴포넌트를 추가하였지만 로딩이 구현되지 않고 있습니다.

<br>

2. layout.js에서 page.js로 props를 내려 보내는 방법
  - Next.js 13 버전의 폴더링 구조를 활용하여, '상품 전체 페이지'와 '북마크 페이지' 위의 공통된 카테고리를 layout.js 파일로 구현했습니다.
  - 문제는 layout.js에서 특정 카테고리 버튼을 클릭하면, '상품 전체 페이지'와 '북마크 페이지'에서 데이터 필터링 로직이 구현되어야 하는데, layout.js에서 각각의 페이지에 해당하는 page.js로 props를 내려주는 방법을 찾고자 노력 중에 있습니다.
  - 물론, 컴포넌트로 만들어 페이지 컴포넌트에 import 하는 방법과 redux를 활용한 데이터 전역 관리 등 해결방법이 있지만 폴더링 구조를 활용한 문제 해결 방법이 있는 지에 대해 좀 더 알아볼 예정입니다.
    - 참고한 stackoverflow [링크](https://stackoverflow.com/questions/60457262/next-js-layout-component-pass-props-to-children)
    - 해당 방법으로 해결하고자 하였지만 해결되지 않았습니다.


<br>

## ⚒ 향후 리팩토링 예정
- 타입 스크립트로 프로젝트를 리팩토링
- IntersectionObserver을 사용하여 무한 스크롤 기능 다시 구현 
