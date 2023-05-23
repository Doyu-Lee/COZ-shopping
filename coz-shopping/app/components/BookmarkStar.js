"use client"

import { styled, keyframes } from "styled-components";
import { addBookMarkedProducts, deleteBookMarkedProduct } from "../redux/bookmarkReducer";
import { enqueue, dequeue } from "../redux/ToastReducer";
import { useSelector } from "react-redux";
import { useGetProductsQuery } from "../redux/productApi"
import { useAppDispatch } from "../redux/hooks";
import shortid from "shortid"

export default function BookmarkStar ({title, StarRef, id}) {
  const bookMarkedProducts = useSelector((store) => store.bookMarkedProducts);
  const { data, error, isLoading, isFetching  } = useGetProductsQuery(null);
  const dispatch = useAppDispatch();

  const notify = (message, dismissTime = 3000, id) => {
    dispatch(enqueue(message, dismissTime, id))
    setTimeout(() => {dispatch(dequeue())}, dismissTime)
  }

  let isBookmarked;
  const bookMarkedTargetItem = bookMarkedProducts.find((product) => product.value.id === id);

  if (bookMarkedTargetItem)  { isBookmarked  = bookMarkedTargetItem.isBookmarked; }

  const handleBookmarkBtn = (id) => { 
    if (!bookMarkedTargetItem) { 
      const targetItem = data.find((product) => product.id === id);  
      dispatch(addBookMarkedProducts(targetItem));
      notify({message: '북마크에 추가되었습니다.', dismissTime: 2000, id: shortid.generate()})
    } else {
      dispatch(deleteBookMarkedProduct(bookMarkedTargetItem));
      notify({message: '북마크에 삭제되었습니다.', dismissTime: 2000, id: shortid.generate()});
    }
  };

  return (
    <Img src={isBookmarked ? "/북마크별on.svg" : "/북마크-별표off.svg"}
      onClick={(e) => { handleBookmarkBtn(id) }}
      className={`${title ? "modal" : ""} ${isBookmarked ? "active" : "inactive"}`}
      alt="북마크" ref={StarRef}
    />
  )
}

const pulse = keyframes`
  0% {
    transform: scale(0.95);
    transform: translateY(5px);
  }
  60% {
    transform: scale(1.16);
    transform: translateY(-15px);
  }
  98% {
    transform: scale(1.05);
    transform: translateY(0px);
  }
`;

const inactive = keyframes`
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
  right: 12px;
  bottom: 12px;
  transition: all 0.3s ease-in-out;

  &.modal {
    position: static;
  }

  &:hover {
    transform: scale(1.1); /* 아이콘을 클릭할 때 약간 크게 보이도록 스케일 변경 */
    cursor: grab;
  }

  &.active {
    animation: ${pulse} 0.2s linear; /* 클릭 후 약간 커졌다 다시 원래 크기로 돌아가는 애니메이션 효과 */
  }

  &.inactive {
    animation: ${inactive} 0.2s linear; /* 클릭 후 약간 커졌다 다시 원래 크기로 돌아가는 애니메이션 효과 */
  }
`