import React, { useState } from "react";
import { storage } from "../../src/utils/firebase.js"; // Adjust the path as needed
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import signUpImg from "../assets/images/signup.gif";
import avatar from "../assets/images/doctor-img01.png";
import { Link, useNavigate } from "react-router-dom";
import { BASE_URL } from "../../config.js";
import { toast } from "react-toastify";
import HashLoader from "react-spinners/HashLoader";

const SignUp = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewURL, setPreviewURL] = useState("");
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    photo: "",
    gender: "",
    role: "patient",
  });

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleFileInputChange = async (event) => {
    const file = event.target.files[0];

    if (file) {
      const storageRef = ref(storage, `user_photos/${file.name}`);

      try {
        await uploadBytes(storageRef, file);
        const downloadURL = await getDownloadURL(storageRef);

        setFormData((prevFormData) => ({
          ...prevFormData,
          photo: downloadURL,
        }));

        // Preview image locally
        const reader = new FileReader();
        reader.onloadend = () => {
          setPreviewURL(reader.result);
        };
        reader.readAsDataURL(file);

        console.log("File uploaded successfully. File URL:", downloadURL);
      } catch (error) {
        console.error("Error uploading file:", error);
      }
    }
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    setLoading(true);

    if (
      !formData.email ||
      !formData.password ||
      !formData.name ||
      !formData.role
    ) {
      toast.error("All fields are required");
      setLoading(false);
      return;
    }

    try {
      const res = await fetch(`${BASE_URL}/auth/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await res.json();
      console.log("Response:", result);
      if (!res.ok) {
        throw new Error(result.message || "Registration failed");
      }

      toast.success(result.message);
      navigate("/login");
    } catch (err) {
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="px-5 xl:px-0">
      <div className="max-w-[1170px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* img box */}
          <div className="hidden lg:block bg-primaryColor rounded-l-lg">
            <figure className="rounded-l-lg">
              <img
                src={signUpImg}
                alt="Sign Up"
                className="w-full rounded-l-lg"
              />
            </figure>
          </div>
          <div className="rounded-lg lg:pl-16 py-18">
            <h3 className="text-headingColor">
              Create an{" "}
              <span className="text-primaryColor font-semibold">account</span>
            </h3>
            <form onSubmit={submitHandler}>
              <div className="mt-5">
                <div className="mb-8">
                  <input
                    type="text"
                    placeholder="Masukkan Nama"
                    name="name" // Ensure this matches backend
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border rounded-md"
                  />
                </div>
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

                <div className="mb-5 flex items-center justify-between">
                  <label className="text-textColor font-semibold text-[15px] leading-7">
                    Anda Seorang?:
                    <select
                      name="role"
                      value={formData.role}
                      onChange={handleInputChange}
                      className="text-textColor font-semibold text-[15px] leading-7 px-4 py-3 focus:outline-none"
                    >
                      <option value="patient">Patient</option>
                      <option value="doctor">Dokter</option>
                    </select>
                  </label>

                  <label className="text-textColor font-semibold text-[15px] leading-7">
                    Gender:
                    <select
                      value={formData.gender}
                      name="gender"
                      onChange={handleInputChange}
                      className="text-textColor font-semibold text-[15px] leading-7 px-4 py-3 focus:outline-none"
                    >
                      <option value="">Select</option>
                      <option value="cowok">Cowok</option>
                      <option value="cewek">Cewek</option>
                    </select>
                  </label>
                </div>

                <div className="mb-5 flex items-center gap-3">
                  <figure className="w-[60px] rounded-full border-solid border-primaryColor flex items-center justify-center">
                    <img
                      src={previewURL || avatar}
                      alt=""
                      className="w-full rounded-full"
                    />
                  </figure>
                  <div className="relative w-[130px] h-[50px]">
                    <input
                      type="file"
                      name="photo"
                      id="customFile"
                      onChange={handleFileInputChange}
                      accept=".jpg, .png"
                      className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
                    />
                    <label
                      htmlFor="customFile"
                      className="absolute top-0 left-0 w-full flex items-center px-[0.75rem] py-[0.375rem] text-[15px] leading-6 overflow-hidden bg-[#0066ff46] text-headingColor font-semibold rounded-lg truncate cursor-pointer"
                    >
                      Upload Foto
                    </label>
                  </div>
                </div>
                <div className="mt-7">
                  <button
                    disabled={loading}
                    type="submit"
                    className="w-full bg-primaryColor text-white py-2 rounded-md"
                  >
                    {loading ? (
                      <HashLoader size={35} color="#ffffff" />
                    ) : (
                      "Register"
                    )}
                  </button>
                </div>
                <p className="mt-5 text-textColor text-center">
                  Sudah Mempunyai Akun?
                  <Link to="/login" className="text-primaryColor">
                    {" "}
                    Login
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
