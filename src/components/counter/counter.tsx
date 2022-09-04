import styles from './counter.module.css';
import { CounterItem } from './counter-item';

export const Counter = () => (
  <div className={styles.counter}>
    <CounterItem value={8} label="days" />
    <CounterItem value={23} label="hours" />
    <CounterItem value={55} label="minutes" />
    <CounterItem value={41} label="seconds" />
  </div>
);
