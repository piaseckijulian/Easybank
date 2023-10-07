'use client';

import { mobileNavCtx } from '@/contexts/mobileNavCtx';
import { useContext } from 'react';

const Overlay = () => {
  const { isOpen } = useContext(mobileNavCtx);

  if (isOpen) {
    return <div className="overlay" />;
  }
};

export default Overlay;
