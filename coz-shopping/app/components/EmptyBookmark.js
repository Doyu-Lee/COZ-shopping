import styled from 'styled-components';

const Container = styled.div`
  /* border: 1px solid red; */
  height: 70%;
  width: 100%;
  display: flex;
  /* justify-content: center; */
  /* align-items: start; */
`

const EmptyBookmarkContainer = styled.div`
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 30px;
  background-color: #f8f8f8;
  border: 3px dotted #ccc;
  border-radius: 50px;
  width: 70%;
`;

const EmptyBookmarkTitle = styled.h3`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const EmptyBookmarkText = styled.p`
  font-size: 16px;
  color: #555;
`;

const EmptyBookmark = () => {
  return (
    <Container>
      <EmptyBookmarkContainer>
        <EmptyBookmarkTitle className='text-myBlue'>한 번 둘러보세요 👀</EmptyBookmarkTitle>
        <EmptyBookmarkText>북마크된 아이템이 없습니다.</EmptyBookmarkText>
      </EmptyBookmarkContainer>
    </Container>
  );
};

export default EmptyBookmark;