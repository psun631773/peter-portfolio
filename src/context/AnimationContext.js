// context/AnimationContext.js
import React, { createContext, useState, useContext } from 'react';

const AnimationContext = createContext();

export const AnimationProvider = ({ children }) => {
  const [playAnimation, setPlayAnimation] = useState(false);

  return (
    <AnimationContext.Provider value={{ playAnimation, setPlayAnimation }}>
      {children}
    </AnimationContext.Provider>
  );
};

export const useAnimation = () => useContext(AnimationContext);
