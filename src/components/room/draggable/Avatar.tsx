import { Avatar } from "@mui/material";
import { MutableRefObject } from "react";
import { motion } from "framer-motion";

export const DraggableAvatar: React.FC<{
  scale?: number;
  photoUrl?: string | undefined | null;
  displayName?: string | undefined | null;
  parentRef: MutableRefObject<null>;
}> = ({ parentRef, photoUrl, displayName, scale }) => {
  return (
    <Avatar
      {...(photoUrl && { src: photoUrl })}
      className="avatar"
      classes={{ root: "avatar", img: "avatar" }}
      sx={{
        width: 128,
        height: 128,
        transform: "scale(0.5)",
        cursor: "pointer",
        "& img": { pointerEvents: "none" },
      }}
      component={motion.div}
      drag
      dragConstraints={parentRef}
      dragElastic={0}
      dragMomentum={false}
    />
  );
};
