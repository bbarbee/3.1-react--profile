import React from "react";
import profileImage from '../sdDG-generic.png';

const ProfilePic = () => {
    return (
        <div className="profilePic">
            <img src={profileImage} alt="Profile Picture" />
        </div>
    );
};


export default ProfilePic;