import FontAwesome from '@expo/vector-icons/FontAwesome';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { Tabs } from 'expo-router';

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: '#7211A2', tabBarInactiveTintColor: "#000", tabBarStyle: {
        elevation: 0,
        
        }, 
    }}>
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ color, focused }) => <MaterialCommunityIcons size={28} name={focused ? "home-variant" : "home-variant-outline"} color={color} />,
          headerShown: false,
          tabBarShowLabel: false,
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          tabBarIcon: ({ color, focused }) => <Ionicons size={28} name={focused ? "search" : "search-outline"} color={color} />,
          headerShown: false,
          tabBarShowLabel: false,
        }}
      />
      <Tabs.Screen
        name="latest"
        options={{
          tabBarIcon: ({ color, focused }) => <Ionicons size={28} name={focused ? "heart" : "heart-outline"} color={color} />,
          headerShown: false,
          tabBarShowLabel: false,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarIcon: ({ color, focused }) => <Ionicons size={28} name={focused ? "person" : "person-outline"} color={color} />,
          headerShown: false,
          tabBarShowLabel: false,
        }}
      />
      <Tabs.Screen
        name="experiences"
        options={{
          tabBarIcon: ({ color, focused }) => <Ionicons size={28} name={focused ? "add" : "add-outline"} color={color} />,
          headerShown: false,
          tabBarShowLabel: false,
        }}
      />

      </Tabs>
  );
}
