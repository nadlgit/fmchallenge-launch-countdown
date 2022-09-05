import styles from './counter-item.module.css';

const displayedValue = (value: number) =>
  Math.min(Math.max(value, 0), 99).toString().padStart(2, '0');

type CounterItemProps = {
  label: string;
  currentValue: number;
};

export const CounterItem = ({ label, currentValue }: CounterItemProps) => (
  <div className={styles.wrapper}>
    <div className={styles.card}>
      <div>{displayedValue(currentValue)}</div>
      <div className={styles.top}></div>
    </div>
    <div className={styles.label}>{label}</div>
  </div>
);
