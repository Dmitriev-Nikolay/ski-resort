import { styled } from "@mui/material/styles";
import { Typography, Grid, Button, Paper, Box } from '@mui/material';
import { Form, Field } from 'formik';
import Tooltip, { TooltipProps, tooltipClasses } from '@mui/material/Tooltip';
import loginBg from '../../../assets/img/login-bg.png';

export const LoginPage = styled(Box)({
    height: '100vh',
    width: '100vw',
    background: `url(${loginBg})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'top center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
});

export const LoginPaper = styled(Paper)({
    padding: 'calc(var(--spacer) * 9) calc(var(--spacer) * 8) calc(var(--spacer) * 5)',
    maxHeight: '90vh',
    maxWidth: 'calc(var(--spacer) * 62)',
    borderRadius: 12,
    margin: 'calc(var(--spacer) * 2.5) calc(var(--spacer) * 2.5) calc(var(--spacer) * 4)',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
});

export const LoginTitleGrid = styled(Grid)({
    position: 'relative',
    justifyContent: 'center',
});

export const Logo = styled('img')({
    marginBottom: 'calc(var(--spacer) * 2)',
    width: '77px',
    height: '70px',
    transition: 'filter .1s ease-in-out .01s',
    '&:hover': {
        filter: 'drop-shadow(0px 0px 10px var(--blue)) saturate(100%)',
        animation: 'shake .5s linear 0s infinite',
    },
    '@keyframes shake': {
        '0%': { transform: 'translate(2px, 1px) rotate(0deg)' },
        '10%': { transform: 'translate(-1px, -2px) rotate(-2deg)' },
        '20%': { transform: 'translate(-3px, 0px) rotate(3deg)' },
        '30%': { transform: 'translate(0px, 2px) rotate(0deg)' },
        '40%': { transform: 'translate(1px, -1px) rotate(1deg)' },
        '50%': { transform: 'translate(-1px, 2px) rotate(-1deg)' },
        '60%': { transform: 'translate(-3px, 1px) rotate(0deg)' },
        '70%': { transform: 'translate(2px, 1px) rotate(-2deg)' },
        '80%': { transform: 'translate(-1px, -1px) rotate(4deg)' },
        '90%': { transform: 'translate(2px, 2px) rotate(0deg)' },
        '100%': { transform: 'translate(1px, -2px) rotate(-1deg)' },
    },
});

export const TextPersonalTitle = styled(Typography)({
    fontWeight: 700,
    color: 'var(--blue)',
    textTransform: 'uppercase',
    textAlign: 'center',
    fontSize: 'calc(var(--spacer) * 2)',
});

export const TextResortTitle = styled(Typography)({
    fontWeight: 700,
    textTransform: 'uppercase',
    marginBottom: 'calc(var(--spacer) * 6)',
    textAlign: 'center',
    fontSize: 'calc(var(--spacer) * 2)',
});

export const BlockLoginError = styled(Grid)({
    animation: 'hide 3s ease-in-out forwards',
    '@keyframes hide': {
        '0%': {
            opacity: 1,
        },
        '100%': {
            opacity: 0,
        },
    },
});

export const TextLoginError = styled(Typography)({
    fontWeight: 500,
    textAlign: 'center',
    color: '#B71C1C',
    position: 'absolute',
    bottom: 0,
    left: '50%',
    width: '100%',
    transform: 'translate(-50%, -50%)',
});

export const MainForm = styled(Form)({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
});

export const FieldInput = styled(Field)({
    borderRadius: '10px',
    fontSize: 'calc(var(--spacer) * 1.25)',
    marginBottom: '12px',
    "&:last-of-type": {
        margin: 0,
    },
    '& .MuiOutlinedInput': {
        '&-notchedOutline': {
            border: 'none',
        },
        '&-input': {
            padding: '10px 12px',
        },
        '&-root': {
            borderRadius: '8px',
        },
    },
    '& .MuiInputLabel-root': {
        fontSize: 'calc(var(--spacer) * 1.75)',
        color: '#D3D3D3',
        top: '-4px',
    },
    '& .MuiButton-root': {
        '&:active': {
            transform: 'translateY(.1em)',
        },
    },
    '& .MuiFormHelperText-root': {
        display: 'none',
    },
});

export const ButtonLogin = styled(Button)({
    margin: 'calc(var(--spacer) * 5) 0',
    borderRadius: 21,
    padding: 'calc(var(--spacer) * 2) calc(var(--spacer) * 4)',
    background: 'var(--blue)',
    fontWeight: 600,
    width: '50%',
    fontSize: 'calc(var(--spacer) * 1.5)',
});

export const SocialIcon = styled('img')({
    transition: 'var(--transition-5)',
    borderRadius: '50%',
    '&:hover': {
        transform: 'var(--scale-small)',
        boxShadow: '0px 0px 0px 2px var(--blue), 0px 0px 12px 6px var(--blue)',
    },
});

export const TextRegistration = styled(Typography)({
    fontWeight: 500,
    textAlign: 'center',
    fontSize: 'calc(var(--spacer) * 2)',
});

export const TextAllRightsReserved = styled(Typography)({
    fontWeight: 500,
    textAlign: 'center',
    fontSize: 'calc(var(--spacer) * 1.25)',
});

export const LogoTooltip = styled(({ className, ...props }: TooltipProps) => (
    <Tooltip {...props} arrow classes={{ popper: className }} />
))({
    [`& .${tooltipClasses.arrow}`]: {
        color: 'var(--blue)',
    },
    [`& .${tooltipClasses.tooltip}`]: {
        backgroundColor: 'var(--blue)',
        borderRadius: '8px',
        fontSize: 'calc(var(--spacer) * 2)',
        lineHeight: 'calc(var(--spacer) * 3)',
        fontWeight: 500,
    },
});