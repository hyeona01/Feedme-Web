export const isIdValid = (id: string) => {
  return id.length >= 1 && id.length <= 20;
};

export const isPasswordValid = (password: string) => {
  return password.length >= 6 && password.length <= 320;
};

export const isNamewordValid = (name: string) => {
  return name.length >= 1 && name.length <= 20;
};
