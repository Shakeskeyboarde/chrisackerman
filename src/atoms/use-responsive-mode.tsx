import { useState } from 'react';

const useResponsiveMode = () => {
  const [mode, setMode] = useState<'desktop' | 'mobile'>('mobile');
};

export { useResponsiveMode };
