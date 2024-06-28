import React from 'react';

interface UserIconsProps {
  isSelected?: boolean;
}

const UsersIcon = ({ isSelected }: UserIconsProps) => {
  return (
    <svg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M2.91665 6.66636C2.91681 5.87629 3.12121 5.09968 3.51 4.41189C3.89878 3.7241 4.45877 3.14849 5.1356 2.74092C5.81243 2.33335 6.58312 2.10766 7.37289 2.08575C8.16265 2.06384 8.94467 2.24646 9.64306 2.61588C10.3414 2.9853 10.9325 3.52898 11.3588 4.19416C11.7851 4.85934 12.0322 5.62343 12.0762 6.41227C12.1202 7.20112 11.9595 7.98794 11.6097 8.69637C11.2599 9.4048 10.733 10.0108 10.08 10.4555C11.4862 10.9713 12.706 11.8961 13.5822 13.111C14.4584 14.3258 14.951 15.775 14.9966 17.2722C14.9947 17.4336 14.9305 17.588 14.8173 17.7032C14.7042 17.8184 14.551 17.8854 14.3896 17.8902C14.2283 17.8951 14.0713 17.8374 13.9515 17.7292C13.8316 17.621 13.7583 17.4707 13.7466 17.3097C13.697 15.6859 13.0171 14.1453 11.851 13.0142C10.6848 11.8832 9.12411 11.2506 7.49956 11.2506C5.87502 11.2506 4.31431 11.8832 3.14817 13.0142C1.98203 14.1453 1.30211 15.6859 1.25248 17.3097C1.24414 17.4729 1.17221 17.6263 1.05211 17.7371C0.932015 17.8479 0.773296 17.9073 0.609958 17.9025C0.446621 17.8977 0.291657 17.8291 0.178265 17.7115C0.0648726 17.5938 0.00207098 17.4364 0.003314 17.273C0.0487735 15.7757 0.54132 14.3263 1.41755 13.1113C2.29378 11.8963 3.5136 10.9714 4.91998 10.4555C4.30255 10.035 3.79725 9.46996 3.44809 8.80955C3.09893 8.14914 2.91649 7.41339 2.91665 6.66636ZM7.49998 3.33303C6.61593 3.33303 5.76808 3.68422 5.14296 4.30934C4.51784 4.93446 4.16665 5.78231 4.16665 6.66636C4.16665 7.55042 4.51784 8.39826 5.14296 9.02339C5.76808 9.64851 6.61593 9.9997 7.49998 9.9997C8.38404 9.9997 9.23188 9.64851 9.857 9.02339C10.4821 8.39826 10.8333 7.55042 10.8333 6.66636C10.8333 5.78231 10.4821 4.93446 9.857 4.30934C9.23188 3.68422 8.38404 3.33303 7.49998 3.33303ZM14.4083 6.66636C14.2855 6.66636 14.165 6.6747 14.0466 6.69136C13.964 6.70616 13.8793 6.70416 13.7974 6.68549C13.7156 6.66681 13.6384 6.63185 13.5704 6.58268C13.5023 6.53352 13.4449 6.47115 13.4015 6.39931C13.3581 6.32747 13.3296 6.24762 13.3178 6.16454C13.3059 6.08145 13.3109 5.99682 13.3324 5.9157C13.354 5.83458 13.3916 5.75863 13.4432 5.69238C13.4947 5.62614 13.5591 5.57095 13.6324 5.53011C13.7057 5.48928 13.7865 5.46363 13.87 5.4547C14.6988 5.33487 15.5439 5.49403 16.2724 5.90713C17.0008 6.32024 17.5712 6.96383 17.8938 7.73663C18.2164 8.50944 18.2729 9.36757 18.0543 10.176C17.8358 10.9844 17.3547 11.6972 16.6866 12.2022C17.6686 12.6419 18.5024 13.3564 19.0874 14.2594C19.6723 15.1624 19.9835 16.2154 19.9833 17.2914C19.9833 17.4571 19.9175 17.6161 19.8003 17.7333C19.683 17.8505 19.5241 17.9164 19.3583 17.9164C19.1926 17.9164 19.0336 17.8505 18.9164 17.7333C18.7992 17.6161 18.7333 17.4571 18.7333 17.2914C18.7336 16.3614 18.4342 15.4561 17.8793 14.7097C17.3245 13.9634 16.5439 13.4157 15.6533 13.148L15.2083 13.0147V11.618L15.55 11.4439C16.0564 11.1873 16.4617 10.7676 16.7002 10.2524C16.9388 9.73722 16.9968 9.15668 16.8648 8.60449C16.7329 8.05231 16.4187 7.56071 15.973 7.20905C15.5273 6.8574 14.976 6.66621 14.4083 6.66636Z'
        fill={isSelected ? '#6332BA' : '#5A607D'}
      />
    </svg>
  );
};

export default UsersIcon;