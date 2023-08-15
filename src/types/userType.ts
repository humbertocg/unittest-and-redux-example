
export type LoginType = {
  uuid: string;
  username: string;
  password: string;
  salt: string;
  md5: string;
  sha1: string;
  sha256: string;
};

export type LocationType = {
  street: {
    number: number;
    name: string;
  };
  city: string;
  state: string;
  country: string;
  postcode: number;
  coordinates: {
    latitude: string;
    longitude: string;
  };
  timezone: {
    offset: string;
    description: string;
  };
};

export type NameType = {
  title: string;
  first: string;
  last: string;
};

export type ResultItem = {
  gender: string;
  name: NameType;
  location: LocationType;
  email: string;
  login: LoginType;
  dob: {
    date: string;
    age: number;
  };
  registered: {
    date: string;
    age: number;
  };
  phone: string;
  cell: string;
  id: {
    name: string;
    value: any;
  };
  picture: {
    large: string;
    medium: string;
    thumbnail: string;
  };
  nat: string;
  hired:boolean|false;
  currentLocation: string|"";
};

export type UserType = {
  results: ResultItem[]
  info: {
    seed: string;
    results: number;
    page: number;
    version: string;
  };
};
