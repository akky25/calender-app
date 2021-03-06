import { FC } from "react";
import {
  IconButton,
  Toolbar,
  Typography,
  makeStyles,
  Hidden,
  Tooltip,
} from "@material-ui/core";
import { DatePicker } from "@material-ui/pickers";

import ArrowBackIos from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIos from "@material-ui/icons/ArrowForwardIos";
import DehazeIcon from "@material-ui/icons/Dehaze";
import dayjs from "dayjs";

type Props = {
  setNextMonth: () => void;
  setPreviousMonth: () => void;
  setMonth: (dayObj: dayjs.Dayjs | null) => void;
  month: dayjs.Dayjs | null;
};

const useStyled = makeStyles({
  toolbar: { padding: "0" },
  typography: { margin: "0 30px 0 10px" },
  datePicker: { marginLeft: 30 },
});

const Navigation: FC<Props> = ({
  setNextMonth,
  setPreviousMonth,
  setMonth,
  month,
}) => {
  const classes = useStyled();

  return (
    <Toolbar className={classes.toolbar}>
      <IconButton>
        <DehazeIcon />
      </IconButton>
      <img src="/images/calendar_icon.png" width="40" height="40" alt="" />
      <Hidden xsDown>
        <Typography
          color="textSecondary"
          variant="h5"
          className={classes.typography}
        >
          カレンダー
        </Typography>
        <Tooltip title="前の月" placement="bottom">
          <IconButton size="small" onClick={setPreviousMonth}>
            <ArrowBackIos />
          </IconButton>
        </Tooltip>
        <Tooltip title="次の月" placement="bottom">
          <IconButton size="small" onClick={setNextMonth}>
            <ArrowForwardIos />
          </IconButton>
        </Tooltip>
      </Hidden>
      <DatePicker
        value={month}
        onChange={setMonth}
        variant="inline"
        format="YYYY年 M月"
        animateYearScrolling
        disableToolbar
        className={classes.datePicker}
        InputProps={{
          disableUnderline: true,
          style: { fontSize: 25 },
        }}
      />
    </Toolbar>
  );
};

export default Navigation;
