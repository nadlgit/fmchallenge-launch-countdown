import styles from './counter-item.module.css';
import { memo, useEffect, useState } from 'react';

const displayedValue = (value: number | undefined) =>
  value === undefined ? '' : Math.min(Math.max(value, 0), 99).toString().padStart(2, '0');

type CounterItemProps = {
  label: string;
  currentValue?: number;
  previousValue?: number;
};

export const CounterItem = memo(({ label, currentValue, previousValue }: CounterItemProps) => {
  const [shouldFlip, setShouldFlip] = useState(false);

  useEffect(() => {
    setShouldFlip(currentValue !== previousValue);
    const timeoutId = setTimeout(() => {
      setShouldFlip(false);
    }, 900);
    return () => clearTimeout(timeoutId);
  }, [currentValue, previousValue]);

  return (
    <div className={styles.wrapper}>
      <div className={`${styles.card} ${shouldFlip ? styles['card-flip'] : ''}`}>
        <div className={styles['card-divider']}></div>
        <div className={`${styles['card-prev']} ${styles['card-top']}`}>
          <span>{displayedValue(previousValue)}</span>
        </div>
        <div className={`${styles['card-prev']} ${styles['card-bottom']}`}>
          <span>{displayedValue(previousValue)}</span>
        </div>
        <div className={`${styles['card-curr']} ${styles['card-top']}`}>
          <span>{displayedValue(currentValue)}</span>
        </div>
        <div className={`${styles['card-curr']} ${styles['card-bottom']}`}>
          <span>{displayedValue(currentValue)}</span>
        </div>
      </div>
      <div className={styles.label}>{label}</div>
    </div>
  );
});
