import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Register = () => {
  
  const {registerUser } = useContext(AuthContext)

  const handleRegister = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const confirmPassword = e.target.confirmPassword.value;

    console.log(name,photo, email, password, confirmPassword)

    registerUser(email, password)
  }

  return (
    <div className="w-[40%] mx-auto border p-3">
      <form onSubmit={handleRegister} className="space-y-3">
        <h2 className="text-3xl text-center">Register Here</h2>
        <div>
          <p>Name</p>
          <input
            name="name"
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full"
          />
        </div>

        <div>
          <p>Photo</p>
          <input
            type="text"
            name="photo"
            placeholder="Type here"
            className="input input-bordered w-full"
          />
        </div>

        <div>
          <p>Email</p>
          <input
            type="text"
            name="email"
            placeholder="Type here"
            className="input input-bordered w-full"
          />
        </div>

        <div>
          <p>Password</p>
          <input
            type="text"
            name="password"
            placeholder="Type here"
            className="input input-bordered w-full"
          />
        </div>

        <div>
          <p>Confirm Password</p>
          <input
            type="text"
            name="confirmPassword"
            placeholder="Type here"
            className="input input-bordered w-full"
          />
        </div>

        <button type="submit" className="btn btn-primary">Register</button>
      </form>
    </div>
  );
};

export default Register;
