import { useLocation } from 'react-router-dom';

export const useNavLinkColor = (path: string, icon?: string) => {
  const { pathname } = useLocation();
  if (icon) {
    return { color: pathname === path ? '#4158F6' : '#c4c1c1'};
  }
  return { color: pathname === path ? '#4158F6' : '#c4c1c1' };
};