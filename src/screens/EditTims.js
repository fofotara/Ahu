import {ScrollView, View} from 'react-native';
import {Button, Input, Text} from '@rneui/themed';
import React, {useEffect, useState} from 'react';
import {useFocusEffect} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {Picker} from '@react-native-picker/picker';
import {SetTimAction} from '../redux/action';
const EditTim = ({navigation, route}) => {
  const store = useSelector(state => state.OperationStore);
  const [selectTim, setSelectTimAction] = useState(store.TopTim[0].name); //Seçilen Tim id
  const [tims, setTims] = useState(store?.TopTim); // Timler
  const [timAction, setTimAction] = useState({}); //Tim actions
  const [addTim, setAddTim] = useState({}); //Tim actions
  const dispatch = useDispatch();

  useFocusEffect(
    React.useCallback(() => {
      console.log(selectTim);
    }, []),
  );

  useEffect(() => {
    console.log('store.TimAction', store.TimAction);


  }, [addTim, selectTim]);

  const saveHandler = () => {
    /**/

    dispatch(
      SetTimAction({
        left: timAction.left,
        right: timAction.right,
        near: timAction.near,
        far: timAction.far,
        name: selectTim,
      }),
    );
    /* setAddTim({
      left: timAction.left,
      right: timAction.right,
      near: timAction.near,
      far: timAction.far,
      name: selectTim,
    });*/

     navigation.goBack();
  };

  return (
    <ScrollView>
      <View
        style={{
          marginHorizontal: 20,
          marginVertical: 20,
        }}>
        <Text
          h4
          style={{
            marginBottom: 24,
          }}>
          Tim Konum Düzenleme
        </Text>
        <View>
          <Text h4>Tim :</Text>
          <Picker
            mode="dialog"
            selectedValue={selectTim}
            onValueChange={(itemValue, itemIndex) =>
              setSelectTimAction(itemValue)
            }>
            {tims.map((item, index) => {
              return (
                <Picker.Item label={item.name} value={item.name} key={index} />
              );
            })}
          </Picker>
        </View>

        <View>
          <Text h4>Sağ :</Text>
          <Input
            onChangeText={text => {
              setTimAction({
                ...timAction,
                right: text,
              });
            }}
            value={timAction?.right}
            autoComplete={'off'}
            autoCapitalize="none"
            //  autoCorrect={false}
          />
        </View>
        <View>
          <Text h4>Left :</Text>
          <Input
            onChangeText={text => {
              setTimAction({
                ...timAction,
                left: text,
              });
            }}
            value={timAction?.left}
            autoComplete={'off'}
            autoCapitalize="none"
            //  autoCorrect={false}
          />
        </View>
        <View>
          <Text h4>Uzak :</Text>
          <Input
            onChangeText={text => {
              setTimAction({
                ...timAction,
                far: text,
              });
            }}
            value={timAction?.far}
            autoComplete={'off'}
            autoCapitalize="none"
            //  autoCorrect={false}
          />
        </View>
        <View>
          <Text h4>Yakın :</Text>
          <Input
            onChangeText={text => {
              setTimAction({
                ...timAction,
                near: text,
              });
            }}
            value={timAction?.near}
            autoComplete={'off'}
            autoCapitalize="none"
            //  autoCorrect={false}
          />
        </View>
      </View>
      <Button
        containerStyle={{
          marginHorizontal: 20,
          marginVertical: 40,
        }}
        title={'Kayıt Al'}
        onPress={() => {
          saveHandler();
          //   console.log(selectTim, timAction, tims);
        }}
      />
    </ScrollView>
  );
};

export default EditTim;
