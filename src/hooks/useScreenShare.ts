import { useRef, useState } from "react";

export function useScreenShare() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isSharing, setIsSharing] = useState(false);
  const stream = useRef<MediaStream | null>(null);

  async function shareScreen() {
    const displayMedia = await navigator.mediaDevices.getDisplayMedia();
    stream.current = displayMedia;
    if (videoRef.current) {
      setIsSharing(true);
      videoRef.current.srcObject = displayMedia;
    }
  }

  async function stopScreenShare() {
    const tracks = stream.current?.getTracks();
    tracks?.forEach((track) => track.stop());
    videoRef.current = null;
    setIsSharing(false);
  }

  return {
    shareScreen,
    isSharing,
    stopScreenShare,
    videoRef,
  };
}
