interface LogoProps {
  size?: "header" | "hero"
}

export function Logo({ size = "header" }: LogoProps) {

  const className = size === "header" ? "text-2xl tracking-tight" :  "text-5xl tracking-tight lg:text-6xl" ;
  return (
    <div>
      <span 
        className={className}
        style={{ 
          fontFamily: '"Plus Jakarta Sans", sans-serif',
          fontWeight: 1000,
          letterSpacing: '-0.02em',
        }}
      >
        {/* "i" inicial - gris oscuro #2B2B2B */}
        <span style={{ color: "#2B2B2B" }}>i</span>
        
        {/* "mpru" - degradado #2B2B2B → #1E73BE */}
        <span
          style={{
            background: "linear-gradient(to right, #2B2B2B, #1E73BE)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            display: "inline-block",
          }}
        >
          mpru
        </span>
        
        {/* "v" final - azul profesional #1E73BE */}
        <span style={{ color: "#1E73BE" }}>v</span>
      </span>
    </div>
  )
}
