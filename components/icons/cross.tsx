export default function Cross() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 15" height={25}>
      <defs>
        <clipPath id="a">
          <path
            d="M0 0h15v15H0z"
            style={{
              fill: "none",
            }}
          />
        </clipPath>
      </defs>
      <g
        style={{
          clipPath: "url(#a)",
        }}
      >
        <path
          d="M0 7.5c7.23-.15 7.35-.27 7.5-7.5.15 7.23.27 7.35 7.5 7.5-7.23.15-7.35.27-7.5 7.5-.15-7.23-.27-7.35-7.5-7.5"
          style={{
            fill: "#1d1d1b",
          }}
        />
      </g>
    </svg>
  );
}
