import type { SVGProps } from "react";

const InfoIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={12}
    height={13}
    fill="none"
    {...props}
  >
    <path
      fill="#AEA9B4"
      d="M6 .318c3.305 0 6 2.695 6 6 0 3.328-2.695 6-6 6-3.328 0-6-2.672-6-6 0-3.305 2.672-6 6-6Zm0 3a.755.755 0 0 0-.75.75c0 .421.328.75.75.75.398 0 .75-.329.75-.75a.771.771 0 0 0-.75-.75Zm.938 6a.555.555 0 0 0 .562-.563.57.57 0 0 0-.563-.562h-.375V6.13A.57.57 0 0 0 6 5.568h-.75a.555.555 0 0 0-.563.562c0 .328.235.563.563.563h.188v1.5h-.375a.555.555 0 0 0-.563.562c0 .328.234.563.563.563h1.875Z"
    />
  </svg>
)
export default InfoIcon
