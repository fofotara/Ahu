import {Image, PermissionsAndroid, StyleSheet, Text, View} from 'react-native';
import {useFocusEffect} from '@react-navigation/native';

import {useDispatch, useSelector} from 'react-redux';
import { SetTopTim} from '../redux/action';

import React, {useEffect, useMemo, useRef, useState} from 'react';

import {Button, Icon, Input, Overlay} from '@rneui/themed';

import Maps from '../component/Maps';
import uuid from 'react-native-uuid';
import TopMarker from '../component/TopMarker';
import {Marker} from 'react-native-maps';

const SelectTim = ({navigation, route}) => {
  let id = 0;
  const store = useSelector(state => state.OperationStore);

  const [visibleOverlay, setVisibleOverlay] = useState(false);
  const [tim, onChangeTim] = useState();
  const [tims, setTims] = useState([]);

  const dispatch = useDispatch();

  const mapRef = useRef();

  const addtim = () => {
    console.log('Add tims', tims);
    if (tim !== null) {
      let myuuid = uuid.v4();
      let tempTim = {
        id: myuuid,
        name: tim?.name,
        latitude: tim?.latitude,
        longitude: tim?.longitude,
      };

      setTims([...tims, tempTim]);
      onChangeTim(null);
      console.log('Add tim', tempTim);
      dispatch(SetTopTim(tempTim));
      setVisibleOverlay(false);
    }
  };
  useFocusEffect(
    React.useCallback(() => {
      setTims(store.TopTim);
      console.log('useCallback  ', store);
    }, []),
  );

  useEffect(() => {
    if (mapRef.current) {
      mapRef.current.fitToSuppliedMarkers(tims.map(({_id}) => _id));
    }
  }, [tims]);


  const TimMarkers = useMemo(
    () =>
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
      }),
    [tims],
  );
  const toggleOverlay = () => {
    setVisibleOverlay(!visibleOverlay);
  };
  return (
    <>
      <Maps currentLocation={store.TopCoordinate}>
        <TopMarker store ={store} />
        {TimMarkers}
      </Maps>

      <View style={{position: 'absolute', top: 20, right: 30}}>
        <Button
          onPress={() => {
            navigation.navigate('SelectTarget');
          }}
          title={'Hedef Ekle'}
        />
      </View>
      <View style={{position: 'absolute', bottom: 20, left: 30}}>
        <Button
          onPress={() => {
            //  saveTimLocationHandler();
            setVisibleOverlay(true);
          }}
          buttonStyle={
            {
              //    backgroundColor:'white',
            }
          }
          title={'Tim Ekle'}
        />
      </View>
      <Overlay
        overlayStyle={{
          width: '90%',
        }}
        isVisible={visibleOverlay}
        onBackdropPress={toggleOverlay}>
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
    </>
  );
};

const styles = StyleSheet.create({
  map: {
    flex: 1,
  },
  markerFixed: {
    left: '50%',
    marginLeft: -24,
    marginTop: -48,
    position: 'absolute',
    top: '50%',
  },
  marker: {
    height: 48,
    width: 48,
  },
  footer: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    bottom: 0,
    position: 'absolute',
    width: '100%',
  },
  region: {
    color: '#fff',
    lineHeight: 20,
    margin: 20,
  },
});

export default SelectTim;
