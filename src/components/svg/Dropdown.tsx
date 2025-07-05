import { type SVGProps } from "react";

const DropdownIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={10}
    height={6}
    fill="none"
    {...props}
  >
    <path
      fill="#0A0B0D"
      d="M.2.557A.75.75 0 0 1 1.26.518L5 4.044 8.74.518a.75.75 0 1 1 1.02 1.1l-4.25 4a.75.75 0 0 1-1.02 0l-4.25-4A.75.75 0 0 1 .2.557Z"
    />
  </svg>
)
export default DropdownIcon;
