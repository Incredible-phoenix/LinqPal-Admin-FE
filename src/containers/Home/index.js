
import React, { useEffect, useContext } from 'react';
import { AppContext } from 'contexts';

const Home = () => {
  const { setLoading } = useContext(AppContext);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, [setLoading]);

  return (
    <div>
      Home
    </div>
  );
};

export default Home;
