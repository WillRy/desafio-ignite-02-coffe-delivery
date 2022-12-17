import styled from 'styled-components'

export const Subtitle = styled.h2`
  /* Title/Title XS */

  font-family: 'Baloo 2';
  font-style: normal;
  font-weight: 700;
  font-size: 1.125rem;
  line-height: 130%;
  color: ${(props) => props.theme.subtitle};
  margin-bottom: 16px;
`

export const BoxContent = styled.div`
  background: ${(props) => props.theme.card};
  border-radius: 6px;
  padding: 40px;
  margin-bottom: 12px;
`

export const BoxTitle = styled.h2`
  display: flex;
  align-items: center;
  gap: 8px;

  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 130%;

  display: flex;
  align-items: center;

  color: ${(props) => props.theme.subtitle};

  svg {
    color: ${(props) => props.theme['yellow-700']};
  }

  margin-bottom: 2px;
`

export const BoxSubTitle = styled.h3`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 130%;

  color: ${(props) => props.theme.text};

  margin-bottom: 32px;
  padding-left: 30px;
`

export const FormCheckout = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
`
