import React, { memo } from 'react';
import { Box } from '@mui/material';

import { useTypedSelector } from "../../../hooks/useTypedSelector";
import * as selectorLogin from '../../../store/login/selectors';

import * as style from './style';

const Loader: React.FC<{ size?: number }> = ({ size = 100 }) => {
  const isProgressLoadingLogin = useTypedSelector(selectorLogin.isLoading);
  const nedeedStyleLoader = isProgressLoadingLogin ? style.styleLoader.styleLoaderAfterLogin : style.styleLoader.styleLoaderLogin;

  return (
    <Box style={nedeedStyleLoader}>
      <style.CircularLoader size={size} />
    </Box>
  );
};

export default memo(Loader);