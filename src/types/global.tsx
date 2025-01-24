export interface ICustomerWallet {
  _id: string;
  name: string;
  birthDate: Date;
  cellphone: string;
  email: string;
  occupation: string;
}

export interface ISaveCustomerInput {
  name: string;
  birthDate: Date;
  cellphone: string;
  email: string;
  occupation: string;
  state: string;
}
