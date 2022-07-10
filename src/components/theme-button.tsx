import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { HalfMoon, SunLight } from 'iconoir-react';

export const ThemeButton = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => setMounted(true), []);

  return (
    <>
      <button
        aria-label={'DarkModeToggle'}
        type={'button'}
        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      >
        {mounted && <>{theme === 'dark' ? <HalfMoon /> : <SunLight />}</>}
      </button>
    </>
  );
};
