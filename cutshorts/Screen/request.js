import React from 'react';
import {View, Text, ImageBackground, TouchableOpacity} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

class Request extends React.Component {
  render() {
    return (
      <View style={style.backk}>
        <View style={{flexDirection: 'row', marginTop: 27, marginLeft: 2}}>
          {<Icon name="chevron-back" size={30} color="#D7C9C9" />}
          <Text style={{marginTop: 5, color: '#D7C9C9'}}>Back</Text>
        </View>

        <View style={style.back}>
          <ImageBackground
            source={require('../assets/images/Vector36.png')}
            // Blob background
            style={{
              height: 396,
              width: 602,
              justifyContent: 'center',
              alignItems: 'center',
              marginVertical: '-18%',
              marginLeft: '-20%',
              
            }}
            resizeMode="contain"></ImageBackground>
          <Text
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: -284,
              marginLeft: '35%',
              fontSize: 18,
              color: '#D7C9C9',
            }}>
            New Request
          </Text>
        </View>
        <View>
          <ImageBackground
            source={require('../assets/images/Ellipse12.png')}
            // Circle1
            style={{
              height: 250,
              width: 250,
              justifyContent: 'center',
              alignItems: 'center',
              marginVertical: '-110%',
              marginLeft: '20%',
              position:'absolute'
            }}
            resizeMode="contain"></ImageBackground>
        </View>
        <View>
          <ImageBackground
            source={require('../assets/images/Ellipse11.png')}
            // Circle2
            style={{
              height: 200,
              width: 200,
              justifyContent: 'center',
              alignItems: 'center',
              marginVertical: '-104%',
              marginLeft: '26%',
              position:'absolute'
            }}
            resizeMode="contain"></ImageBackground>
        </View>
        <View>
          <ImageBackground
            source={require('../assets/images/Ellipse10.png')}
            // Circle2
            style={{
              height: 150,
              width: 150,
              justifyContent: 'center',
              alignItems: 'center',
              marginVertical: '-98%',
              marginLeft: '32%',
              position:'absolute'
            }}
            resizeMode="contain"></ImageBackground>
        </View>
        <View>
          <Text
            style={{
              color: '#EEEEEE',
              fontSize: 24,
              justifyContent: 'center',
              alignItems: 'center',
              marginVertical: '-45%',
              marginLeft: '28%',
            
            }}>
            Adeleke Ramon
          </Text>
        </View>
        <View>
          <Text
            style={{
              color: '#EEEEEE',
              fontSize: 14,
              justifyContent: 'center',
              alignItems: 'center',
              marginVertical: '-25%',
              marginLeft: '35%',
             
            }}>
            is reqursting for:
          </Text>
        </View>
        <View>
          <ImageBackground
            source={require('../assets/images/Group32.png')}
            // Circle2
            style={{
              height: 150,
              width: 150,
              justifyContent: 'center',
              alignItems: 'center',
              marginVertical: '-30%',
              marginLeft: '32%',
              position:'absolute'
            }}
            resizeMode="contain"></ImageBackground>
        </View>
        <View style={style.button2}>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate('checkout');
            }}>
            <Text style={style.btow}>Send Money</Text>
          </TouchableOpacity>
        </View>
        <View style={style.button3}>
          <TouchableOpacity>
            <Text style={style.btow}>Don't Send</Text>
          </TouchableOpacity>
        </View>
       
      </View>
    );
  }
}

export default Request;
const style = {
  back: {
    flex: 1,
    backgroundColor: '#010A43',
    padding: 1,
    maxHeight:'100%'
  },
  stick: {
    marginLeft: '5%',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 27,
    marginLeft: '15%',
  },

  backk: {
    flex: 2,
    backgroundColor: '#010A43',
  },
  button2: {
    height: 60,
    width: 170,
    backgroundColor: '#FF2E63',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: '30%',
    marginVertical: '-2%',
   
  },
  button3: {
    height: 60,
    width: 170,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: '30%',
    marginVertical: '10%',
    borderWidth: 1,
    borderColor: '#464E8A',
    
  },
  btow: {
    color: '#ffffff',
    fontSize: 16,
  },
  
};
