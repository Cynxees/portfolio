import '../styles/components/Frame.css';
import React, { ReactNode } from 'react';

type FrameProps = {
  children: ReactNode;
};

const Frame: React.FC<FrameProps> = ({ children }) => {
  return (
    <div className="frame">
      {children}
      
    </div>
  );
};

export default Frame;
