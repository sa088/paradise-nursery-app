import React from 'react';

function Logo({ size = 44 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Paradise Nursery logo"
    >
      <circle cx="32" cy="32" r="32" fill="#ffffff" />
      <path
        d="M32 48c0-10 -6-16-14-18 2 10 6 16 14 18z"
        fill="#66bb6a"
      />
      <path
        d="M32 48c0-12 6-20 16-22 -2 12 -6 20 -16 22z"
        fill="#2e7d32"
      />
      <rect x="30" y="30" width="4" height="18" rx="2" fill="#1b5e20" />
    </svg>
  );
}

export default Logo;
