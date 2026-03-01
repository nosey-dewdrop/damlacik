

'use client'

import { useState, useEffect } from 'react'
import { supabase } from '@/lib/supabase'

export default function Home() {

  const [count, setCount] = useState(0)

  useEffect(() => {
    supabase.from('flowers').select('count').eq('id', 1).single()
      .then(({ data }) => { if (data) setCount(data.count) })
  }, [])

  const giveFlower = async () => {
    const newCount = count + 1
    setCount(newCount)
    await supabase.from('flowers').update({ count: newCount }).eq('id', 1)
  }

  return (

    <main style={{
      minHeight: '100vh',
      padding: '120px 40px 60px',
    }}>
      <h1 style={{
        fontFamily: 'Georgia, serif',
        fontSize: 42,
        fontWeight: 400,
        fontStyle: 'italic',
        color: '#B85C78',
        lineHeight: 1.2,
        marginBottom: 4,
      }}>
        💐 damlacik <span style={{ fontSize: 18, fontStyle: 'italic', color: '#8A7481', fontWeight: 300 }}>sanal bir fikir bahçesi</span>
      </h1>
      <p style={{
        fontFamily: 'Georgia, serif',
        fontSize: 17,
        color: '#5A4350',
        lineHeight: 1.8,
        fontWeight: 300,
        marginTop: 24,
        marginBottom: 32,
      }}>
        yazılar, kulüpler, etkinlikler, ziyaretçi defterleri... 💫 in development 🌷 
        
        <div>
        
        <button onClick={giveFlower} style={{
          background: 'none',
          border: '1px solid #EDE0E5',
          borderRadius: 8,
          padding: '10px 20px',
          fontSize: 15,
          cursor: 'pointer',
          fontFamily: 'Georgia, serif',
          color: '#B85C78',
        }}>
          🌷 bir çiçek bırak
        </button>

        <span style={{
          fontFamily: 'Georgia, serif',
          fontSize: 14,
          color: '#BCA8B2',
        }}>
          {count} çiçek
        </span>
        </div>
      </p>
      <div style={{
        borderTop: '1px solid #EDE0E5',
        paddingTop: 20,
        fontFamily: 'Georgia, serif',
        fontSize: 13,
        color: '#BCA8B2',
      }}>
        yakında.
      </div>

      <div style={{
        marginTop: 40,
        display: 'flex',
        alignItems: 'center',
        gap: 12,
      }}>
        
      </div>


    </main>
  )
}