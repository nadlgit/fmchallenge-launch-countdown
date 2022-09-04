import styles from './app.module.css';
import { Counter } from '../components/counter';
import { Social } from '../components/social';

const Message = () => <p className={styles.message}>We're launching soon</p>;

// prettier-ignore
const ChallengeAttribution = () => (
  <p className={styles.attribution}>
    {// eslint-disable-next-line react/jsx-no-target-blank
    }Challenge by <a href="https://www.frontendmentor.io/challenges/launch-countdown-timer-N0XkGfyz-" target="_blank">
    Frontend Mentor</a>.<br />Coded by <a href="https://github.com/nadlgit">Nadine</a>.
  </p>
);

export const App = () => {
  return (
    <div className={styles.app}>
      <Message />
      <Counter />
      <Social />
      <ChallengeAttribution />
    </div>
  );
};
