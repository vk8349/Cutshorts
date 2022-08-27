import React from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  ImageBackground,
  FlatList,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const FlatData = [
  {
    name: 'Abedoye Usman',
    Image: require('../assets/images/Flatlist/Rectangle265.png'),
    payment: require('../assets/images/Flatlist/Frame53.png'),
    amount: require('../assets/images/Flatlist/Group333.png'),
    id: '1',
  },
  {
    name: 'Mercy Popoola',
    Image: require('../assets/images/Flatlist/Rectangle2651.png'),
    payment: require('../assets/images/Flatlist/Frame51.png'),
    amount: require('../assets/images/Flatlist/Group332.png'),
    id: '2',
  },
  {
    name: 'Onome Adetayo',
    Image: require('../assets/images/Flatlist/Rectangle2652.png'),
    payment: require('../assets/images/Flatlist/Frame52.png'),
    amount: require('../assets/images/Flatlist/Group333.png'),
    id: '3',
  },
  {
    name: 'Kingsley Abiodun',
    Image: require('../assets/images/Flatlist/Rectangle2653.png'),
    payment: require('../assets/images/Flatlist/Frame53.png'),
    amount: require('../assets/images/Flatlist/Group334.png'),
    id: '4',
  },
];

class Home extends React.Component {
  render() {
    return (
      <View style={style.back}>
        <View style={{flexDirection: 'row'}}>
          <View style={style.stick}>
            {<Icon name="menu" size={30} color="#FF2E63" />}
          </View>
          <View
            style={{padding: 3, margin: 5, marginTop: 25, marginLeft: '5%'}}>
            <Text style={{fontSize: 20, fontWeight: 'bold'}}>
              Hello Sandra,
            </Text>
          </View>
          <View style={style.button}>
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate('request');
              }}>
              <Text
                style={{color: '#426DDC', fontSize: 14, fontWeight: 'bold'}}>
                Add Money
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <View
          style={{flexDirection: 'column', marginTop: 75, marginLeft: '5%'}}>
          <View>
            <Text style={{color: '#E7E4E4', fontSize: 12}}>
              Your new current balance is
            </Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <ImageBackground
              source={require('../assets/images/Group.png')}
              // currency
              style={{
                height: 60,
                width: 45,
                justifyContent: 'center',
                alignItems: 'center',
                margin: 2,
              }}
              resizeMode="contain"></ImageBackground>
            <Text style={{fontSize: 40, fontWeight: 'bold', color: '#eeeeee'}}>
              200,000
            </Text>
          </View>

          <View
            style={{
              marginTop: 40,
              flexDirection: 'row',
              justifyContent: 'space-between',
              margin: 10,
            }}>
            <View>
              <TouchableOpacity
                style={style.moneybutton}
                onPress={() => {
                  this.props.navigation.navigate('request');
                }}>
                <Text style={style.moneytext}>Request money</Text>
              </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity
                style={style.moneybutton}
                onPress={() => {
                  this.props.navigation.navigate('request');
                }}>
                <Text style={style.moneytext}>Send money</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={style.card}>
          <View style={style.bar}></View>
          <View style={{flexDirection: 'row', marginTop: 10, marginLeft: 10}}>
            <Text>All Transactions</Text>
            <Text style={{color: '#4E589F', marginLeft: '30%'}}>Sort by: </Text>
            <Text>Recent </Text>
            {<Icon name="chevron-down" size={20} color="#DDD9D9" />}
          </View>

          <FlatList
            data={FlatData}
            renderItem={({item}) => (
              <View style={style.tile}>
                <View>
                  <Image
                    source={item.Image}
                    resizeMode="contain"
                    style={{
                      width: 60,
                      hieght: 60,
                      marginLeft: 10,
                      justifyContent: 'center',
                      marginVertical: 20,
                    }}
                  />
                </View>
                <Text
                  style={{
                    color: '#858EC5',
                    marginLeft: 90,
                    fontSize: 16,
                    fontWeight: 'bold',
                    marginVertical: -80,
                  }}>
                  {item.name}
                </Text>
                <View style={{marginLeft: 90, marginVertical: 100}}>
                  <Image source={item.payment} />
                  <View style={{marginLeft: '70%', marginVertical: -50}}>
                    <Image source={item.amount} />
                  </View>
                </View>
              </View>
            )}
            keyExtractor={item => item.id}
          />
        </View>
      </View>
    );
  }
}

export default Home;
const style = {
  back: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#010A43',
  },
  stick: {
    marginTop: 20,
    marginLeft: '5%',
    height: 50,
    width: 50,
    borderRadius: 30,
    backgroundColor: '#212A6B',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    width: 130,
    height: 40,
    borderRadius: 5,
    backgroundColor: '#212A6B',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 27,
    marginLeft: '5%',
  },
  moneybutton: {
    width: 170,
    height: 60,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#464E8A',
    justifyContent: 'center',
    alignItems: 'center',
  },
  moneytext: {
    color: '#464E8A',
    fontSize: 16,
    fontWeight: 'bold',
  },
  card: {
    width: '100%',
    height: 500,
    marginTop: '5%',
    backgroundColor: '#10194E',
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
  },
  bar: {
    width: 64,
    height: 7,
    borderRadius: 4,
    backgroundColor: '#4E589F',
    alignItems: 'center',
    marginTop: 20,
    marginLeft: '40%',
  },
  tile: {
    width: '100%',
    backgroundColor: '#192259',
    height: 90,

    marginTop: 10,
  },
};
