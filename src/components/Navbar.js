import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={styles.navbar}>
      {/* App Logo */}
      <h1 style={styles.logo}>Twitter Clone</h1>

      {/* Navigation Links */}
      <ul style={styles.navLinks}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/explore">Explore</Link>
        </li>
        <li>
          <Link to="/notifications">Notifications</Link>
        </li>
        <li>
          <Link to="/messages">Messages</Link>
        </li>
      </ul>

      {/* User Info (Placeholder) */}
      <div style={styles.userInfo}>
        <img
          src="https://via.placeholder.com/40"
          alt="User Avatar"
          style={styles.avatar}
        />
        <span style={styles.username}>JohnDoe123</span>
      </div>
    </nav>
  );
};

export default Navbar;

const styles = {
  navbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#00acee',
    color: '#fff',
    padding: '1rem',
  },
  logo: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
  },
  navLinks: {
    listStyle: 'none',
    display: 'flex',
  },
  navLinks: {
    marginLeft: '1rem', // This should be 'navLinks' instead of 'navLinks li'
  },
  userInfo: {
    display: 'flex',
    alignItems: 'center',
  },
  avatar: {
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    marginRight: '0.5rem',
  },
  username: {
    fontSize: '1rem',
    fontWeight: 'bold',
  },
};
