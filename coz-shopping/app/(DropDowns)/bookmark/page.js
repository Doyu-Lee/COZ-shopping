"use client";

import PageList from "../../components/PageList";
import styled from "styled-components";
import { useState, useEffect, useRef, useCallback } from "react";
import { useSelector } from "react-redux";
import EmptyBookmark from "../../components/EmptyBookmark";
import Category from "../../components/Category";

export default function Product() {
  const [selectedMenu, setSelectedMenu] = useState(null);
  const containerRef = useRef(null);

  // 처음에 보여줄 상품 개수와 스크롤 할 때마다 추가로 보여줄 상품 개수
  const [visibleItems, setVisibleItems] = useState(12);
  const [loadMoreItemCount, setLoadMoreItemCount] = useState(8);

  const handleScroll = useCallback(() => {
    const { scrollTop, clientHeight, scrollHeight } = document.documentElement;
    if (scrollTop + clientHeight >= scrollHeight) {
      // 스크롤이 페이지의 가장 아래로 도달했을 때 순차적으로 가져오도록 함
      setVisibleItems((prevCount) => prevCount + loadMoreItemCount);
    }
  }, [loadMoreItemCount]);

  const handleResize = () => {
    // 현재 viewport 넓이를 가져옴
    const viewportWidth = window.innerWidth;
    let newLoadMoreItemCount;

    // viewport 넓이에 따라 보여줄 상품 개수 계산
    if (viewportWidth >= 1000 && visibleItems > 12) {
      newLoadMoreItemCount = 4 + (4 - (visibleItems % 4));
    } else if (viewportWidth < 1000 && visibleItems > 12) {
      newLoadMoreItemCount = 3 + (3 - (visibleItems % 3));
    } else if (viewportWidth < 700 && visibleItems > 12) {
      newLoadMoreItemCount = 2 + (2 - (visibleItems % 2));
    } else {
      newLoadMoreItemCount = 8; // 기본값 설정
    }
    setLoadMoreItemCount(newLoadMoreItemCount);
  };

  // useEffect로 초기 로드 및 리사이즈 이벤트 리스너 등록
  useEffect(() => {
    const container = containerRef.current;

    if (container) {
      // wheel 이벤트 핸들러 등록
      const handleWheel = (event) => {
        if (event.deltaY > 0) {
          // 마우스 휠을 내릴 때 추가 데이터를 가져온다.
          handleScroll();
        }
      };

      container.addEventListener("wheel", handleWheel);

      // 리사이즈 이벤트 핸들러 등록
      handleResize();
      window.addEventListener("scroll", handleScroll);
      window.addEventListener("resize", handleResize);

      return () => {
        container.removeEventListener("wheel", handleWheel);
        window.removeEventListener("scroll", handleScroll);
        window.removeEventListener("resize", handleResize);
      };
    }
  }, [visibleItems, handleScroll,handleResize]);

  let bookMarkedProducts = useSelector((store) => store.bookMarkedProducts);

  if (selectedMenu && selectedMenu !== "전체") {
    bookMarkedProducts = bookMarkedProducts.filter(
      (item) => item.value.type === selectedMenu
    );
  }

  return (
    <Section ref={containerRef}>
      <Category selectedMenu={selectedMenu} setSelectedMenu={setSelectedMenu} />

      {Object.keys(bookMarkedProducts).length ? (
        <Wrapper>
          {bookMarkedProducts.slice(0, visibleItems).map((product) => (
            // 상품 데이터 배열에서 보여줄 개수만큼 슬라이싱하여 렌더링
            <PageList
              key={product.value.id}
              product={product.value}
              id={product.value.id}
              isBookmarked={product.value.isBookmarked}
            />
          ))}
        </Wrapper>
      ) : (
        <EmptyBookmark />
      )}
    </Section>
  );
}

const Wrapper = styled.div`
  /* border: 1px solid red; */
  width: 100%;
  overflow: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: first baseline;
  padding: 0 0 0 7%;
  margin-bottom: 5%;
  @media (max-width: 1000px) {
    padding: 0 0 0 2%;
  }
  @media (max-width: 700px) {
    padding: 0 0 0 6%;
  }
  @media (max-width: 400px) {
    padding: 0;
  }
`;

const Section = styled.section`
  height: 100%;
`;
