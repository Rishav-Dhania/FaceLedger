import { CameraView, CameraType, useCameraPermissions } from 'expo-camera';
import { useState } from 'react';
import { Dimensions, Text, TouchableOpacity, View } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import AntDesign from '@expo/vector-icons/AntDesign';

export default function MarkAttendance() {
  const [facing, setFacing] = useState<CameraType>('back');
  const [permission, requestPermission] = useCameraPermissions();

  if (!permission) {
    return <View />;
  }

  if (!permission.granted) {
    return (
      <View className='h-full flex justify-center items-center bg-slate-950 gap-8'>
        <Text className='text-xl font-medium text-white'>We need your permission to show the camera</Text>
        <TouchableOpacity className='rounded-lg bg-white py-4 px-8' onPress={requestPermission}>
          <Text className='text-xl font-medium text-slate-950'>Grant Permission</Text>
        </TouchableOpacity>
      </View>
    );
  }

  function toggleCameraFacing() {
    setFacing(current => (current === 'back' ? 'front' : 'back'));
  }

  const { width } = Dimensions.get('window');
  const height = (width * 4) / 3;

  return (
    <View className="h-full">
      <CameraView facing={facing} ratio={'4:3'} style={{flex:1}}/>
        <View className='absolute inset-x-0 flex-row bottom-16 justify-center gap-8'>
          <TouchableOpacity className='rounded-full p-4 bg-black border-white border-2'>
            <AntDesign name="camera" size={24} color="white" />
          </TouchableOpacity>
        </View>
    </View>
  );
}