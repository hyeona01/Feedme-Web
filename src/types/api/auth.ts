export type SignupRequest = {
  serial_id: String; // 1 ~ 20 자
  password: String; // 6 ~ 320 자
  name: String; // 20 자
};

export type SignInRequest = {
  serial_id: String;
  password: String;
};

export type SignInResponse = {
  access_token: string;
  refresh_token: string;
  name: string;
};
