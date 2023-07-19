import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={styles.navbar}>
      <div style={styles.sidebar}>
        <ul style={styles.navLinks}>
          <li>
            <Link to="/" style={styles.link}>
              <i className="fa fa-home" style={styles.icon}></i>
              Accueil
            </Link>
          </li>
          <li>
            <Link to="/explore" style={styles.link}>
              <i className="fa fa-hashtag" style={styles.icon}></i>
              Explorer
            </Link>
          </li>
          <li>
            <Link to="/notifications" style={styles.link}>
              <i className="fa fa-bell" style={styles.icon}></i>
              Notifications
            </Link>
          </li>
          <li>
            <Link to="/messages" style={styles.link}>
              <i className="fa fa-envelope" style={styles.icon}></i>
              Messages
            </Link>
          </li>
          <li>
            <Link to="/lists" style={styles.link}>
              <i className="fa fa-list" style={styles.icon}></i>
              Listes
            </Link>
          </li>
          <li>
            <Link to="/bookmarks" style={styles.link}>
              <i className="fa fa-bookmark" style={styles.icon}></i>
              Signets
            </Link>
          </li>
          <li>
            <Link to="/certified" style={styles.link}>
              <i className="fa fa-check-circle" style={styles.icon}></i>
              Certifié
            </Link>
          </li>
          <li>
            <Link to="/profile" style={styles.link}>
              <i className="fa fa-user" style={styles.icon}></i>
              Profil
            </Link>
          </li>
          <li>
            <Link to="/more" style={styles.link}>
              <i className="fa fa-ellipsis-h" style={styles.icon}></i>
              Plus
            </Link>
          </li>
        </ul>
        <button style={styles.tweetButton}>Tweeter</button>
      </div>

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
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
    padding: '1rem',
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 100,
  },
  sidebar: {
    width: '250px',
    padding: '1rem',
  },
  navLinks: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
  },
  link: {
    color: '#1da1f2',
    textDecoration: 'none',
    display: 'flex',
    alignItems: 'center',
    fontSize: '18px',
    fontWeight: 'bold',
  },
  icon: {
    marginRight: '10px',
  },
  tweetButton: {
    background: '#1da1f2',
    color: '#fff',
    border: 'none',
    borderRadius: '9999px',
    padding: '0.75rem 2rem',
    marginTop: '1rem',
    fontSize: '16px',
    fontWeight: 'bold',
    cursor: 'pointer',
    width: '100%',
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
