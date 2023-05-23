"use client"

import styled, {css} from "styled-components";
import { useState } from "react";
import React from 'react'

const 전체 = '전체'
const 상품 = 'Product'
const 카테고리 = 'Category'
const 기획전 = 'Exhibition'
const 브랜드 = 'Brand'

export default function Category({selectedMenu, setSelectedMenu}) {
  const [isHovered, setIsHovered] = useState(false);
  const [hoveredMenu, setHoveredMenu] = useState(null);

  const handleTitleHover = (menu) => {
    setIsHovered(true);
    setHoveredMenu(menu)
  }
  const handleTitleLeave = () => {
    setIsHovered(false);
    setHoveredMenu(null)

  }
  const handleTitleClick = (menu) => {
    setSelectedMenu(menu);
  }

  const CategoryList = [{en:전체, ko:'전체'}, {en:상품, ko:'상품'}, {en:카테고리, ko:'카테고리'}, {en:기획전, ko:'기획전'}, {en:브랜드, ko:'브랜드'}]

  return (
      <Section>
        {CategoryList.map((cate) =>
          <MenuBox key={cate.en} onClick={() => handleTitleClick(cate.en)}>
            <ImageWrapper>
              <StyledImage isHovered={hoveredMenu===cate.en ? 'isHovered' : null} src={`/${cate.en}.png`} width={82} height={82} alt="cate" />
            </ImageWrapper>
            <Title onMouseEnter={()=>handleTitleHover(cate)} onMouseLeave={handleTitleLeave} 
            className={ selectedMenu === cate.en ? 'selected' : ''}>{cate.ko}</Title>
          </MenuBox>
        )}
      </Section>
  )
}


const Section = styled.section`
  /* border:1px solid yellow; */
  /* height: calc(100vh - 59px - 70px); */
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
`;

const StyledImage = styled.img`
  transition: transform 0.3s;

  ${({ isHovered }) =>
    isHovered &&
    css`
        transform: ${({ isHovered }) => (isHovered ? 'scale(1.1)' : 'scale(1)')};
    `}

  &:hover {
  cursor: pointer; 
  transform : scale(1.1) ;
  }
`;

const MenuBox = styled.div`
  margin: 5px 18px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* border: 1px solid red; */
  
`;

const Title = styled.h2`
margin-top: 0.5rem;
transition: all 0.3s;
cursor: pointer;
border-bottom: 2px solid transparent;

  &.selected {
    color: #412dd4; 
    font-weight: 600;
    border-bottom-color: #412dd4; 
  }

  @media (max-width: 600) {
    font-size: 10px;
    }

  @media (max-width: 460px) {
    display: none;
    }
`;

const ImageWrapper = styled.div`
  overflow: hidden;
  border-radius: 50%;
`;
