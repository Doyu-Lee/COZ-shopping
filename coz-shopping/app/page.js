"use client";

import { useGetProductQuery, useGetProductByCountQuery } from "./redux/productApi";
import MainList from "./components/MainList"
import styled from "styled-components";

const Container = styled.article`
/* border: 1px solid green; */
  height: calc(100vh - 59px - 70px);
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 44px;
  /* align-items: center; */
`;

const ItemContainer = styled.section`
  border: 1px solid yellow;
  height: 45%;
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;


`

const ItemsBox = styled.div`
  border: 1px solid blue; 
  display: flex;
  justify-content: space-between;
  height: 80%;

`;

const H2 = styled.h2`
font-family: 'Inter';
font-weight: 600;
font-size: 24px;
line-height: 38px;
margin-bottom: 15px;
width: 100%;
height: 38px;


`;

export default function Home() {

  // const { isLoading, isFetching, data, error } = useGetUsersQuery(null);
  const { isLoading, isFetching, data, error } = useGetProductByCountQuery(4);
// console.log(data)
  return (
    <Container>

      {error ? (
        <p>Oh no, there was an error</p>
      ) : isLoading || isFetching ? (
        <p>Loading...</p>
      ) : data ? (
        <ItemContainer>
          <H2>상품 리스트</H2>
          <ItemsBox>
            {data.map((user) => (
              <MainList key={user.id} user={user} />
            ))}
          </ItemsBox>
        </ItemContainer>
      ) : null}
        
        <ItemContainer>
          <H2>북마크 리스트</H2>
          <ItemsBox>
            {data.map((user) => (
              <MainList key={user.name} user={user} />
            ))}
          </ItemsBox>
        </ItemContainer>
    </Container>
  );
}