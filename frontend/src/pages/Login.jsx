import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section className="px-5 lg:px-0">
      <div className="w-full max-w-[570px] mx-auto rounded-lg shadow-md md:p-10">
        <h3 className="text-headingColor text-[22px] leading-9 font-bold mb-10">
          Hello <span className="text-primaryColor">Welcome</span> Back👌
        </h3>
        <form className="py-2 md:py-0">
          <div className="mb-5">
            <input
              type="email"
              placeholder="Masukkan Email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-md"
            />
          </div>
          <div className="mb-5">
            <input
              type="password"
              placeholder="Masukkan Password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-md"
            />
          </div>
          <div className="mt-7">
            <button
              type="submit"
              className="w-full bg-primaryColor text-white py-2 rounded-md"
            >
              Login
            </button>
          </div>

          <p className="mt-5 text-textColor text-center">
            Belum Mempunyai Akun?
            <Link to="/register" className="text-primaryColor">
              {" "}
              Register
            </Link>
          </p>
        </form>
      </div>
    </section>
  );
};

export default Login;
