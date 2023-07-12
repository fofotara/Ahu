import { Button, Input, Overlay, Text } from "@rneui/themed";
import { View } from "react-native";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { SetTopCoordinate, SetTopTarget, SetTopTim } from '../../redux/action'
const AddTim = ({visibility, toggleOverlay}) => {
  const [tim, onChangeTim] = useState();
  const [tims, setTims] = useState([]);

  const dispatch = useDispatch();

  const addtim = () => {
    console.log('Add tims', tims);

    if (tim !== null) {
      setTims([...tims, tim]);
      onChangeTim(null);
      console.log('Add tim', tim);
      dispatch(SetTopTim(tims));
    }
  };

  return (
    <Overlay
      overlayStyle={{
        width: '90%',
      }}
      isVisible={visibility}
      onBackdropPress={toggleOverlay}
      >
      <Text
        h3
        h3Style={{
          marginVertical: 20,
          textAlign: 'center',
        }}>
        Tim Ekle
      </Text>
      <View>
        <Text>Tim :</Text>
        <Input
          onChangeText={name =>
            onChangeTim({
              ...tim,
              name: name,
            })
          }
          value={tim?.name}
          autoComplete={'off'}
          autoCapitalize="none"
          //  autoCorrect={false}
        />
      </View>
      <View>
        <Text>Latitude :</Text>
        <Input
          keyboardType={'numeric'}
          onChangeText={lat => {
            if (lat) {
              onChangeTim({
                ...tim,
                latitude: lat,
              });
            }
          }}
          value={tim?.latitude}
          autoComplete={'off'}
          autoCapitalize="none"
          //  autoCorrect={false}
        />
      </View>
      <View>
        <Text>Longitude :</Text>
        <Input
          keyboardType={'numeric'}
          onChangeText={long =>
            onChangeTim({
              ...tim,
              longitude: long,
            })
          }
          value={tim?.longitude}
          autoComplete={'off'}
          autoCapitalize="none"
          //  autoCorrect={false}
        />
      </View>
      <View>
        <Button title={'Kaydet'} onPress={() => addtim()} />
      </View>
    </Overlay>
  )
}


export default AddTim;
