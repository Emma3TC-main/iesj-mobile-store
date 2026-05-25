import { users } from "../constants/mockData";

export const loginRequest = async (email, password) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (email === "admin@test.com" && password === "123456") {
        resolve({
          token: "fake-jwt-token",
          user: {
            id: 1,
            name: "Emmanuel",
            email,
          },
        });
      } else {
        reject("Credenciales inválidas");
      }
    }, 1000);
  });
};

export const registerRequest = async (name, email, password) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const existingUser = users.find((user) => user.email === email);

      if (existingUser) {
        reject("El correo ya está registrado");
        return;
      }

      const newUser = {
        id: Date.now(),
        name,
        email,
        password,
      };

      users.push(newUser);

      resolve({
        success: true,
        user: newUser,
      });
    }, 1000);
  });
};
