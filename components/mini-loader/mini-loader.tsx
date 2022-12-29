import styles from './mini-loader.module.css'

export const MiniLoader = () => (
  <div className={styles.container}>
    <div className={styles['lds-ring']}>
      {Array.from(Array(3).keys()).map((num) => (
        <div key={num} />
      ))}
    </div>
  </div>
)
