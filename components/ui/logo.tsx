export default function Logo({
  className = "",
  size = "default",
}: { className?: string; size?: "default" | "small" | "large" }) {
  const dimensions = {
    small: "h-6 w-6",
    default: "h-8 w-8",
    large: "h-14 w-14",
  }

  return (
    <img
      src="/CodeLogo.png"
      alt="CodeMorph Logo"
      className={`${dimensions[size]} object-contain ${className}`}
    />
  )
}

