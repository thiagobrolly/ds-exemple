import { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react';
import * as S from './styles';

type ButtonTypes =
  | AnchorHTMLAttributes<HTMLAnchorElement>
  | ButtonHTMLAttributes<HTMLAnchorElement>;

export type ButtonProps = {
  disabled?: boolean;
  appearance?: 'primary' | 'secondary' | 'outline' | 'approve' | 'cancel';
  size?: 'small' | 'medium' | 'large';
  fullWidth?: boolean;
  margin?: string;
  marginTop?: string;
  marginBottom?: string;
  marginLeft?: string;
  marginRight?: string;
  linkStyle?: boolean;
  type?: 'submit' | 'reset' | 'button' | undefined;
  as?: React.ElementType;
} & ButtonTypes;

export const Button = ({
  children,
  appearance = 'primary',
  fullWidth = false,
  size = 'medium',
  margin = '',
  marginTop = '',
  marginBottom = '',
  marginLeft = '',
  marginRight = '',
  linkStyle = false,
  type = 'button',
  ...props
}: ButtonProps) => (
  <S.Button
    type={type}
    fullWidth={fullWidth}
    size={size}
    appearance={appearance}
    linkStyle={linkStyle}
    margin={margin}
    marginTop={marginTop}
    marginBottom={marginBottom}
    marginLeft={marginLeft}
    marginRight={marginRight}
    {...props}
  >
    <span>{children}</span>
  </S.Button>
);
