"use client";
import { useSelector } from "react-redux";
import { styled, keyframes } from "styled-components";
import { addBookMarkedProducts, deleteBookMarkedProduct } from "../app/redux/bookmarkReducer";
import { enqueue, dequeue } from "../app/redux/ToastReducer";
import { useGetProductsQuery } from "../app/redux/productApi";
import { useAppDispatch } from "../app/redux/hooks";
import shortid from "shortid";
import PropTypes from "prop-types";

export const Button = ({ isBookmarked, IsTitle, StarRef, label, ...props }) => {
  const bookMarkedProducts = useSelector((store) => store.bookMarkedProducts);
  const { data, error, isLoading, isFetching } = useGetProductsQuery(null);
  const dispatch = useAppDispatch();

  let bookMarkedTargetItem;
  if(bookMarkedProducts) 
  { bookMarkedTargetItem = bookMarkedProducts.find( (item) => item.value.id === id
  );
  }

  // let isBookmarked;
  // if (bookMarkedTargetItem) {
  //   isBookmarked = bookMarkedTargetItem.isBookmarked;
  // }
  const notify = (message, dismissTime = 3000, id) => {
    dispatch(enqueue(message, dismissTime, id));
    setTimeout(() => {
      dispatch(dequeue());
    }, dismissTime);
  };
  
  const handleBookmarkBtn = (id) => {
    if (!bookMarkedTargetItem) {
      const targetItem = data.find((product) => product.id === id);
      dispatch(addBookMarkedProducts(targetItem));
      notify({
        message: "북마크에 추가되었습니다.",
        dismissTime: 1500,
        id: shortid.generate(),
      });
    } else {
      dispatch(deleteBookMarkedProduct(bookMarkedTargetItem));
      notify({
        message: "북마크에서 제거되었습니다.",
        dismissTime: 1500,
        id: shortid.generate(),
      });
    }
  };

  return (
    <>
      <Img
        src={isBookmarked ? "/북마크별on.svg" : "/북마크-별표off.svg"}
        {...props}
        onClick={(e) => {
          handleBookmarkBtn(id);
        }}
        className={`${IsTitle ? "modal" : ""} ${
          isBookmarked ? "active" : "inactive"
        }`}
        alt="북마크"
        ref={StarRef}
      />
      {label ? label : ''}
    </>
  );
};

Button.propTypes = {
  onClick: PropTypes.func,
  starRef: PropTypes.node,
  title: PropTypes.boolean,
};

Button.defaultProps = {
  onClick: () => console.log('click!'),
  StarRef: undefined,
  IsTitle: false,
};

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
    transform: scale(1.1);
    cursor: grab;
  }

  &.active {
    animation: ${pulse} 0.2s linear;
  }

  &.inactive {
    animation: ${inactive} 0.2s linear;
  }
`;
