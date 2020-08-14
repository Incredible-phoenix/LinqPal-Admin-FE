
import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import SvgIcon from '@material-ui/core/SvgIcon';

const useStyles = makeStyles(theme => ({
  root: {
    width: 8,
    height: 8
  }
}));

const CloseIcon = ({ className, viewBox, color, ...rest }) => {
  const classes = useStyles();
  return (
    <SvgIcon viewBox={viewBox || "0 0 8 8"} {...rest} className={clsx(classes.root, className)}>
      <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g transform="translate(-551.000000, -277.000000)" fill={color || "#6B76A1"} fillRule="nonzero">
          <g transform="translate(300.000000, 256.000000)">
            <g transform="translate(152.000000, 9.000000)">
              <g transform="translate(99.000000, 12.000000)">
                <path d="M5.13137085,4 L7.76568542,6.63431458 C8.07810486,6.94673401 8.07810486,7.45326599 7.76568542,7.76568542 C7.45326599,8.07810486 6.94673401,8.07810486 6.63431458,7.76568542 L4,5.13137085 L1.36568542,7.76568542 C1.05326599,8.07810486 0.546734008,8.07810486 0.234314575,7.76568542 C-0.0781048584,7.45326599 -0.0781048584,6.94673401 0.234314575,6.63431458 L2.86862915,4 L0.234314575,1.36568542 C-0.0781048584,1.05326599 -0.0781048584,0.546734008 0.234314575,0.234314575 C0.546734008,-0.0781048584 1.05326599,-0.0781048584 1.36568542,0.234314575 L4,2.86862915 L6.63431458,0.234314575 C6.94673401,-0.0781048584 7.45326599,-0.0781048584 7.76568542,0.234314575 C8.07810486,0.546734008 8.07810486,1.05326599 7.76568542,1.36568542 L5.13137085,4 Z"></path>
              </g>
            </g>
          </g>
        </g>
      </g>
    </SvgIcon>
  );
}

export default CloseIcon;
