"use client";

import { useGetProductQuery, useGetProductByCountQuery } from "./redux/productApi";
import MainList from "./components/MainList"
import styled from "styled-components";
import Loading from "./components/Loading";

const Container = styled.article`
/* border: 1px solid green; */
  height: calc(100vh - 59px - 70px);
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 30px 160px 0px 160px;
  /* align-items: center; */
  overflow-y: scroll;

  @media (max-height: 700px) or (max-width: 1000px)  {
    position: relative;
  }
`;

const ItemContainer = styled.section`
  /* border: 1px solid yellow; */
  flex: 1;
  height: 45%;
  margin: 20 0px;
  display: flex;
  flex-direction: column;

  @media (max-height: 700px) or (max-width: 1000px) {
    height: 300px;
    position: absolute;
    &:nth-child(1) {
      top: 30px;
      left: 0px;
    }
    &:nth-child(2) {
      top: 350px;
      left: 0px;
    }

  }
`

const ItemsBox = styled.div`
  /* border: 1px solid blue;  */
  display: flex;
  justify-content: space-between;
  height: 80%;
  
  @media (max-width: 700px) {
    flex-wrap: wrap;
    overflow: hidden;
  }

`;

const H2 = styled.h2`
font-family: 'Inter';
font-weight: 600;
font-size: 24px;
line-height: 38px;
margin-bottom: 11px;
width: 100%;
height: 38px;

@media (max-width: 850px) {
  text-align: center;
  margin-bottom: 20px;
  }

`;

export default function MainPage() {

  // const { isLoading, isFetching, data, error } = useGetProductQuery(null);
  const { isLoading, isFetching, data, error } = useGetProductByCountQuery(4);
// console.log(data)
  return (
    <Container>

      {error ? (
        <p>Oh no, there was an error</p>
      ) : isLoading || isFetching ? (
        <Loading />
      ) : data ? (
        <ItemContainer>
          <H2>상품 리스트</H2>
          <ItemsBox>
            {data.map((product) => (
              <MainList key={product.id} product={product} />
            ))}
          </ItemsBox>
        </ItemContainer>
      ) : null}
        
        {error ? (
        <p>Oh no, there was an error</p>
      ) : isLoading || isFetching ? (
        <Loading />
      ) : data ? (
        <ItemContainer>
          <H2>북마크 리스트</H2>
          <ItemsBox>
            {data.map((product) => (
              <MainList key={product.id} product={product} />
            ))}
          </ItemsBox>
        </ItemContainer>
      ) : null}
    </Container>
  );
}