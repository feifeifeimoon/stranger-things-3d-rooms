import Link from 'next/link';

export default function Home() {
  return (
    <main
      style={{
        width: '100vw',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        background: '#171717',
        color: 'white',
        fontFamily: 'sans-serif',
      }}
    >
      <h1 style={{ fontSize: '3rem', marginBottom: '2rem' }}>
        Stranger Things 3D Rooms
      </h1>
      <Link
        href="/living-room"
        style={{
          fontSize: '1.5rem',
          padding: '1rem 2rem',
          border: '1px solid white',
          borderRadius: '8px',
          textDecoration: 'none',
          color: 'white',
        }}
      >
        Enter The Byers Living Room
      </Link>
    </main>
  );
}
