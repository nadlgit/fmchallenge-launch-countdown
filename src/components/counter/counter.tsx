import styles from './counter.module.css';
import { CounterItem } from './counter-item';
import { getLaunchDate, getRemainingTimeFromDate } from '../../helpers';
import { useEffect, useState } from 'react';

import type { RemainingTime } from '../../helpers';

export const Counter = () => {
  const [launchDate, setLaunchDate] = useState<Date>();
  const [remaining, setRemaining] = useState<RemainingTime>();

  useEffect(() => {
    setLaunchDate(getLaunchDate());
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setRemaining(getRemainingTimeFromDate(launchDate));
    }, 1000);
    return () => clearInterval(intervalId);
  }, [launchDate]);

  return (
    <div className={styles.counter}>
      <CounterItem label="days" currentValue={remaining?.days} />
      <CounterItem label="hours" currentValue={remaining?.hours} />
      <CounterItem label="minutes" currentValue={remaining?.minutes} />
      <CounterItem label="seconds" currentValue={remaining?.seconds} />
    </div>
  );
};
