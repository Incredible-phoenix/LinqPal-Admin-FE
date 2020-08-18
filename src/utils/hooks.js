
import { useState, useEffect } from 'react';
import { useApolloClient, useQuery } from '@apollo/react-hooks';

import { IS_LOGGED_IN } from 'api/user/queries';
import { getValidToken } from 'utils/auth';

const useForm = callback => {
  const [inputs, setInputs] = useState({});

  const submitHandler = event => {
    if (event) {
      event.preventDefault();
    }
    callback();
  };

  const inputChangeHandler = event => {
    event.persist();
    setInputs(inputs => ({
      ...inputs,
      [event.target.name]: event.target.value
    }));
  };

  return {
    submitHandler,
    inputChangeHandler,
    inputs
  };
};

const useAuth = () => {
  const { data } = useQuery(IS_LOGGED_IN);
  const client = useApolloClient();

  useEffect(() => {
    const token = getValidToken();
    client.writeData({ data: { isLoggedIn: !!token } });
  });

  const logOutHandler = () => {
    client.writeData({ data: { isLoggedIn: false } });
    client.cache.reset();
    localStorage.clear();
  };

  const setLoginToken = token => {
    localStorage.setItem('token', token);
    client.writeData({ data: { isLoggedIn: true } });
  };

  return {
    isLoggedIn: data && data.isLoggedIn,
    logOutHandler,
    setLoginToken
  }
};

const useModal = modalName => {
  const [isModalOpen, setIsModalOpen] = useState({ [modalName]: false });

  const openModalHandler = modalName => () => {
    setIsModalOpen({ [modalName]: true });
  };

  const closeModalHandler = modalName => () => {
    setIsModalOpen({ [modalName]: false });
  };

  return {
    isModalOpen,
    openModalHandler,
    closeModalHandler,
  };
};

// TODO: replace cach writing with this hook
const useCacheWriteData = data => {
  const client = useApolloClient();
  client.writeData({ data });
};

export {
  useForm,
  useAuth,
  useModal,
  useCacheWriteData
};
