import { Dialog, DialogContent, DialogTitle } from "@mui/material";
import { DeviceSelection } from "./DeviceSelection";

export const SettingsDialog: React.FC<{ open: boolean; onClose: () => void }> =
  ({ open, onClose }) => {
    return (
      <Dialog onClose={onClose} open={open}>
        <DialogTitle>Einstellungen</DialogTitle>
        <DialogContent>
          <DeviceSelection />
        </DialogContent>
      </Dialog>
    );
  };
