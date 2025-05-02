"use client";

import { useAuthStore } from "../store/authStore";
import { signOut } from "firebase/auth";
import { auth } from "../lib/firebase";
import { useRouter } from "next/navigation";
import {
  Avatar,
  Box,
  Button,
  Container,
  Paper,
  Typography,
} from "@mui/material";

export default function ProfilePage() {
  const user = useAuthStore((state) => state.user);
  const logout = useAuthStore((state) => state.logout);
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      logout();
      router.push("/login");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  if (!user) {
    return (
      <Container maxWidth="sm" sx={{ mt: 8 }}>
        <Typography align="center">You are not logged in.</Typography>
      </Container>
    );
  }

  return (
    <Container maxWidth="sm" sx={{ mt: 8, minHeight: "100vh" }}>
      <Paper elevation={3} sx={{ p: 4, textAlign: "center" }}>
        <Avatar
          alt={user.name}
          src={user.photo}
          sx={{ width: 100, height: 100, margin: "0 auto", mb: 2 }}
        />
        <Typography variant="h5">Welcome, {user.name}</Typography>
        <Typography variant="body1" color="text.secondary">
          {user.email}
        </Typography>

        <Button
          variant="outlined"
          color="error"
          onClick={handleLogout}
          sx={{ mt: 4 }}
        >
          Log Out
        </Button>
      </Paper>
    </Container>
  );
}
