"use client"

// import Image from "next/image"
import styled from "styled-components";
import { useState } from "react";

const StyledImage = styled.img`
  transition: transform 0.3s;
  transform: ${({ isHovered }) => (isHovered ? 'scale(1.1)' : 'scale(1)')};
`;

const MenuBox = styled.div`
  margin: 5px 18px;
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

`;

const ImageWrapper = styled.div`
  overflow: hidden;
  border-radius: 50%;
`;





export default function Category({ children }) {
  const [isHovered, setIsHovered] = useState(false);
  const [hoveredMenu, setHoveredMenu] = useState(null);
  const [selectedMenu, setSelectedMenu] = useState(null);

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


  return (
    <section className="w-screen h-99">
      <div className="flex justify-center items-center my-5">

        <MenuBox className={`flex flex-col justify-center items-center ${selectedMenu === '전체' ? 'selected' : ''}`} >
          <ImageWrapper><StyledImage isHovered={hoveredMenu==='전체' ? 'isHovered' : null} src="/전체.png" width={82} height={82} alt="전체" /></ImageWrapper>
          <Title onClick={() => handleTitleClick('전체')} onMouseEnter={()=>handleTitleHover('전체')} onMouseLeave={handleTitleLeave}>전체</Title>
        </MenuBox>




        <MenuBox className={`flex flex-col justify-center items-center ${selectedMenu === '상품' ? 'selected' : ''}`}> 
          <ImageWrapper><StyledImage isHovered={hoveredMenu==='상품' ? 'isHovered' : null} src="/상품.png" width={82} height={82} alt="상품" /></ImageWrapper>
          <Title  onClick={() => handleTitleClick('상품')} onMouseEnter={()=>handleTitleHover('상품')} onMouseLeave={handleTitleLeave}>상품</Title>   
        </MenuBox>
        <MenuBox className={`flex flex-col justify-center items-center ${selectedMenu === '카테고리' ? 'selected' : ''}`}> 
          <ImageWrapper><StyledImage isHovered={hoveredMenu==='카테고리' ? 'isHovered' : null} src="/카테고리.png" width={82} height={82} alt="카테고리" /></ImageWrapper>
          <Title  onClick={() => handleTitleClick('카테고리')} onMouseEnter={()=>handleTitleHover('카테고리')} onMouseLeave={handleTitleLeave}>카테고리</Title>
        </MenuBox>
        <MenuBox className={`flex flex-col justify-center items-center ${selectedMenu === '기획전' ? 'selected' : ''}`}> 
          <ImageWrapper><StyledImage isHovered={hoveredMenu==='기획전' ? 'isHovered' : null} src="/기획전.png" width={82} height={82} alt="기획전" /></ImageWrapper>
          <Title  onClick={() => handleTitleClick('기획전')} onMouseEnter={()=>handleTitleHover('기획전')} onMouseLeave={handleTitleLeave}>기획전</Title>
        </MenuBox>
        <MenuBox className={`flex flex-col justify-center items-center ${selectedMenu === '브랜드' ? 'selected' : ''}`}> 
          <ImageWrapper><StyledImage isHovered={hoveredMenu==='브랜드' ? 'isHovered' : null} src="/브랜드.png" width={82} height={82} alt="브랜드" /></ImageWrapper>
          <Title  onClick={() => handleTitleClick('브랜드')} onMouseEnter={()=>handleTitleHover('브랜드')} onMouseLeave={handleTitleLeave}>브랜드</Title>
        </MenuBox>
      </div>
      <main>{children}</main>
    </section>

  )
}
