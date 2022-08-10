import React from 'react';
import ContentLoader from 'react-content-loader';

const AdminCardLoading: React.FC = () => {
  
  return (
    <ContentLoader
      opacity={0.8}
      speed={2}
      width={232}
      height={115}
      viewBox="0 0 232 115"
      backgroundColor="#e5e5e5"
      foregroundColor="#4158F6"
    >
      <rect x="85" y="0" rx="100" ry="100" width="64" height="64" />
      <rect x="92" y="78" rx="8" ry="8" width="50" height="16" />
      <rect x="77" y="100" rx="6" ry="6" width="80" height="12" />
    </ContentLoader>
  )
}

export default AdminCardLoading;