import { PaginationProps, PaginationResults } from './pagination'
import styles from './pagination.module.css'
export const PaginationView: React.FC<PaginationProps & PaginationResults> = ({
  pagination,
  previous,
  next,
  setPage,
}) => {
  if (pagination.totalPage === 1) return <></>

  return (
    <div className={styles.container}>
      <button
        onClick={previous}
        className={styles.button}
        data-current={pagination.currentPage <= 1}
        disabled={pagination.currentPage <= 1}
      >
        précédent
      </button>
      <div className={styles.pages}>
        {Array.from(Array(pagination?.totalPage || 1).keys()).map((page) => {
          const pageNum = page + 1
          return (
            <button
              className={styles.button}
              data-current={pageNum === pagination.currentPage}
              disabled={pageNum === pagination.currentPage}
              key={page}
              onClick={() => setPage(pageNum)}
            >
              {pageNum}
            </button>
          )
        })}
      </div>
      <button
        onClick={next}
        className={styles.button}
        data-current={pagination.currentPage >= pagination.totalPage}
        disabled={pagination.currentPage >= pagination.totalPage}
      >
        suivant
      </button>
    </div>
  )
}
