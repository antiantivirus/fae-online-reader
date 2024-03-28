export default function Download({ colour = "primary" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      // height={30}
      xmlSpace="preserve"
      fill="none"
      className={`h-auto w-[30px] fill-${colour} lg:h-[30px] lg:w-auto`}
      viewBox="0 0 14 22"
    >
      <g clipPath="url(#a)">
        <path d="M7.3 6.1V.6c0-.1-.2-.2-.3-.2-.1 0-.2.1-.2.2v5.5c-1.1 5-5.1.8-5.1.8C6.8 12.4 7 19.6 7 19.6s.2-7.2 5.4-12.7c0 0-4.1 4.3-5.1-.8Z" />
        <path
          fillRule="evenodd"
          d="M13.5 21.85H.5v-.5h13v.5Z"
          clipRule="evenodd"
        />
      </g>
      <defs>
        <clipPath id="a">
          <path fill="#fff" d="M.5.4h13v21.5H.5z" />
        </clipPath>
      </defs>
    </svg>
  );
}
