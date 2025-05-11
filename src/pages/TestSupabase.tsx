import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabaseClient'

export default function TestSupabase() {
  const [data, setData] = useState<any>(null)
  const [error, setError] = useState<any>(null)

  useEffect(() => {
    async function fetchData() {
      const { data, error } = await supabase.from('api_keys').select('*')
      setData(data)
      setError(error)
    }
    fetchData()
  }, [])

  return (
    <div>
      <h1>Supabase Test</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
      <pre>{JSON.stringify(error, null, 2)}</pre>
    </div>
  )
}
