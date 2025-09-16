import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { Settings, CreditCard as Edit3, Camera, MapPin, Calendar, Mail, Phone, Star } from 'lucide-react-native';
import { useColorScheme } from 'react-native';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

export default function ProfileScreen() {

  const colorScheme = useColorScheme();

  return (
    <SafeAreaView className="flex-1 bg-background">
      <LinearGradient
        colors={['#667eea', '#764ba2']}
        className="pb-8"
      >
        <View className="items-center pt-16 px-5 ">
          <TouchableOpacity className="absolute top-5 right-5 w-10 h-10 rounded-full bg-white/20 justify-center items-center">
            <Settings size={24} color="#FFFFFF" />
          </TouchableOpacity>

          <View className="relative mb-4 h-44 w-44">
            <Image
              source={require('../../assets/images/sample_pic.jpg')}
              className="w-44 h-44 rounded-full border-white"
              resizeMode="cover"
            />
          </View>

          <Text className="text-3xl font-bold text-white text-center mb-1">Rishav Dhania</Text>
          <Text className="text-base text-gray-200 text-center mb-2">Developer</Text>

        </View>
      </LinearGradient>

      <ScrollView className="flex-1 -mt-5 bg-background rounded-t-3xl" showsVerticalScrollIndicator={false}>

        <View className="bg-card mx-5 mt-4 rounded-2xl p-5 shadow-lg">
          <Text className="text-lg font-semibold text-text mb-3" style={{ color: colorScheme === "dark" ? "white" : "black" }}>Details</Text>
          <View className="flex-row items-center mb-3">
            <FontAwesome6 name="book-open-reader" size={20} color="#8E8E93" />
            <Text className="text-base text-text ml-3" style={{ color: colorScheme === "dark" ? "white" : "black" }}>Btech IT 3rd Year</Text>
          </View>
          <View className="flex-row items-center mb-3">
            <FontAwesome5 name="university" size={20} color="#8E8E93" />
            <Text className="text-base text-text ml-3" style={{ color: colorScheme === "dark" ? "white" : "black" }}>Guru Jambheshwar University</Text>
          </View>
          <View className="flex-row items-center mb-3">
            <Mail size={20} color="#8E8E93" />
            <Text className="text-base text-text ml-3" style={{ color: colorScheme === "dark" ? "white" : "black" }}>rishavdhania30@gmail.com</Text>
          </View>
          <View className="flex-row items-center mb-3">
            <Phone size={20} color="#8E8E93" />
            <Text className="text-base text-text ml-3" style={{ color: colorScheme === "dark" ? "white" : "black" }}>+91 9306066827</Text>
          </View>
        </View>

        <View className="bg-card mx-5 mt-4 rounded-2xl p-5 shadow-lg">
          <Text className="text-lg font-semibold text-text mb-3" style={{ color: colorScheme === "dark" ? "white" : "black" }}>About</Text>
          <Text className="text-base text-textSecondary leading-6" style={{ color: colorScheme === "dark" ? "white" : "black" }}>
            Team Visionary Coder SIH 2025
          </Text>
        </View>

        <View className="px-5 mt-6">
          <TouchableOpacity className="bg-primary flex-row items-center justify-center py-4 rounded-xl mb-3 shadow-lg">
            <Edit3 size={20} color="#FFFFFF" />
            <Text className="text-base font-semibold ml-2" style={{ color: colorScheme === "dark" ? "black" : "white" }}>Edit Profile</Text>
          </TouchableOpacity>

          <TouchableOpacity className="bg-card border-2 border-border items-center justify-center py-4 rounded-xl">
            <Text className="text-primary text-base font-semibold" style={{ color: colorScheme === "dark" ? "white" : "black" }}>Share Profile</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}