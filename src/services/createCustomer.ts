import { ISaveCustomerInput } from "@/types/global";

export const createCustomer = async (customer: ISaveCustomerInput) => {
  console.log("customer: ", customer);
  const body = JSON.stringify({
    name: customer.name,
    parentId: "54165156",
    birthDate: customer.birthDate,
    cellphone: customer.cellphone,
    phone: customer.cellphone,
    email: customer.email,
    occupation: customer.occupation,
    state: customer.state,
  });
  console.log("body: ", body);

  const response = await fetch(
    "https://api-node-express-ten.vercel.app/api/v1/customerWallets",
    {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: body,
    }
  );

  const data = await response.json();
  return { message: data.message, status: response.status };
};
