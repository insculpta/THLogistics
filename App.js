/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

/*

import React from 'react';
//import type {Node} from 'react';
import { createAppContainer, createStackNavigator }from '@react-navigation/native';
import { createDrawerNavigator} from '@react-navigation/drawer';
import 'react-native-gesture-handler';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Dimensions,
  TouchableOpacity,
  Button
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

/*
import{
  ProfileScreen,
  MessageScreen,
  ListScreen
} from "./index";


const DrawerNavigator = createDrawerNavigator(
{
  ProfileScreen,
  MessageScreen,
  ListScreen
}
);
*/


/* $FlowFixMe[missing-local-annot] The type annotation(s) required by Flow's
 * LTI update could not be added via codemod */
/*

const Section = ({children, title}): Node => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};



const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Header />
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <Section title="Step One Jin">
            Edit <Text style={styles.highlight}>App.js</Text> to change this
            screen and then come back to see your edits.
          </Section>
          <Section title="See Your Changes">
            <ReloadInstructions />
          </Section>
          <Section title="Debug">
            <DebugInstructions />
          </Section>
          <Section title="Learn More">
            Read the docs to discover what to do next:
          </Section>
          <LearnMoreLinks />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

*/


///-----------------------------------------------------------------------------------------

/*
class App extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <TouchableOpacity onPress={()=>this.props.navigation.openDrawer}>
          <Text>Open Drawer</Text>
        </TouchableOpacity>
        <Text style={{ fontWeight: 'bold', marginTop: 20 }}>Home</Text>
      </View>
    );
  }
}

function profile(){
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <TouchableOpacity onPress={()=>this.props.navigation.openDrawer}>
        <Text>Open Drawer</Text>
      </TouchableOpacity>
      <Text style={{ fontWeight: 'bold', marginTop: 20 }}>Home</Text>
    </View>
  );  
}

const appNavigator = createDrawerNavigator({
  Home:{
    screen:App
  }
})

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <TouchableOpacity onPress={this.props.navigation.openDrawer}>
          <Text>Open Drawer</Text>
        </TouchableOpacity>
        <Text style={{ fontWeight: 'bold', marginTop: 20 }}>Home</Text>
      </View>
    );
  }
}

class SettingsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <TouchableOpacity onPress={this.props.navigation.openDrawer}>
          <Text>Open Drawer</Text>
        </TouchableOpacity>
        <Text style={{ fontWeight: 'bold', marginTop: 20 }}>Settings</Text>
      </View>
    );
  }
}

const DrawerNavigator = createDrawerNavigator(
  {
    Home: HomeScreen,
    Settings: SettingsScreen,
  },
  {
    drawerBackgroundColor: 'rgba(255,255,255,.9)',
    contentOptions: {
      activeTintColor: '#fff',
      activeBackgroundColor: '#6b52ae',
    },
  }
);




const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

//export default App;
//export default createAppContainer(DrawerNavigator);
//export default DrawerNavigator;
export default createAppContainer(appNavigator)


*/

// In App.js in a new project
//https://heartbeat.comet.ml/how-to-handle-navigation-with-webviews-in-a-react-native-app-1ed51ab3342f (webview tutorial)
//https://reactnavigation.org/docs/drawer-based-navigation (reactnavigation tutorial)

import React, { useState, useRef } from 'react';
import { View, Text, Button,  
  SafeAreaView,
  StyleSheet,
  StatusBar,
  ActivityIndicator,
  TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { WebView } from 'react-native-webview';

function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Treasure House Office</Text>
    </View>
  );
}

function DetailsScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}


function OnlineOrderScreen({ navigation }) {
  
  const webviewRef = useRef(null);
  const [canGoBack, setCanGoBack] = useState(false);
  const [canGoForward, setCanGoForward] = useState(false);
  const [currentUrl, setCurrentUrl] = useState('');
  
  backButtonHandler = () => {
    if (webviewRef.current) webviewRef.current.goBack()
  };
  
  frontButtonHandler = () => {
    if (webviewRef.current) webviewRef.current.goForward()
  };
  
  return (
    
    <SafeAreaView style={styles.flexContainer}>
      <WebView
        source={{ uri: 'http://172.16.0.42:8081/index.php' }}
        startInLoadingState={true}
        renderLoading={() => (
          <ActivityIndicator
            color='black'
            size='large'
            style={styles.flexContainer}
          />
                
        )}
        ref={webviewRef}
        onNavigationStateChange={navState => {
          setCanGoBack(navState.canGoBack)
          setCanGoForward(navState.canGoForward)
          setCurrentUrl(navState.url)
        }}
      />

      <View style={styles.tabBarContainer}>
        <TouchableOpacity onPress={backButtonHandler}>
          <Text style={styles.button}>Back</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={frontButtonHandler}>
          <Text style={styles.button}>Forward</Text>
        </TouchableOpacity>
      </View>

    </SafeAreaView>
      
      
  );
}

function PickingScanScreen({ navigation }) {
  return (
    
      <WebView
        source={{ uri: 'http://172.16.0.42:8081/Scan/dist/index.html' }}
        //source={{ uri: 'https://www.w3schools.com/bootstrap/tryit.asp?filename=trybs_form_select&stacked=h' }}
      />
      
  );
}

function PickingScanScreen2({ navigation }) {
  const [width, setwidth] = useState(200);
  //if(width==250)setwidth(200);
  
  return (  
      <View style={{ width:width, flex:1 }}>
</View>
      
  );
}

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function App() {

  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Online Order">
        <Drawer.Screen name="THOffice" component={HomeScreen} />
        <Drawer.Screen name="Online Order" component={OnlineOrderScreen} 
          options={{                      
            //headerTransparent: true,
            headerShown: true,
            headerStyle: {
            backgroundColor: 'white',
            height: 30,
          },
          headerTintColor: 'black',
          headerTitleStyle: {
          color:'transparent',         
          },
        }} />
        <Drawer.Screen name="Picking Scan" component={PickingScanScreen}
        
        />
        <Drawer.Screen name="Picking Scan2" component={PickingScanScreen2}/>
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  flexContainer: {
    flex: 1
  },
  tabBarContainer: {
    padding: 8,
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: 'black',
    marginBottom:1,
    
  },
  button: {
    color: 'white',
    fontSize: 18
  }
})


export default App;

