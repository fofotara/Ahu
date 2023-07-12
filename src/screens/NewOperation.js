import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {Button, Input} from '@rneui/themed';
import {Picker} from '@react-native-picker/picker';
import {useDispatch, useSelector} from 'react-redux';
import {SetTopName, SetOperationName} from '../redux/action';

const Tops = ['Top 1', 'Top 2', 'Top 3', 'Top 4'];

const NewOperation = ({navigation}) => {
  const [text, onChangeText] = useState('');
  const [top, onChangeTop] = useState(Tops[0]);
  const [operation, setOperation] = useState({});

  const dispatch = useDispatch();

  const gotoMapHandle = () => {
    console.log(text, top);
    dispatch(SetTopName(top));
    dispatch(SetOperationName(text));

    navigation.push('SelectTop');
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 16,
        backgroundColor: 'white',
      }}>
      <View>
        <Text>Operasyon Adı :</Text>
        <Input
          onChangeText={text => onChangeText(text)}
          value={text}
          autoComplete={'off'}
          autoCapitalize="none"
          //  autoCorrect={false}
        />
      </View>
      <View>
        <Text>Top :</Text>
        <Picker
          mode="dialog"
          selectedValue={top}
          onValueChange={(itemValue, itemIndex) => onChangeTop(itemValue)}>
          {Tops.map((item, index) => {
            return <Picker.Item label={item} value={item} key={index} />;
          })}
        </Picker>
      </View>
      <View>
        <Button title={'Devam'} onPress={() => gotoMapHandle()} />
      </View>
    </View>
  );
};

export default NewOperation;
