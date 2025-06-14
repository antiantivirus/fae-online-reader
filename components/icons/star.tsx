export default function Star({ active, className }: { active?: boolean, className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlSpace="preserve"
      x={0}
      y={0}
      fill="current"
      stroke="current"
      viewBox="0 0 22.5 20.5"
      className={`icon shrink-0 transition lg:group-hover:rotate-45 ${active ? "rotate-45 fill-primary" : "fill-none"} ${className}`}
    >
      <path
        d="M0 10.3c10.9-.2 11-.4 11.3-10.3.2 9.9.4 10 11.3 10.3-10.9.2-11 .4-11.3 10.3-.3-10-.4-10.1-11.3-10.3z"
        style={{
          strokeWidth: 0.6,
          strokeMiterlimit: 10,
        }}
      />
    </svg >
  );
}
