import { ButtonComponent } from './styles';
// eslint-disable-next-line @typescript-eslint/consistent-type-imports
import { ButtonProps } from './types'

function Button({ name, type = "button", onButtonClick, disabled=false }: ButtonProps) {
  return (
    <ButtonComponent disabled={disabled} type={type} onClick={onButtonClick}>
      {name}
    </ButtonComponent>
  );
}

export default Button;