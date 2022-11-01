import React from 'react'
import DashboardIcon from '@mui/icons-material/Dashboard';
import StoreIcon from '@mui/icons-material/Store';
import UpgradeIcon from '@mui/icons-material/Upgrade';
import SportsMartialArtsIcon from '@mui/icons-material/SportsMartialArts';
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';
import LogoutIcon from '@mui/icons-material/Logout';
import toast, { Toaster } from 'react-hot-toast';

export const SidebarData = [
    {
        title: "Base",
        icon: <DashboardIcon />,
        link: "/#base",
        func: function(props){
            props('Base');
        }
    },
    {
        title: "Attack",
        icon: <SportsMartialArtsIcon />,
        link: "/#attack",
        func: function(props){
            props('Attack');
        }
    },
    {
        title: "Training",
        icon: <MilitaryTechIcon />,
        link: "/#training",
        func: function(props){
            props('Training');
        }
    },
    {
        title: "Upgrade",
        icon: <UpgradeIcon />,
        link: "/#upgrade",
        func: function(props){
            props('Upgrade');
        }
    },
    {
        title: "Shop",
        icon: <StoreIcon />,
        link: "Shop",
        func: function(props){
            props('Shop');
        }
    },
    {
        title: "Logout",
        icon: <LogoutIcon />,
        link: "/logout",
        func : () =>{
            const d = new Date();
            d.setTime(d.getTime() - 8880);
            let expires = "expires=" + d.toUTCString();
            document.cookie = 'token' + "=" + 'loggedOut' + ";" + expires + ";path=/";
            window.location.href="/"
        }
    }
]
