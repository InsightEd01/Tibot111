declare module '@/components/ui/password-input' {
  import { ComponentType } from 'react';
  import { InputProps } from '@/components/ui/input';

  interface PasswordInputProps extends InputProps {
    label?: string;
  }

  const PasswordInput: ComponentType<PasswordInputProps>;
  export default PasswordInput;
}
