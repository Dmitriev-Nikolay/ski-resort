import { CircularProgress } from '@mui/material';
import { styled } from "@mui/material/styles";

export const CircularLoader = styled(CircularProgress)({
  color: 'var(--blue)',
});

export const styleLoader = {
  styleLoaderAfterLogin: {
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    position: 'absolute' as 'absolute',
  },
  styleLoaderLogin: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
};
