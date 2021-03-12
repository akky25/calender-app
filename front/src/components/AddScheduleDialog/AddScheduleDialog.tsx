import React, { FC, ChangeEvent } from "react";
import {
  Dialog,
  DialogContent,
  TextField,
  DialogActions,
  Button,
  Input,
  Grid,
  IconButton,
  makeStyles,
  Typography,
  Tooltip,
} from "@material-ui/core";
import {
  LocationOnOutlined,
  NotesOutlined,
  AccessTime,
  Close,
} from "@material-ui/icons";
import { DatePicker } from "@material-ui/pickers";
import dayjs from "dayjs";

import { Form } from "redux/stateType";
import { AddScheduleState } from "redux/addSchedule/add-schedule-slice";

type Props = {
  addSchedule: AddScheduleState;
  closeDialog: () => void;
  setSchedule: (shedule: Form) => void;
  saveSchedule: () => void;
  setIsEditStart: () => void;
};

const useStyled = makeStyles({
  input: {
    // marginBottom: "32px",
    fontSize: "22px",
  },
  textfield: {
    margin: "4px 0",
  },
  validation: {
    height: 32,
  },
});

const AddScheduleDialog: FC<Props> = ({
  addSchedule: {
    form: { title, location, description, date },
    isDialogOpen,
    isStartEdit,
  },
  closeDialog,
  setSchedule,
  saveSchedule,
  setIsEditStart,
}) => {
  const classes = useStyled();

  const setTile = (e: ChangeEvent<HTMLInputElement>): void =>
    setSchedule({ title: e.target.value });

  const setLocation = (e: ChangeEvent<HTMLInputElement>): void =>
    setSchedule({ location: e.target.value });

  const setDescription = (e: ChangeEvent<HTMLInputElement>): void =>
    setSchedule({ description: e.target.value });

  const setDate = (d: dayjs.Dayjs | null): void =>
    setSchedule({ date: d ?? undefined });

  const isTitleInvalid = !title && isStartEdit;

  return (
    <Dialog open={isDialogOpen} onClose={closeDialog} maxWidth="xs" fullWidth>
      <DialogActions>
        <Tooltip title="削除" placement="bottom">
          <IconButton onClick={closeDialog} size="small">
            <Close />
          </IconButton>
        </Tooltip>
      </DialogActions>
      <DialogContent>
        <Input
          className={classes.input}
          autoFocus
          fullWidth
          placeholder="タイトルと日時を追加"
          value={title}
          onChange={setTile}
          onBlur={setIsEditStart}
          error={isTitleInvalid}
        />
        <div className={classes.validation}>
          {isTitleInvalid && (
            <Typography variant="caption" component="div" color="error">
              タイトルは必須です。
            </Typography>
          )}
        </div>
        <Grid container spacing={1} alignItems="center" justify="space-between">
          <Grid item>
            <AccessTime />
          </Grid>
          <Grid item xs={10}>
            <DatePicker
              variant="inline"
              format="YYYY年M月D日"
              animateYearScrolling
              disableToolbar
              fullWidth
              className={classes.textfield}
              value={date}
              onChange={setDate}
            />
          </Grid>
        </Grid>
        <Grid container spacing={1} alignItems="center" justify="space-between">
          <Grid item>
            <LocationOnOutlined />
          </Grid>
          <Grid item xs={10}>
            <TextField
              className={classes.textfield}
              fullWidth
              placeholder="場所を追加"
              value={location}
              onChange={setLocation}
            />
          </Grid>
        </Grid>
        <Grid container spacing={1} alignItems="center" justify="space-between">
          <Grid item>
            <NotesOutlined />
          </Grid>
          <Grid item xs={10}>
            <TextField
              className={classes.textfield}
              fullWidth
              placeholder="説明を追加"
              value={description}
              onChange={setDescription}
            />
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button color="primary" variant="outlined" onClick={saveSchedule}>
          保存
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddScheduleDialog;
