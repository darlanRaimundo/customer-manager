export const deleteCustomer = async (customerId: string) => {
  const body = JSON.stringify({
    id: customerId,
  });
  console.log("body: ", body);

  const response = await fetch(
    "https://api-node-express-ten.vercel.app/api/v1/customerWallets",
    {
      method: "DELETE",
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
