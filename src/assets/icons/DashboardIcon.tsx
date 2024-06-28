import React from 'react';

interface DashboardIconProps {
  isSelected?: boolean;
}

const DashboardIcon = ({ isSelected }: DashboardIconProps) => {
  return (
    <svg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M3.125 5C3.125 4.50272 3.32254 4.02581 3.67417 3.67417C4.02581 3.32254 4.50272 3.125 5 3.125H6.875C7.37228 3.125 7.84919 3.32254 8.20082 3.67417C8.55246 4.02581 8.75 4.50272 8.75 5V6.875C8.75 7.37228 8.55246 7.84919 8.20082 8.20082C7.84919 8.55246 7.37228 8.75 6.875 8.75H5C4.50272 8.75 4.02581 8.55246 3.67417 8.20082C3.32254 7.84919 3.125 7.37228 3.125 6.875V5ZM3.125 13.125C3.125 12.6277 3.32254 12.1508 3.67417 11.7992C4.02581 11.4475 4.50272 11.25 5 11.25H6.875C7.37228 11.25 7.84919 11.4475 8.20082 11.7992C8.55246 12.1508 8.75 12.6277 8.75 13.125V15C8.75 15.4973 8.55246 15.9742 8.20082 16.3258C7.84919 16.6775 7.37228 16.875 6.875 16.875H5C4.50272 16.875 4.02581 16.6775 3.67417 16.3258C3.32254 15.9742 3.125 15.4973 3.125 15V13.125ZM11.25 5C11.25 4.50272 11.4475 4.02581 11.7992 3.67417C12.1508 3.32254 12.6277 3.125 13.125 3.125H15C15.4973 3.125 15.9742 3.32254 16.3258 3.67417C16.6775 4.02581 16.875 4.50272 16.875 5V6.875C16.875 7.37228 16.6775 7.84919 16.3258 8.20082C15.9742 8.55246 15.4973 8.75 15 8.75H13.125C12.6277 8.75 12.1508 8.55246 11.7992 8.20082C11.4475 7.84919 11.25 7.37228 11.25 6.875V5ZM11.25 13.125C11.25 12.6277 11.4475 12.1508 11.7992 11.7992C12.1508 11.4475 12.6277 11.25 13.125 11.25H15C15.4973 11.25 15.9742 11.4475 16.3258 11.7992C16.6775 12.1508 16.875 12.6277 16.875 13.125V15C16.875 15.4973 16.6775 15.9742 16.3258 16.3258C15.9742 16.6775 15.4973 16.875 15 16.875H13.125C12.6277 16.875 12.1508 16.6775 11.7992 16.3258C11.4475 15.9742 11.25 15.4973 11.25 15V13.125Z'
        stroke={isSelected ? '#6332BA' : '#5A607D'}
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export default DashboardIcon;