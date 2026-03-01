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

      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 24,
        marginBottom: 32,
      }}>
        <p style={{
          fontFamily: 'Georgia, serif',
          fontSize: 17,
          color: '#5A4350',
          lineHeight: 1.8,
          fontWeight: 300,
        }}>
          yazılar, kulüpler, etkinlikler, ziyaretçi defterleri... 💫 in development 🌷
        </p>
        <div style={{ textAlign: 'right', flexShrink: 0, marginLeft: 32 }}>
          <button onClick={giveFlower} style={{
            background: '#B85C78',
            border: 'none',
            borderRadius: 8,
            padding: '10px 20px',
            fontSize: 15,
            cursor: 'pointer',
            fontFamily: 'Georgia, serif',
            color: 'white',
          }}>
            🌷 bir çiçek bırak!!!
          </button>
          <p style={{
            fontFamily: 'Georgia, serif',
            fontSize: 14,
            color: '#BCA8B2',
            marginTop: 8,
          }}>
            <p> desteğin için teşekkür ederim! </p>
            {count} çiçek
          </p>
        </div>
      </div>

      <div style={{
        borderTop: '1px solid #EDE0E5',
        paddingTop: 20,
        fontFamily: 'Georgia, serif',
        fontSize: 13,
        color: '#BCA8B2',
      }}>
        yakında.
      </div>
    </main>
  )
}