import SectionHead from '../ui/SectionHead';

export default function NetworkDiagram() {
  return (
    <section className="mb-20 mt-20" aria-labelledby="diagram-title">
      <SectionHead title="نمونه‌ای از توپولوژی شبکه" titleId="diagram-title" idx="DIAGRAM / 03" />
      <div className="border border-line bg-panel p-10 overflow-x-auto max-[640px]:p-7">
        <svg
          className="block w-full min-w-[640px] max-w-[980px] mx-auto text-accent-line"
          viewBox="0 0 900 360"
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          aria-label="نمونه توپولوژی شبکه"
        >
          <g stroke="currentColor" strokeWidth="1.5" fill="none">
            <line x1="450" y1="40" x2="200" y2="180" />
            <line x1="450" y1="40" x2="450" y2="180" />
            <line x1="450" y1="40" x2="700" y2="180" />
            <line x1="200" y1="180" x2="100" y2="320" />
            <line x1="200" y1="180" x2="300" y2="320" />
            <line x1="450" y1="180" x2="450" y2="320" />
            <line x1="700" y1="180" x2="600" y2="320" />
            <line x1="700" y1="180" x2="800" y2="320" />
            <line x1="200" y1="180" x2="450" y2="180" />
            <line x1="450" y1="180" x2="700" y2="180" />
          </g>

          <g>
            <rect
              x="410"
              y="20"
              width="80"
              height="40"
              rx="2"
              className="fill-[var(--panel-2)] stroke-[var(--steel-dim)]"
            />
            <text x="450" y="45" className="fill-[var(--steel-muted)] font-mono text-[12px]" textAnchor="middle">
              Internet
            </text>
          </g>

          <g>
            <rect
              x="160"
              y="150"
              width="80"
              height="60"
              rx="2"
              className="fill-[var(--panel-2)] stroke-[var(--steel-dim)]"
            />
            <text x="200" y="180" className="fill-[var(--steel-muted)] font-mono text-[12px]" textAnchor="middle">
              Router
            </text>
            <text x="200" y="198" className="fill-[var(--steel-dim)] font-mono text-[10px]" textAnchor="middle">
              Firewall
            </text>
          </g>

          <g>
            <rect
              x="410"
              y="150"
              width="80"
              height="60"
              rx="2"
              className="fill-[var(--accent-soft)] stroke-[var(--accent)]"
            />
            <text x="450" y="180" className="fill-[var(--accent)] font-mono text-[12px]" textAnchor="middle">
              Server
            </text>
            <text x="450" y="198" className="fill-[var(--steel-muted)] font-mono text-[10px]" textAnchor="middle">
              AD / Files
            </text>
          </g>

          <g>
            <rect
              x="660"
              y="150"
              width="80"
              height="60"
              rx="2"
              className="fill-[var(--panel-2)] stroke-[var(--steel-dim)]"
            />
            <text x="700" y="180" className="fill-[var(--steel-muted)] font-mono text-[12px]" textAnchor="middle">
              Switch
            </text>
            <text x="700" y="198" className="fill-[var(--steel-dim)] font-mono text-[10px]" textAnchor="middle">
              L3
            </text>
          </g>

          {[
            { x: 100, y: 320, label: 'PC-01' },
            { x: 300, y: 320, label: 'PC-02' },
            { x: 450, y: 320, label: 'PC-03' },
            { x: 600, y: 320, label: 'PC-04' },
            { x: 800, y: 320, label: 'PC-05' },
          ].map((pc) => (
            <g key={pc.label}>
              <rect
                x={pc.x - 30}
                y={pc.y - 20}
                width="60"
                height="40"
                rx="2"
                className="fill-[var(--panel-2)] stroke-[var(--steel-dim)]"
              />
              <text
                x={pc.x}
                y={pc.y + 5}
                className="fill-[var(--steel-muted)] font-mono text-[11px]"
                textAnchor="middle"
              >
                {pc.label}
              </text>
            </g>
          ))}

          <g className="animate-wifi-fade" transform="translate(450,80)">
            <path
              d="M -12 0 a 12 12 0 0 1 24 0"
              className="fill-none stroke-[var(--accent)]"
              strokeWidth="1.5"
            />
            <path
              d="M -18 0 a 18 18 0 0 1 36 0"
              className="fill-none stroke-[var(--accent-line)]"
              strokeWidth="1.5"
            />
          </g>
        </svg>
      </div>
    </section>
  );
}
