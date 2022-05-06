import * as Pop from '@radix-ui/react-popover';
import * as S from './styles';

export const Popover = () => (
  <Pop.Root>
    <S.StyledAnchor>
      Row as anchor <Pop.Trigger>Trigger</Pop.Trigger>
    </S.StyledAnchor>

    <S.StyledContent>
      <h3>Popover content</h3>
      <p>Are you sure you wanna do this?</p>
      <Pop.Close>Yes</Pop.Close>
      <S.StyledArrow />
    </S.StyledContent>
  </Pop.Root>
);
