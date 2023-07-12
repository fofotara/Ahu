import {Text, TextInput, View, StyleSheet, ScrollView} from 'react-native';
import {Button, Input} from '@rneui/themed';
import React, {useState} from 'react';
import {useFocusEffect} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import {Col, Grid} from 'react-native-easy-grid';
import {SetTimAction} from '../redux/action';

const resultList = [
  {side: '2497', height: '1108', bh: '4'},
  {side: '2490', height: '1110', bh: '4'},
  {side: '2481', height: '1017', bh: '4'},
  {side: '2479', height: '1089', bh: '4'},
];

const Calculators = ({navigation}) => {
  const store = useSelector(state => state.OperationStore);
  const [timActions, setTimActions] = useState([]);
  const [results, setResult] = useState({side: '', height: '', bh: ''});

  useFocusEffect(
    React.useCallback(() => {
      console.log('TimAction', JSON.stringify(store.TimAction));

      setTimActions(store.TimAction);
      setResult(resultList[store.TimAction.length % resultList.length]);
    }, [store.TimAction]),
  );

  return (
    <ScrollView style={{flex: 1}}>
      <View
        style={{
          marginHorizontal: 20,
          //marginVertical:20,
          alignItems: 'flex-end',
        }}>
        <Button
          onPress={() => {
            navigation.navigate('EditTims');
            console.log('store');
          }}
          containerStyle={{
            width: 200,
            marginVertical: 30,
          }}
          buttonStyle={
            {
              //    backgroundColor:'white',
            }
          }
          title={'Tim Bilgileri'}
        />
      </View>
      <View
        style={{
          marginHorizontal: 20,
        }}>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            marginBottom: 30,
          }}>
          <View style={{flex: 1, alignSelf: 'center'}}>
            <Text>Atış : </Text>
          </View>
          <View style={{flex: 2}}>
            <Text> {store.OperationName}</Text>
          </View>
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            marginBottom: 10,
          }}>
          <View style={{flex: 1, alignSelf: 'center'}}>
            <Text>Yan</Text>
          </View>
          <View style={{flex: 2}}>
            <TextInput style={styles.input} value={results.side} />
          </View>
        </View>

        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            marginBottom: 10,
          }}>
          <View style={{flex: 1, alignSelf: 'center'}}>
            <Text>Yükseklik</Text>
          </View>
          <View style={{flex: 2}}>
            <TextInput style={styles.input}  value={results.height}  />
          </View>
        </View>

        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            marginBottom: 30,
          }}>
          <View style={{flex: 1, alignSelf: 'center'}}>
            <Text>B.H</Text>
          </View>
          <View style={{flex: 2}}>
            <TextInput style={styles.input}  value={results.bh}  />
          </View>
        </View>

        <View
          style={{
            flex: 1,
            borderWidth: 1,
          }}>
          <Grid>
            <Col>
              <Text>Tim</Text>
            </Col>
            <Col>
              <Text>Sağ</Text>
            </Col>
            <Col>
              <Text>Sol</Text>
            </Col>
            <Col>
              <Text>Uzat</Text>
            </Col>
            <Col>
              <Text>Kısalt</Text>
            </Col>
          </Grid>
          {timActions.map((action, i) => (
            <Grid key={'grid-' + i}>
              <Col>
                <Text>{action.name}</Text>
              </Col>
              <Col>
                <Text>{action.right}</Text>
              </Col>
              <Col>
                <Text>{action.left}</Text>
              </Col>
              <Col>
                <Text>{action.far}</Text>
              </Col>
              <Col>
                <Text>{action.near}</Text>
              </Col>
            </Grid>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

export default Calculators;

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: '#b3b3b3',
  },
  text: {
    height: 40,
    textAlignVertical: 'center',
  },
});
