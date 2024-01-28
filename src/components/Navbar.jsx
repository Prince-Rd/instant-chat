import { UserAuth } from "../context/AuthContext";

const Navbar = () => {

  const {currentUser, logout}= UserAuth();
  const handleLogout = async () =>{
    try{
       await logout();
    }catch (error){
      console.log(error);
    }
  }
  // fix the logout properties. 
  return (
    <div className="navbar fixed z-10 bg-neutral text-neutral-content">
      <div className="containerWrap  flex justify-between">
        <a className="btn btn-ghost text-xl" href="">lowChat</a>
        {currentUser? <button onClick={handleLogout}>Logout</button> :""}
      </div>
    </div>
  );
};

export default Navbar;
