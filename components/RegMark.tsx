// Brand accent: a four-point spark (replaced the old crosshair registration mark)
export default function RegMark({
  size = 12,
  className = "",
  style = {},
}: {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className={className} style={style} fill="none">
      <path d="M12 1C12.9 7.6 16.4 11.1 23 12C16.4 12.9 12.9 16.4 12 23C11.1 16.4 7.6 12.9 1 12C7.6 11.1 11.1 7.6 12 1Z" fill="currentColor" />
    </svg>
  );
}