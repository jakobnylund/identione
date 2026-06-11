// Horizontal lockup for tight spaces (header): the real brand symbol inlined as
// SVG so it inherits `currentColor` (dark on light surfaces, white on dark),
// paired with the wordmark. The full stacked lockup lives in /public/logos for
// roomier placements (footer). Symbol path is the vectorized brandmark.
const SYMBOL_D =
  "M 240.167969 79.632812 C 238.21875 59.761719 230.734375 42.339844 217.25 27.746094 C 201.976562 11.214844 183.109375 1.890625 160.8125 0.257812 C 137.179688 -1.476562 116.140625 5.566406 98.378906 21.433594 C 76.738281 40.765625 66.742188 65.339844 68.746094 94.5625 C 70.246094 116.335938 79.140625 134.816406 94.238281 150.359375 C 101.28125 157.609375 111.34375 157.855469 118.464844 152.050781 C 124.859375 146.839844 132.28125 143.527344 140.3125 141.855469 C 158.640625 138.046875 175.699219 140.867188 190.9375 152.386719 C 198.246094 157.90625 207.378906 157.464844 213.894531 151.015625 C 231.46875 133.625 240.109375 112.355469 240.59375 87.648438 C 240.457031 84.910156 240.425781 82.261719 240.167969 79.636719 Z M 154.460938 133.585938 C 129.597656 133.585938 109.445312 113.011719 109.445312 87.632812 C 109.445312 62.253906 129.597656 41.675781 154.460938 41.675781 C 179.320312 41.675781 199.472656 62.253906 199.472656 87.632812 C 199.472656 113.011719 179.320312 133.585938 154.460938 133.585938 Z M 154.460938 133.585938 ";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <svg
        viewBox="60 -7 187 173"
        className="h-6 w-auto"
        fill="currentColor"
        aria-hidden="true"
      >
        <path fillRule="nonzero" d={SYMBOL_D} />
      </svg>
      <span className="font-display text-base font-medium uppercase tracking-[0.28em]">
        Identione
      </span>
    </span>
  );
}
