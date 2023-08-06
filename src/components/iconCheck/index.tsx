"use client";
import React, { useRef, useState, useEffect } from "react";

type IconCheckTypes = {
  firstIcon: React.ReactNode;
  SecondIcon: React.ReactNode;
  children: React.ReactNode;
};

const IconCheck = ({ firstIcon, SecondIcon, children }: IconCheckTypes) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isClicked, setIsClicked] = useState(false);

  const handleIconClick = () => {
    setIsClicked(true);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setIsClicked(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div ref={ref} onClick={handleIconClick} className="flex gap-3">
      {isClicked ? SecondIcon : firstIcon} {children}
    </div>
  );
};

export default IconCheck;
