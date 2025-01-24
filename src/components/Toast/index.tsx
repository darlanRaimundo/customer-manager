"use client";

import checkIcon from "../../assets/icons/check.svg";
import errorIcon from "../../assets/icons/error.svg";
import closeIcon from "../../assets/icons/close.svg";
import Image from "next/image";

interface IToastProps {
  message: string;
  status: number;
  setShowToast: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Toast = ({ message, status, setShowToast }: IToastProps) => {
  return (
    <div
      id="toast-success"
      className="flex items-center w-full max-w-xs p-4 mb-4 text-black bg-white rounded-lg shadow absolute right-0 bottom-0 mr-5 z-1"
      role="alert"
    >
      {status == 200 ? (
        <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-green-500 bg-green-400 rounded-lg">
          <Image src={checkIcon} alt="Success" className="w-4 h-4" />
        </div>
      ) : (
        <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-red-500 bg-red-400 rounded-lg">
          <Image src={errorIcon} alt="Error" className="w-4 h-4" />
        </div>
      )}
      <span className="sr-only">{status == 200 ? "Sucesso" : "Erro"}</span>
      <div className="ms-3 text-sm font-normal">{message}</div>
      <button
        type="button"
        className="ms-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8"
        data-dismiss-target="#toast-success"
        aria-label="Close"
        onClick={() => {
          setShowToast(false);
        }}
      >
        <span className="sr-only">Fechar</span>
        <Image src={closeIcon} alt={"fechar"} className="w-4 h-4" />
      </button>
    </div>
  );
};
