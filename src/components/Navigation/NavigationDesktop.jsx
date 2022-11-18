import React from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import UseLocalStorage from '../../hooks/UseLocalStorage';

import './NavigationDesktop.scss';

function NavigationDesktop() {
  const { t } = useTranslation();
  const [storedValue, setValue] = UseLocalStorage('language', 'en');
  return (
    <nav className='nav'>
      <NavLink to='/home' className='nav-link'>
        {/* {t('home')} */}
        HOME
      </NavLink>
      <NavLink to='/gallery' className='nav-link'>
        {/* {t('gallery')} */}
        GALLERY
      </NavLink>
      <NavLink to='/exhibitions' className='nav-link'>
        {/* {t('exhibitions')} */}
        EXHIBITIONS
      </NavLink>
      <NavLink to='/info' className='nav-link'>
        {/* {t('info')} */}
        INFO
      </NavLink>
    </nav>
  );
}

export default NavigationDesktop;
