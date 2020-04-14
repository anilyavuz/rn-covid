import React from "react";
import { Image, StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import {
  DrawerItem,
  createDrawerNavigator,
  DrawerContentScrollView,
} from "@react-navigation/drawer";
import Animated from "react-native-reanimated";
import { Feather, AntDesign } from "@expo/vector-icons";
import { Block, Button, Text } from "expo-ui-kit";
import { LinearGradient } from "expo-linear-gradient";

import MainPage from "./screens/MainPage";
import CovidTest from "./screens/CovidTest";
import FeverCalendar from "./screens/FeverCalendar";
import FeverEntry from "./screens/FeverEntry";
import FeverMedian from "./screens/FeverMedian";
import HealthTest from "./screens/HealthTest";
import Hospitals from "./screens/Hospitals";
import TravelCalendar from "./screens/TravelCalendar";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const Screens = ({ navigation, style }) => {
  return (
    <Animated.View style={StyleSheet.flatten([styles.stack, style])}>
      <Stack.Navigator
        screenOptions={{
          headerTransparent: true,
          headerTitle: null,
          headerLeft: () => (
            <Button transparent onPress={() => navigation.openDrawer()}>
              <Feather
                name="menu"
                size={18}
                color="black"
                style={{ paddingHorizontal: 10 }}
              />
            </Button>
          ),
        }}>

        <Stack.Screen name="MainPage">
          {(props) => <MainPage {...props} />}
        </Stack.Screen>
        <Stack.Screen name="FeverCalendar">
          {(props) => <FeverCalendar {...props} />}
        </Stack.Screen>
        <Stack.Screen name="FeverEntry">
          {(props) => <FeverEntry {...props} />}
        </Stack.Screen>
        <Stack.Screen name="FeverMedian">
          {(props) => <FeverMedian {...props} />}
        </Stack.Screen>
        <Stack.Screen name="TravelCalendar">
          {(props) => <TravelCalendar {...props} />}
        </Stack.Screen>
        <Stack.Screen name="CovidTest">
          {(props) => <CovidTest {...props} />}
        </Stack.Screen>
        <Stack.Screen name="HealthTest">
          {(props) => <HealthTest {...props} />}
        </Stack.Screen>
        <Stack.Screen name="Hospitals">
          {(props) => <Hospitals {...props} />}
        </Stack.Screen>
      </Stack.Navigator >
    </Animated.View >
  );
}; //sude yardım etti çok hem de wow inanılmaz bir insandırbest coder eveeer my mentor, smarter than me of course!

const DrawerContent = (props) => {
  return (
    <DrawerContentScrollView
      {...props}
      scrollEnabled={false}
      contentContainerStyle={{ flex: 1 }}
    >
      <Block>
        <Block flex={0.4} margin={20} bottom>
          <Image
            source={{
              uri:
                "https://react-ui-kit.com/assets/img/react-ui-kit-logo-green.png",
              height: 60,
              width: 60,
              scale: 0.5,
            }}
            resizeMode="center"
            style={styles.avatar}
          />
          <Text white title>
            CORONA TAKİP
          </Text>
          <Text white size={9}>
            #evdeKalTürkiye
          </Text>
        </Block>
        <Block>
          <DrawerItem
            label="MainPage"
            labelStyle={{ color: "white", marginLeft: -16 }}
            style={{ alignItems: "flex-start", marginVertical: 0 }}
            onPress={() => props.navigation.navigate("MainPage")}
            icon={() => <AntDesign name="calendar" color="white" size={16} />}
          />
          <DrawerItem
            label="FeverCalendar"
            labelStyle={{ color: "white", marginLeft: -16 }}
            style={{ alignItems: "flex-start", marginVertical: 0 }}
            onPress={() => props.navigation.navigate("FeverCalendar")}
            icon={() => <AntDesign name="calendar" color="white" size={16} />}
          />
          <DrawerItem
            label="FeverEntry"
            labelStyle={{ color: "white", marginLeft: -16 }}
            style={{ alignItems: "flex-start", marginVertical: 0 }}
            onPress={() => props.navigation.navigate("FeverEntry")}
            icon={() => <AntDesign name="dashboard" color="white" size={16} />}
          />
          <DrawerItem
            label="FeverMedian"
            labelStyle={{ color: "white", marginLeft: -16 }}
            style={{ alignItems: "flex-start", marginVertical: 0 }}
            onPress={() => props.navigation.navigate("FeverMedian")}
            icon={() => <AntDesign name="message1" color="white" size={16} />}
          />
          <DrawerItem
            label="TravelCalendar"
            labelStyle={{ color: "white", marginLeft: -16 }}
            style={{ alignItems: "flex-start", marginVertical: 0 }}
            onPress={() => props.navigation.navigate("TravelCalendar")}
            icon={() => <AntDesign name="calendar" color="white" size={16} />}
          />
          <DrawerItem
            label="CovidTest"
            labelStyle={{ color: "white", marginLeft: -16 }}
            style={{ alignItems: "flex-start", marginVertical: 0 }}
            onPress={() => props.navigation.navigate("CovidTest")}
            icon={() => <AntDesign name="dashboard" color="white" size={16} />}
          />
          <DrawerItem
            label="HealthTest"
            labelStyle={{ color: "white", marginLeft: -16 }}
            style={{ alignItems: "flex-start", marginVertical: 0 }}
            onPress={() => props.navigation.navigate("HealthTest")}
            icon={() => <AntDesign name="message1" color="white" size={16} />}
          />
          <DrawerItem
            label="Hospitals"
            labelStyle={{ color: "white", marginLeft: -16 }}
            style={{ alignItems: "flex-start", marginVertical: 0 }}
            onPress={() => props.navigation.navigate("Hospitals")}
            icon={() => <AntDesign name="phone" color="white" size={16} />}
          />
        </Block>
      </Block>

      <Block flex={false}>
        <DrawerItem
          label="Logout"
          labelStyle={{ color: "white" }}
          icon={() => <AntDesign name="logout" color="white" size={16} />}
          onPress={() => alert("Are your sure to logout?")}
        />
      </Block>
    </DrawerContentScrollView>
  );
};

export default () => {
  const [progress, setProgress] = React.useState(new Animated.Value(0));
  const scale = Animated.interpolate(progress, {
    inputRange: [0, 1],
    outputRange: [1, 0.8],
  });
  const borderRadius = Animated.interpolate(progress, {
    inputRange: [0, 1],
    outputRange: [0, 16],
  });

  const animatedStyle = { borderRadius, transform: [{ scale }] };

  return (
    <LinearGradient style={{ flex: 1 }} colors={["#0000A0", "#228B22"]}>
      <Drawer.Navigator
        // hideStatusBar
        drawerType="slide"
        overlayColor="transparent"
        drawerStyle={styles.drawerStyles}
        contentContainerStyle={{ flex: 1 }}
        drawerContentOptions={{
          activeBackgroundColor: "transparent",
          activeTintColor: "white",
          inactiveTintColor: "white",
        }}
        sceneContainerStyle={{ backgroundColor: "transparent" }}
        drawerContent={(props) => {
          setProgress(props.progress);
          return <DrawerContent {...props} />;
        }}
      >
        <Drawer.Screen name="Screens">
          {(props) => <Screens {...props} style={animatedStyle} />}
        </Drawer.Screen>
      </Drawer.Navigator>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  stack: {
    flex: 1,
    shadowColor: "#FFF",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,
    elevation: 5,
    // overflow: 'scroll',
    // borderWidth: 1,
  },
  drawerStyles: { flex: 1, width: "50%", backgroundColor: "transparent" },
  drawerItem: { alignItems: "flex-start", marginVertical: 0 },
  drawerLabel: { color: "white", marginLeft: -16 },
  avatar: {
    borderRadius: 60,
    marginBottom: 16,
    borderColor: "white",
    borderWidth: StyleSheet.hairlineWidth,
  },
});
