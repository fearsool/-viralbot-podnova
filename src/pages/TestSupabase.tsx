import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabaseClient'

export default function TestSupabase() {
  const [data, setData] = useState<any[]>([])

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase.from('hikayeler').select('*')
      if (error) console.error('Supabase Error:', error)
      else setData(data)
    }

    fetchData()
  }, [])

  return (
    <div>
      <h1>Supabase'den Gelen Veriler</h1>
      <ul>
        {data.map((item, index) => (
          <li key={index}>{JSON.stringify(item)}</li>
        ))}
      </ul>
    </div>
  )
}
