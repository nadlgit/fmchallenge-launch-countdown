import styles from './social-item.module.css';

const socialItemsConfig = {
  facebook: {
    description: 'Facebook',
    href: '#',
    cssClass: styles.facebook,
  },
  pinterest: {
    description: 'Pinterest',
    href: '#',
    cssClass: styles.pinterest,
  },
  instagram: {
    description: 'Instagram',
    href: '#',
    cssClass: styles.instagram,
  },
};

type SocialItemProps = {
  name: keyof typeof socialItemsConfig;
};

export const SocialItem = ({ name }: SocialItemProps) => (
  <a
    className={socialItemsConfig[name].cssClass}
    href={socialItemsConfig[name].href}
    title={socialItemsConfig[name].description}
  >
    <i className={styles.icon} />
  </a>
);
