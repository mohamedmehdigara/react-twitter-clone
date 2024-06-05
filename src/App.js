import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import TweetForm from './components/TweetForm';
import TweetList from './components/TweetList';
import Explore from './components/Explore';
import Settings from './components/Settings';
import Help from './components/Help';
import Profile from './components/Profile';
import axios from 'axios';
import "./App.css";

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
          <Route exact path="/" element={<TweetForm addTweet={addTweet} />}/>

          <Route path="/Explore" element={<Explore />} />

          <Route path="tweetlist" element={<TweetList tweets={tweets} />}/>
          <Route path="/Settings" element={<Settings />} />
          <Route path="/Help" element={<Help />} /> {/* Added Help route */}
          <Route path="/Profile" element={<Profile />} />

          {/* Add more routes for other pages */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
