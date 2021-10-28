// NPM Packages
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

// Project files
import { authInstance } from "./firebase";

export async function createAccount(email, password) {
  const account = { isCreated: false, payload: "" };
  try {
    const userCredential = await createUserWithEmailAndPassword(
      authInstance,
      email,
      password
    );
    account.payload = userCredential.user.uid;
    account.isCreated = true;
  } catch (error) {
    console.error("authentification.js error", error);
    account.payload = error.code;
  }

  return account;
}

export async function signIn(email, password) {
  const account = { isLogged: false, payload: "" };
  try {
    const userCredential = await signInWithEmailAndPassword(
      authInstance,
      email,
      password
    );
    account.payload = userCredential.user.uid;
    account.isLogged = true;
  } catch (error) {
    console.error("authentification.js error", error);
    account.payload = error.code;
  }

  return account;
}
