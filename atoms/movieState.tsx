import { atom } from "recoil";

export const modalState = atom({
  key: "modalState",
  default: false,
});

export const movieState = atom<any | null>({
  key: "movieState",
  default: false,
});
