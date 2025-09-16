import '@/global.css';
import { Tabs } from 'expo-router';
import { useColorScheme } from 'nativewind';
import { Ionicons } from '@expo/vector-icons';
import * as React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router';

export default function TabsLayout() {
  const { colorScheme } = useColorScheme();

  return (
    <Tabs>
      <Tabs.Screen
        name="dashboard_student"
        options={{
          title: "Dashboard",
          headerShown: true,
          headerTransparent: true,
          tabBarIcon: ({ focused }) => (
            <FontAwesome
              name="home"
              size={24}
              color={colorScheme === "dark" ? "white" : "black"}
              style={{ opacity: focused ? 1 : 0.4 }}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="mark_attendance"
        options={{
          title: "Mark Attendance",
          headerShown: true,
          headerTransparent: true,
          headerTitleStyle: { fontSize: 26 },
          headerLeft: () => (
            <Ionicons
              name="chevron-back"
              size={24}
              gap={4}
              color={colorScheme === "dark" ? "white" : "black"}
            />
          ),
          tabBarIcon: ({ focused }) => (
            <MaterialCommunityIcons
              name="human-greeting-variant"
              size={24}
              color={colorScheme === "dark" ? "white" : "black"}
              style={{ opacity: focused ? 1 : 0.4 }}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          headerShown: true,
          headerTransparent: true,
          headerTitleStyle: { fontSize: 26 },
          headerLeft: () => (
            <Ionicons
              name="chevron-back"
              size={24}
              color={colorScheme === "dark" ? "white" : "black"}
            />
          ),
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name="person-sharp"
              size={24}
              color={colorScheme === "dark" ? "white" : "black"}
              style={{ opacity: focused ? 1 : 0.4 }}
            />
          ),
        }}
      />
    </Tabs>
  );
}
