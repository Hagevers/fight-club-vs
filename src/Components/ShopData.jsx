import React from 'react'
import DashboardIcon from '@mui/icons-material/Dashboard';
import StoreIcon from '@mui/icons-material/Store';
import UpgradeIcon from '@mui/icons-material/Upgrade';
import SportsMartialArtsIcon from '@mui/icons-material/SportsMartialArts';
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';
import LogoutIcon from '@mui/icons-material/Logout';

export const ShopData = [
    {
        title: "M4",
        pic: <DashboardIcon />,
        price: {
            Gold: 1500,
            Marble: 700
        }
    },
    {
        title: "AK",
        pic: <SportsMartialArtsIcon />,
        price: {
            Gold: 1500,
            Marble: 700
        }
    },
    {
        title: "Training",
        pic: <MilitaryTechIcon />,
        price: {
            Gold: 1500,
            Marble: 700
        }
    },
    {
        title: "Upgrade",
        pic: <UpgradeIcon />,
        price: {
            Gold: 1500,
            Marble: 700,
            Solfour: 700
        }
    },
    {
        title: "Shop",
        pic: <StoreIcon />,
        price: {
            Gold: 1500,
            Marble: 700
        }
    },
    {
        title: "Logout",
        pic: <LogoutIcon />,
        price: {
            Gold: 1500,
            Marble: 700
        }
    }
]