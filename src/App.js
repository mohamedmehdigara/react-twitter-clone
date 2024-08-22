import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import TweetForm from './components/TweetForm';
import TweetList from './components/TweetList';
import Explore from './components/Explore';
import Settings from './components/Settings';
import Help from './components/Help';
import Profile from './components/Profile';
import Trends from './components/Trends'; // Added Trends component
import DirectMessages from './components/DirectMessages'; // Added DirectMessages component
import UserSettings from './components/UserSettings'; // Added UserSettings component
import AboutPage from './components/AboutPage'; // Added AboutPage component
import TermsAndConditions from './components/TermsAndConditions'; // Added TermsAndConditions component
import ContactUs from './components/ContactUs'; // Added ContactUs component
import axios from 'axios';
import './App.css';

const App = () => {
  const [tweets, setTweets] = useState([]);

  useEffect(() => {
    // Fetch tweets from your API or a mock API (replace with your API endpoint)
    axios.get('https://api.example.com/tweets')
      .then((response) => {
        setTweets(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const addTweet = (tweet) => {
    // Add new tweet to the existing list (replace with your API call to add tweet)
    setTweets([...tweets, tweet]);
  };

  return (
    <Router>
      <div>
        <Navbar />

        <Routes>
          <Route exact path="/" element={<TweetForm addTweet={addTweet} />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/tweetlist" element={<TweetList tweets={tweets} />} />
          <Route path="/settings" element={<Settings />}>
            {/* Nest routes for user settings within Settings */}
            <Route path="/settings/user" element={<UserSettings />} />
          </Route>
          <Route path="/help" element={<Help />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/trends" element={<Trends />} />  {/* Added Trends route */}
          <Route path="/direct-messages" element={<DirectMessages />} />  {/* Added DirectMessages route */}
          <Route path="/about" element={<AboutPage />} />  {/* Added AboutPage route */}
          <Route path="/terms" element={<TermsAndConditions />} />  {/* Added TermsAndConditions route */}
          <Route path="/contact" element={<ContactUs />} />  {/* Added ContactUs route */}
          {/* Add more routes for other pages */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;