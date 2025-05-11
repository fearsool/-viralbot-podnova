import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabaseClient'

export default function TestSupabase() {
  const [data, setData] = useState<any[]>([])

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase.from('OutoHikaye').select('*')
      if (error) {
        console.error('Hata:', error)
      } else {
        setData(data)
      }
    }

    fetchData()
  }, [])

  return (
    <div>
      <h1>Supabase Test Verisi</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  )
}
