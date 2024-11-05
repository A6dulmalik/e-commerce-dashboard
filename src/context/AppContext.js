import { createContext, useState } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [openSidebar, setOpenSidebar] = useState(true);

  const toggleSidebar = () => {
    setOpenSidebar(!openSidebar);
  };

  return (
    <AppContext.Provider value={{ openSidebar, setOpenSidebar, toggleSidebar }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
