"use client";
import styled from "styled-components";

export default function Footer() {
  return (
    <FooterContainer className="flex flex-col items-center text-gray-500 text-xs border-t border-black border-opacity-10 py-3">
      <div className="mb-0.5"> 개인정보 처리방침 | 이용 약관 </div>
      <div> All rights reserved @ Doyu </div>
    </FooterContainer>
  );
}

const FooterContainer = styled.footer`
  position: fixed;
  background-color: white;
  bottom: 0;
  width: 100%;
`;
