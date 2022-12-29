import { FC } from 'react'
import { Card } from '../../ui/card/card'
import { Col } from '../../ui/col/col'
import { Flex } from '../../ui/flex/flex'

export const Home: FC = () => {
  return (
    <div>
      <Flex>
        <Card title="Welcome to Qwik ">
          <p>Mon text</p>
        </Card>

        <Card type="highlight" title="Welcome to Qwik">
          <div className="card-separate">Mon text</div>
          <div className="card-separate">Mon text</div>
          <div className="card-separate">Mon text</div>
          <div className="card-separate">Mon text</div>
          <div className="card-separate">Mon text</div>
        </Card>
        <Card type="info" title="Welcome to Qwik ">
          <p>Mon text</p>
        </Card>
        <Card type="warning" title="Welcome to Qwik ">
          <p>Mon text</p>
        </Card>
      </Flex>

      <br />
      <Col>
        <Card>
          <p>zd</p>
        </Card>

        <Card>
          <ul>
            <li>
              Check out the <code>src/routes</code> directory to get started.
            </li>
            <li>
              Add integrations with <code>npm run qwik add</code>.
            </li>
            <li>
              More info about development in <code>README.md</code>
            </li>
          </ul>
        </Card>
      </Col>
    </div>
  )
}
