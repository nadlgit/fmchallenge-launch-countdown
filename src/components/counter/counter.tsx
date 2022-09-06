import styles from './counter.module.css';
import { CounterItem } from './counter-item';
import { getLaunchDate, getRemainingTimeFromDate } from '../../helpers';
import { useEffect, useState } from 'react';

import type { RemainingTime } from '../../helpers';

export const Counter = () => {
  const [launchDate, setLaunchDate] = useState<Date | null>();
  const [remaining, setRemaining] = useState<RemainingTime>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const launch = getLaunchDate();
    setLaunchDate(launch);
    setRemaining(getRemainingTimeFromDate(launch));

    const intervalId = setInterval(() => {
      setRemaining(getRemainingTimeFromDate(launchDate ?? launch));
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className={styles.counter}>
      <CounterItem label="days" currentValue={remaining.days} />
      <CounterItem label="hours" currentValue={remaining.hours} />
      <CounterItem label="minutes" currentValue={remaining.minutes} />
      <CounterItem label="seconds" currentValue={remaining.seconds} />
    </div>
  );
};
