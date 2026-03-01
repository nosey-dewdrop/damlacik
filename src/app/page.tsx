export default function Home() {
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
    </main>
  )
}