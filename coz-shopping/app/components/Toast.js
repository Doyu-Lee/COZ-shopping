"use client";
import styled, { CSS, keyframes } from "styled-components";
import { useEffect, useState } from "react";

export default function Toast({ text, dismissTime }) {
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    let mounted = true;
    setTimeout(() => {
      if (mounted) {
        setIsFading(true);
      }
    }, dismissTime);
    return () => {
      mounted = false;
    };
  }, []);

  return (
    <MessageContainer className={`${isFading ? "fadeOut" : ""}`}>
      <h4 className="text-myBlue">{text}</h4>
    </MessageContainer>
  );
}

const toastIn = keyframes`
  0% {
    opacity: 0;
    transform: translateY(10%);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

const toastOut = keyframes`
  0% {
    opacity: 1;
    transform: translateX(0);

  }
  /* 5% {
    opacity: 0.7;
    transform: translateX(-3%);
  } */
  100% {
    opacity: 0;
    transform: translateX(100%);
    display: hidden;
  }
  `;

const MessageContainer = styled.div`
  font-size: 1rem;
  z-index: 999999;
  right: 10px;
  margin-bottom: 10px;

  animation: ${toastIn} 0.3s linear;
  border-radius: 20px;
  box-shadow: 0 0 8px #412dd4;
  background-color: white;
  opacity: 0.8;
  font-weight: 600;
  transition: all 2s ease-in-out;

  height: 50px;
  width: 90%;
  /* border: 1px solid red; */
  display: flex;
  justify-content: center;
  align-items: center;

  &.fadeOut {
    animation: ${toastOut} 2s linear forwards;
  }
`;
