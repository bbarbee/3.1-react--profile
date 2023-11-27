import React from "react";
import Header from './Components/Header';
import ProfilePic from "./Components/ProfilePic";
import ProfileDetails from "./Components/ProfileDetails";
import SocialMedia from "./Components/SocialMedia";


const App = () => {
    return (
        <div className="profile">
            
            <ProfilePic />
            <Header />
            <ProfileDetails />
            <SocialMedia />
        </div>
    );

};


export default App;