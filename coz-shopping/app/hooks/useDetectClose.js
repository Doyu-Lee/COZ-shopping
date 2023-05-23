import { useEffect, useState, useRef } from "react";

export default function useDetectClose() {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);
  const toggleHandler = () => setIsOpen(!isOpen);

  const handleClickOutside = (e) => {
    // console.log(e.target) // ref.current - 예) 이미지 태그
    // ref.current는 객체형태 - 모든 객체는 조건문에서 true로 계산된다.
    if (ref.current && !ref.current.contains(e.target)) {
      setIsOpen(false); // 닫는다.
    }
  };

  useEffect(() => {
    if (isOpen) window.addEventListener("click", handleClickOutside);
    return () => window.removeEventListener("click", handleClickOutside);
  }, [isOpen]);

  return [isOpen, ref, toggleHandler];
}
