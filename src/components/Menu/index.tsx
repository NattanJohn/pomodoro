import {
  HistoryIcon,
  HomeIcon,
  MoonIcon,
  SettingsIcon,
  SunIcon,
} from 'lucide-react';
import styles from './styles.module.css';
import { useEffect, useState } from 'react';
import { RouterLink } from '../RouterLink';

type availableThemes = 'dark' | 'light';

export function Menu() {
  const [theme, setTheme] = useState<availableThemes>(() => {
    const storageTheme = localStorage.getItem('theme') as availableThemes;
    return storageTheme ?? 'dark';
  });

  function handleChangeTheme(
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  ) {
    event.preventDefault();
    setTheme(prevTheme => (prevTheme === 'dark' ? 'light' : 'dark'));
  }

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <nav className={styles.menu}>
      <RouterLink
        className={styles.menuLink}
        href='/'
        aria-label='Home'
        title='Ir para a Home'
      >
        <HomeIcon size={24} />
      </RouterLink>
      <RouterLink
        className={styles.menuLink}
        href='/history/'
        aria-label='Histórico'
        title='Histórico'
      >
        <HistoryIcon size={24} />
      </RouterLink>
      <RouterLink
        className={styles.menuLink}
        href='/settings/'
        aria-label='Configurações'
        title='Configurações'
      >
        <SettingsIcon size={24} />
      </RouterLink>
      <a
        className={styles.menuLink}
        aria-label='Mudar Tema'
        title='Mudar Tema'
        href='/'
        onClick={handleChangeTheme}
      >
        {theme === 'dark' ? <SunIcon size={24} /> : <MoonIcon size={24} />}
      </a>
    </nav>
  );
}
