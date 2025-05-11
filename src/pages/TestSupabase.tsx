import { useEffect, useState } from 'react';
import { supabase } from '../../supabaseClient';

export default function TestSupabase() {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    async function fetchData() {
      const { data, error } = await supabase.from('your_table_name').select('*');
      if (error) console.error(error);
      else setData(data || []);
    }
    fetchData();
  }, []);

  return (
    <div>
      <h1>Supabase Data</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
