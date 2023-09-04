import React from "react";
import HomeIcon from '@mui/icons-material/Home';
import WhatshotIcon from '@mui/icons-material/WhatsHot';
import { Icon } from '@mui/material'
import SideBarRow from './SideBarRow';
import SubscriptionsIcon  from "@mui/icons-material/Subscriptions";
import HistoryIcon from '@mui/icons-material/History';
import OnDemandVideoIcon from '@mui/icons-material/OnDemandVideo';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';


const SideBar = () => {
    return (
        <div className='sidebar'>
            <SideBarRow selected Icon={HomeIcon} title='Home' />
            <SideBarRow Icon={WhatshotIcon} title='Trending' />
            <SideBarRow Icon={SubscriptionsIcon}    title='Subscription' />
            <hr />
            <SideBarRow Icon={VideoLibraryIcon} title="Library"  />
            <SideBarRow Icon={HistoryIcon} title='History' />
            <SideBarRow Icon={OnDemandVideoIcon} title='Your videos' />
            <SideBarRow Icon={WatchLaterIcon} title='Watch Later' />
            <SideBarRow Icon={ThumbUpIcon} title='Liked Videos' />
            <hr />    
            </div>
    )
}

export default SideBar;