"use client";
import React, { useRef, useState, useEffect } from "react";

type IconCheckTypes = {
  firstIcon?: React.ReactNode;
  secondIcon?: React.ReactNode;
  type?: 1 | 2 | 3;
  className?: string;
  children?: React.ReactNode;
};

const IconCheck = ({
  firstIcon,
  secondIcon,
  type = 1,
  children,
  className
}: IconCheckTypes) => {
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
    <div
      ref={ref}
      onClick={handleIconClick}
      className={`select-none icon-check  ${
        isClicked && type === 1 ? "font-semibold" : ""
      } ${type !== 2 && "hover:bg-ig-hover "}  ${className} `}
    >
      {type === 2 ? (
        <>
          <span className="max-xl:hidden icon-logo">{secondIcon}</span>{" "}
          <span className="xl:hidden icon-logo">{firstIcon}</span>
        </>
      ) : isClicked  ? (
        <span className={`icon-scale `}>{secondIcon}</span>
      ) : (
        <span className="icon-scale ">{firstIcon}</span>
      )}{" "}
      <span className="max-md:hidden">{children}</span>
    </div>
  );
};

export default IconCheck;
