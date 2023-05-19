"use client"
import Image from "next/image"
import Link from "next/link"
import styled from "styled-components";
import useDetectClose from "../hooks/useDetectClose";
import { useGetProductByCountQuery } from "../redux/productApi"

export default function DropdownMenu () {
  const [DropDownIsOpen, ImgRef, DropDownHandler] = useDetectClose();
  const { isLoading, isFetching, data, error } = useGetProductByCountQuery(4);

  return (
    <div>
      {error || isLoading || isFetching ? (<p></p>) : data ? (

        <DropdownContainer ref={ImgRef} >

          <Image onClick={DropDownHandler} src="/햄버거 아이콘.svg" width={34} height={24} alt="햄버거 메뉴 드롭다운 버튼" className="transition-all duration-300 hover:scale-110 transform hover:cursor-pointer" />
          
          <Menu className={ DropDownIsOpen ? "isdropped" : null }>
          <div className="hover:cursor-default mt-4">{`OOO `}님, 안녕하세요!</div>
            <Ul>
            {/* 해결 요망 : "/상품 아이콘.svg" has either width or height modified, but not the other. If you use CSS to change the size of your image, also include the styles 'width: "auto"' or 'height: "auto"' to maintain the aspect ratio. */}
              <Link href="/product/list" onClick={DropDownHandler}><li className='flex mr-2 hover:text-myBlue hover:font-bold transition-all ease-in-out'><Image className='mr-3' src="/상품 아이콘.svg" width={20} height={20} alt="logo" />상품리스트 페이지</li></Link> 
              <Link href="/bookmark" onClick={DropDownHandler}><li className='flex mr-2 hover:text-myBlue hover:font-bold transition-all ease-in-out'><Image className='mr-3' src="/북마크 아이콘.svg" width={20} height={20} alt="logo" />북마크 페이지</li></Link>
            </Ul>
          </Menu>

        </DropdownContainer>

      ) : null}
    </div>
  );
};

const DropdownContainer = styled.div`
  position: relative;
`;

const Menu = styled.div.attrs( () => ({role: 'dropdown-menu'}) )`
  position: absolute;
  top: 80px;
  background: white;
  width: 200px;
  height: 160px;
  filter: drop-shadow(0px 0px 8px rgba(0, 0, 0, 0.1));
  border-radius: 12px;
  opacity: 0;
  visibility: hidden;
  transform: translate(-70%, -20px);
  transition: all 0.4s ease;
  z-index: 999;
  border-radius: 10px;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

    &:after {
    content: "";
    position: absolute;
    top: -4.5%;
    left: 73%;
    /* filter: drop-shadow(11px 11px 11px rgba(0, 0, 0, 0.4)); */
    border: 12px solid transparent;
    border-top-width: 0;
    border-bottom-color: white; 
  }

    &.isdropped {
      opacity: 1;
      visibility: visible;
      transform: translate(-70%, -20px);
    };
`;

const Ul = styled.ul`
  margin-top: 18px;
  li:first-child {
    margin-bottom: 15px;
  }
`;


