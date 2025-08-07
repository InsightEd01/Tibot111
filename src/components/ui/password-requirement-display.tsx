import { Check } from 'lucide-react';

interface Requirement {
  minLength: boolean;
  hasNumber: boolean;
  hasSpecialChar: boolean;
}

export const PasswordRequirementDisplay = ({ requirements }: { requirements: Requirement }) => (
  <div className="text-sm space-y-1 mt-2">
    <div className={`flex items-center ${requirements.minLength ? 'text-green-500' : 'text-gray-500'}`}>
      <Check className="w-4 h-4 mr-2" />
      At least 8 characters
    </div>
    <div className={`flex items-center ${requirements.hasNumber ? 'text-green-500' : 'text-gray-500'}`}>
      <Check className="w-4 h-4 mr-2" />
      Contains a number
    </div>
    <div className={`flex items-center ${requirements.hasSpecialChar ? 'text-green-500' : 'text-gray-500'}`}>
      <Check className="w-4 h-4 mr-2" />
      Contains a special character
    </div>
  </div>
);
