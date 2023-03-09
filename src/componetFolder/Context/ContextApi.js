import { createContext, useContext, useEffect, useState } from 'react';
const ContextApi = createContext();

const ContextProvider = ({ children }) => {
  const [screenDevice, setScreenDevice] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 640) {
        setScreenDevice(true);
        if (window.innerWidth < 640) setScreenDevice(true);
      } else setScreenDevice(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <ContextApi.Provider value={{ screenDevice }}>
      {children}
    </ContextApi.Provider>
  );
};

export default ContextProvider;

const useConsumerApi = () => {
  return useContext(ContextApi);
};

export { useConsumerApi };
