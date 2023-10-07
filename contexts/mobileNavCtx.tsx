'use client';

import { Dispatch, SetStateAction, createContext, useState } from 'react';

interface ctxInterface {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

export const mobileNavCtx = createContext<ctxInterface>({
  isOpen: false,
  setIsOpen: () => {}
});

interface Props {
  children: React.ReactNode;
}

const MobileNavProvider = ({ children }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <mobileNavCtx.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </mobileNavCtx.Provider>
  );
};

export default MobileNavProvider;
