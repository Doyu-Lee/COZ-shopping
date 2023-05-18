"use client";

import PageList from "../../../components/PageList"
import styled from "styled-components";
import { useGetProductsQuery } from "../../../redux/productApi"
import { useState, useEffect } from "react";


const Wrapper = styled.div`
/* border: 1px solid red; */
  width: 100%;
  overflow: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0 3%;

  @media (max-width: 700px) {
  padding: 0;
  }
`

const Section = styled.section`
width: 100%;
/* border: 1px solid green; */
`

export default function Product() {

const { data, error, isLoading, isFetching  } = useGetProductsQuery(null);
console.log(data)

// 처음에 보여줄 상품 개수와 스크롤 할 때마다 추가로 보여줄 상품 개수
const initialItemCount = 12;
let loadMoreItemCount;
const [visibleItems, setVisibleItems] = useState(initialItemCount);

const handleScroll = () => {
  const { scrollTop, clientHeight, scrollHeight } = document.documentElement;
  if (scrollTop + clientHeight >= scrollHeight) {
    // 스크롤이 페이지의 가장 아래로 도달했을 때
    setVisibleItems(prevCount => prevCount + loadMoreItemCount);
  }
};

const handleResize = () => {
  // 현재 viewport 넓이를 가져옴
  const viewportWidth = window.innerWidth;

  // viewport 넓이에 따라 보여줄 상품 개수 계산
  if (viewportWidth >= 1000) {
    loadMoreItemCount = 8; // viewport 넓이가 1200px 이상일 때
  } else if (viewportWidth >= 700) {
    loadMoreItemCount = 6; // viewport 넓이가 768px 이상일 때
  } else {
    loadMoreItemCount = 4; // viewport 넓이가 768px 미만일 때
  }

  setVisibleItems(loadMoreItemCount);
};

// useEffect로 초기 로드 및 리사이즈 이벤트 리스너 등록
useEffect(() => {
  handleResize(); // 초기 로드 시 한 번 실행
  window.addEventListener('scroll', handleScroll);
  window.addEventListener('resize', handleResize);
  
  return () => {
    window.removeEventListener('scroll', handleScroll);
    window.removeEventListener('resize', handleResize);
  };
}, []);





  return (

  <Section>
    {error ? (
      <p>Oh no, there was an error</p>
    ) : isLoading || isFetching ? (
      <p>Loading...</p>
    ) : data ? (
      
      <Wrapper>
      {data.slice(0, visibleItems).map((product) => (
        // 상품 데이터 배열에서 보여줄 개수만큼 슬라이싱하여 렌더링
        
  
        <PageList key={product.id} product={product} />
      ))}
      </Wrapper>
    ) : null}
  </Section>
  )
}