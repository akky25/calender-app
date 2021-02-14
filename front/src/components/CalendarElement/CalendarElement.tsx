import { FC } from "react";
import { Typography } from "@material-ui/core";
import dayjs from "dayjs";

import styles from "./style.module.css";

type Props = {
  day: dayjs.Dayjs;
};

const CalendarElement: FC<Props> = ({ day }) => (
  <div className={styles.element}>
    <Typography
      className={styles.date}
      align="center"
      variant="caption"
      component="div"
    >
      {day.format(day.date() === 1 ? "M月D日" : "D")}
    </Typography>
  </div>
);

export default CalendarElement;