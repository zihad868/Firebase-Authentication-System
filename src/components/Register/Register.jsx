import { useContext, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Register = () => {
  const [error, setError] = useState('');
  
  const {registerUser, googleRegister } = useContext(AuthContext)

  const handleGoogleRegister = () => {
    googleRegister()
     .then(userCredential => {
       console.log("Google Signin Success", userCredential.user)
     })

     .catch(error => {
       console.error("Fail to Signin Google", error)
     })
  }

  const handleRegister = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const confirmPassword = e.target.confirmPassword.value;

    console.log(name,photo, email, password, confirmPassword)

    if(password.length < 6){
      setError('Password must be 6 Cheracture');
      return;
    }

    if(password !== confirmPassword){
      setError("Password does't Match")
      return;
    }

    if(!/[0-9]{2}$/.test(password)){
      setError('Password must be ends with 2 numbers')
      return
    }

    setError('');

    registerUser(email, password)
      .then(userCredetial => {
        const user = userCredetial.user;
        console.log(user);
      })
      .catch(error => {
        console.error("Error---->",error)
        setError(error.message)
      })

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
        
        <div>
            {error && <span className="text-red-500 text-sm">{error}</span>}
        </div>

        <button type="submit" className="btn btn-primary w-full">Register</button>
      </form>
      <button onClick={handleGoogleRegister} type="submit" className="btn btn-secondary w-full mt-2">Signin with Google</button>
    </div>
  );
};

export default Register;
