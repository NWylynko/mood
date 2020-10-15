import React from "react";
import Slider from "@react-native-community/slider";

export function CustomSlider({
  colour,
  setValue, }: {
    colour: string;
    setValue: (n: number) => void;
  }) {
  return (
    <Slider
      style={{ width: 200, height: 40 }}
      minimumValue={0}
      maximumValue={10}
      step={1}
      minimumTrackTintColor={colour}
      maximumTrackTintColor={colour}
      thumbTintColor={colour}
      onValueChange={setValue} />
  );
}
