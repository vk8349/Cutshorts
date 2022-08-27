import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ImageBackground,
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

class Checkout extends React.Component {
  render() {
    return (
      <View style={style.main}>
        <View style={{flexDirection: 'row', marginTop: 27, marginLeft: 2}}>
          {<Icon name="chevron-back" size={30} color="#D7C9C9" />}
          <Text style={{marginTop: 5, color: '#D7C9C9'}}>Back</Text>
          <View style={style.searchbox}>
            <TextInput style={style.search} placeholder="Search"></TextInput>
          </View>
        </View>
        <View>
          <ImageBackground
            source={require('../assets/images/Ellipse20.png')}
            style={{
              height: 400,
              width: '100%',
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: '3%',
              position: 'absolute',
            }}
            resizeMode="contain"></ImageBackground>
        </View>
        <View>
          <View>
            <ImageBackground
              source={require('../assets/images/Ellipse21.png')}
              style={{
                height: 290,
                width: '100%',
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: '15%',
                position: 'absolute',
              }}
              resizeMode="contain"></ImageBackground>

            <ImageBackground
              source={require('../assets/images/Ellipse16.png')}
              style={{
                height: 50,
                width: '100%',
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: '10%',
                position: 'absolute',
              }}
              resizeMode="contain"></ImageBackground>
            <ImageBackground
              source={require('../assets/images/Ellipse15.png')}
              style={{
                height: 50,
                width: '100%',
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: '25%',
                marginLeft: '-25%',
                position: 'absolute',
              }}
              resizeMode="contain"></ImageBackground>
            <ImageBackground
              source={require('../assets/images/Ellipse23.png')}
              style={{
                height: 50,
                width: '100%',
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: '78%',
                position: 'absolute',
              }}
              resizeMode="contain"></ImageBackground>
            <ImageBackground
              source={require('../assets/images/Ellipse24.png')}
              style={{
                height: 50,
                width: '100%',
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: '60%',
                marginLeft: '38%',
                position: 'absolute',
              }}
              resizeMode="contain"></ImageBackground>
          </View>
          <View>
            <ImageBackground
              source={require('../assets/images/Ellipse22.png')}
              style={{
                height: 180,
                width: '100%',
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: '28%',
                position: 'absolute',
              }}
              resizeMode="contain"></ImageBackground>
            <ImageBackground
              source={require('../assets/images/Ellipse14.png')}
              style={{
                height: 50,
                width: '100%',
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: '55%',
                marginLeft: '-16%',
                position: 'absolute',
              }}
              resizeMode="contain"></ImageBackground>
            <ImageBackground
              source={require('../assets/images/Ellipse13.png')}
              style={{
                height: 80,
                width: '100%',
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: '32%',
                marginLeft: '20%',
                position: 'absolute',
              }}
              resizeMode="contain"></ImageBackground>
          </View>
          <View style={style.card}>
            <View style={style.bar}></View>
            <ImageBackground
              source={require('../assets/images/Ellipse131.png')}
              style={{
                height: 80,
                width: '100%',
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: '15%',
                position: 'absolute',
              }}
              resizeMode="contain"></ImageBackground>
            <View style={{marginTop: '32%'}}>
              <Text style={{fontSize: 20, color: '#ffffff'}}>
                Adeleke Adeyanju
              </Text>
              <Text style={{fontSize: 12, color: '#ffffff', marginLeft:'6%', marginTop:10,}}>
                (+234 905 1694 275)
              </Text>
            </View>
            <View style={style.button}>
                <TouchableOpacity>
                    <Text style={{color:'#fffff', fontSize:16,}}>
                        Continue
                    </Text>
                </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

export default Checkout;
const style = {
  main: {
    flex: 1,
    backgroundColor: '#010A43',
    maxHeight: '100%',
  },
  search: {
    width: 60,
    height: 40,
    marginLeft: '5%',
    justifyContent: 'center',
    borderColor: '#1DC7AC',
  },
  searchbox: {
    width: '75%',
    height: 48,
    borderColor: '#1DC7AC',
    borderWidth: 1,
    borderRadius: 10,
    marginLeft: '5%',
    marginTop: -5,
  },
  circleone: {
    width: '100%',
    height: 410,
    borderRadius: 250,
    borderColor: '#0D164B',
    borderWidth: 1,
    marginTop: '3%',
  },
  circletwo: {
    width: 300,
    height: 300,
    borderRadius: 200,
    borderColor: '#0D164B',
    borderWidth: 1,
    marginLeft: '14%',
    marginTop: '-87%',
  },
  circlethtree: {
    width: 180,
    height: 180,
    borderRadius: 200,
    borderColor: '#0D164B',
    borderWidth: 1,
    marginLeft: '28%',
    marginTop: '-59%',
  },
  card: {
    backgroundColor: '#10194E',
    height: 400,
    Width: '100%',
    marginTop: 420,
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
    alignItems: 'center',
  },
  bar: {
    width: 64,
    height: 7,
    borderRadius: 4,
    backgroundColor: '#4E589F',
    marginTop: 20,
  },
  button:{
    width:130,
    height:60,
    backgroundColor:'#FF2E63',
    borderRadius:10,
    marginTop:'5%',
    justifyContent:'center',
    alignItems:'center',

  }
};
