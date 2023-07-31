import Button from "@mui/material/Button"
import "./Button.scss"
import { SvgIconProps } from "@material-ui/core/SvgIcon"

interface ButtonProps {
  icon: (props: SvgIconProps) => JSX.Element
  children: string
  className: string
}

const ButtonMain: React.FC<ButtonProps> = ({
  icon: Icon,
  children,
  className,
}: ButtonProps) => {
  return (
    <div>
      <Button
        className={`button ${className}`}
        variant="outlined"
        color="primary"
        startIcon={<Icon />}
      >
        {children}
      </Button>
    </div>
  )
}

export default ButtonMain
