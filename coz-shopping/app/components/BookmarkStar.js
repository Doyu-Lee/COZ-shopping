"use client"

import { styled, keyframes } from "styled-components";
import React, { useState } from 'react';


const pulse = keyframes`
  0% {
    transform: scale(0.95);
    transform: translateY(5px);
    /* transform: rotate(0deg); */
  }
  60% {
    transform: scale(1.16);
    transform: translateY(-15px);
    /* transform: rotate(50deg); */
  }
  98% {
    transform: scale(1.05);
    transform: translateY(0px);
    /* transform: rotate(10deg); */
  }
`;

const deactive = keyframes`
  0% {
    transform: scale(0.8);
  }
  30% {
    transform: scale(0.4);
  }
  98% {
    transform: scale(0.7);
  }
`;

const Img = styled.img`
  position: absolute;
  filter: drop-shadow(0px 0px 11px rgba(0, 0, 0, 0.3));
  z-index: 888;
  right: 12px;
  bottom: 12px;
  transition: all 0.3s ease-in-out;
/* border:1px solid yellow; */

  &.modal {
    /* border: 1px solid red; */
    position: static;
  }

  &:hover {
    transform: scale(1.1); /* 아이콘을 클릭할 때 약간 크게 보이도록 스케일 변경 */
  }

  &.active {
    animation: ${pulse} 0.2s linear; /* 클릭 후 약간 커졌다 다시 원래 크기로 돌아가는 애니메이션 효과 */
  }


  &.deactive {
    animation: ${deactive} 0.2s linear; /* 클릭 후 약간 커졌다 다시 원래 크기로 돌아가는 애니메이션 효과 */
  }



`



export default function BookmarkStar ({title}) {
  const [isBookmarked, setIsBookmarked] = useState(false);

  const handleBookmarkBtn = () => {
setIsBookmarked(!isBookmarked)

  };

  return (

    <Img src={isBookmarked ? "/북마크별on.svg" : "/북마크-별표off.svg"}
    onClick={handleBookmarkBtn}
    className={title ? `modal ${isBookmarked ? "active" : "deactive"}` : null}
    alt="북마크"
    />
  )
}

