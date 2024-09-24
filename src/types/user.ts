export type User = {
  id: number;
  email: string;
  name: string;
  phone: string;
  username: string;
  website: string;
  address: UserAddress;
  company: UserCompany;
};

type UserCompany = {
  bs: string;
  catchPhrase: string;
  name: string;
};

type UserAddress = {
  city: string;
  geo: {
    lat: string;
    lng: string;
  };
  street: string;
  suite: string;
  zipcode: string;
};
