
import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { useLazyQuery } from '@apollo/react-hooks';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Table from 'components/UI/CustomTable/Table';
import HeaderRow from 'components/UI/CustomTable/HeaderRow';
import Row from 'components/UI/CustomTable/Row';
import Cell from 'components/UI/CustomTable/Cell';
import Paginator from 'components/UI/CustomTable/Paginator';
import UserIcon from 'components/Icons/UserIcon';
import { USERS } from 'api/user/queries';
import { useTableStyles } from 'styles/common-table';
import { ROWS_ON_PAGE } from 'config';

const headerData = ['Email', 'UserName', 'PhoneNumber', 'Address', 'status'];
const INITIAL_PAGE = 1;
const FIRST_PAGE = 1;

const UsersTable = ({ history, location }) => {
  const pageNumber = (location.state || {}).currentPage || INITIAL_PAGE;

  const classes = useTableStyles();
  const [currentPage, setCurrentPage] = useState(pageNumber);

  const [fetchUsers, { loading, data: userData, error }] = useLazyQuery(USERS, { fetchPolicy: 'no-cache' });

  const fetchData = param => {
    fetchUsers();
  };
  useEffect(() => {
    fetchData();
  }, []);


  const tableData = ((userData || {})).users || [];
  const totalCount = ((userData || {}).getPaginatorUsers || {}).total || FIRST_PAGE;

  if (error) {
    return (
      <Typography color='textPrimary' align='center' className={classes.noData}>
        No Data
      </Typography>
    );
  }

  return (
    <>
      <div className={classes.topHeader}>
        <Typography variant='h5' className={classes.tableName}>User</Typography>
        <div className={classes.topHeaderRight}>
          <div>
          </div>
        </div>
      </div>
      <Table>
        <HeaderRow>
          <th style={{ textAlign: 'center', fontSize: 24 }}>
            •
        </th>
          {headerData.map((headerCol, index) => (
            <th key={index}>
              <Typography variant='caption'>{headerCol}</Typography>
            </th>
          ))}
        </HeaderRow>
        <tbody className={classes.tbodyClass}>
          {tableData.map((rowData, index) => {
            return (
              <Row key={index}>
                <Cell className={classes.avatarColumn} center>
                  {!rowData.avatarURL ?
                    <UserIcon /> :
                    <Avatar src={rowData.avatarURL} />
                  }
                </Cell>
                <Cell>
                  {rowData.email}
                </Cell>
                <Cell>
                  {rowData.userName}
                </Cell>
                <Cell>
                  {rowData.phoneNumber}
                </Cell>
                <Cell>
                  {rowData.address}
                </Cell>
                <Cell className={classes.actionColumn} center>
                </Cell>
              </Row>
            );
          })}
        </tbody>
      </Table>
      {(tableData.length === 0 && !loading) &&
        <Typography color='textPrimary' align='center' className={classes.noData}>
          No Data
      </Typography>
      }
      <div className={classes.paginator}>
        <Paginator
          totalPages={Math.ceil(totalCount / ROWS_ON_PAGE)}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage} />
      </div>
    </>
  );
};

export default withRouter(UsersTable);
