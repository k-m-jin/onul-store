import React from 'react';

type IconPropsType = {
  color?: string;
  width?: string;
  height?: string;
  onClick?: () => void;
};

export const LogoIcon = ({
  color = '#505050',
  width = '14rem',
  height = '2.4rem',
}: IconPropsType) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 140 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M23.6223 9.75774H16.5338V1.32196C20.1246 2.79591 22.8289 5.94139 23.6223 9.75774ZM11.9303 0.417969C13.071 0.417969 14.1754 0.57574 15.2202 0.869962V9.75917H0.238315C1.34561 4.43474 6.16713 0.417969 11.9303 0.417969ZM0 12.0874C0 11.7349 0.0174377 11.3866 0.0479537 11.0427H14.2916L4.16906 20.9424C1.6188 18.8005 0 15.6251 0 12.0874ZM5.22114 21.7313L15.2202 11.9509V22.2316L13.754 20.7975L12.8254 21.7057L14.6171 23.4583C13.7525 23.653 12.853 23.7568 11.9288 23.7568C9.44251 23.7568 7.13202 23.0091 5.21968 21.7313H5.22114ZM16.5338 22.8528V11.0427H23.8126C23.8446 11.3866 23.8606 11.7349 23.8606 12.0874C23.8606 16.9271 20.8322 21.0874 16.5324 22.8528H16.5338Z"
      fill={color}
    />
    <path
      d="M44.1029 13.7148L51.8001 6.18586C52.842 7.9185 53.4422 9.93542 53.4422 12.0859C53.4422 15.0722 52.2884 17.8012 50.395 19.8665L44.1043 13.7134L44.1029 13.7148ZM41.5104 0.417969C45.1389 0.417969 48.394 2.01132 50.5853 4.52002H32.437C34.6269 2.01132 37.882 0.417969 41.5119 0.417969H41.5104ZM29.5802 12.0874C29.5802 9.77622 30.2704 7.61859 31.4605 5.80493H50.3339L43.1743 12.8066L39.6504 9.35976L38.7219 10.268L42.2457 13.7148L34.3624 21.4257C31.4605 19.2951 29.5787 15.9023 29.5787 12.0874H29.5802ZM35.4785 22.152L43.1757 14.6231L49.4664 20.7762C47.3535 22.6282 44.565 23.7568 41.5119 23.7568C39.3118 23.7568 37.2498 23.1711 35.4799 22.1506L35.4785 22.152Z"
      fill={color}
    />
    <path
      d="M75.1478 23.0617L82.8494 14.0559C82.1214 18.2262 79.125 21.6503 75.1478 23.0617ZM83.0165 11.8585L73.9678 22.4406V0.761939C79.0872 2.00705 82.9104 6.4943 83.0165 11.8571V11.8585ZM68.1015 0.787523L61.4752 18.9895C60.0191 17.055 59.1588 14.6686 59.1588 12.0874C59.1588 6.66059 62.9646 2.08807 68.1015 0.787523ZM62.4531 20.1308L69.5968 0.508936C70.085 0.449239 70.5834 0.417969 71.0877 0.417969C71.6181 0.417969 72.1412 0.452081 72.6527 0.518886V23.6573C72.1398 23.7226 71.6181 23.7582 71.0877 23.7582C67.6946 23.7582 64.627 22.3652 62.4517 20.1323L62.4531 20.1308Z"
      fill={color}
    />
    <path
      d="M111.425 3.95715V2.66087H101.448V0.265869H100.123V2.66087H90.1456V3.95715H95.746L97.3488 6.56677H90.6789V22.9352H92.0042V7.86305H97.3953L95.22 11.7007L96.3796 12.329L98.911 7.86163H102.159V11.7903H105.998V10.494H103.484V7.86163H109.718V21.6375H105.5V22.9338H111.043V6.56677H103.993L105.595 3.95715H111.427H111.425ZM102.445 6.56677H98.895L97.2922 3.95715H104.048L102.445 6.56677Z"
      fill={color}
    />
    <path
      d="M105.996 13.2556H95.5731V20.108H105.996V13.2556ZM104.671 18.8117H96.8984V14.5519H104.671V18.8117Z"
      fill={color}
    />
    <path
      d="M129.952 2.63812V0.241699H128.626V2.63812H119.698L117.989 22.8527L119.309 22.9593L120.919 3.93298H139.93V2.63812H129.952Z"
      fill={color}
    />
    <path
      d="M131.079 5.86328H129.754V13.233H122.895V22.9054H137.937V13.2316H131.078V10.5197H137.937V9.22338H131.078V5.86328H131.079ZM136.613 21.6091H124.22V14.5293H136.613V21.6091Z"
      fill={color}
    />
  </svg>
);

