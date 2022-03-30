import { DraggableScreenShare } from "@/components/room/draggable/ScreenShare";
import { Settings, ScreenShare, StopScreenShare } from "@mui/icons-material";
import { Box } from "@mui/material";
import { Sidebar, SidebarButton } from "@/components/room/Sidebar";
import { useRef, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "src/firebase/auth";
import { useScreenShare } from "src/hooks/useScreenShare";
import { DraggableAvatar } from "@/components/room/draggable/Avatar";
import { SettingsDialog } from "@/components/room/settings/Settings";
import { TransformComponent, TransformWrapper } from "react-zoom-pan-pinch";

const RoomPage = () => {
  const constraintsRef = useRef(null);
  const [user] = useAuthState(auth);
  const [open, setOpen] = useState(false);
  const { videoRef, shareScreen, isSharing, stopScreenShare } =
    useScreenShare();
  return (
    <Box
      ref={constraintsRef}
      sx={{
        bgcolor: "lightblue",
        height: "100%",
        width: "100%",
        position: "absolute",
      }}
    >
      <SettingsDialog open={open} onClose={() => setOpen(false)} />
      <Sidebar>
        <SidebarButton onClick={() => setOpen(true)}>
          <Settings />
        </SidebarButton>
        {isSharing ? (
          <SidebarButton onClick={stopScreenShare}>
            <StopScreenShare />
          </SidebarButton>
        ) : (
          <SidebarButton onClick={shareScreen}>
            <ScreenShare />
          </SidebarButton>
        )}
      </Sidebar>
      <TransformWrapper
        initialScale={1}
        initialPositionX={200}
        initialPositionY={100}
      >
        {({ zoomIn, zoomOut, resetTransform, ...rest }) => (
          <>
            <div className="tools">
              <button onClick={() => zoomIn()}>+</button>
              <button onClick={() => zoomOut()}>-</button>
              <button onClick={() => resetTransform()}>x</button>
            </div>
            <TransformComponent
              contentStyle={{ width: "100%", height: "100%" }}
            >
              <DraggableScreenShare
                parentRef={constraintsRef}
                videoRef={videoRef}
              />
              <DraggableAvatar
                photoUrl={user?.photoURL}
                displayName={user?.displayName}
                parentRef={constraintsRef}
              />
            </TransformComponent>
          </>
        )}
      </TransformWrapper>
    </Box>
  );
};

export default RoomPage;
