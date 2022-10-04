export interface FontStyleProps {
  className?: string;
  fontFamily?: string;
  fontWeight?: string;
  fontSize?: number;
  color?: string;
}
export interface ShowDateProps extends FontStyleProps {
  year: string;
  month: string;
  date: string;
}

export interface ShowTimeProps extends FontStyleProps {
  hours: string;
  minutes: string;
  seconds: string;
}
