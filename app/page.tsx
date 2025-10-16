export default function Home() {
  return (
    <main style={{fontFamily:"system-ui, -apple-system, Segoe UI, Roboto, Arial", padding:"48px"}}>
      <h1 style={{fontSize:"40px", marginBottom:"12px"}}>Privacy Intelligence Academy</h1>
      <p style={{fontSize:"18px", maxWidth:680, lineHeight:1.6}}>
        Practical training for lawyers, compliance teams, and founders on turning privacy data into decisions.
      </p>
      <div style={{marginTop:"28px"}}>
        <a href="mailto:info@privacyintelligenceacademy.com" style={{padding:"12px 18px", border:"1px solid #111", borderRadius:8, textDecoration:"none"}}>
          Contact us
        </a>
      </div>
    </main>
  );
}
