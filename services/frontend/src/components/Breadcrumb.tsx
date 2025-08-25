import Link from 'next/link';
import React from 'react';

interface IProps {
  link: string;
  name: string;
}

const Breadcrumb = ({ link, name }: IProps) => {
  return (
    <Link href={link}>
      <a style={{
        fontSize: '0.875rem',
        fontWeight: '500',
        color: 'rgba(255, 255, 255, 0.7)',
        textDecoration: 'none',
        transition: 'color 0.3s ease'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.color = 'rgba(255, 255, 255, 1)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.color = 'rgba(255, 255, 255, 0.7)';
      }}>
        {name}
      </a>
    </Link>
  );
};

export default Breadcrumb;
