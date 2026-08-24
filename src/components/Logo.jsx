/**
 * Placeholder wordmark glyph: a wall corner with a taped seam running through it.
 * Swap for the client's real logo file when one exists — keep the same box size
 * (32×32) and nothing in the header layout needs to change.
 */
export default function Logo({ size = 32 }) {
  return (
    <svg
      className="logo__mark"
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M3 13.5 16 4l13 9.5"
        stroke="currentColor"
        strokeWidth="2.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.5 16.5V27h19V16.5"
        stroke="currentColor"
        strokeWidth="2.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M16 16.5V27" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" opacity=".45" />
    </svg>
  )
}
