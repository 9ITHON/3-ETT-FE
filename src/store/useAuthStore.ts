import { create } from "zustand";

type User = {
  id?: string;
  nickname: string;
};

type AuthState = {
  isLoggedIn: boolean;
  user: User | null;
  accessToken: string | null;
  refreshToken: string | null;
  login: (payload: {
    user: User;
    accessToken: string;
    refreshToken: string;
  }) => void;
  logout: () => void;
};

export const useAuthStore = create<AuthState>((set) => ({
  isLoggedIn: false,
  user: null,
  accessToken: null,
  refreshToken: null,
  login: ({ user, accessToken, refreshToken }) =>
    set({
      isLoggedIn: true,
      user,
      accessToken,
      refreshToken,
    }),
  logout: () =>
    set({
      isLoggedIn: false,
      user: null,
      accessToken: null,
      refreshToken: null,
    }),
}));