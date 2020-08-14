
import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import SvgIcon from '@material-ui/core/SvgIcon';

const useStyles = makeStyles(theme => ({
    root: {
        width: theme.spacing(2),
        height: theme.spacing(2)
    }
}));

const SignOutIcon = ({ className, viewBox, color, ...rest }) => {
    const classes = useStyles();
    return (
        <SvgIcon viewBox={viewBox || "0 0 16 16"} {...rest} className={clsx(classes.root, className)}>
            <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round">
                <g id="User-Management_users" transform="translate(-39.000000, -764.000000)" stroke={color || "#fff"} strokeWidth="1.55555556">
                    <g id="sidebar_menu_1-copy">
                        <g id="item-copy" transform="translate(38.000000, 760.000000)">
                            <g id="log-out" transform="translate(2.000000, 5.000000)">
                                <path d="M4.66666667,14 L1.55555556,14 C0.696445945,14 0,13.3035541 0,12.4444444 L0,1.55555556 C0,0.696445945 0.696445945,0 1.55555556,0 L4.66666667,0" id="Path"></path>
                                <polyline id="Path" points="10.1111111 10.8888889 14 7 10.1111111 3.11111111"></polyline>
                                <line x1="14" y1="7" x2="4.66666667" y2="7" id="Path"></line>
                            </g>
                        </g>
                    </g>
                </g>
            </g>
        </SvgIcon>
    );
};

export default SignOutIcon;

