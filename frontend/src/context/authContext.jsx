import React, { createContext, useEffect, useReducer } from "react";

// Inisialisasi state awal dari localStorage jika ada
const initial_state = {
  user: localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : null,
  role: null, // Menambahkan role ke dalam initial_state
  token: null, // Menambahkan token ke dalam initial_state
  loading: false,
  error: null,
};

export const AuthContext = createContext(initial_state);

const AuthReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN_START":
      return {
        ...state,
        loading: true,
        error: null,
      };
    case "LOGIN_SUCCESS":
      return {
        ...state,
        user: action.payload.user,
        role: action.payload.role, // Menyimpan role dengan benar
        token: action.payload.token, // Menyimpan token dengan benar
        loading: false,
        error: null,
      };
    case "LOGIN_FAILURE": // Menambahkan kasus untuk login gagal
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    case "LOGOUT":
      return {
        user: null,
        role: null,
        token: null,
        loading: false,
        error: null,
      };
    default:
      return state;
  }
};

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, initial_state);

  // Simpan user ke localStorage jika login sukses
  useEffect(() => {
    if (state.user) {
      localStorage.setItem("user", JSON.stringify(state.user));
    } else {
      localStorage.removeItem("user");
    }
  }, [state.user]);

  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        role: state.role, // Menyediakan role dalam context
        token: state.token, // Menyediakan token dalam context
        loading: state.loading,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
