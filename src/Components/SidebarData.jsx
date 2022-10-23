import React from 'react'
import DashboardIcon from '@mui/icons-material/Dashboard';
import StoreIcon from '@mui/icons-material/Store';
import UpgradeIcon from '@mui/icons-material/Upgrade';
import SportsMartialArtsIcon from '@mui/icons-material/SportsMartialArts';
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';
import LogoutIcon from '@mui/icons-material/Logout';

export const SidebarData = [
    {
        title: "Base",
        icon: <DashboardIcon />,
        link: "/#base"
    },
    {
        title: "Attack",
        icon: <SportsMartialArtsIcon />,
        link: "/#attack"
    },
    {
        title: "Training",
        icon: <MilitaryTechIcon />,
        link: "/#training"
    },
    {
        title: "Upgrade",
        icon: <UpgradeIcon />,
        link: "/#upgrade"
    },
    {
        title: "Shop",
        icon: <StoreIcon />,
        link: "/#shop"
    },
    {
        title: "Logout",
        icon: <LogoutIcon />,
        link: "/#logout"
    }
]
