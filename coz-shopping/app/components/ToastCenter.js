"use client";
import Toast from "./Toast";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { enqueue, dequeue } from "../redux/ToastReducer";
import { useAppDispatch, useAppSelector } from "../redux/hooks";

export default function NotificationCenter() {
  const dispatch = useAppDispatch();
  const toast = useSelector((store) => store.toastReducer.notifications);

  if (toast.length === 7) {
    dispatch(dequeue());
  }

  return (
    <Container>
      {toast.length
        ? toast.map((n) => (
            <Toast
              key={n.id}
              text={n.message}
              dismissTime={n.dismissTime}
              id={n.id}
            />
          ))
        : null}
    </Container>
  );
}

const Container = styled.div`
  /* border: 1px solid red; */
  pointer-events: none;
  height: 60%;
  width: 22%;
  position: fixed;
  bottom: 60px;
  right: 0px;
  pointer-events: none;
  display: flex;
  flex-direction: column-reverse;
  justify-content: flex-start;
  flex-wrap: wrap;
  overflow: hidden;
  align-items: center;
`;
