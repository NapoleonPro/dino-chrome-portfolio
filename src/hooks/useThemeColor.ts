import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export function useThemeColor() {
  const { theme, resolvedTheme } = useTheme();
  const [color, setColor] = useState('#1a1a1a');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    
    const currentTheme = resolvedTheme || theme;
    // Dark mode: white/light color; Light mode: dark color
    setColor(currentTheme === 'dark' ? '#e5e5e5' : '#1a1a1a');
  }, [theme, resolvedTheme, mounted]);

  return color;
}
