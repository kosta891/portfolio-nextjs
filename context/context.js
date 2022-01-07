import { createContext, useState } from 'react';

const PortfolioContext = createContext();

export const PortfolioProvider = ({ children }) => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  return (
    <PortfolioContext.Provider value={{ isNavOpen, setIsNavOpen }}>
      {children}
    </PortfolioContext.Provider>
  );
};

export default PortfolioContext;
