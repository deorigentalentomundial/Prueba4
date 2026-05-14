
export default function App() {
  return (
    <div style={{fontFamily:"Arial, sans-serif",padding:"40px",background:"#f6f3ee",minHeight:"100vh"}}>
      <h1>DeOrigen Talento Mundial</h1>
      <p>
        Reclutamiento internacional para automoción y metal-mecánica.
      </p>

      <h2>Para empresas</h2>
      <p>
        Ayudamos a talleres y concesionarios en España a encontrar talento técnico cualificado.
      </p>

      <h2>Para candidatos</h2>
      <p>
        Oportunidades reales para perfiles metal-mecánicos que quieran migrar a España.
      </p>

      <h2>Login Empresas</h2>
      <input placeholder="Correo empresa" style={{display:"block",marginBottom:"10px",padding:"10px",width:"300px"}} />
      <input type="password" placeholder="Contraseña" style={{display:"block",marginBottom:"10px",padding:"10px",width:"300px"}} />
      <button style={{padding:"10px 20px"}}>Entrar</button>
    </div>
  )
}
