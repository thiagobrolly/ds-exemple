import './styles.css';

export interface HeaderProps {
  label: string;
}

export const Header = (props: HeaderProps) => {
  return (
    <div className="main">
      {props.label}
      <p>ABACAXI</p>
    </div>
  );
};
