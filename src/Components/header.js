import React from "react";
import { Link } from "react-router-dom";
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from "react";

export const Header = () => {
  const [userData, setUserData] = useState(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (token) {
      try {
        const decodedToken = decodeToken(token);

        setUserData(decodedToken);
      } catch (error) {
        console.error('Error decoding token:', error);
      }
    }
  }, []);

  const decodeToken = (token) => {
    const [header, payload, signature] = token.split('.');
    const decodedPayload = atob(payload);

    return JSON.parse(decodedPayload);
  };

  const handleLogout = async () => {
    try {
      const response = await fetch('/logout', {
        method: 'GET',
        credentials: 'include'
      });

      if (response.ok) {
        setUserData(null);
        localStorage.removeItem('token');
        navigate("/");
      } else {
        console.error('Logout failed:', response.statusText);
      }
    } catch (error) {
      console.error('Logout failed:', error.message);
    }
  };

  const navigate = useNavigate();

  return (
    <header className="header">
      <a className="logo-head" alt="Logo" href=" ">
        Calm Calamity
      </a>
      <nav className="nav-bar">
        <ul>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#gallery">Best Moments</a>
          </li>
          <li>
            <a href="#team">Team</a>
          </li>
          <li>
            <a href="#rules">Rules</a>
          </li>
          <li>
            <a href="#mail">Mail Us</a>
          </li>
          <li>
            {(userData != null) ? (
              <div
                className="Profile"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <div className="profile-content">
                {isHovered ? (
                  <button className="Logout" onClick={handleLogout}>Logout</button>
                ) : (
                  <FontAwesomeIcon icon={faUser} />
                )}
                </div>
              </div>
            ) : (
              <Link to="/Signup" className="login">Login</Link>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
}
