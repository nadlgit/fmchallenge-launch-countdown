import styles from './counter.module.css';
import { CounterItem } from './counter-item';
import { getLaunchDate, getRemainingTimeFromDate } from '../../helpers';
import { useEffect, useState } from 'react';

import type { RemainingTime } from '../../helpers';

export const Counter = () => {
  const [launchDate, setLaunchDate] = useState<Date>();
  const [remaining, setRemaining] = useState<{
    current: RemainingTime;
    previous?: RemainingTime;
  }>();

  const updateRemaining = (date: Date | undefined) => {
    if (date) {
      setRemaining((s) => ({
        previous: s?.current,
        current: getRemainingTimeFromDate(date),
      }));
    } else {
      setRemaining(undefined);
    }
  };

  useEffect(() => {
    setLaunchDate(getLaunchDate());
  }, []);

  useEffect(() => {
    updateRemaining(launchDate);
    const intervalId = setInterval(() => {
      updateRemaining(launchDate);
    }, 1000);
    return () => clearInterval(intervalId);
  }, [launchDate]);

  return (
    <div className={styles.counter}>
      <CounterItem
        label="days"
        currentValue={remaining?.current.days}
        previousValue={remaining?.previous?.days}
      />
      <CounterItem
        label="hours"
        currentValue={remaining?.current.hours}
        previousValue={remaining?.previous?.hours}
      />
      <CounterItem
        label="minutes"
        currentValue={remaining?.current.minutes}
        previousValue={remaining?.previous?.minutes}
      />
      <CounterItem
        label="seconds"
        currentValue={remaining?.current.seconds}
        previousValue={remaining?.previous?.seconds}
      />
    </div>
  );
};
