import { Tabs } from 'expo-router';
import React from 'react';
import { Stack } from 'expo-router/stack';

import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';



export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home', //this is the default we will replace it
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'home' : 'home-outline'} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="explore" //this is the default we will remove it
        options={{
          title: 'Explore',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'code-slash' : 'code-slash-outline'} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="myprofile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'person-sharp' : 'person-sharp'} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="mydashboard"
        options={{
          href: null, //THIS IS NULL BC I WANT TO LINK DASHBOARD TO PROFILE
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          href: null, //THIS IS NULL BC I WANT TO LINK SETTINGS TO PROFILE
        }}
      />
      <Tabs.Screen
        name="navigator"
        options={{
          href: null, //THIS IS NULL bc i dont want it shwowing in the tabs
        }}
      />
      <Tabs.Screen
        name="connections"
        options={{
          href: null, //THIS IS NULL BC I WANT TO LINK connections TO dashboard
        }}
      />
    </Tabs>
  );
}
