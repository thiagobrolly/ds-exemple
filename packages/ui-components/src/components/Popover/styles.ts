import styled from 'styled-components';
import * as Pop from '@radix-ui/react-popover';

export const StyledContent = styled(Pop.Content)`
  border-radius: 3;
  padding: 20px;
  font-size: 14;
  background-color: gainsboro;
  color: black;
`;

export const StyledArrow = styled(Pop.Arrow)`
  fill: gainsboro;
`;

export const StyledAnchor = styled(Pop.Anchor)`
  background: gainsboro;
  padding: 20px;
`;
