import styled from 'styled-components';
import { theme } from '@thiago_brolly/styles';
import { SeparatorProps } from '.';

export const Wrapper = styled.div<SeparatorProps>`
  width: 100%;
  height: 0.2rem;
  margin-top: ${({ marginTop }) => marginTop || theme.spacings.xxsmall};
  margin-bottom: ${({ marginBottom }) =>
    marginBottom || theme.spacings.xxsmall};
  margin-left: auto;
  margin-right: auto;
  background-color: ${({ color }) => color || theme.color.black_800};
  border: 0;
`;
