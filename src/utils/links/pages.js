
import React from 'react';
import DashboardIcon from 'components/Icons/DashboardIcon';
import UserIcon from 'components/Icons/UserIcon';
import SignOutIcon from 'components/Icons/SignOutIcon';

const PAGES = {
  HOME: '/',
  SIGN_IN: '/auth/sign-in',
  FORGOT_PASSWORD: '/auth/forgot-password',
  RESET_PASSWORD: '/auth/reset-password/:token',
  DASHBOARD: '/dashboard',
  USERS: '/users',
  SIGN_OUT: '/auth/sign-out'
};

const sidebarItems = [
  {
    title: 'Dashboard',
    icon: <DashboardIcon />,
    subItems: [],
    link: PAGES.DASHBOARD
  },
  {
    title: 'User Management',
    icon: <UserIcon />,
    subItems: [
      {
        subTitle: 'Users',
        link: '/users'
      }
    ]
  },
  {
    title: 'Sign Out',
    icon: <SignOutIcon color='#A20F3C' />,
    subItems: [],
    link: PAGES.SIGN_IN,
  },
];

export {
  PAGES,
  sidebarItems
} 
