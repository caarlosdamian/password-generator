import { FC } from 'react';
import check from '../../assets/images/icon-check.svg';
import { CheckboxI } from '../../utils/data';

interface CheckboxProps {
  checkbox: CheckboxI;
  handleChecked: (id: number) => void;
}

export const Checkbox: FC<CheckboxProps> = ({ checkbox, handleChecked }) => {
  return (
    <div className="checkbox" onClick={() => handleChecked(checkbox.id)}>
      <div className={`checkbox__box ${checkbox.checked ? 'checked' : ''}`}>
        {checkbox.checked && <img src={check} alt="check" />}
      </div>
      <div className="checkbox__label">{checkbox.label}</div>
    </div>
  );
};
