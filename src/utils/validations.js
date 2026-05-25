export const validateEmail = (email) => {
  const regex = /\S+@\S+\.\S+/;

  return regex.test(email);
};

export const validatePassword = (password) => {
  return password.length >= 6;
};

export const validateRequired = (value) => {
  return value.trim() !== "";
};

export const validateName = (name) => {
  return name.trim().length >= 3;
};

export const validatePhone = (phone) => {
  return /^[0-9]{9}$/.test(phone);
};

export const validateStrongPassword = (password) => {
  return (
    /[A-Z]/.test(password) && /[0-9]/.test(password) && password.length >= 8
  );
};
