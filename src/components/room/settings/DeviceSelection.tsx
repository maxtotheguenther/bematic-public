import {
  Divider,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  Stack,
} from "@mui/material";
import { useEffect, useState } from "react";

type Devices = {
  audioInput: MediaDeviceInfo[];
  audioOutput: MediaDeviceInfo[];
  videoInput: MediaDeviceInfo[];
};

export const DeviceSelection: React.FC = () => {
  const [devices, setDevices] = useState<Devices | undefined>();
  const [audioInputId, setAudioInputId] = useState<string>("default");
  const [audioOutputId, setAudioOutputId] = useState<string>("default");

  useEffect(() => {
    async function lookForDevices() {
      const devices = await navigator.mediaDevices.enumerateDevices();
      const audioInput = devices.filter((_) => _.kind === "audioinput");
      const audioOutput = devices.filter((_) => _.kind === "audiooutput");
      const videoInput = devices.filter((_) => _.kind === "videoinput");
      setDevices({ audioInput, audioOutput, videoInput });
    }
    lookForDevices();
  }, []);

  return (
    <Stack spacing={2} divider={<Divider />}>
      <FormControl component="fieldset">
        <FormLabel component="legend">Mikrofon</FormLabel>
        <RadioGroup
          aria-label="gender"
          defaultValue="default"
          name="radio-buttons-group"
          onChange={(e, id) => setAudioInputId(id)}
        >
          {devices?.audioInput.map(({ deviceId, label }, i) => (
            <FormControlLabel
              key={i}
              value={deviceId}
              control={<Radio size="small" />}
              label={label}
            />
          ))}
        </RadioGroup>
      </FormControl>
      <FormControl component="fieldset">
        <FormLabel component="legend">Wiedergabe</FormLabel>
        <RadioGroup
          aria-label="gender"
          defaultValue="default"
          name="radio-buttons-group"
        >
          {devices?.audioOutput.map(({ deviceId, label }, i) => (
            <FormControlLabel
              key={i}
              value={deviceId}
              control={<Radio size="small" />}
              label={label}
            />
          ))}
        </RadioGroup>
      </FormControl>
      {/** <FormControl component="fieldset">
          <FormLabel component="legend">Video</FormLabel>
          <RadioGroup
            aria-label="gender"
            defaultValue="female"
            name="radio-buttons-group"
          >
            {devices?.videoInput.map(({ deviceId, label }, i) => (
              <FormControlLabel
                key={i}
                value={deviceId}
                control={<Radio size="small" />}
                label={label}
              />
            ))}
          </RadioGroup>
        </FormControl>*/}
    </Stack>
  );
};
