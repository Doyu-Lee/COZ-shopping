
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
  @media (max-width: 700px) {
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
  /* flex: 1.3; */
  overflow: hidden;
  height: 160px;
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
  /* flex: 0.5; */
  /* border: 1px solid black; */
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`

const ProductH3 = styled.span `
  word-break: keep-all;
  flex: 1;

`

export default function MainList({product}) {
  console.log(product);

  if (product.type === 'Category') {
    return (
            <Item className="" key={product.id}>
                <ImgWrapper>
                  <Img src={product.image_url} alt={product.title} />
                </ImgWrapper>
                <DesWrapper>
                  <div>
                    <h3 className="font-bold"># {product.title}</h3>
                    <h3></h3>
                  </div>
                  <div>
                    <h3></h3>
                    
                  </div>
                </DesWrapper>
            </Item>
      )
  }

  if (product.type === 'Brand') {
    // console.log(typeof product.follower)
    return (
            <Item className="" key={product.id}>
                <ImgWrapper>
                  <Img src={product.brand_image_url} alt={product.brand_name} />
                </ImgWrapper>
                <DesWrapper>
                  <div>
                    <h3 className="font-bold">{product.brand_name}</h3>
                    <h3>{product.sub_title}</h3>
                  </div>
                  <div>
                    <h3 className="font-bold">관심고객수</h3>
                    <h3 className="text-right">{product.follower.toLocaleString()}</h3>
                  </div>
                </DesWrapper>
            </Item>
      )
    }

  if (product.type === 'Exhibition') {
    return (
            <Item className="" key={product.id}>
                <ImgWrapper>
                  <Img src={product.image_url} alt={product.title} />
                </ImgWrapper>
                <DesWrapper>
                  <div>
                    <h3 className="font-bold">{product.title}</h3>
                    <h3>{product.sub_title}</h3>
                  </div>
                </DesWrapper>
            </Item>
      )
  }

  if (product.type === 'Product') {
    // console.log(typeof product.price)
    return (
            <Item className="" key={product.id}>
                <ImgWrapper>
                  <Img src={product.image_url} alt={product.title} />
                </ImgWrapper>
                <DesWrapper>
                  
                    <ProductH3 className="font-bold">{product.title}</ProductH3>
                  
                  <div className="text-right ">
                    <h3 className="font-bold text-myBlue">{product.discountPercentage}%</h3>
                    <h3 className="text-sm">{Number(product.price).toLocaleString()}원</h3>
                  </div>
                </DesWrapper>
            </Item>
      )
  }

}
