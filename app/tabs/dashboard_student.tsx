import { Button } from '@/components/ui/button';
import { Icon } from '@/components/ui/icon';
import { THEME } from '@/lib/theme';
import { Stack } from 'expo-router';
import { MoonStarIcon, SunIcon } from 'lucide-react-native';
import { useColorScheme } from 'nativewind';
import * as React from 'react';
import { Image, type ImageStyle, View, Text } from 'react-native';
import { useState } from 'react';
import Feather from '@expo/vector-icons/Feather';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const LOGO = {
  light: require('@/assets/images/react-native-reusables-light.png'),
  dark: require('@/assets/images/react-native-reusables-dark.png'),
};

const SCREEN_OPTIONS = {
  light: {
    title: 'Face Ledger',
    headerTransparent: false,
    headerShadowVisible: false,
    headerStyle: { backgroundColor: THEME.light.background },
    headerTitleStyle: { fontSize: 32 },
    headerRight: () => (
      <View style={{ flexDirection: "row", alignItems: "center", marginRight: 12}}>
        <ThemeToggle />
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Feather name="more-vertical" size={24} color="black" />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>
              <Text>Setting</Text>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Text>Feedback</Text>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Text>Help</Text>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </View>
    ),
  },
  dark: {
    title: 'Face Ledger',
    headerTransparent: false,
    headerShadowVisible: false,
    headerStyle: { backgroundColor: THEME.dark.background },
    headerTitleStyle: { fontSize: 32 },
    headerRight: () => (
      <View style={{ flexDirection: "row", alignItems: "center", marginRight: 12}}>
        <ThemeToggle />
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Feather name="more-vertical" size={24} color="white" />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>
              <Text>Setting</Text>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Text>Feedback</Text>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Text>Help</Text>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </View>
    ),
  },
};

const IMAGE_STYLE: ImageStyle = {
  height: 76,
  width: 76,
};

export default function Screen() {
  const { colorScheme } = useColorScheme();
  const [query, setQuery] = useState("");

  const total = 100;
  const present = 70;
  const absent = 30;

  return (
    <>
      <Stack.Screen options={SCREEN_OPTIONS[colorScheme ?? 'light']} />
      <View className="flex-1 gap-8 p-4">
        <Image
          source={LOGO[colorScheme ?? 'light']}
          style={IMAGE_STYLE}
          resizeMode="contain"
        />

      </View>
    </>
  );
}

const THEME_ICONS = {
  light: SunIcon,
  dark: MoonStarIcon,
};

function ThemeToggle() {
  const { colorScheme, toggleColorScheme } = useColorScheme();
  return (
    <Button
      onPressIn={toggleColorScheme}
      size="icon"
      variant="ghost"
      className="rounded-full web:mx-4"
    >
      <Icon as={THEME_ICONS[colorScheme ?? 'light']} className="size-5" />
    </Button>
  );
}
