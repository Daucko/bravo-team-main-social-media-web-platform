import { Outlet, Navigate } from "react-router-dom";

const AuthLayout = () => {
  const isAuthenticated = false;

  return (
    <>
    {isAuthenticated ?(<Navigate to ='/' />) :(
      <>
      <div>
        <Outlet/>
      </div>
       </>
    )}
    </>
  )
}

export default AuthLayout;
