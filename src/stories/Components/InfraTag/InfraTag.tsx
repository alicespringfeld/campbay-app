import styles from './InfraTag.module.css';

type LandscapeTagProps = {
  tag: {
    text: string;
    src: string;
    selected: boolean;
    id: number;
  };
  onClick: (value: number) => void;
};

export default function InfraTag({
  tag,
  onClick,
}: LandscapeTagProps): JSX.Element {
  return (
    <div className={styles.container}>
      <button
        className={`${styles.tag} ${
          tag.selected
            ? styles['tag--state-selected']
            : styles['tag--state-unselected']
        }`}
        onClick={() => onClick(tag.id)}
      >
        <img src={tag.src} />
      </button>
      <div className={styles.text}>{tag.text}</div>
    </div>
  );
}
