import { FC, useContext } from 'react'
import { Pages } from '../../../types/pages.enum'
import { useTranslate } from '../../hooks/translate.hook'
import { NavigationContext } from '../../navigation/navigation.context'
import { Button } from '../../ui/button/button'
import { Card } from '../../ui/card/card'
import { Col } from '../../ui/col/col'
import { Flex } from '../../ui/flex/flex'
import { Gridbox } from '../../ui/grid-box/grid-box'
import styles from './dashboard.module.css'
import { BroadcastCreatePopin } from '../../broadcast/broadcast-create-popin/broadcast-create-popin'
import { ShowLastList } from '../../show/show-last-list/show-last-list'

export const Dashboard: FC = () => {
  const t = useTranslate()
  const { navigate } = useContext(NavigationContext)

  return (
    <div className={styles.container}>
      <Card title={t('show')} type="classic" strech>
        <div className={styles.grid}>
          <Gridbox>
            <ShowLastList />
          </Gridbox>
          <Flex spaceBetween>
            <BroadcastCreatePopin />
            <Button onClick={() => navigate(Pages.dashboard)}>
              {t('see_all')}
            </Button>
          </Flex>
        </div>
      </Card>

      <Card title="Mes dernieres chroniques" type="classic" strech>
        <div className={styles.grid}>
          <Gridbox>
            <Col>
              <div className="card-separate">ccqsdfdq</div>
              <div className="card-separate">ccqsdfdq</div>
              <div className="card-separate">ccqsdfdq</div>
            </Col>
          </Gridbox>
          <Flex spaceBetween>
            <Button>{t('create_show')}</Button>
            <Button onClick={() => navigate(Pages.shows)}>
              {t('see_all')}
            </Button>
          </Flex>
        </div>
      </Card>
    </div>
  )
}
