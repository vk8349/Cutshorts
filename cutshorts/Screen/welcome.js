import React from 'react';
import {
  Text,
  View,
  ImageBackground,
  Image,
  TouchableOpacity,
} from 'react-native';

class Welcome extends React.Component {
  render() {
    return (
      <View
        style={{flex: 1, flexDirection: 'column', backgroundColor: '#0E164D'}}>
        <View>
          <ImageBackground
            source={require('../assets/images/Vector33.png')}
            // Wave
            style={{
              height: 439,
              width: '100%',
              justifyContent: 'center',
              alignItems: 'center',
              marginVertical: '-20%',
            }}
            resizeMode="contain"></ImageBackground>
        </View>

        <View>
          <ImageBackground
            source={require('../assets/images/Vector34.png')}
            // left 01 pink
            style={{
              height: 350,
              width: 200,
              justifyContent: 'center',
              alignItems: 'center',
              marginLeft: '-12%',
              marginVertical: '-70%',
            }}
            resizeMode="contain"></ImageBackground>
          <View>
            <View>
              <ImageBackground
                source={require('../assets/images/Rectangle256.png')}
                //green circle
                style={{
                  height: 152,
                  width: 144,
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginLeft: '-10%',
                  marginVertical: '18%',
                }}
                resizeMode="contain"></ImageBackground>
            </View>
          </View>
          <View>
            <ImageBackground
              source={require('../assets/images/Rectangle255.png')}
              //yellow semi circle
              style={{
                height: 84,
                width: 80,
                justifyContent: 'center',
                alignItems: 'center',
                marginLeft: '-5%',
                marginVertical: '-47%',
              }}
              resizeMode="contain"></ImageBackground>
          </View>
        </View>

        <View>
          <ImageBackground
            source={require('../assets/images/Rectangle257.png')}
            // top left
            style={{
              height: 170,
              width: '100%',
              justifyContent: 'center',
              alignItems: 'center',
              marginLeft: '30%',
              marginVertical: '-90%',
            }}
            resizeMode="contain"></ImageBackground>
        </View>

        <View>
          <ImageBackground
            source={require('../assets/images/Polygon1.png')}
            // top left triangle
            style={{
              height: 77,
              width: '100%',
              justifyContent: 'center',
              alignItems: 'center',
              marginLeft: '45%',
              marginVertical: '-80%',
            }}
            resizeMode="contain"></ImageBackground>
        </View>
        <View>
          <ImageBackground
            source={require('../assets/images/Vector35.png')}
            // Wave 2
            style={{
              height: 439,
              width: '100%',
              justifyContent: 'center',
              alignItems: 'center',
              marginVertical: '-19%',
            }}
            resizeMode="contain"></ImageBackground>
        </View>

        <View>
          <ImageBackground
            source={require('../assets/images/Ellipse7.png')}
            // elipse center
            style={{
              height: 230,
              width: 214,
              justifyContent: 'center',
              alignItems: 'center',
              marginVertical: '-90%',
              marginLeft: '38%',
            }}
            resizeMode="contain"></ImageBackground>
        </View>

        <View>
          <ImageBackground
            source={require('../assets/images/Ellipse8.png')}
            // elipse center
            style={{
              height: 230,
              width: 214,
              justifyContent: 'center',
              alignItems: 'center',
              marginVertical: '-90%',
              marginLeft: '11%',
            }}
            resizeMode="contain"></ImageBackground>
        </View>

        <View>
          <ImageBackground
            source={require('../assets/images/Polygon3.png')}
            // elipse center triangle
            style={{
              height: 167,
              width: 214,
              justifyContent: 'center',
              alignItems: 'center',
              marginVertical: '-82%',
              marginLeft: '35%',
            }}
            resizeMode="contain"></ImageBackground>
        </View>

        <View>
          <ImageBackground
            source={require('../assets/images/Polygon2.png')}
            // elipse center triange yellow
            style={{
              height: 167,
              width: 214,
              justifyContent: 'center',
              alignItems: 'center',
              marginVertical: '-82%',
              marginLeft: '15%',
            }}
            resizeMode="contain"></ImageBackground>
        </View>

        <View>
          <ImageBackground
            source={require('../assets/images/lock1.png')}
            // lock
            style={{
              height: 48,
              width: 48,
              justifyContent: 'center',
              alignItems: 'center',
              marginVertical: '-69%',
              marginLeft: '45%',
            }}
            resizeMode="contain"></ImageBackground>
        </View>

        <View style={style.card}>
          <View style={{flexDirection: 'row'}}>
            <View style={style.ellipse}></View>
            <View
              style={{
                ...style.ellipse,
                width: '12%',
                marginLeft: 4,
                backgroundColor: '#FFB129',
              }}></View>
            <View style={{...style.ellipse, marginLeft: 4}}></View>
          </View>
          <View style={style.content}>
            <Text style={{fontWeight: 'bold', fontSize: 18, color: '#ffffff'}}>
              Transfer That Is Safe
            </Text>
            <Text style={style.contenta}>You have nothing to be scared</Text>
            <Text style={style.contenta}>about, we got you covered.</Text>
          </View>
          <View style={style.button}>
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate('home');
              }}>
              <Text style={style.contentb}>Start banking</Text>
            </TouchableOpacity>
          </View>
          <View>
            <ImageBackground
              source={require('../assets/images/Group9.png')}
              // wave

              style={{
                height: 145,
                width: 35,
                justifyContent: 'center',
                alignItems: 'center',
                marginVertical: '-40%',
                marginLeft: '96%',
              }}
              resizeMode="stretch"></ImageBackground>
          </View>
        </View>
      </View>
    );
  }
}

export default Welcome;
const style = {
  card: {
    width: '90%',
    height: 320,
    backgroundColor: '#17288E',
    borderTopRightRadius: 50,
    // flexDirection:'row',
  },
  ellipse: {
    width: '6%',
    height: 10,
    backgroundColor: '#FDD590',
    borderRadius: 10,
    marginLeft: '5%',
    marginTop: 20,
  },
  content: {
    flexDirection: 'column',
    marginTop: 10,
    marginLeft: '5%',
  },
  contenta: {
    color: '#fafafa',
    fontSize: 14,
  },
  button: {
    width: 145,
    height: 50,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    marginLeft: '5%',
    margin: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  contentb: {
    fontSize: 16,
    color: '#17288E',
    marginBottom: 6,
  },
};
