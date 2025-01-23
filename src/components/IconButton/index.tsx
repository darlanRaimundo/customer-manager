"use client";

import Image from "next/image";

interface IconButtonProps {
  icon: string;
  alt: string;
  onClick: () => void;
}

const IconButton: React.FC<IconButtonProps> = ({ icon, onClick, alt }) => {
  return (
    <button
      type="button"
      className="rounded-lg text-sm p-2.5 text-center inline-flex items-center me-2"
      onClick={onClick}
    >
      <Image src={icon} alt={alt} />
    </button>
  );
};

export default IconButton;
