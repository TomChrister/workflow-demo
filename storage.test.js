import { addTokenToStorage } from "./storage.js";

const storage = {};
global.localStorage = {
  setItem(key, value) {
    storage.key = value;
  },
  getItem(key) {
    return storage.key;
  },
};


test("It should add a value to localstorage with a token", () => {
  const key = "token";
  const value = "value";

  addTokenToStorage(value);

  expect(localStorage.getItem(key)).toBe(value);
});
