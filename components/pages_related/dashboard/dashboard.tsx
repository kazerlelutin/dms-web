import { useTranslate } from '../../hooks/translate.hook'
import { ShowCreatePopin } from '../../show/show-create-popin/show-create-popin'
import { Button } from '../../ui/button/button'
import { Card } from '../../ui/card/card'
import { Flex } from '../../ui/flex/flex'
import { Gridbox } from '../../ui/grid-box/grid-box'
import styles from './dashboard.module.css'

export const Dashboard = () => {
  const t = useTranslate()

  return (
    <div className={styles.container}>
      <div className={styles.show}>
        <Card title="émissions" type="info" strech>
          <div className={styles.grid}>
            <Gridbox>
              <ul>
                <li>Chronique peuvent être attachées</li>
                <li>di</li>
                <li>di</li>
                <li>di</li>
                <li>di</li>
                <li>di</li> <li>di</li>
                <li>di</li>
                <li>Chronique peuvent être attachées</li>
                <li>di</li>
                <li>di</li>
                <li>di</li>
                <li>di</li>
                <li>di</li> <li>di</li>
                <li>di</li>
              </ul>
            </Gridbox>
            <Flex spaceBetween>
              <ShowCreatePopin />
              <Button>{t('see_all')}</Button>
            </Flex>
          </div>
        </Card>
      </div>

      <div className={styles.episode}>
        <Card title="Mes dernieres chroniques" type="classic" strech>
          <div className={styles.grid}>
            <Gridbox>
              <ul>
                <li>Chronique peuvent être attachées</li>
                <li>di</li>
                <li>di</li>
                <li>di</li>
                <li>di</li>
                <li>di</li> <li>di</li>
                <li>di</li>
                <li>Chronique peuvent être attachées</li>
                <li>di</li>
                <li>di</li>
                <li>di</li>
                <li>di</li>
                <li>di</li> <li>di</li>
                <li>di</li>
              </ul>
            </Gridbox>
            <Flex spaceBetween>
              <Button>{t('create_show')}</Button>
              <Button>{t('see_all')}</Button>
            </Flex>
          </div>
        </Card>
      </div>

      <div className={styles.right}>
        <Card title="épisodes" type="classic" strech>
          <div className={styles.grid}>
            <Gridbox>
              <ul>
                <li>Chronique peuvent être attachées</li>
                <li>di</li>
                <li>di</li>
                <li>di</li>
                <li>di</li>
                <li>di</li> <li>di</li>
                <li>di</li>
                <li>Chronique peuvent être attachées</li>
                <li>di</li>
                <li>di</li>
                <li>di</li>
                <li>di</li>
                <li>di</li> <li>di</li>
                <li>di</li>
              </ul>
            </Gridbox>
            <Flex spaceBetween>
              <Button>{t('create_show')}</Button>
              <Button>{t('see_all')}</Button>
            </Flex>
          </div>
        </Card>
      </div>
    </div>
  )
}
