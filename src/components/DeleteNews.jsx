import '../styles/deletenews.scss'
import { useEffect, useState } from 'react'
import { supabase } from '../supabaseClient'

const DeleteNews = () => {
    const [data, setData] = useState([])

    const fetchData = async () => {
        try {
          const { data: news, error } = await supabase
            .from('news')
            .select('*');
          
          if (error) {
            console.error(error);
            return;
          }
  
          setData(news);
        } catch (error) {
          console.error('Error fetching data:', error.message);
        }
      };
  
      useEffect(() => {
          fetchData();
        }, []);
        
        const dele = async (t) => {
            await supabase
            .from('news')
            .delete()
            .eq('id', t);
        
            alert('News has been deleted')
        }

  return (
    <div className='delete__body' >
        <h2>Delete News</h2>
        
        <section>
            {
                data?.map((item) => {
                    return (
                        <div key={item.id} >
                            <h3>{item.preview}</h3>
                            <button
                            onClick={() => dele(item.id)}
                            >Delete</button>
                        </div>
                    )
                })
            }
        </section>
    </div>
  )
}

export default DeleteNews