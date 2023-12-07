import { Link } from 'react-router-dom'
import '../styles/dashboard.scss'

const Dashboard = () => {
  return (
    <div className='dash__body' >
      <nav>
        <h2>Dashboard</h2>
      </nav>

      <h3>Manage your faculty news</h3>

      <section>
        <Link
        to={'/dash/create'}
        >
          <div>
            Create
          </div>
        </Link>
        
        <Link>
          <div>
            Delete
          </div>
        </Link>
      </section>
    </div>
  )
}

export default Dashboard