import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
  size?: number;
}

export function ReactIcon({ className = "w-5 h-5", size = 20, ...props }: IconProps) {
  return (
    <svg viewBox="-11.5 -10.23174 23 20.46348" width={size} height={size} fill="none" className={className} {...props}>
      <circle cx="0" cy="0" r="2.05" fill="#61DAFB" />
      <g stroke="#61DAFB" strokeWidth="1">
        <ellipse rx="11" ry="4.2" />
        <ellipse rx="11" ry="4.2" transform="rotate(60)" />
        <ellipse rx="11" ry="4.2" transform="rotate(120)" />
      </g>
    </svg>
  );
}

export function NextjsIcon({ className = "w-5 h-5", size = 20, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 180 180" width={size} height={size} fill="currentColor" className={className} {...props}>
      <mask height="180" id="mask0" maskUnits="userSpaceOnUse" width="180" x="0" y="0" style={{ maskType: "alpha" }}>
        <circle cx="90" cy="90" fill="#000" r="90" />
      </mask>
      <g mask="url(#mask0)">
        <circle cx="90" cy="90" data-theme="dark" fill="#000" r="90" />
        <path d="M149.508 157.52L69.142 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.165 149.508 157.52Z" fill="url(#paint0_linear)" />
        <rect fill="url(#paint1_linear)" height="72" width="12" x="115" y="54" />
      </g>
      <defs>
        <linearGradient id="paint0_linear" x1="109" x2="144.5" y1="116.5" y2="160.5" gradientUnits="userSpaceOnUse">
          <stop stopColor="white" />
          <stop offset="1" stopColor="white" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="paint1_linear" x1="121" x2="120.799" y1="54" y2="106.875" gradientUnits="userSpaceOnUse">
          <stop stopColor="white" />
          <stop offset="1" stopColor="white" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function AngularIcon({ className = "w-5 h-5", size = 20, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 250 250" width={size} height={size} fill="none" className={className} {...props}>
      <polygon points="125,30 125,30 125,30 31.9,63.2 46.1,186.3 125,230 125,230 125,230 203.9,186.3 218.1,63.2" fill="#DD0031" />
      <polygon points="125,30 125,52.2 125,52.1 125,153.4 125,153.4 125,230 125,230 203.9,186.3 218.1,63.2" fill="#C3002F" />
      <path d="M125,52.1L66.8,182.6H88.5L100.2,153.4H125H149.8L161.5,182.6H183.2L125,52.1ZM125,93.4L141.7,133.4H108.3L125,93.4Z" fill="#FFFFFF" />
    </svg>
  );
}

export function TypeScriptIcon({ className = "w-5 h-5", size = 20, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 128 128" width={size} height={size} className={className} {...props}>
      <rect width="128" height="128" rx="16" fill="#3178C6" />
      <path d="M68.5 73.8v7.4c4.8 2.8 10.4 4.3 16.3 4.3 8.3 0 13.5-3.8 13.5-10.4 0-6.1-4.2-8.8-12.8-12.2-11.4-4.5-16.7-9.5-16.7-18.7 0-10.7 8.5-18.2 22.3-18.2 6 0 11.2 1.3 15.6 3.6v7.3c-4.4-2.5-9.4-3.7-14.8-3.7-8.3 0-12.8 4.2-12.8 9.9 0 5.6 3.8 8.1 12.3 11.5 11.8 4.7 17.2 9.7 17.2 19.3 0 11.5-8.8 19-23.7 19-6.9 0-13.4-1.7-19-4.8v-.2zM19 33.5h37.7v7.5H41.8V98H32.4V41H19v-7.5z" fill="#FFF" />
    </svg>
  );
}

export function JavaScriptIcon({ className = "w-5 h-5", size = 20, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 128 128" width={size} height={size} className={className} {...props}>
      <rect width="128" height="128" rx="16" fill="#F7DF1E" />
      <path d="M72.5 86.8c2.4 4 5.7 6.6 11.1 6.6 4.9 0 8.1-2.4 8.1-5.8 0-4-3.3-5.5-9-7.9l-3.1-1.3c-9-3.9-15-8.8-15-19.4 0-9.6 7.4-16.9 19.1-16.9 8.2 0 14.1 2.8 18.2 9.8l-7.7 4.9c-2.1-3.6-4.7-5.1-9.2-5.1-4.3 0-7.1 2.3-7.1 5.3 0 3.6 2.8 5.1 8 7.3l3.1 1.3c10.7 4.6 16.3 9.4 16.3 20.3 0 11.6-9.1 17.7-21.7 17.7-12 0-19.7-5.7-23.7-13.7l10.5-3.1zm-36.2.8c1.9 3.2 4.3 5.4 8.7 5.4 4.5 0 7.3-1.8 7.3-8.8V43.1h11.7v41.2c0 13.5-7.9 19.6-19.2 19.6-9.7 0-15.6-4.8-18.7-11.8l10.2-4.5z" fill="#000" />
    </svg>
  );
}

export function NodejsIcon({ className = "w-5 h-5", size = 20, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 32 32" width={size} height={size} fill="none" className={className} {...props}>
      <path d="M16 2.3L3.5 9.5V23.9L16 31.1L28.5 23.9V9.5L16 2.3Z" fill="#339933" />
      <path d="M16 2.3L28.5 9.5V23.9L16 31.1V2.3Z" fill="#3E9B42" opacity="0.3" />
      <path d="M22 20.2C22 22.4 20.3 23.4 18.2 23.4C15.8 23.4 14.7 22.1 14.2 21.3L15.6 20.2C16 20.9 16.8 21.7 18.2 21.7C19.2 21.7 20.2 21.2 20.2 20C20.2 18.9 19.7 18.5 17.8 17.9C15.6 17.2 14.4 16.3 14.4 14.5C14.4 12.6 16 11.5 18 11.5C20 11.5 21.1 12.4 21.7 13.3L20.3 14.3C19.9 13.7 19.2 13.2 18 13.2C17.1 13.2 16.2 13.7 16.2 14.6C16.2 15.6 16.9 16 18.5 16.5C20.8 17.2 22 18.1 22 20.2Z" fill="#FFFFFF" />
      <path d="M10 11.8H11.8V23H10V11.8Z" fill="#FFFFFF" />
    </svg>
  );
}

export function NestjsIcon({ className = "w-5 h-5", size = 20, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 256 256" width={size} height={size} fill="none" className={className} {...props}>
      <path d="M220.5 44.8C206.1 29.5 186.2 18 163.6 12C128.8 2.7 91.5 10.3 64 32.4C36.5 54.5 21.8 88.6 24.8 123.6C26.5 143.1 34.6 161.4 47.9 175.7C49.5 162.3 54.4 149.5 62.4 138.4C69.3 129 78.4 121.5 88.9 116.5C82.1 113.8 76.2 109.2 72.1 103C65.5 93 64.9 80 70.5 69.5C76.1 59 87 52.8 99 53.3C104.5 53.5 109.8 55.4 114.2 58.7C126.9 44.2 145.4 35.8 165 35.8C182.2 35.8 198.5 42.6 210.6 54.5C214.2 51.1 217.5 48 220.5 44.8Z" fill="#E0234E" />
      <path d="M220.5 44.8C236.4 65.5 243.6 92.5 240.2 118.9C236.8 145.3 223.1 168.9 202.6 183.7C182.1 198.5 156.7 203.2 132.8 196.6C122.3 193.7 112.5 188.8 103.8 182.2C101.4 195.8 94.7 208.3 84.7 217.7C74.7 227.1 61.9 233 48.3 234.6C71.8 250.7 101.5 258 130.6 254.6C163.5 250.7 193.5 233.4 213.9 206.8C234.3 180.2 243.2 146.7 238.4 113.8C236.1 98.4 230 83.8 220.5 71.3V44.8Z" fill="#E0234E" />
    </svg>
  );
}

export function PostgresIcon({ className = "w-5 h-5", size = 20, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="#336791" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
      <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2Z" fill="#336791" fillOpacity="0.1" />
      <ellipse cx="12" cy="7" rx="6" ry="2.5" />
      <path d="M6 7v6c0 1.38 2.69 2.5 6 2.5s6-1.12 6-2.5V7" />
      <path d="M6 13v4c0 1.38 2.69 2.5 6 2.5s6-1.12 6-2.5v-4" />
    </svg>
  );
}

export function PrismaIcon({ className = "w-5 h-5", size = 20, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor" className={className} {...props}>
      <path d="M22.5 19.3L13.8 2.3c-.6-1.1-2-1.4-3-.8-.3.2-.6.5-.8.8L1.3 19.3c-.6 1.1-.2 2.5.9 3.1.4.2.8.3 1.3.3h17.5c1.2 0 2.2-1 2.2-2.2 0-.4-.2-.8-.7-1.2zm-10.5-13l6.5 12.7H5.5L12 6.3z" fill="#2D3748" />
      <path d="M12 6.3l6.5 12.7H12V6.3z" fill="#00C7B7" />
    </svg>
  );
}

export function TailwindIcon({ className = "w-5 h-5", size = 20, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="#38BDF8" className={className} {...props}>
      <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z" />
    </svg>
  );
}

export function ReduxIcon({ className = "w-5 h-5", size = 20, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="none" className={className} {...props}>
      <path d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z" fill="#764ABC" />
    </svg>
  );
}

export function DockerIcon({ className = "w-5 h-5", size = 20, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="#2496ED" className={className} {...props}>
      <path d="M13.983 11.078h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185m-2.954-5.43h2.118a.186.186 0 00.186-.186V3.574a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.186.185.186m0 2.716h2.118a.187.187 0 00.186-.186V6.29a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.887c0 .102.082.186.185.186m-2.93 2.714h2.118a.185.185 0 00.185-.185V9.006a.185.185 0 00-.185-.186H8.099a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185m0-2.714h2.118a.187.187 0 00.186-.186V6.29a.186.186 0 00-.186-.185H8.099a.185.185 0 00-.185.185v1.887c0 .102.083.186.185.186m-2.955 5.428h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186H5.144a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185m0-2.714h2.119a.186.186 0 00.186-.186V6.29a.186.186 0 00-.186-.185H5.144a.185.185 0 00-.185.185v1.887c0 .102.083.186.185.186m-2.93 2.714h2.118a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186H2.214a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185m19.824-1.28c-.28-.18-1.52-.8-3.03-.04-.15-.75-.62-1.35-1.29-1.84l-.56-.41-.4.57c-.77 1.09-.99 2.47-.63 3.78-.36.2-.74.37-1.13.52l-.46.18v.5c.02 2.68-1.52 4.33-4.5 4.88-1.12.2-2.31.25-3.53.25-1.74 0-3.32-.1-4.72-.3-.59-.09-1.19-.21-1.78-.38a10.6 10.6 0 01-1.4-.52c-.17-.08-.34-.17-.51-.27l-.37-.24-.26.35c-.94 1.25-2.22 1.95-3.6 1.97H.5c-.28 0-.5.22-.5.5v.32C0 19.88 5.75 22 12.8 22c7.4 0 10.74-2.5 11.14-7.22.02-.27.03-.54.03-.81a3.9 3.9 0 00-1.93-3.23" />
    </svg>
  );
}

export function GitIcon({ className = "w-5 h-5", size = 20, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="#F05032" className={className} {...props}>
      <path d="M2.59 13.41L10.59 21.41C11.37 22.2 12.63 22.2 13.41 21.41L21.41 13.41C22.2 12.63 22.2 11.37 21.41 10.59L13.41 2.59C12.63 1.8 11.37 1.8 10.59 2.59L2.59 10.59C1.8 11.37 1.8 12.63 2.59 13.41ZM14.5 16.5C13.67 16.5 13 15.83 13 15C13 14.53 13.22 14.11 13.56 13.84L11.84 10.4C11.58 10.46 11.29 10.5 11 10.5C10.17 10.5 9.5 9.83 9.5 9C9.5 8.17 10.17 7.5 11 7.5C11.83 7.5 12.5 8.17 12.5 9C12.5 9.47 12.28 9.89 11.94 10.16L13.66 13.6C13.92 13.54 14.21 13.5 14.5 13.5C15.33 13.5 16 14.17 16 15C16 15.83 15.33 16.5 14.5 16.5Z" />
    </svg>
  );
}

export function MongoDBIcon({ className = "w-5 h-5", size = 20, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="none" className={className} {...props}>
      <path d="M12 1.5C12 1.5 6 7 6 13.5C6 17.5 8.5 21 12 22.5C15.5 21 18 17.5 18 13.5C18 7 12 1.5 12 1.5Z" fill="#47A248" />
      <path d="M12 2.5V21.5C14.5 20 16.5 17 16.5 13.5C16.5 8.5 12 2.5 12 2.5Z" fill="#499D4A" />
      <path d="M12 22.5V1.5C11.8 1.7 11.5 2.1 11.2 2.5C8.8 6.5 7.5 10 7.5 13.5C7.5 17 9.5 20.2 12 22.5Z" fill="#3FA037" />
    </svg>
  );
}

export function PostmanIcon({ className = "w-5 h-5", size = 20, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="#FF6C37" className={className} {...props}>
      <circle cx="12" cy="12" r="10" fill="#FF6C37" />
      <path d="M15.5 8.5L8.5 12L15.5 15.5L13.5 12L15.5 8.5Z" fill="#FFFFFF" />
    </svg>
  );
}

export function VSCodeIcon({ className = "w-5 h-5", size = 20, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="#007ACC" className={className} {...props}>
      <path d="M17.5 1.5L8.5 9.5L4 6L2 7.5L5.5 12L2 16.5L4 18L8.5 14.5L17.5 22.5L22 20.5V3.5L17.5 1.5ZM17.5 16.5L11.5 12L17.5 7.5V16.5Z" />
    </svg>
  );
}
