
import styled from "styled-components";
import BookmarkStar from "./BookmarkStar"
import Modal from "./ItemModal";
import { useState, useRef } from 'react';

const Product = "Product"
const Category = "Category"

export default function MainList({product, isBookmarked}) {
  const [isOpen, setIsOpen] = useState(false);
  const StarRef = useRef(null);

  const openModalHandler = (e) => { 
    if (StarRef.current && !StarRef.current.contains(e.target)) setIsOpen(!isOpen);}

    return (
      <Item className="" key={product.id}>
          <ImgWrapper onClick={openModalHandler}>
            <Img src={product.image_url || product.brand_image_url} alt={product.title || product.brand_name} />
            <BookmarkStar StarRef={StarRef} id={product.id} isBookmarked={isBookmarked}/>
          </ImgWrapper>
          <DesWrapper onClick={openModalHandler}>
            <Span>
              {product.type === Product ? 
                <ProductH3 className="font-bold">{product.title}</ProductH3> :
                <h3 className="font-bold">
                {product.type === Category ? "# " + product.title
                      : product.title || product.brand_name}</h3>
              }
                <h3 className="text-sm ">{product.sub_title}</h3> 
            </Span>
            <div className="text-right ">
              <h3 className={`font-bold ${product.type === Product ? "text-myBlue" : ""}`} >
                {product.brand_name ? "관심고객수" : 
                  product.discountPercentage? product.discountPercentage + "%"
                      : ""}
              </h3>
              <span className={`text-sm ${product.type === Product ? "" : ""}`}>
                {product.brand_name ? Number(product.follower).toLocaleString() : product.price
                  ? Number(product.price).toLocaleString() + "원"
                  : ""}
              </span>
            </div>
          </DesWrapper>
          {isOpen === true ? 
          <Modal openModalHandler={openModalHandler} isOpen={isOpen} id={product.id} title={product.brand_name ? `${product.brand_name}` : `# ${product.title}`} img={product.brand_image_url ? product.brand_image_url : product.image_url } /> 
          : null}
      </Item>
  )          
  }

const Item = styled.div`
  /* border: 1px solid red; */
  height: 100%;
  width: 22%;
  display: flex;
  flex-direction: column;
  margin-right: 4%;

  &:nth-child(4) {
    margin-right: 0;
  }

  @media (max-width: 1000px) {
    /* 3개의 아이템으로 보이도록 스타일 조정 */
    flex-basis: 30.6%;
    &:nth-child(3) {
    margin-right: 0;
  }
  }

  @media (max-width: 700px) {
    /* 3개의 아이템으로 보이도록 스타일 조정 */
    flex-basis: 48%;
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
  width: 100%;
  overflow: hidden;
  height: 160px;
  position: relative;
  border-radius: 12px;
  overflow: hidden;
`

const Img = styled.img`
  border-radius: 12px;
  width: 100%;
  height: 100%;
  object-fit: cover;
  overflow: hidden;
  transition: all 0.3s ease; /* 텍스트 색상과 이미지 필터에 대한 transition 효과 설정 */

  &:hover {
    background-color: white;
    cursor: pointer;
    transform: scale(1.07);
    filter: opacity(0.88); /* 이미지에 대한 hover 시 밝기 증가 */
  }
`

const DesWrapper = styled.div`
  margin-top: 10px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  transition: all 1s ease; /* 텍스트 색상과 이미지 필터에 대한 transition 효과 설정 */
  &:hover {
    cursor: pointer;
    background: linear-gradient(to right, blue, #8a2be2); /* 그래디언트 효과 추가 */
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;  }
`

const ProductH3 = styled.span `
  word-break: keep-all;
  flex: 1;
`
const Span = styled.span `
  flex: 1;
`