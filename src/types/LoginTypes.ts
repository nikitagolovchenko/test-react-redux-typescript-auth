export interface SignUpState {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export interface SignInState {
  email: string;
  password: string;
}

export interface UserInfo {
  firstName: string;
  lastName: string;
  email: string;
  uid: string | undefined;
}