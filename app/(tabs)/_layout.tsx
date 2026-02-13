import { Tabs } from "expo-router";
import Ionicons from '@expo/vector-icons/Ionicons';

export default function TabLayout() {
  return (
    <Tabs
        screenOptions={{
            tabBarActiveTintColor: "#0063FF",
            headerShadowVisible: false,
            tabBarStyle: {
                borderTopWidth: 0,
                elevation: 0,
            },
        }}
    >
      <Tabs.Screen 
        name="index"
        options={{
            title: "Home",
            tabBarIcon: ({ color, focused }) => (
                <Ionicons name={focused ? 'home-sharp' : 'home-sharp'} color={color} size={20} />
            ),
        }}
      />

      <Tabs.Screen 
        name="about"
        options={{
            title: "About",
            tabBarIcon: ({ color, focused }) => (
                <Ionicons name={focused ? 'information-circle' : 'information-circle'} color={color} size={20} />
            ),
        }}
      />
    </Tabs>
  );
}