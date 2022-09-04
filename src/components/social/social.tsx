import styles from './social.module.css';
import { SocialItem } from './social-item';

export const Social = () => (
  <div className={styles.social}>
    <SocialItem name="facebook" />
    <SocialItem name="pinterest" />
    <SocialItem name="instagram" />
  </div>
);
