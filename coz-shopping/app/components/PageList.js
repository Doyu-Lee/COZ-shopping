"use client"
import styled from "styled-components";
import BookmarkStar from "./BookmarkStar"
import Modal from "./ItemModal";
import { useState, useRef } from 'react';

const Product = "Product"
const Category = "Category"

const Item = styled.div`
  /* border: 1px solid red; */
  height: 100%;
  width: 20%;
  display: flex;
  flex-direction: column;
  margin-right: 4%;
  margin-bottom: 20px;


  @media (min-width: 1001px) {
  &:nth-child(4n) {
    margin-right: 0;
  }
  }

  @media (max-width: 1000px) {
    flex-basis: 30%;
    &:nth-child(3n) {
    margin-right: 0;
  }
  }
  @media (max-width: 700px) {
    flex-basis: 45%;
    &:nth-child(2n) {
    margin-right: 0;
  }
  }
  @media (max-width: 400px) {
    flex-basis: 100%;
    &:first-child {
    margin-right: 0;
  }
  }
`;

const ImgWrapper = styled.div`
  /* border: 1px solid orange; */
  width: 100%;
  overflow: hidden;
  height: 160px;
  position: relative;
  border-radius: 12px;
  overflow: hidden;


`

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  overflow: hidden;
  transition: all 0.3s ease; /* 텍스트 색상과 이미지 필터에 대한 transition 효과 설정 */

  &:hover {
    background-color: white;

    transform: scale(1.07);
    filter: opacity(0.88); /* 이미지에 대한 hover 시 밝기 증가 */
    /* overflow: hidden; */

  }

`

const DesWrapper = styled.div`
  margin-top: 10px;
  width: 100%;
  /* flex: 0.5; */
  /* border: 1px solid black; */
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
`
const Span = styled.span `
  flex: 1;
`


export default function PageList({product}) {
  const [isOpen, setIsOpen] = useState(false);
  const StarRef = useRef(null);

  const openModalHandler = (e) => { 
    if (StarRef.current && !StarRef.current.contains(e.target)) setIsOpen(!isOpen);}

    return (
      <Item className="" key={product.id}>
          <ImgWrapper onClick={openModalHandler}>
            <Img src={product.image_url || product.brand_image_url} alt={product.title || product.brand_name} />
            <BookmarkStar StarRef={StarRef} />
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
          <Modal openModalHandler={openModalHandler} isOpen={isOpen} title={product.brand_name ? `${product.brand_name}` : `# ${product.title}`} img={product.brand_image_url ? product.brand_image_url : product.image_url } /> 
          : null}
      </Item>
)           
}
