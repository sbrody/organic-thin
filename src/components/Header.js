import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, ThemeProvider, Hidden, Drawer } from '@material-ui/core';
import { styled } from '@material-ui/core';
import theme from '../theme';
import MenuIcon from '@material-ui/icons/Menu';



const ThemeButton = styled(Button)({
    color: 'white',
    textDecoration: 'none',
    '& a': {
        textDecoration: 'none',
        '&:hover': {
            textDecoration: 'underline'
        }
    }
});

const ThemeToolbar = styled(Toolbar)({
    justifyContent: 'space-between',
    '& a': {
        color: 'white',
        textDecoration: 'none'
    },
    '& .desktop-nav': {
        '& a': {
            color: 'white'
        }
    },
    offset: theme.mixins.toolbar
});

const ThemeDrawer = styled(Drawer)({
    '& button': {
        padding: '1.5rem 2.5rem'
    },
    '& a': {
        color: '#212D40'
    }
});




const menuData = [
    {
        label: 'About',
        href: '/about'
    },
    {
        label: 'Talent',
        href: '/talent'
    },
    {
        label: 'Contact',
        href: '/contact'
    }
];



const Header = () => {

    const [mobileNavToggled, setMobileNavToggled] = useState(false);

    const toggleMenu = () => {
        setMobileNavToggled(!mobileNavToggled);
    }

    const renderNav = menuData.map(({ label, href }) => {
        return <ThemeButton color="inherit" key={label}><Link to={href}>{label}</Link></ThemeButton>
    });

    return (
        <ThemeProvider theme={theme}>
            <AppBar>
                <ThemeToolbar>
                    <Typography variant="h6" component="p"><Link to="/">Organic Films</Link></Typography>
                    <Hidden smDown>
                        <div className="desktop-nav">{renderNav}</div>
                    </Hidden>
                    <Hidden mdUp>
                        <div className="mobile-nav"><MenuIcon onClick={toggleMenu} />
                            <ThemeDrawer anchor='right' open={mobileNavToggled} onClose={toggleMenu} onClick={toggleMenu}>
                                {renderNav}
                            </ThemeDrawer>
                        </div>
                    </Hidden>
                </ThemeToolbar>
            </AppBar>
        </ThemeProvider>

    )
};

export default Header;