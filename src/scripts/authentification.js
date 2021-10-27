// NPM Packages
import { createUserWithEmailAndPassword } from "firebase/auth";

// Project files
import { authInstance } from "./firebase";

export async function createAccount(email, password) {
  const account = { isCreated: false, payload: null };
  try {
    const userCredential = await createUserWithEmailAndPassword(
      authInstance,
      email,
      password
    );
    account.isCreated = true;
    account.payload = userCredential.user.uid;
  } catch (error) {
    console.error("authentification.js error", error);
    account.payload = error.code;
  }

  return account;
}