export const SearchIcon = ({
  color = '#505050',
  width = '2rem',
  height = '2rem',
}: IconPropsType) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_148_2120)">
      <path
        d="M9 17C13.4183 17 17 13.4183 17 9C17 4.58172 13.4183 1 9 1C4.58172 1 1 4.58172 1 9C1 13.4183 4.58172 17 9 17Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M19.0004 18.9999L14.6504 14.6499"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_148_2120">
        <rect width={width} height={height} fill={color} />
      </clipPath>
    </defs>
  </svg>
);

export const ShoppingBagIcon = ({
  color = '#505050',
  width = '2.4rem',
  height = '2.4rem',
}: IconPropsType) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M6 2L3 6V20C3 20.5304 3.21071 21.0391 3.58579 21.4142C3.96086 21.7893 4.46957 22 5 22H19C19.5304 22 20.0391 21.7893 20.4142 21.4142C20.7893 21.0391 21 20.5304 21 20V6L18 2H6Z"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path d="M3 6H21" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path
      d="M16 10C16 11.0609 15.5786 12.0783 14.8284 12.8284C14.0783 13.5786 13.0609 14 12 14C10.9391 14 9.92172 13.5786 9.17157 12.8284C8.42143 12.0783 8 11.0609 8 10"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const ArrowLeftIcon = ({
  color = '#505050',
  width = '2.4rem',
  height = '2.4rem',
}: IconPropsType) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M19 12H5"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12 19L5 12L12 5"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const AngleRightIcon = ({
  color = '#F7F7FA',
  width = '.9rem',
  height = '1.6rem',
}: IconPropsType) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 9 17"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M1 1.5L8 8.5L1 15.5"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const CategoryArrowBottomIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="6px" height="10px" viewBox="0 0 11 6" fill="none">
    <path
      d="M10.2799 0.229439C10.1389 0.0825295 9.94771 -2.41412e-08 9.74837 -3.2855e-08C9.54902 -4.15688e-08 9.35783 0.0825295 9.21685 0.229439L5.49546 4.10846L1.77408 0.229439C1.63229 0.0866926 1.44238 0.00770571 1.24526 0.00949116C1.04814 0.0112766 0.859584 0.0936914 0.720195 0.238985C0.580806 0.384278 0.501742 0.580825 0.500029 0.786293C0.498316 0.991761 0.574092 1.18971 0.711038 1.33751L4.96394 5.77056C5.10492 5.91747 5.29611 6 5.49546 6C5.69481 6 5.886 5.91747 6.02698 5.77056L10.2799 1.33751C10.4208 1.19055 10.5 0.991266 10.5 0.783473C10.5 0.57568 10.4208 0.376394 10.2799 0.229439V0.229439Z"
      fill="black"
    />
  </svg>
);

export const CategoryArrowTopIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="6px" height="10px" viewBox="0 0 10 6" fill="none">
    <path
      d="M9.77988 5.77056C9.6389 5.91747 9.44771 6 9.24837 6C9.04902 6 8.85783 5.91747 8.71685 5.77056L4.99546 1.89154L1.27408 5.77056C1.13229 5.91331 0.94238 5.99229 0.745262 5.99051C0.548143 5.98872 0.359584 5.90631 0.220195 5.76102C0.0808067 5.61572 0.00174138 5.41918 2.85759e-05 5.21371C-0.00168423 5.00824 0.0740928 4.81029 0.211038 4.66249L4.46394 0.22944C4.60492 0.0825298 4.79611 2.27469e-07 4.99546 2.18755e-07C5.19481 2.10042e-07 5.386 0.0825297 5.52698 0.229439L9.77988 4.66249C9.92082 4.80945 10 5.00873 10 5.21653C10 5.42432 9.92082 5.62361 9.77988 5.77056Z"
      fill="black"
    />
  </svg>
);
export const GoogleIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="20px" height="20px">
    <path
      fill="#FBBC05"
      d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12	s5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24s8.955,20,20,20	s20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
    />
    <path
      fill="#EA4335"
      d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039	l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
    />
    <path
      fill="#34A853"
      d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36	c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
    />
    <path
      fill="#4285F4"
      d="M43.611,20.083L43.595,20L42,20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571	c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
    />
  </svg>
);
