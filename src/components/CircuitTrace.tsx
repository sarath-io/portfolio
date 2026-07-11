export default function CircuitTrace() {
  return (
    <svg
      viewBox="0 0 1200 500"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      style={{ width: "100%", height: "100%" }}
    >
      <g stroke="#C87F4A" strokeWidth="1.5" opacity={0.55}>
        <path className="flow-path" d="M0 90 H260 L300 130 H520" />
        <path className="flow-path" d="M0 220 H140 L180 260 H430 L470 300 H720" />
        <path className="flow-path" d="M1200 60 H900 L860 100 H620" />
        <path className="flow-path" d="M1200 300 H980 L940 340 H760 L720 380 H540" />
        <path className="flow-path" d="M1200 430 H1040 L1000 470 H800" />
        <path d="M300 130 V220 H180" opacity={0.35} />
        <path d="M860 100 V220 H720" opacity={0.35} />
      </g>
      <g fill="#C87F4A">
        <circle cx={520} cy={130} r={4} />
        <circle cx={720} cy={300} r={4} />
        <circle cx={620} cy={100} r={4} />
        <circle cx={540} cy={380} r={4} />
        <circle cx={800} cy={430} r={4} />
        <circle cx={180} cy={260} r={3} />
      </g>
      <g fill="#6EE7B7" opacity={0.8}>
        <circle cx={300} cy={130} r={3} />
        <circle cx={470} cy={300} r={3} />
        <circle cx={940} cy={340} r={3} />
      </g>
    </svg>
  );
}
