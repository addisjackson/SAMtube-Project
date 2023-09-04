import React from 'react';
import { FontAwesomeIcon as  FAIcon } from '@fortawesome/react-fontawesome';
import { faHeart as solidHeart, faHeartBroken as heartCrack } from "@fortawesome/free-solid-svg-icons";

const FontAwesomeIcon = ({ icon, color }) => {
    return (
        <FAIcon icon={icon} style={{ color }} />
    );
};

export { FontAwesomeIcon, solidHeart, heartCrack };