"use client";

import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
  Paper,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "../lib/firebase";
import { useAuthStore } from "../store/authStore";
import { useRouter } from "next/navigation";

type FormValues = {
  email: string;
  password: string;
};

export default function LoginPage() {
  const {
    register,

    formState: { errors },
  } = useForm<FormValues>();

  const setUser = useAuthStore((state) => state.setUser);
  const router = useRouter();

  const handleSubmit = () => {
    // console.log("Logging in with:", data);
    alert("Login server is down, please try logging with GOOGLE!");
  };

  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;

      setUser({
        name: user.displayName!,
        email: user.email!,
        photo: user.photoURL!,
      });

      // console.log("Signed in:", user);
      router.push("/profile");
    } catch (err) {
      console.error("Google Sign-In Error:", err);
    }
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 8, minHeight: "100vh" }}>
      <Paper elevation={3} sx={{ p: 4 }}>
        <Typography variant="h4" align="center" gutterBottom>
          Login
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate>
          <TextField
            label="Email"
            fullWidth
            {...register("email", { required: "Email is required" })}
            error={!!errors.email}
            helperText={errors.email?.message as string}
            margin="normal"
          />
          <TextField
            label="Password"
            type="password"
            fullWidth
            {...register("password", {
              required: "Password is required",
              minLength: { value: 6, message: "Min 6 characters" },
            })}
            error={!!errors.password}
            helperText={errors.password?.message as string}
            margin="normal"
          />
          <Button type="submit" fullWidth variant="contained" sx={{ mt: 2 }}>
            Login
          </Button>
        </Box>

        <Typography align="center" sx={{ mt: 2 }}>
          OR
        </Typography>

        <Button
          fullWidth
          variant="outlined"
          color="secondary"
          onClick={handleGoogleSignIn}
          sx={{ mt: 2 }}
        >
          <img
            src="https://developers.google.com/identity/images/g-logo.png"
            alt="Google"
            width={20}
            height={20}
          />
          Sign in with Google
        </Button>
      </Paper>
    </Container>
  );
}
