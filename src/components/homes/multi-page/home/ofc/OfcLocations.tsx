const PINS = [
  { x: 210, y: 180 },
  { x: 280, y: 150 },
  { x: 340, y: 210 },
  { x: 390, y: 130 },
  { x: 450, y: 190 },
  { x: 510, y: 150 },
  { x: 560, y: 220 },
  { x: 610, y: 160 },
  { x: 660, y: 200 },
  { x: 700, y: 140 },
  { x: 740, y: 180 },
  { x: 300, y: 250 },
  { x: 480, y: 260 },
  { x: 620, y: 250 },
  { x: 250, y: 100 },
  { x: 420, y: 90 },
  { x: 580, y: 100 },
  { x: 720, y: 110 },
] as const;

const OfcLocations = () => {
  return (
    <section className="ofc-section" id="warehouse-locations">
      <div className="ofc-container">
        <div className="ofc-section__head ofc-section__head--center">
          <h2 className="ofc-title">Warehouse Locations</h2>
          <p className="ofc-lead">
            Distributed warehouse coverage across the United States for faster
            regional delivery, lower shipping friction, and scalable inventory
            placement.
          </p>
        </div>

        <div className="ofc-locations__map" aria-label="United States warehouse coverage map">
          <svg viewBox="0 0 960 420" role="img">
            <path
              d="M170 95 C250 70 330 78 410 70 C500 60 590 55 680 70 C760 84 820 110 845 150 C860 180 850 220 830 250 C800 300 740 330 670 340 C590 352 510 345 430 350 C340 356 260 340 210 300 C170 270 145 220 150 170 C153 140 155 110 170 95 Z"
              fill="#f8fafc"
              stroke="rgba(16,24,40,0.12)"
              strokeWidth="2"
            />
            {PINS.map((pin, index) => (
              <g key={`${pin.x}-${pin.y}-${index}`}>
                <circle cx={pin.x} cy={pin.y} r="10" fill="rgba(232,93,4,0.18)" />
                <circle cx={pin.x} cy={pin.y} r="5" fill="#e85d04" />
              </g>
            ))}
          </svg>
        </div>
      </div>
    </section>
  );
};

export default OfcLocations;
