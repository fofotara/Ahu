import React, {useMemo} from 'react';
import {Marker} from 'react-native-maps';
import {Text, View} from 'react-native';
import {Icon} from '@rneui/themed';

const TimMarkers = ({tims}) => {
  tims?.map((marker, index) => {
    console.log('Markers : ', marker);

    return (
      <Marker
        key={`marker-${index}`}
        tracksViewChanges={false}
        coordinate={{
          latitude: parseFloat(marker.latitude),
          longitude: parseFloat(marker.longitude),
        }}>
        <View>
          <Text
            style={{
              backgroundColor: 'white',
              color: 'black',
            }}>
            {marker.name}
          </Text>
          <Icon reverse name="team" type="antdesign" color="green" />
        </View>
      </Marker>
    );
  });
};

export default TimMarkers;
