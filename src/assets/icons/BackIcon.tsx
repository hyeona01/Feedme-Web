const BackIcon = ({ theme }: { theme: 'dark' | 'light' }) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_50_21950)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M13.9639 18.1692C13.7097 18.4027 13.3144 18.386 13.0808 18.1319L5.99747 10.4235C5.77775 10.1844 5.77775 9.81687 5.99747 9.57776L13.0808 1.86942C13.3144 1.61526 13.7097 1.59855 13.9639 1.83211C14.2181 2.06566 14.2348 2.46104 14.0012 2.7152L7.30649 10.0006L14.0012 17.2861C14.2348 17.5403 14.2181 17.9356 13.9639 18.1692Z"
          fill={theme === 'light' ? '#646464' : '#F0F0EB'}
        />
      </g>
      <defs>
        <clipPath id="clip0_50_21950">
          <rect
            width="8.33333"
            height="16.6667"
            fill="white"
            transform="matrix(-1 0 0 -1 14.166 18.334)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default BackIcon;
