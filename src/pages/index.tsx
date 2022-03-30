import { Button, Typography } from "@mui/material";
import type { NextPage } from "next";
import { CenteredBox } from "@/components/layout/CenteredBox";
import { Page } from "@/components/layout/Page";
import { auth, signInWithGoogle } from "src/firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { useEffect, useRef, useState } from "react";

const Home: NextPage = () => {
  const [user, loading] = useAuthState(auth);
  const [devices, setDevices] = useState<MediaDeviceInfo[]>([]);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    async function lookForDevices() {
      const devices = await navigator.mediaDevices
        .enumerateDevices()
        .then((devices) => devices.filter((_) => _.kind === "audioinput"));
      setDevices(devices);
    }
    lookForDevices();
  }, []);

  async function establishConnection() {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    if (audioRef.current) {
      audioRef.current.srcObject = stream;
    }
  }

  return (
    <Page>
      <CenteredBox>
        <>
          <Button onClick={establishConnection}>Go to your room</Button>
          <audio ref={audioRef} id="gum-local" controls autoPlay></audio>
          <Typography>Your devices</Typography>
        </>
      </CenteredBox>
    </Page>
  );
};

export default Home;
