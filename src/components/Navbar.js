import React, { useState,  } from 'react';
import {
    AppBar,
    Box,
    Toolbar,
    IconButton,
    Typography,
    Menu,
    Container,
    Avatar,
    Button,
    Tooltip,
    MenuItem,
} from '@mui/material';
import {
    Menu as MenuIcon
} from '@mui/icons-material'
import { useNavigate, useLocation } from 'react-router-dom';

const pages = ['Home', 'Coffee shops', 'Restaurants', 'Bakery lessons', 'Takeaway'];
const settings = ['Profile', 'Account', 'Logout'];
const navigateRelations = {
    'Home': '',
    'Coffee shops': 'shops', 
    'Restaurants': 'restaurants', 
    'Bakery lessons': 'lessons', 
    'Takeaway': 'takeaway'
}

function SmallScreenMenu({ handleOpenNavigationMenu, handleCloseNavigationMenu, anchorElNavigation }) {
    let navigate = useNavigate();
    
    return <Box className='flex md:hidden' sx={{ flexGrow: 1 }}>
        <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenNavigationMenu}
            color="inherit"
        >
            <MenuIcon />
        </IconButton>
        <Menu
            id="menu-appbar"
            anchorEl={anchorElNavigation}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
            }}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
            }}
            open={Boolean(anchorElNavigation)}
            onClose={handleCloseNavigationMenu}
            sx={{
                display: { xs: 'block', md: 'none' },
            }}
        >
            {pages.map((page) => (
                <MenuItem key={page} onClick={() => {
                    handleCloseNavigationMenu();
                    navigate(navigateRelations[page]);
                }}>
                    <Typography textAlign="center">{page}</Typography>
                </MenuItem>
            ))}
        </Menu>
    </Box>
}

function LargeScreenMenu({ handleCloseNavigationMenu }) {
    let navigate = useNavigate();
    let location = useLocation();
    let currentPath = location.pathname;

    return <Box className='hidden md:flex' sx={{ flexGrow: 1 }}>
        {pages.map((page) => (
            <Button
                key={page}
                onClick={() => {
                    handleCloseNavigationMenu();
                    navigate(navigateRelations[page]);
                }}
                sx={{
                    my: 2,
                    color: currentPath.substring(1) === navigateRelations[page] 
                        ? 'white' 
                        : '#ccc',
                    display: 'block'
                }}
            >
                {page}
            </Button>
        ))}
    </Box>
}

function AccountButton({ handleOpenUserMenu, handleCloseUserMenu, anchorElUser }) {
    return <Box sx={{ flexGrow: 0 }}>
        <Tooltip title="Open settings">
            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Tempuser" src="/static/images/avatar/2.jpg" />
            </IconButton>
        </Tooltip>
        <Menu
            sx={{ mt: '45px' }}
            id="menu-appbar"
            anchorEl={anchorElUser}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
        >
            {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
            ))}
        </Menu>
    </Box>
}

function Logo({ isLargeScreen }) {
    return isLargeScreen 
        ? <div className='hidden md:flex'>
            <img src='/Logo_white.png' className='h-10' />
        </div> 
        : <Box className='flex md:hidden' sx={{ flexGrow: 1 }}>
            <img src='/Logo_white.png' className='h-10' />
        </Box>
}

export default function Navbar() {
    const [anchorElNavigation, setAnchorElNavigation] = useState(null);
    const [anchorElUser, setAnchorElUser] = useState(null);

    return <AppBar position="static">
        <Container maxWidth="xl" className='bg-dgray'>
            <Toolbar disableGutters>
                <Logo isLargeScreen />
                <SmallScreenMenu
                    handleOpenNavigationMenu={(event) => { setAnchorElNavigation(event.currentTarget); }}
                    handleCloseNavigationMenu={() => { setAnchorElNavigation(null); }}
                    anchorElNavigation={anchorElNavigation}
                />
                <Logo />
                <LargeScreenMenu
                    handleCloseNavigationMenu={() => { setAnchorElNavigation(null); }}
                />
                <AccountButton
                    handleOpenUserMenu={(event) => { setAnchorElUser(event.currentTarget); }}
                    handleCloseUserMenu={() => { setAnchorElUser(null); }}
                    anchorElUser={anchorElUser}
                />
            </Toolbar>
        </Container>
    </AppBar>
};
