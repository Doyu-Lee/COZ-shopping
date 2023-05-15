"use client"

import styled from "styled-components";
import React, { useState } from 'react';


const Img = styled.img`
  position: absolute;
  filter: drop-shadow(0px 0px 11px rgba(0, 0, 0, 0.3));
  z-index: 999;
  right: 12px;
  bottom: 12px;


`

export default function BookmarkStar () {
  const [isBookmarked, setIsBookmarked] = useState(false);

  const handleBookmarkBtn = () => setIsBookmarked(!isBookmarked);


  return (

    <Img src={isBookmarked ? '북마크별on.svg' : '북마크-별표off.svg'}
    onClick={handleBookmarkBtn}
    alt="북마크"
    />
  )
}