import {Text, Button} from '@rneui/themed';
import {View} from 'react-native';

const App = ({navigation}) => {
  return (
    <>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'red',
        }}>
        <Text
          h1
          h1Style={{
            fontWeight: '900',
            color: 'white',
          }}>
          A.H.U
        </Text>
        <Text
          h3
          h3Style={{
            fontWeight: 'normal',
            color: 'white',
          }}>
          Atış Hedef Uygulaması
        </Text>
          <Button containerStyle={{
              marginHorizontal:20,
              marginVertical:40
          }}
              onPress={() => navigation.navigate('NewOperation')}
              title="YENİ OPERASYON"
              type="outline"
              titleStyle={{
                  margin:20,
                  marginHorizontal:50,
                  //fontWeight: 'bold',
                  color: 'white',
                  fontSize:20
              }}
          />
      </View>

    </>
  );
};

export default App;
