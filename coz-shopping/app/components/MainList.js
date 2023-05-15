
import styled from "styled-components";

const Item = styled.div`
  /* border: 1px solid red; */
  height: 100%;
  flex: 1;
  /* width: 23%; */
  display: flex;
  flex-direction: column;
  margin-right: 4%;

  &:last-child {
    margin-right: 0;
  }

  @media (max-width: 1000px) {
    /* 3개의 아이템으로 보이도록 스타일 조정 */
    flex-basis: 30%;
    &:nth-child(4) {
    margin-right: 0;
  }
  }
  @media (max-width: 600px) {
    /* 3개의 아이템으로 보이도록 스타일 조정 */
    flex-basis: 40%;
    &:nth-child(2) {
    margin-right: 0;
  }
  }
  @media (max-width: 400px) {
    /* 3개의 아이템으로 보이도록 스타일 조정 */
    flex-basis: 100%;
    &:first-child {
    margin-right: 0;
  }
  }
`;

const ImgWrapper = styled.div`
  /* border: 1px solid orange; */
  width: 100%;
  flex: 1.3;
  overflow: hidden;


`

const Img = styled.img`
  border-radius: 12px;
  width: 100%;
  height: 100%;
  object-fit: cover;
`

const DesWrapper = styled.div`
margin-top: 10px;
width: 100%;
flex: 0.5;
/* border: 1px solid black; */
display: flex;
justify-content: space-between;
align-items: flex-start;
`

export default function MainList({user}) {
  return (
          <Item className="" key={user.id}>
              <ImgWrapper>
                <Img src={user.image_url} alt={user.title} />
              </ImgWrapper>
              <DesWrapper>
                <div>
                  <h3>{user.title}</h3>
                  <h3>{user.sub_title}</h3>
                </div>
                <div>
                  <h3>{user.discountPercentage}%</h3>
                  <h3>{user.price}원</h3>
                </div>
              </DesWrapper>
          </Item>
    )
}
