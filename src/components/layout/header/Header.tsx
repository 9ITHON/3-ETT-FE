import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { ArrowLeft } from "lucide-react-native";

interface Props {
  showBack?: boolean;
  title: string;
  callback?: () => void;
  callbackText?: string;
  showCallback?: boolean;
}

const Header = ({
  showBack = true,
  title,
  callback,
  callbackText,
  showCallback = true,
}: Props) => {
  const navigation = useNavigation();

  return (
    <View className="w-full h-[56px] px-5 py-3 flex-row items-center justify-between">
      {/* 왼쪽 버튼 */}
      {showBack ? (
        <TouchableOpacity onPress={() => navigation.goBack()} className="p-1">
          <ArrowLeft size={32} color="#222" />
        </TouchableOpacity>
      ) : (
        <View className="w-[32px]" />
      )}

      {/* 가운데 텍스트 */}
      <Text className="text-[20px] font-medium  text-black text-center">
        {title}
      </Text>

      {/* 오른쪽 버튼 */}
      {showCallback ? (
        <TouchableOpacity onPress={callback} className="p-1">
          <Text className="text-[14px] font-medium text-black">
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
