import React, { useEffect, useState } from "react";
import axios from 'axios';
import RulesPopup from './RulesPopup';


export const Rules = () => {
  const [rulesData, setRulesData] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [post, setPost] = useState('');
  const [userData, setUserData] = useState(null);

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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://backend-deployemnet.onrender.com/all-rules`);
        setRulesData(response.data);
      } catch (error) {
        console.error('Error fetching rules:', error);
      }
    };

    fetchData();
  }, []);

  const handleInput = (event) => {
    setPost(event.target.value);
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      const response = await axios.post(`https://backend-deployemnet.onrender.com/all-rules`, {
        RuleData: post
      }, {
        headers: {
          'Content-Type': 'application/json'
        }
      });

      console.warn(response.data);
      if (response.data) {
        alert("Rule added successfully");
        setPost("");
      }
    } catch (error) {
      console.error('Error adding rule:', error);
    }
  }

  return (
    <div className="rules-prompt" id="rules">
      <div className="rules-container">
        <main>
          <div className="rules-title">
            <h3>🌟 Rules 🌟</h3>
          </div>
          <div className="rules-list">
            <p className="rules-subject">Rules members need to follow in the guild:</p>
            <p>Here in Calm Calamity, our goal is to make a community where people can have fun and
              socialize outside of toram. So us staffs have to implement rules!</p>
            <ul>
              {rulesData.map(rule => (
                <div className="final-rules" key={rule._id}>
                  <li>{rule.RuleData}</li>
                </div>
              ))}
            </ul>
            {userData && (userData.role === "admin") ? (<button className="Rule-button" onClick={() => setShowPopup(true)}>Add Rule</button>) : null}
          </div>
        </main>
        <RulesPopup trigger={showPopup} setTrigger={setShowPopup}>
          <div className="rules-prompt1" id="rules">
            <div className="rules-container">
              <div className="rules-title">
                <h3>🌟Rules🌟</h3>
              </div>
              <div className="rules-list">
                <p>Type the Rule that needs to be added:</p>

                <div className="rules" onSubmit={handleSubmit}>
                  <form>
                    <label>Enter Rule: <input name="post" className="Rule-input" type="text" value={post} onChange={handleInput} />
                    </label>
                    <br></br>
                    <input className="submit-btn" type="submit" />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </RulesPopup>
      </div>
    </div>

  );
}

export default Rules;
