import styles from './counter-item.module.css';

type CounterItemProps = {
  value: number;
  label: string;
};

export const CounterItem = ({ value, label }: CounterItemProps) => (
  <div className={styles.wrapper}>
    <span className={styles.value}>{value}</span>
    <span className={styles.label}>{label}</span>
  </div>
);
