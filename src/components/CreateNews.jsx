import { Link } from 'react-router-dom'
import '../styles/createnews.scss'

const CreateNews = () => {
  return (
    <div className='cn' >
        <h2>Add News</h2>

        <div>
            <section>
                <h3>Image</h3>
                <input type='file' />
            </section>
            <section>
                <h3>Title</h3>
                <input placeholder='Add news tilte' />
            </section>
            <section>
                <h3>Category</h3>
                <input placeholder='Add news category' />
            </section>
            <section>
                <h3>Body</h3>
                <textarea placeholder='Add news body' />
            </section>
        </div>

        <Link
        to={'/dash'}
        >
        <button
        className='button-17'
        onClick={() => alert('News uploaded')}
        >
            Upload
        </button>
        </Link>
    </div>
  )
}

export default CreateNews