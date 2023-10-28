'use client';

import {
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  createContext,
  useState
} from 'react';

interface ctxInterface {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

export const mobileNavCtx = createContext<ctxInterface>({
  isOpen: false,
  setIsOpen: () => {}
});

const MobileNavProvider = ({ children }: PropsWithChildren) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <mobileNavCtx.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </mobileNavCtx.Provider>
  );
};

export default MobileNavProvider;
