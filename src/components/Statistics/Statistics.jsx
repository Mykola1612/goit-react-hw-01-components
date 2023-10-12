import styles from './Statistics.module.css';

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

export function Statistics({ title, stats }) {
  return (
    <section className="container">
      <div className={styles.statistics}>
        {title && <h2 className={styles.title}>{title}</h2>}

        <ul className={styles.statList}>
          {stats.map(stat => {
            return (
              <li
                className={styles.item}
                style={{ backgroundColor: getRandomHexColor() }}
                key={stat.id}
              >
                <span className={styles.label}>{stat.label}</span>
                <span className={styles.percentage}>{stat.percentage}%</span>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
