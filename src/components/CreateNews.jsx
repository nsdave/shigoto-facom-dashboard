import { Link } from 'react-router-dom'
import '../styles/createnews.scss'
import { supabase } from '../supabaseClient';
import React from 'react'; 

const CreateNews = () => {
    const [corn, setCorn] = React.useState({
        set1: 'https://cdn.pixabay.com/photo/2014/05/21/22/28/old-newspaper-350376_640.jpg',
        set2: '',
        set3: '',
        set4: '',
        set5: 'few seconds ago' 
    })

    console.log(corn, 'corn data')

    const handleCorn = async () => {
        try {
          const { data, error } = await supabase
            .from('news') 
            .insert([
                {
                    image: corn.set1,
                    preview: corn.set2,
                    body: corn.set3,
                    time: corn.set5,
                    source: corn.set4
                }
            ]);
    
          if (error) {
            console.error(error);
            return;
          }
    
          console.log('Data uploaded successfully:', data);
        } catch (error) {
          console.error('Error uploading data:', error.message);
        }
      };

      const cornRow = (name, value) => {
        setCorn({ ...corn, [name]: value });
      };

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
                <input 
                placeholder='Add news tilte' 
                value={corn.set2}
                onChange={(e) => cornRow('set2', e.target.value)}
                />
            </section>
            <section>
                <h3>Category</h3>
                <input 
                placeholder='Add news category' 
                value={corn.set4}
                onChange={(e) => cornRow('set4', e.target.value)}
                />
            </section>
            <section>
                <h3>Body</h3>
                <textarea 
                placeholder='Add news body' 
                value={corn.set3}
                onChange={(e) => cornRow('set3', e.target.value)}
                />
            </section>
        </div>

        <Link
        to={'/dash'}
        >
        <button
        className='button-17'
        onClick={() => {
            handleCorn();
            alert('News uploaded')
        }}
        >
            Upload
        </button>
        </Link>

        <p>1.2</p>
    </div>
  )
}

export default CreateNews