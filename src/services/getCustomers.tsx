import { ICustomerWallet } from "@/types/global";

export const getCustomers = async () => {
  const response = await fetch(
    "https://api-node-express-ten.vercel.app/api/v1/customerWallets",
    {
      method: "GET",
    }
  );

  const data = (await response.json()).data;
  const customers = data as ICustomerWallet[];
  return customers;
};
