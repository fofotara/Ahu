import Maps from '../component/Maps';
import {useDispatch, useSelector} from 'react-redux';
import TopMarker from '../component/TopMarker';
import React from 'react';
import TargetMarker from '../component/TargetMarker';
import {Polyline} from 'react-native-maps';
import {Button} from '@rneui/themed';
import {View} from 'react-native';
import {useFocusEffect} from '@react-navigation/native';
import {SetOperations} from '../redux/operationAction';
const FinalMaps = ({navigation, route}) => {
  const store = useSelector(state => state.OperationStore);
  const operations = useSelector(state => state.Operations);

  const dispatch = useDispatch();

  useFocusEffect(
    React.useCallback(() => {
      console.log('useCallback  ', store);
      dispatch(SetOperations(store));

    }, []),
  );

  return (
    <>
      <Maps currentLocation={store.TopCoordinate}>
        <TopMarker store={store} />
        <TargetMarker store={store} />
        <Polyline
          coordinates={[store.TopCoordinate, store.TopTarget]}
          strokeColor="#000" // fallback for when `strokeColors` is not supported by the map-provider
          strokeColors={[
            '#7F0000',
            '#00000000', // no color, creates a "long" gradient between the previous and next coordinate
            '#B24112',
            '#E5845C',
            '#238C23',
            '#7F0000',
          ]}
          strokeWidth={4}
        />
      </Maps>
      <View style={{position: 'absolute', bottom: 20, alignSelf: 'center'}}>
        <Button
          onPress={() => {
            navigation.navigate('Calculators');
          }}
          buttonStyle={
            {
              //    backgroundColor:'white',
            }
          }
          title={'Hesaple'}
        />
      </View>
    </>
  );
};

export default FinalMaps;
