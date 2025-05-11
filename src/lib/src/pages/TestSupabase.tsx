import { useEffect, useState } from 'react';
import { supabase } from '../src/lib/supabaseClient';

export default function TestSupabase() {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase.from('outohikaye_products').select('*');
      if (error) console.error(error);
      else setData(data);
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Supabase Verileri</h1>
      <ul>
        {data.map((item, index) => (
          <li key={index}>{JSON.stringify(item)}</li>
        ))}
      </ul>
    </div>
  );
}
