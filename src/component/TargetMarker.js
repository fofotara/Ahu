import React, { useMemo } from "react";
import { Marker } from "react-native-maps";
import { Text } from "react-native";
import { Icon } from "@rneui/themed";
import uuid from "react-native-uuid";

const TargetMarker = (({store}) => {
  return (
    <Marker
      key={uuid.v4().toString}
      coordinate={{
        latitude: store.TopTarget.latitude,
        longitude: store.TopTarget.longitude,
      }}>

      <Icon reverse name="target" type="simple-line-icon" />
    </Marker>
  );
});

export default TargetMarker;
