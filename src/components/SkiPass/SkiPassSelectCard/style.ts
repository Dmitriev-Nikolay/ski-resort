import { styled } from '@mui/material/styles';
import { Typography, Box } from '@mui/material';

import mountainsDay from '../../../assets/img/mountains-day.png';

export const SkiPassAvatar = styled(Box)({
  background: `url(${mountainsDay})`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundPosition: 'top center',
  borderRadius: '8px',
  height: '40px',
  width: '100%',
});

export const TextSkiPassTime = styled(Typography)({
  fontSize: '14px',
  lineHeight: '24px',
  textAlign: 'left',
});

export const TextSkiPassPrice = styled(Typography)({
  fontSize: '14px',
  lineHeight: '20px',
  textAlign: 'left',
  color: '#0000008B',
});
