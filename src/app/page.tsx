"use client";

import ModalNewCustomer from "@/components/ModalNewCustomer";
import { TableCustomers } from "@/components/TableCustomers";
import { getCustomers } from "@/services/getCustomers";
import { ICustomerWallet } from "@/types/global";
import { useEffect, useState } from "react";

export default function Home() {
  const [customers, setCustomers] = useState<ICustomerWallet[]>([]);

  const getCustomersList = async () => {
    const _customers = await getCustomers();
    setCustomers(_customers);
  };

  useEffect(() => {
    getCustomersList();
  }, []);

  return (
    <div>
      <ModalNewCustomer />
      <TableCustomers customers={customers} />
    </div>
  );
}
