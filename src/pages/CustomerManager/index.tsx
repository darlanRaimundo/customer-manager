"use client";

import { Inputs, ModalNewCustomer } from "@/components/ModalNewCustomer";
import { TableCustomers } from "@/components/TableCustomers";
import { Toast } from "@/components/Toast";
import { createCustomer } from "@/services/createCustomer";
import { deleteCustomer } from "@/services/deleteCustomer";
import { getCustomers } from "@/services/getCustomers";
import { ICustomerWallet } from "@/types/global";
import { useCallback, useEffect, useState } from "react";

const CustomerManager = () => {
  const [customers, setCustomers] = useState<ICustomerWallet[]>([]);
  const [dataTosave, setDataToSave] = useState<Inputs>();

  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [toastStatus, setToastStatus] = useState(0);

  const saveCustomer = useCallback(async () => {
    if (dataTosave) {
      const { message, status } = await createCustomer(dataTosave);
      setToastMessage(message);
      setToastStatus(status);
      setShowToast(true);
    }
  }, [dataTosave]);

  const getCustomersList = async () => {
    const _customers = await getCustomers();
    setCustomers(_customers);
  };

  const removeCustomer = async (id: string) => {
    const { message, status } = await deleteCustomer(id);
    setToastMessage(message);
    setToastStatus(status);
    setShowToast(true);
    // console.log(response);
  };

  useEffect(() => {
    getCustomersList();
  }, []);

  useEffect(() => {
    if (dataTosave) {
      saveCustomer();
    }
  }, [dataTosave, saveCustomer]);

  return (
    <div>
      {showToast && (
        <Toast
          message={toastMessage}
          status={toastStatus}
          setShowToast={setShowToast}
        />
      )}
      <ModalNewCustomer setDataToSave={setDataToSave} />
      <TableCustomers customers={customers} removeCustomer={removeCustomer} />
    </div>
  );
};

export default CustomerManager;
