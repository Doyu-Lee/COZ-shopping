"use client";

import React from "react";
import styled, { keyframes } from "styled-components";

// 로딩 컴포넌트
export default function Loading() {
  return (
    <LoadingContainer>
      <LoadingSpinner />
    </LoadingContainer>
  );
}

// 로딩 애니메이션 키프레임 정의
const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

// 로딩 컴포넌트 스타일 정의
const LoadingContainer = styled.div`
  /* border: 1px solid red; */
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: calc(100vh - 300px);
`;

const LoadingSpinner = styled.div`
  display: inline-block;
  width: 60px;
  height: 60px;
  border: 11px solid rgba(0, 0, 0, 0.2);
  border-left-color: #00a8ff;
  border-radius: 50%;
  animation: ${rotate} 1s ease-in-out infinite;
`;
