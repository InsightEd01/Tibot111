declare module '@/components/ui/password-requirement-display' {
  import { ComponentType } from 'react';

  interface Requirement {
    minLength: boolean;
    hasNumber: boolean;
    hasSpecialChar: boolean;
  }

  interface Props {
    requirements: Requirement;
  }

  const PasswordRequirementDisplay: ComponentType<Props>;
  export default PasswordRequirementDisplay;
}
