import React from 'react';
import List from '@material-ui/core/List';

import SideDrawerListItem from './SideDrawerListItem';

const SideDrawerList = ({ history, menuItems, selectedIndex, setSelectedIndex }) => {
  const onItemClickHandler = index => {
    if (selectedIndex !== index) {
      setSelectedIndex(index)
    } else {
      setSelectedIndex(-1);
    }
  }

  return (
    <>
      <List>
        {menuItems.slice(0, menuItems.length - 1).map((item, index) => (

          // (role === ROLE_TYPES.SUPER_ADMIN || !item.roles) ?
          (!item.hide) ?
            <SideDrawerListItem
              key={index}
              history={history}
              item={item}
              selected={index === selectedIndex}
              onClick={() => onItemClickHandler(index)} />
            : null
        ))}
      </List>
      <SideDrawerListItem
        history={history}
        item={menuItems[menuItems.length - 1]}
        selected={false}
        isSignOut={true}
        onClick={() => { }} />
    </>
  );
}

export default SideDrawerList;