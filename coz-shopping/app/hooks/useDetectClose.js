import { useEffect, useState, useRef } from "react";

export default function useDetectClose() {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);

  const toggleHandler = () => setIsOpen(!isOpen);

  const handleClickOutside = (e) => {
    if (!ref.current.contains(e.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
   if(isOpen) { window.addEventListener("click", handleClickOutside); 
    return () => window.removeEventListener("click", handleClickOutside);
  }}, [isOpen]);

  return [isOpen, ref, toggleHandler];
}
