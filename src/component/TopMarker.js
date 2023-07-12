import React, { useMemo } from "react";
import { Marker } from "react-native-maps";
import { Text } from "react-native";
import { Icon } from "@rneui/themed";
import uuid from "react-native-uuid";

const TopMarker = (({store}) => {
  return (
    <Marker
      key={uuid.v4().toString}
      coordinate={{
        latitude: store.TopCoordinate.latitude,
        longitude: store.TopCoordinate.longitude,
      }}>
      <Icon reverse name="rocket" type="fontisto" color="red" />
    </Marker>
  );
});

export default TopMarker;
