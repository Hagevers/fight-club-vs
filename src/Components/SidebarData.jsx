import React from 'react'
import DashboardIcon from '@mui/icons-material/Dashboard';
import StoreIcon from '@mui/icons-material/Store';
import UpgradeIcon from '@mui/icons-material/Upgrade';
import SportsMartialArtsIcon from '@mui/icons-material/SportsMartialArts';
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';
import LogoutIcon from '@mui/icons-material/Logout';
import AllianceIcon from '@mui/icons-material/Diversity3';
import VaultIcon from '@mui/icons-material/Https';

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
        title: "Vault",
        icon: <VaultIcon />,
        link: "Vault",
        func: function(props){
            props('Vault');
        }
    },
    {
        title: "Alliance",
        icon: <AllianceIcon />,
        link: "Alliance",
        func: function(props){
            props('Alliance');
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
        func: function(props){
            props('Logout');
        }
    }
]
