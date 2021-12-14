import {Link} from 'react-router-dom'
import Card from '../components/shared/Card'

const NotFound = () => {
    return (
        <Card>
            You've taken a wrong turn.
            <p>
          <Link to="/">Back to home.</Link>
        </p>
        </Card>
    )
}

export default NotFound
