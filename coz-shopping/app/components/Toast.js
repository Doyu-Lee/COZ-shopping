"use client"
import { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";

const toastIn = keyframes`
  0% {
    opacity: 0;
    transform: translateY(10%);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`

const toastOut = keyframes`
  0% {
    opacity: 1;
    transform: translateX(-2%);
  }
  5% {
    opacity: 0.7;
    transform: translateX(-3%);
  }
  100% {
    opacity: 0;
    transform: translateX(80%);
  }
`

const MessageContainer = styled.div`
    font-size: 1rem;
    z-index: 999999;
    right: 10px;
    /* bottom: 80px;
    right: 12px; */
    margin-bottom: 10px;

    transition: all 0.6s ease-in-out;
    animation: ${toastIn} 0.3s linear;
    /* transition: 0.3s ease; */
    border-radius: 20px;
    box-shadow: 0 0 8px #412dd4;
    background-color: white;
    opacity: 0.8;
    font-weight: 600;

    height: 50px;
    width: 90%;
    /* border: 1px solid red; */
    display: flex;
    justify-content: center;
    align-items: center;
    &.fadeOut {
    animation: ${toastOut} 2s linear;
    transform: translateX(70%);
    opacity: 0.3;
  }

`


const Message = styled.h4`
    /* z-index: 999; */
`

export default function Toast({ text, dismissTime, id }) {
  const [isFading, setIsFading] = useState(false);


  useEffect(() => {
    let mounted = true;
    setTimeout(() => { if (mounted) {setIsFading(true);}
    }, dismissTime - 300);

    return () => {mounted = false;};
  }, []);


  return (
    <MessageContainer key={id} className={` text-red ${isFading ? 'fadeOut' : ''}`}>
        <Message className="text-myBlue">
          {text}
        </Message>
    </MessageContainer>
  );
}