import React from 'react';
import { Root as TooltipRoot } from '@radix-ui/react-tooltip';
import * as S from './styles';

export type TooltipProps = React.ComponentProps<typeof TooltipRoot> & {
  trigger: React.ReactNode;
  children: React.ReactNode;
  className?: string;
  colorContent?: string;
};

export const Tooltip = ({
  trigger,
  children,
  className,
  colorContent,
  ...props
}: TooltipProps) => {
  return (
    <TooltipRoot delayDuration={500} {...props}>
      <S.Trigger asChild>
        <div className={`trigger-tooltip ${className}`}>{trigger}</div>
      </S.Trigger>
      <S.Content sideOffset={5} colorContent={colorContent}>
        {children}
        <S.Arrow offset={10} colorContent={colorContent} />
      </S.Content>
    </TooltipRoot>
  );
};
