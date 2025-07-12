import { create, StateCreator } from "zustand";

type AuthState = {
  isLoggedIn: boolean;
  login: () => void;
  logout: () => void;
};

const authStore: StateCreator<AuthState> = (set) => ({
  isLoggedIn: false,
  login: () => set({ isLoggedIn: true }),
  logout: () => set({ isLoggedIn: false }),
});

export const useAuthStore = create<AuthState>(authStore);
