import React, { useMemo, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import UseLocalStorage from '../../hooks/UseLocalStorage';
import './MobileNavigation.scss';

function MobileNavigation({ opened, setOpened }) {
  const { t } = useTranslation();
  const [storedValue, setValue] = UseLocalStorage('language', 'en');
  return (
    <nav className='dropdown'>
      <div className={opened ? 'dropdown-content opened' : 'dropdown-content closed'}>
        <NavLink to='/home' className='nav-link' onClick={setOpened}>
          {/* {t('home')} */}
          HOME
        </NavLink>
        <NavLink to='/gallery' className='nav-link' onClick={setOpened}>
          {/* {t('gallery')} */}
          GALLERY
        </NavLink>
        <NavLink to='/exhibitions' className='nav-link' onClick={setOpened}>
          {/* {t('about')} */}
          EXHIBITIONS
        </NavLink>
        <NavLink to='/info' className='nav-link' onClick={setOpened}>
          {/* {t('info')} */}
          INFO
        </NavLink>
      </div>
    </nav>
  );
}

export default MobileNavigation;
