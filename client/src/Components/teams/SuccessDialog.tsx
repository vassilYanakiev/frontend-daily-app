import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
} from "@mui/material";

interface Props {
  openMessage: boolean;
  handleCloseMessage: () => void;
  message: string;
}

const SuccessDialog = ({ openMessage, handleCloseMessage, message }: Props) => {
  return (
    <Dialog open={openMessage} onClose={handleCloseMessage}>
      <DialogTitle>Great Sucess!</DialogTitle>
      <DialogContent>
        <DialogContentText>{message}</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleCloseMessage}>Ok</Button>
      </DialogActions>
    </Dialog>
  );
};

export default SuccessDialog;
