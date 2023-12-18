import { Grid, TextField } from "@mui/material";

type EntryInputProps = {
  entryLabel: string;
};

const EntryInput = ({ entryLabel }: EntryInputProps) => {
  return (
    <Grid item xs={12}>
      <TextField label={entryLabel} variant="outlined" fullWidth />
    </Grid>
  );
};

export default EntryInput;
