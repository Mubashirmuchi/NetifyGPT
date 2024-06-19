import React, { useEffect } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
// import UserIcon from "../assets/userIcon.jpg";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../utils/userSlice";
import { NetflixLogo,UserAvatar } from "../utils/constant";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: UserAvatar,
          })
        );
        navigate("/browse");
        // ...
      } else {
        dispatch(removeUser());
        navigate("/");
        // User is signed out
        // ...
      }
    });
  }, []);

  return (
    <div className="absolute w-full flex justify-between px-8 py-2 bg-gradient-to-b from-black z-10">
      <img className="w-44" src={NetflixLogo} alt="logo" />
      {user && (
        <div className="img flex p-2">
          <img
            className="w-12 h-12"
            // src={user?.photoURL}
            src={UserAvatar}
            alt="user icon"
          />
          <button onClick={handleSignOut} className="text-white font-bold">
            (Sign Out)
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
