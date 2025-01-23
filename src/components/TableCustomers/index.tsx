"use client";

import { ICustomerWallet } from "@/types/global";
import SGVEDIT from "../../assets/icons/pen.svg";
import SGVDELETE from "../../assets/icons/trash.svg";
import IconButton from "../IconButton";

interface ITableCustomersProps {
  customers: ICustomerWallet[];
}

export const TableCustomers = ({ customers }: ITableCustomersProps) => {
  console.log("customers: ", customers);
  return (
    <div className="flex items-center sm:justify-center ml-2 sm:ml-0">
      <table className="text-sm border-separate border-spacing-y-2">
        <thead className="sr-only">
          <tr className="tr-class">
            <th>Nome</th>
            <th>Email</th>
            <th>Telefone</th>
            <th>Ocupação</th>
            <th>Data de Nascimento</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((customer: ICustomerWallet, index: number) => (
            <tr className="tr-class" key={index}>
              <td className="td-class">{customer.name}</td>
              <td className="td-class">{customer.email}</td>
              <td className="td-class">{customer.cellphone}</td>
              <td className="td-class">{customer.occupation}</td>
              <td className="td-class">{customer.birthDate.toString()}</td>
              <td className="td-class">
                <IconButton
                  icon={SGVEDIT}
                  alt="Editar"
                  onClick={() => {
                    console.log("editar");
                  }}
                />
                <IconButton
                  icon={SGVDELETE}
                  alt="Deletar"
                  onClick={() => {
                    console.log("deletar");
                  }}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
