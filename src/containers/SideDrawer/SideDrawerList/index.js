import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import List from '@material-ui/core/List';

import SideDrawerListItem from './SideDrawerListItem';
import { CURRENT_USER } from 'api/user/queries';

const SideDrawerList = ({ history, menuItems, selectedIndex, setSelectedIndex }) => {
  const { data: { currentUser } = {} } = useQuery(CURRENT_USER);
  const onItemClickHandler = index => {
    if (selectedIndex !== index) {
      setSelectedIndex(index)
    } else {
      setSelectedIndex(-1);
    }
  }

  const permissions = ((currentUser || {}).role || {}).permissions || [];
  return (
    <>
      <List>
        {menuItems.slice(0, menuItems.length - 1).map((item, index) => (

          // (role === ROLE_TYPES.SUPER_ADMIN || !item.roles) ?
          (!item.hide) ?
            <SideDrawerListItem
              permissions={permissions}
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