import styled from 'styled-components'

export const Card = styled.div`
  padding: 20px;
  background: #f3f2f2;
  border-radius: 6px 36px;

  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    margin-top: -40px;
    margin-bottom: 12px;
  }

  ul {
    padding: 0;
    list-style: none;
    display: flex;
    gap: 4px;
    margin-bottom: 16px;

    li {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 4px 8px;
      white-space: nowrap;

      /* width: 81px;
      height: 21px; */

      /* Brand/Yellow Light */

      background: ${(props) => props.theme['yellow-100']};
      border-radius: 100px;

      font-weight: 700;
      font-size: 0.625rem;
      line-height: 130%;
      /* identical to box height, or 13px */

      text-transform: uppercase;

      /* Brand/Yellow Dark */

      color: ${(props) => props.theme['yellow-700']};
    }
  }

  h2 {
    font-family: 'Baloo 2';
    font-style: normal;
    font-weight: 700;
    font-size: 1.25rem;
    line-height: 130%;

    margin-bottom: 8px;

    text-align: center;

    /* Base/Subtitle */

    color: ${(props) => props.theme.subtitle};
  }

  p {
    font-weight: 400;
    font-size: 0.875rem;
    line-height: 130%;
    margin-bottom: 34px;

    text-align: center;

    /* Base/Label */

    color: ${(props) => props.theme.label};
  }
`

export const CardInfo = styled.div`
  display: flex;
  align-items: center;

  width: 100%;
  gap: 8px;
`
export const CardPrice = styled.div`
  display: flex;
  align-items: center;

  font-weight: 400;
  font-size: 0.875rem;
  line-height: 130%;
  /* or 18px */

  text-align: right;

  /* Base/Text */

  color: ${(props) => props.theme.text};

  margin-right: auto;

  span {
    font-family: 'Baloo 2';
    font-style: normal;
    font-weight: 800;
    font-size: 24px;
    line-height: 130%;
    /* or 31px */

    text-align: right;

    /* Base/Text */

    color: ${(props) => props.theme.text};
  }
`

export const CardButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;

  width: 38px;
  height: 38px;

  border: none;
  color: ${(props) => props.theme.white};
  cursor: pointer;

  /* Brand/Purple Dark */

  background: ${(props) => props.theme['purple-700']};
  border-radius: 6px;

  &:hover {
    background: ${(props) => props.theme['purple-500']};
  }

  &:focus {
    box-shadow: 0 0 0 2px ${(props) => props.theme['purple-500']};
  }
`

export const CardInput = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
  gap: 4px;

  /* Base/Button */

  background: ${(props) => props.theme.button};
  border-radius: 6px;

  font-weight: 400;
  font-size: 1rem;
  line-height: 130%;
  /* identical to box height, or 21px */

  text-align: center;
  user-select: none;

  /* Base/Base/Title */

  color: ${(props) => props.theme.title};

  svg {
    cursor: pointer;
    fill: ${(props) => props.theme['purple-500']};

    &:hover {
      fill: ${(props) => props.theme['purple-700']};
    }
  }
`
