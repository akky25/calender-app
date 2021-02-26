import React, { FC, ChangeEvent } from "react";
import {
  Dialog,
  DialogContent,
  TextField,
  DialogActions,
  Button,
  Input,
  Grid,
  makeStyles,
} from "@material-ui/core";
import { LocationOnOutlined, NotesOutlined } from "@material-ui/icons";

import { Form, ScheduleState } from "redux/schedule/schedule-slice";

type Props = {
  schedule: ScheduleState;
  closeDialog: () => void;
  setSchedule: (shedule: Form) => void;
};

const useStyled = makeStyles({
  input: {
    marginBottom: "32px",
    fontSize: "22px",
  },
  textfield: {
    margin: "4px 0",
  },
});

const AddScheduleDialog: FC<Props> = ({
  schedule: {
    form: { title, location, description },
    isDialogOpen,
  },
  closeDialog,
  setSchedule,
}) => {
  const classes = useStyled();

  const setTile = (e: ChangeEvent<HTMLInputElement>): void =>
    setSchedule({ title: e.target.value });

  const setLocation = (e: ChangeEvent<HTMLInputElement>): void =>
    setSchedule({ location: e.target.value });

  const setDescription = (e: ChangeEvent<HTMLInputElement>): void =>
    setSchedule({ description: e.target.value });

  return (
    <Dialog open={isDialogOpen} onClose={closeDialog} maxWidth="xs" fullWidth>
      <DialogContent>
        <Input />
        <TextField />
        <Input
          className={classes.input}
          autoFocus
          fullWidth
          placeholder="タイトルと日時を追加"
          value={title}
          onChange={setTile}
        />
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
        <Button color="primary" variant="outlined">
          保存
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddScheduleDialog;
