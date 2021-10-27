// NPM Packages
import { createUserWithEmailAndPassword } from "firebase/auth";

// Project files
import { authInstance } from "./firebase";

export async function createAccount(email, password) {
  const account = { isCreated: false, payload: null };
  try {
    const credential = await createUserWithEmailAndPassword(
      authInstance,
      email,
      password
    );
    account.isCreated = true;
    account.payload = credential.user.uid;
  } catch (error) {
    account.payload = error;
  }

  return account;
}
