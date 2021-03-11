import { FC } from "react";
import { Snackbar, IconButton, makeStyles } from "@material-ui/core";
import { Close, Warning } from "@material-ui/icons";

type Props = {
  error: string | null;
  handleClose: () => void;
};
const useStyles = makeStyles((theme) => ({
  message: {
    display: "flex",
    alignItems: "center",
  },
  icon: {
    fontSize: 20,
  },
  iconVariant: {
    opacity: 0.9,
    marginRight: theme.spacing(1),
  },
}));

const ErrorSnackbar: FC<Props> = ({ error, handleClose }) => {
  const classes = useStyles();

  return (
    <Snackbar
      open={!!error}
      onClose={handleClose}
      autoHideDuration={3000}
      anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      message={
        <span className={classes.message}>
          <Warning className={[classes.icon, classes.iconVariant].join(" ")} />
          {error}
        </span>
      }
      action={
        <IconButton color="inherit" onClick={handleClose}>
          <Close className={classes.icon} />
        </IconButton>
      }
    />
  );
};

export default ErrorSnackbar;
