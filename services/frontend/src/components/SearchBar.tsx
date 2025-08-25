import { useRouter } from 'next/router';
import { FormEvent, useState } from 'react';

import SearchIcon from './SearchIcon';

const SearchBar = () => {
  const [search, setSearch] = useState('');
  const router = useRouter();

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    router.push({
      pathname: `/listings`,
      query: { search },
    });

    setSearch('');
  };

  return (
    <div style={{
      flex: '1',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      maxWidth: '400px'
    }}>
      <div style={{
        width: '100%',
        position: 'relative'
      }}>
        <label style={{ display: 'none' }} htmlFor="search">
          Search
        </label>
        <form onSubmit={onSubmit} style={{ position: 'relative' }}>
          <div style={{
            position: 'absolute',
            left: '12px',
            top: '50%',
            transform: 'translateY(-50%)',
            zIndex: 1,
            pointerEvents: 'none'
          }}>
            <SearchIcon />
          </div>
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            id="search"
            name="search"
            placeholder="Search listings..."
            type="text"
            style={{
              width: '100%',
              paddingLeft: '2.5rem',
              paddingRight: '1rem',
              paddingTop: '0.75rem',
              paddingBottom: '0.75rem',
              background: 'rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              borderRadius: '12px',
              color: 'white',
              fontSize: '0.875rem',
              transition: 'all 0.3s ease',
              boxShadow: '0 4px 16px rgba(31, 38, 135, 0.2)'
            }}
            onFocus={(e) => {
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.15)';
              e.currentTarget.style.borderColor = 'rgba(116, 235, 213, 0.5)';
              e.currentTarget.style.boxShadow = '0 0 0 3px rgba(116, 235, 213, 0.1), 0 8px 32px rgba(31, 38, 135, 0.37)';
            }}
            onBlur={(e) => {
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)';
              e.currentTarget.style.boxShadow = '0 4px 16px rgba(31, 38, 135, 0.2)';
            }}
          />
        </form>
      </div>
    </div>
  );
};

export default SearchBar;
