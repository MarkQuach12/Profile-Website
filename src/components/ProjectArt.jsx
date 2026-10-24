/** Abstract thumbnail for a project card, drawn from the cover and tag tokens. */
export default function ProjectArt({ kind }) {
  return (
    <svg className="card-cover" viewBox="0 0 340 148" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      {ART[kind] ?? ART.page}
    </svg>
  );
}

const ART = {
  chart: (
    <>
      <rect className="f-sky" width="340" height="148" />
      <rect className="f-sea" x="88" y="84" width="28" height="40" rx="3" />
      <rect className="f-deep" x="126" y="60" width="28" height="64" rx="3" />
      <rect className="f-sea" x="164" y="72" width="28" height="52" rx="3" />
      <rect className="f-deep" x="202" y="40" width="28" height="84" rx="3" />
      <path className="s-blue" d="M84 92 C 130 70, 170 80, 240 34" />
      <circle className="f-ink-blue" cx="240" cy="34" r="4" />
    </>
  ),
  habits: (
    <>
      <rect className="f-blue" width="340" height="148" />
      {Array.from({ length: 21 }, (_, i) => (
        <rect
          key={i}
          className={[2, 5, 9, 13, 17].includes(i) ? "f-sky" : i % 3 === 0 ? "f-deep" : "f-sea"}
          x={86 + (i % 7) * 24}
          y={38 + Math.floor(i / 7) * 26}
          width="18"
          height="18"
          rx="3"
        />
      ))}
    </>
  ),
  map: (
    <>
      <rect className="f-sand" width="340" height="148" />
      <rect className="f-sky" x="40" y="24" width="96" height="56" rx="4" />
      <rect className="f-sky" x="150" y="24" width="72" height="100" rx="4" />
      <rect className="f-sky" x="236" y="64" width="72" height="60" rx="4" />
      <path className="s-deep" d="M60 112 C 120 112, 130 90, 186 92 S 250 50, 272 44" />
      <circle className="f-ink-blue" cx="272" cy="44" r="6" />
      <circle className="f-deep" cx="60" cy="112" r="5" />
    </>
  ),
  page: (
    <>
      <rect className="f-sea" width="340" height="148" />
      <rect className="f-sky" x="100" y="22" width="140" height="126" rx="4" />
      <rect className="f-deep" x="100" y="22" width="140" height="30" rx="4" />
      <rect className="f-sand" x="116" y="64" width="64" height="8" rx="3" />
      <rect className="f-blue" x="116" y="80" width="104" height="6" rx="3" />
      <rect className="f-blue" x="116" y="94" width="92" height="6" rx="3" />
      <rect className="f-yellow" x="116" y="110" width="40" height="10" rx="3" />
    </>
  ),
};
