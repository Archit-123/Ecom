import { create } from "zustand";
import type { User as FirebaseUser } from "firebase/auth";

type User = {
  name: string;
  email: string;
  photo: string;
};

type AuthState = {
  user: User | null;
  setUser: (user: User) => void;
  setFromFirebase: (user: FirebaseUser) => void;
  logout: () => void;
};

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
  setFromFirebase: (firebaseUser) => {
    console.log("Firebase User:", firebaseUser);
    set({
      user: {
        name: firebaseUser.displayName ?? "",
        email: firebaseUser.email ?? "",
        photo: firebaseUser.photoURL ?? "",
      },
    });
  },

  logout: () => set({ user: null }),
}));
