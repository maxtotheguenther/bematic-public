import { DraggableAvatar } from "@/components/room/draggable/Avatar";
import { Box } from "@mui/material";
import { useRef } from "react";

const TesterPage = () => {
  const constraintsRef = useRef(null);
  return (
    <Box
      sx={{
        width: "3200px",
        height: "1800px",
        overflow: "hidden",
        backgroundImage: "url('./porsche.jpg')",
      }}
    ></Box>
  );
};

export default TesterPage;
