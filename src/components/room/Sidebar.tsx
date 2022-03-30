import { IconButton, IconButtonProps } from "@mui/material";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";

export const Sidebar: React.FC = ({ children }) => {
  return (
    <>
      <Paper
        elevation={5}
        sx={{
          zIndex: 999,
          position: "fixed",
          borderRadius: "6px",
          display: "flex",
          ml: 2,
          "& div": {
            pb: 0.2,
          },
        }}
      >
        {children}
      </Paper>
    </>
  );
};

export const SidebarButton: React.FC<IconButtonProps> = ({
  children,
  ...props
}) => {
  return (
    <div>
      <IconButton {...props}>{children}</IconButton>
    </div>
  );
};
