import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { ArrowLeft } from "lucide-react-native";

interface Props {
  showBack?: boolean;
  title?: string;
  callback?: () => void;
  callbackText?: string;
}

const Header = ({ showBack = true, title, callback, callbackText }: Props) => {
  const navigation = useNavigation();

  return (
    <View className="w-full h-[56px] px-5 py-3 flex-row items-center justify-between bg-white shadow-sm relative">
      {showBack ? (
        <TouchableOpacity onPress={() => navigation.goBack()} className="p-1">
          <ArrowLeft size={32} color="#222" />
        </TouchableOpacity>
      ) : (
        <View className="w-[32px]" />
      )}

      {title && (
        <View className="absolute left-0 right-0 items-center">
          <Text className="text-[20px] font-medium text-black text-center">
            {title}
          </Text>
        </View>
      )}

      {callbackText ? (
        <TouchableOpacity onPress={callback} className="p-1">
          <Text className="text-[20px] font-medium text-black">
            {callbackText}
          </Text>
        </TouchableOpacity>
      ) : (
        <View className="w-[28px]" />
      )}
    </View>
  );
};

export default Header;
