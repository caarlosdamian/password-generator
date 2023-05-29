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
