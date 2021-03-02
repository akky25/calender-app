import React, { FC } from "react";
import {
  Dialog,
  DialogContent,
  DialogActions,
  Grid,
  IconButton,
  Typography,
} from "@material-ui/core";
import { LocationOnOutlined, NotesOutlined, Close } from "@material-ui/icons";

import { CurrentScheduleState } from "redux/currentSchedule/currentSchedule-slice";
import styles from "./style.module.css";

type Props = {
  currentSchedule: CurrentScheduleState;
  closeDialog: () => void;
};

const spacer = (top: number, bottom: number) => ({
  margin: `${top}px 0 ${bottom}px 0`,
});

const AddScheduleDialog: FC<Props> = ({
  currentSchedule: { item, isDialogOpen },
  closeDialog,
}) => (
  <Dialog open={isDialogOpen} onClose={closeDialog} maxWidth="xs" fullWidth>
    <DialogActions>
      <div className={styles.closeButton}>
        <IconButton onClick={closeDialog} size="small">
          <Close />
        </IconButton>
      </div>
    </DialogActions>
    <DialogContent>
      {item && (
        <>
          <div>
            <Grid
              container
              spacing={1}
              alignItems="center"
              justify="space-between"
              style={spacer(0, 30)}
            >
              <Grid item>
                <span className={styles.box} />
              </Grid>
              <Grid item xs={10}>
                <Typography variant="h5" component="h2">
                  {item.title}
                </Typography>
                <Typography color="textSecondary">
                  {item.date.format("M月 D日")}
                </Typography>
              </Grid>
            </Grid>
          </div>

          {item.location && (
            <Grid
              container
              spacing={1}
              alignItems="center"
              justify="space-between"
              style={spacer(0, 4)}
            >
              <Grid item>
                <LocationOnOutlined />
              </Grid>
              <Grid item xs={10}>
                <Typography>{item.location}</Typography>
              </Grid>
            </Grid>
          )}
          {item.description && (
            <Grid
              container
              spacing={1}
              alignItems="center"
              justify="space-between"
              style={spacer(0, 4)}
            >
              <Grid item>
                <NotesOutlined />
              </Grid>
              <Grid item xs={10}>
                <Typography>{item.description}</Typography>
              </Grid>
            </Grid>
          )}
        </>
      )}
    </DialogContent>
  </Dialog>
);
export default AddScheduleDialog;
