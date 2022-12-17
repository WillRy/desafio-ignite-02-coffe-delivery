import styled from 'styled-components'

export const ConfirmationTitle = styled.h1`
  font-family: 'Baloo 2';
  font-weight: 800;
  font-size: 2rem;
  line-height: 130%;
  color: ${(props) => props.theme['yellow-700']};
`

export const ConfirmationSubTitle = styled.h2`
  font-family: 'Roboto';
  font-weight: 400;
  font-size: 1.25rem;
  line-height: 130%;
  color: ${(props) => props.theme.subtitle};
  margin-bottom: 40px;
`

export const ConfirmationContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 102px;
`

export const ConfirmationDetail = styled.div`
  flex: 1 1 447px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 40px;
  gap: 32px;
  position: relative;

  &:before {
    content: '';
    position: absolute;
    inset: 0;

    border-radius: 6px 36px;
    border: 1px solid transparent;
    background: linear-gradient(45deg, #dbac2c, #8047f8) border-box;
    -webkit-mask: linear-gradient(#fff 0 0) padding-box,
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
  }
`

export const ConfirmationItem = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;

  font-family: 'Roboto';
  font-weight: 400;
  font-size: 1rem;
  line-height: 130%;
  color: ${(props) => props.theme.text};

  strong {
    font-weight: 700;
    font-size: 1rem;
  }
`

export const ConfirmationThumb = styled.div`
  flex: 1 0 auto;
  img {
    display: block;
    margin: 0 auto;
    max-width: 100%;
  }
`
