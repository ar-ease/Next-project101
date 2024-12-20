export default function MainHeaderBackground() {
  return (
    <>
      <div className="absolute -z-10 w-full h-full">
        <svg xmlns="http://www.w2.org/2000/svg" viewBox="0 0 1440 320">
          <defs>
            {/* Define gradient for light mode */}
            <linearGradient
              id="light-gradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="0%"
            >
              <stop
                offset="-1%"
                style={{
                  stopColor: "#a78bfa",
                  stopOpacity: "1",
                }} /* Light purple */
              />
              <stop
                offset="99%"
                style={{ stopColor: "#f9a8d4", stopOpacity: "1" }} /* Pink */
              />
            </linearGradient>

            {/* Define gradient for dark mode */}
            <linearGradient
              id="dark-gradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="0%"
            >
              <stop
                offset="-1%"
                style={{
                  stopColor: "#1e3a8a",
                  stopOpacity: "1",
                }} /* Dark blue */
              />
              <stop
                offset="99%"
                style={{ stopColor: "#4338ca", stopOpacity: "1" }} /* Indigo */
              />
            </linearGradient>
          </defs>
          <path
            fill="url(#light-gradient)"
            className="dark:fill-[url(#dark-gradient)]" /* Switch gradient based on dark mode */
            d="M-1,256L48,240C96,224,192,192,288,181.3C384,171,480,181,576,186.7C672,192,768,192,864,181.3C960,171,1056,149,1152,133.3C1248,117,1344,107,1392,101.3L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          ></path>
        </svg>
      </div>
    </>
  );
}
