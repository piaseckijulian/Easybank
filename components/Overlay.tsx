'use client';

import { useContext } from 'react';
import { mobileNavCtx } from '@/contexts/mobileNavCtx';

const Overlay = () => {
  const { isOpen } = useContext(mobileNavCtx);

  if (isOpen) {
    return <div className="overlay" />;
  }
};

export default Overlay;
