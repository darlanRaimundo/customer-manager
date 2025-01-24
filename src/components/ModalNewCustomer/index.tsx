"use client";

import React, { Dispatch, SetStateAction } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

interface IModalNewCustomerProps {
  setDataToSave: Dispatch<SetStateAction<Inputs | undefined>>;
}

export type Inputs = {
  name: string;
  birthDate: Date;
  cellphone: string;
  email: string;
  occupation: string;
  state: string;
};

export const ModalNewCustomer = ({ setDataToSave }: IModalNewCustomerProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    setDataToSave(data);
    setModalState("hidden");
  };

  const [modalState, setModalState] = React.useState<"hidden" | "visible">(
    "hidden"
  );

  return (
    <div className="flex sm:justify-center ">
      <button
        data-modal-target="crud-modal"
        data-modal-toggle="crud-modal"
        className="block text-white bg-orange-400 hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-orange-300 mt-5 sm:ml-0 ml-2
          font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800"
        type="button"
        onClick={() => {
          setModalState("visible");
        }}
      >
        ADICIONAR CLIENTE
      </button>

      {/* <!-- Main modal --> */}
      <div
        id="modal"
        className={`${modalState} absolute insert-0 bg-gray-600 bg-opacity-50 overflow-y-auto overflow-x-hidden flex justify-center items-center w-full max-w-full md:inset-0 h-full max-h-full `}
      >
        <div className="relative p-4 w-full max-w-md max-h-full">
          {/* <!-- Modal content --> */}
          <div className="relative  rounded-lg bg-gray-200">
            {/* <!-- Modal header --> */}
            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t ">
              <h3 className="text-lg font-semibold text-gray-900 ">
                Criar Novo Cliente
              </h3>
              <button
                type="button"
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center "
                data-modal-toggle="crud-modal"
                onClick={() => {
                  setModalState("hidden");
                }}
              >
                <svg
                  className="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
                <span className="sr-only">Cancelar</span>
              </button>
            </div>
            {/* <!-- Modal body --> */}
            <form
              className="flex flex-col p-4 md:p-5"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className="grid gap-4 mb-4 grid-cols-2">
                <div className="col-span-2">
                  <label
                    htmlFor="name"
                    className="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    Nome
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                    placeholder="Digite o nome do cliente"
                    {...register("name", { required: true })}
                  />
                  {errors.name && (
                    <span className="text-red-900">
                      Esse campo é obrigatório
                    </span>
                  )}
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <label
                    htmlFor="price"
                    className="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    Data de nascimento
                  </label>
                  <input
                    type="date"
                    {...register("birthDate", { required: true })}
                    id="date"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  />
                  {errors.birthDate && (
                    <span className="text-red-900">
                      Esse campo é obrigatório
                    </span>
                  )}
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <label
                    htmlFor="category"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Celular
                  </label>
                  <input
                    type="text"
                    {...register("cellphone", { required: true })}
                    id="cellphone"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                    placeholder="(00) 00000-0000"
                  />
                  {errors.cellphone && (
                    <span className="text-red-900">
                      Esse campo é obrigatório
                    </span>
                  )}
                </div>
                <div className="col-span-2">
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Email
                  </label>
                  <input
                    type="text"
                    {...register("email", { required: true })}
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                    placeholder="Digite o email do cliente"
                  />
                  {errors.email && (
                    <span className="text-red-900">
                      Esse campo é obrigatório
                    </span>
                  )}
                </div>
                <div className="col-span-2">
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Ocupação
                  </label>
                  <input
                    type="text"
                    {...register("occupation", { required: true })}
                    id="occupation"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                    placeholder="Digite a ocupação do cliente"
                  />
                  {errors.occupation && (
                    <span className="text-red-900">
                      Esse campo é obrigatório
                    </span>
                  )}
                </div>
                <div className="col-span-2">
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Estado
                  </label>
                  <input
                    type="text"
                    {...register("state", { required: true })}
                    id="state"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                    placeholder="Digite o estado do cliente"
                  />
                  {errors.state && (
                    <span className="text-red-900">
                      Esse campo é obrigatório
                    </span>
                  )}
                </div>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <button
                  type="submit"
                  className="flex text-white bg-orange-400 hover:bg-orange-800 focus:ring-4 focus:outline-none
                  focus:ring-orange-300 mt-5 ml-2 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-orange-600 
                  dark:hover:bg-orange-700 dark:focus:ring-orange-800"
                >
                  <svg
                    className="flex me-1 -ms-1 w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  SALVAR
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
