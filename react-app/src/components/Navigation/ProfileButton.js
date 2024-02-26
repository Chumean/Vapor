import React, { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../store/session";
import OpenModalButton from "../OpenModalButton";
import LoginFormModal from "../LoginFormModal";
import SignupFormModal from "../SignupFormModal";
import "./Navigation.css";
import { useHistory } from "react-router-dom";
function ProfileButton({ user }) {
  const history = useHistory();
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);
  const ulRef = useRef();

  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };

  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = (e) => {
      if (!ulRef.current.contains(e.target)) {
        setShowMenu(false);
      }
    };

    document.addEventListener("click", closeMenu);

    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(logout());
    history.push("/");
  };

  const ulClassName = "profile-dropdown" + (showMenu ? "" : " hidden");
  const closeMenu = () => setShowMenu(false);

  return (
    <>
      <div className="profile-button">
        <i className="fas fa-user-circle"
        onClick={openMenu}
        style={{width:"50px", height: "9px"}}
        />
      </div>
      {/* <button onClick={openMenu}>
        <i className="fas fa-user-circle" />
      </button> */}
      <ul className={ulClassName} ref={ulRef}>
        {user ? (
          <>
            <div className="logout-drop-down">
              <li>{user.username}</li>
              <li>{user.email}</li>
              <li>
                <button className="logout-button" onClick={handleLogout}>
                  Log Out
                </button>
              </li>
            </div>
          </>
        ) : (
          <>
            <div className="drop-down-container">
              <div className="login-button-dropdown">
                <OpenModalButton
                  buttonText="Log In"
                  onItemClick={closeMenu}
                  modalComponent={<LoginFormModal />}
                />
              </div>

              <OpenModalButton
                buttonText="Sign Up"
                onItemClick={closeMenu}
                modalComponent={<SignupFormModal />}
              />
            </div>
          </>
        )}
      </ul>
    </>
  );
}

export default ProfileButton;
