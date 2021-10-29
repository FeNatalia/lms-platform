// NPM Packages
import { createContext, useContext, useReducer } from "react";

// Project files
import coursesReducer from "state/coursesReducer";
import fileReducer from "state/fileReducer";

// Properties
const ElearningContext = createContext(null);

export function ElearningProvider({ children }) {
  // Local state
  const [courses, dispatch] = useReducer(coursesReducer, []);
  const [files, dispatch2] = useReducer(fileReducer, []); // hold the specific document

  return (
    <ElearningContext.Provider
      value={{ courses, files, dispatch, dispatch2 }}
    >
      {children}
    </ElearningContext.Provider>
  );
}

export function useElearning() {
  const context = useContext(ElearningContext);

  return context;
}