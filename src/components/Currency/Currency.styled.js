import styled from '@emotion/styled';

export const TableWrapperDesc = styled.div(({ theme, bg }) => {
  return {
    width: '393px',
    height: '331px',
    color: theme.colors.textSecondary,
    borderRadius: theme.radii.currency,
    background: `url(${bg}) no-repeat bottom`,
    marginTop: '32px',
    marginLeft: '18px',
  };
});

export const TRDesc = styled.tr`
  max-width: 393px;
  display: flex;
  justify-content: space-around;
  padding: 0px 16px;
`;

export const THDesc = styled.th(({ theme }) => ({
  fontFamily: theme.fonts.secondary,
  fontSize: '18px',
  fontWeight: '700',
  padding: '17px 0',

  width: '131px',
  height: '60px',
}));

export const TableTextDesc = styled.td(({ theme }) => ({
  fontFamily: theme.fonts.secondary,
  textAlign: 'center',
  fontWeight: '400',
  fontSize: '16px',
  padding: '20px 0px 4px',
}));

// ============================
// FOR TABLET
// ============================
export const TableWrapperTablet = styled.div(({ theme, bg }) => {
  return {
    width: '336px',
    height: '182px',
    color: theme.colors.textSecondary,
    borderRadius: theme.radii.currency,
    background: `url(${bg}) no-repeat bottom`,
    marginTop: '32px',
    marginRight: '32px',
    marginLeft: 'auto',
  };
});

export const TRTablet = styled.tr`
  max-width: 336px;
  display: flex;
  justify-content: space-around;
`;

export const THTablet = styled.th(({ theme }) => ({
  fontFamily: theme.fonts.secondary,
  fontSize: '18px',
  lineHeight: '1.5',
  fontWeight: '700',
  padding: '11px 0',

  width: '112px',
}));

export const TableTextTablet = styled.td(({ theme }) => ({
  fontFamily: theme.fonts.secondary,
  textAlign: 'center',
  fontWeight: '400',
  fontSize: '16px',
  lineHeight: '1.5',
  padding: '16px 0px 4px',
}));

// ============================
// FOR MOBILE
// ============================
export const TableWrapperMobile = styled.div(({ theme, bg }) => {
  return {
    width: '280px',
    height: '174px',
    color: theme.colors.textSecondary,
    borderRadius: theme.radii.currency,
    background: `url(${bg}) no-repeat bottom`,
    margin: '0 auto',
    marginTop: '16px',
  };
});

export const TRMobile = styled.tr`
  max-width: 280px;
`;

export const THMobile = styled.th(({ theme }) => ({
  fontFamily: theme.fonts.secondary,
  fontSize: '18px',
  lineHeight: '1.5',
  fontWeight: '700',
  padding: '0px 0px 0px 15px',

  width: '93px',
  height: '50px',
}));

export const TableTextMobile = styled.td(({ theme }) => ({
  fontFamily: theme.fonts.secondary,
  textAlign: 'center',
  fontWeight: '400',
  fontSize: '16px',
  lineHeight: '1.5',
  padding: '12px 0px 0px 5px',
}));

export const LoaderWrap = styled.div`
  position: relative;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  margin: 75px;
  display: inline-block;
  vertical-align: middle;
`;
export const LineOne = styled.div`
  width: 8px;
  position: absolute;
  border-radius: 5px;
  bottom: 0;
  background: -webkit-gradient(
    linear,
    left top,
    left bottom,
    from(#1ee95d),
    to(#5714ce)
  );
  background: -webkit-linear-gradient(top, #1ee95d, #5714ce);
  background: -o-linear-gradient(top, #1ee95d, #5714ce);
  background: linear-gradient(to bottom, #1ee95d, #5714ce);
  left: 0;
  -webkit-animation: line-grow 0.5s ease alternate infinite;
  animation: line-grow 0.5s ease alternate infinite;
`;
export const LineTwo = styled.div`
  width: 8px;
  position: absolute;
  border-radius: 5px;
  bottom: 0;
  background: -webkit-gradient(
    linear,
    left top,
    left bottom,
    from(#1ee95d),
    to(#5714ce)
  );
  background: -webkit-linear-gradient(top, #1ee95d, #5714ce);
  background: -o-linear-gradient(top, #1ee95d, #5714ce);
  background: linear-gradient(to bottom, #1ee95d, #5714ce);
  left: 20px;
  -webkit-animation: line-grow 0.5s 0.2s ease alternate infinite;
  animation: line-grow 0.5s 0.2s ease alternate infinite;
`;
export const LineThree = styled.div`
  width: 8px;
  position: absolute;
  border-radius: 5px;
  bottom: 0;
  background: -webkit-gradient(
    linear,
    left top,
    left bottom,
    from(#1ee95d),
    to(#5714ce)
  );
  background: -webkit-linear-gradient(top, #1ee95d, #5714ce);
  background: -o-linear-gradient(top, #1ee95d, #5714ce);
  background: linear-gradient(to bottom, #1ee95d, #5714ce);
  left: 40px;
  -webkit-animation: line-grow 0.5s 0.4s ease alternate infinite;
  animation: line-grow 0.5s 0.4s ease alternate infinite;
`;
