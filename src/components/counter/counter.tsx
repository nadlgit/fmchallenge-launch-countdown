import styles from './counter.module.css';
import { CounterItem } from './counter-item';

export const Counter = () => (
  <div className={styles.counter}>
    <CounterItem label="days" currentValue={8} />
    <CounterItem label="hours" currentValue={23} />
    <CounterItem label="minutes" currentValue={55} />
    <CounterItem label="seconds" currentValue={41} />
  </div>
);
