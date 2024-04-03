import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Login = () => {
    const { loginUser } = useContext(AuthContext);
   
    const handleLogin = (e) => {
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;
    
        loginUser(email, password)
    }

    return (
        <div className="w-[40%] mx-auto border p-3">
        <form onSubmit={handleLogin} className="space-y-3">
          <h2 className="text-3xl text-center">Login</h2>

  
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

  
          <button type="submit" className="btn btn-primary">Login</button>
        </form>
      </div>
    );
};

export default Login;