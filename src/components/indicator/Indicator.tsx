import { FC } from 'react';
import './Indicator.css';
import { CheckboxI } from '../../utils/data';
import { useStrength } from '../../hooks/useStrength';

interface IndicatorProps {
  options: CheckboxI[];
}

export const Indicator: FC<IndicatorProps> = ({ options }) => {
  const strength = useStrength({ options });
  console.log('===strength===', strength);
  return (
    <div className="indicator">
      <span className="indicator__title">STRENGTH</span>
      <div className="indicator__data">
        <span className="indicator__data-title">
          {strength === 'too-weak' ? `${strength}!` : strength}
        </span>
        <div className={`indicator__data-grid ${strength}`}>
          {options.map((gridItem) => (
            <div
              key={gridItem.label}
              className="indicator__data-grid__item"
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};
