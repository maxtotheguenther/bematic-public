import { motion } from "framer-motion";
import { MutableRefObject } from "react";

export const DraggableScreenShare: React.FC<{
  parentRef: MutableRefObject<null>;
  videoRef: MutableRefObject<HTMLVideoElement | null>;
}> = ({ videoRef, parentRef }) => {
  //if (videoRef.current === null) return null;
  return (
    <motion.div
      style={{
        cursor: "pointer",
      }}
      drag
      dragElastic={0}
      dragMomentum={false}
    >
      <video width={200} height={200} ref={videoRef} autoPlay />
    </motion.div>
  );
};
