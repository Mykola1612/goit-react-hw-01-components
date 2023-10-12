import styles from './TransactionHistory.module.css';

export function TransactionHistory({ arrayTransations }) {
  return (
    <section className={`${styles.containerTable} `}>
      <div className=" container">
        <table className={`${styles.transactionHistory}`}>
          <thead className={styles.thead}>
            <tr>
              <th className={styles.thStyles}>Type</th>
              <th className={styles.thStyles}>Amount</th>
              <th className={styles.thStyles}>Currency</th>
            </tr>
          </thead>

          <tbody className={styles.tbody}>
            {arrayTransations.map(arrayTransation => {
              return (
                <tr key={arrayTransation.id}>
                  <td className={styles.tdStyles}>{arrayTransation.type}</td>
                  <td className={styles.tdStyles}>{arrayTransation.amount}</td>
                  <td className={styles.tdStyles}>
                    {arrayTransation.currency}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </section>
  );
}
