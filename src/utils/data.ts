export interface CheckboxI {
  id: number;
  label: string;
  checked: boolean;
}

export const checkboxInfo: CheckboxI[] = [
  {
    id: 1,
    label: 'Include Uppercase Letters',
    checked: false,
  },
  {
    id: 2,
    label: 'Include Lowercase Letters',
    checked: true,
  },
  {
    id: 3,
    label: 'Include Numbers',
    checked: false,
  },
  {
    id: 4,
    label: 'Include Symbols',
    checked: false,
  },
];

export const generatePassword = (checkboxInfo: CheckboxI[], length: number) => {
  const lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz';
  const uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const numbers = '0123456789';
  const symbols = '!@#$%^&*()';
  let passwordOptions = '';

  // Build the password options based on the checked checkboxes
  checkboxInfo.forEach((checkbox) => {
    if (checkbox.checked) {
      switch (checkbox.label) {
        case 'Include Uppercase Letters':
          passwordOptions += uppercaseLetters;
          break;
        case 'Include Lowercase Letters':
          passwordOptions += lowercaseLetters;
          break;
        case 'Include Numbers':
          passwordOptions += numbers;
          break;
        case 'Include Symbols':
          passwordOptions += symbols;
          break;
      }
    }
  });

  // Generate the password
  let password = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * passwordOptions.length);
    password += passwordOptions[randomIndex];
  }

  return password;
};
