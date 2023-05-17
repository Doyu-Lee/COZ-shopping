"use client"

import { useState } from 'react';
import styled from 'styled-components';
import BookmarkStar from "./BookmarkStar"

export const Container = styled.div`
  transition: all 1s ease-in-out;
`;

export const ModalBackdrop = styled.div`
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0,0,0,0.2);
  display: grid;
  place-items: center;
`;


export const ModalView = styled.div.attrs(props => ({
  // attrs 메소드를 이용해서 아래와 같이 div 엘리먼트에 속성을 추가할 수 있습니다.
  role: 'dialog',
  style: {
    backgroundImage: `url(${props.src})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  }
}))`
    border-radius: 10px;
    width: 60%;
    height: 50%;
    filter: drop-shadow(0px 0px 11px rgba(0, 0, 0, 0.3));
    overflow: hidden;
    object-fit: cover;
    box-shadow: inset -20px -20px 50px 5px rgba(0, 0, 0, 0.3);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    transition: all 0.3s ease;

    &.isOpen {
    transform: translateY(0);
    opacity: 1;
    transition: transform 0.3s ease, opacity 0.3s ease;
  }
    > div.titleWrap {
      /* border: 1px solid teal; */
      height: 15%;
      display: flex;
      flex-direction: row;
      justify-content: start;
      align-items: center;
      margin-left: 3%;
      margin-bottom: 2%;
    }

    > div.close-btn {
      margin-top: 0.3rem;
      margin-right: 1.4rem;
      font-size: 2rem;
      cursor: pointer;
      text-align: right;
      color: white;
    }
    > div > div.desc {
      /* border: 1px solid bisque; */
      font-size: 1.3rem;
      color: white;
      margin-left: 0.8rem;
      font-weight: 700;
      text-shadow: 1px 1px 4.5px rgba(0, 0, 0, 0.3);
    }
`;


export default function Modal ({openModalHandler, isOpen, title, img ,id}) {
  return (
    <Container>
        {isOpen === true ? 
          <ModalBackdrop onClick={openModalHandler}>
          <ModalView src={img} className={isOpen ? 'isOpen' : ''}  onClick={(e) => e.stopPropagation()}>
              <div onClick={openModalHandler} className='close-btn'>&times;</div>
              
              <div className='titleWrap'>
                <BookmarkStar title={title} id={id} />
                <div className='desc'>{title}</div>
              </div>
          </ModalView>
        </ModalBackdrop> : null}
      </Container>
  );
};