interface IUserLocation {
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
}

interface IUserLogin {
  uuid: string;
  username: string;
  password: string;
  salt: string;
  md5: string;
  sha1: string;
  sha256: string;
}

interface IUserDateOfBirth {
  date: string;
  age: number;
}

interface IUserRegistered {
  date: string;
  age: number;
}

interface IUserId {
  name: string;
  value: string;
}

interface IUserPicture {
  large: string;
  medium: string;
  thumbnail: string;
}

export interface IUser {
  gender: string;
  name: {
    title: string;
    first: string;
    last: string;
  };
  location: IUserLocation;
  email: string;
  login: IUserLogin;
  dob: IUserDateOfBirth;
  registered: IUserRegistered;
  phone: string;
  cell: string;
  id: IUserId;
  picture: IUserPicture;
  nat: string;
}