import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  StatusBar,
  ScrollView,
  Image,
  TouchableNativeFeedback,
} from 'react-native';



const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

const App = () => {
  return (
    <View style={styles.mainView}>
      <StatusBar 
        barStyle="dark-content"
        translucent={true}
        backgroundColor='#ffffff20'
      />

      <ScrollView
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.mainTopBar}>
          <View style={styles.maenuIconHolder}>
            <TouchableNativeFeedback
              onPress={() => console.log('menu')}
            >
              <Image 
                source={require('./assets/icons/menu2.png')}
                style={styles.menuIconImg}
              />
            </TouchableNativeFeedback>
          </View>
          <View style={styles.searchIconHolder}>
            <TouchableNativeFeedback
              onPress={() => console.log('search')}
            >
              <Image 
                source={require('./assets/icons/search.png')}
                style={styles.searchIconImg}
              />
            </TouchableNativeFeedback>
          </View>
          <View style={styles.eventsTitleHolder}>
            <Text style={styles.eventsTitleHolderText}> 
              Events
            </Text>
          </View>
          <View style={styles.userImgHolder}>
          <TouchableNativeFeedback
              onPress={() => console.log('user')}
            >
              <Image 
                source={require('./assets/images/user.png')}
                style={styles.userImg}
              />
            </TouchableNativeFeedback>
          </View>
        </View>

        <View>

        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: '#fff',
    height: screenHeight,
    width: screenWidth, 
    paddingLeft: 18,
    paddingRight: 18,
  },
  mainTopBar: {
    width: '100%',
    height: 70,
    // backgroundColor: 'red',
    marginTop: StatusBar.currentHeight,
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    paddingBottom: 10
  },
  maenuIconHolder: {
    width: '10%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'flex-start'
  },
  menuIconImg: {
    height: 28,
    width: 28
  },
  searchIconImg: {
    height: 22.5,
    width: 22.5
  },
  searchIconHolder: {
    width: '18%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  eventsTitleHolder: {
    width: '62%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingRight: screenWidth*0.18
    // backgroundColor: 'green'
  },
  eventsTitleHolderText: {
    color: '#333',
    fontSize: 19,
    fontFamily: 'Product Sans Bold 700'
  },
  userImgHolder: {
    height: '100%',
    width: '10%',
    justifyContent: 'center',
    alignItems: 'flex-end',
    // backgroundColor: 'red'
  },
  userImg: {
    height: 30,
    width: 30,
    borderRadius: 100
  }
})

export  default App;