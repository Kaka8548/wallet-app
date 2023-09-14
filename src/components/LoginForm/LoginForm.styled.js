import styled from '@emotion/styled';
import BublePurp from 'assets/images/ellipse-purple.svg';
import BublRed from 'assets/images/ellipse-pink.svg';

export const LoginFormPage = styled.div(({ theme }) => ({
  margin: '0',
  display: 'Flex',
  gap: '38px',
  backgroundColor: theme.colors.mainBgUnderColor,
  backgroundRepeat: 'no-repeat, no-repeat',
  backgroundImage: `url(${BublRed}), url(${BublePurp})`,
  backgroundPosition: 'top -150px right -150px, bottom -150px left -150px',
}));

export const Illustration = styled.img(({ theme }) => ({
  width: '435px',
  display: 'block',
  margin: '0 auto',
}));

export const IllustrationWrapper = styled.div(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  paddingTop: '150px',
}));

export const FormWrapper = styled.div(({ theme }) => ({
  display: 'block',
  width: '100%',

  backgroundColor: theme.colors.mainBgLighter,
  backdropFilter: 'blur(25px)',
}));

export const IllustrationDesc = styled.p(({ theme }) => ({
  marginTop: '28px',
  padding: '0',
  textAlign: 'center',
  fontFamily: theme.fonts.main,
  fontSize: '30px',
  lineHeight: '45px',
  color: theme.colors.textMain,
  fontWeight: '400',
  zIndex: '10',
}));

export const FormBlock = styled.div(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',

  margin: '136px 91px 116px 107px',
  marginLeft: 'auto',
  marginRight: 'auto',
  padding: '40px 61px 62px 61px',

  width: '532px',
  height: '468px',

  alignItems: 'center',

  backgroundColor: theme.colors.whiteColor,
  color: theme.colors.textMain,

  borderRadius: theme.radii.currency,
}));

export const FormBlockMobile = styled.div(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',

  minWidth: '280px',
  height: '568px',

  alignItems: 'center',

  backgroundColor: theme.colors.whiteColor,
  color: theme.colors.textMain,

  borderRadius: theme.radii.currency,
}));

export const FormWrapperMobile = styled.div(({ theme }) => ({
  display: 'block',
  width: '100%',

  backgroundColor: theme.colors.mainBgLighter,
  backdropFilter: 'blur(25px)',
}));

export const Overlay = styled.div`
  position: fixed;
  top: 360px;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
  @media (min-width: 768px) {
    min-width: 603px;
    min-height: 540px;
    top: 0;
  }
`;

export const BubbleWrapper = styled.div(({ theme }) => ({
  width: '100%',
  minHeight: '100vh',

  zIndex: 0,
  background: theme.colors.BgMain,
  '::after': {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    zIndex: 0,
    content: '""',

    background: `url('${BublePurp}') bottom left no-repeat, url('${BublRed}') top right no-repeat `,
  },
}));

export const FormBlockTab = styled.div(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',

  marginLeft: 'auto',
  marginRight: 'auto',
  padding: '40px 61px 62px 61px',

  width: '532px',

  alignItems: 'center',

  backgroundColor: theme.colors.whiteColor,
  color: theme.colors.textMain,

  borderRadius: theme.radii.currency,
}));

export const IllustrationWrapperTab = styled.div(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  paddingTop: '60px',
  paddingLeft: '114px',
  position: 'absolute',
}));
