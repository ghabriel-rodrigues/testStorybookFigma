import {
  CircularProgressCircle,
  CircularProgressSVG
} from './SpinnerComponents'

type Style = Record<string, string | number | boolean>

export interface Props {
  className?: string
  style?: Style
  label: string
}

const SIZE = 50
const THICKNESS = 4

const Spinner: React.FC<Props> = ({ label, ...props }) => (
  <div role="progressbar" aria-label={label} aria-valuetext={label}>
    <CircularProgressSVG
      viewBox={`${SIZE / 2} ${SIZE / 2} ${SIZE} ${SIZE}`}
      {...props}
    >
      <CircularProgressCircle
        cx={SIZE}
        cy={SIZE}
        r={(SIZE - THICKNESS) / 2}
        fill="none"
        strokeWidth={THICKNESS}
      />
    </CircularProgressSVG>
  </div>
)

export default Spinner
