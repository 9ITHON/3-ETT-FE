import React from "react";
import { View, TextInput, Pressable, StyleSheet } from "react-native";
import { Image } from "expo-image";

type Props = {
  query: string;
  onChangeQuery: (text: string) => void;
  onClear: () => void;
  onSearch: () => void;
};

const SearchBar = ({ query, onChangeQuery, onClear, onSearch }: Props) => {
  return (
    <View style={styles.container}>
      <TextInput
        value={query}
        onChangeText={onChangeQuery}
        onSubmitEditing={onSearch}
        returnKeyType="search"
        placeholder="찾고싶은 단어를 입력해주세요."
        placeholderTextColor="#999999"
        style={[styles.input, query.length > 0 && styles.inputFilled]}
      />
        {query.length > 0 && (
        <Pressable onPress={onClear}>
        <Image
            source={require("../../../assets/images/cancel-icon.png")}
            style={{ width: 24, height: 24 }}
            />
        </Pressable>
      )}
      <Pressable onPress={onSearch}>
        <Image
        source={require("../../../assets/images/search-icon.png")}
        style={{ width: 24, height: 24 }}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignSelf: "center",
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 20,
    backgroundColor: "#D3D8E1",
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 12,
    gap: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    zIndex: 10,
  },
  input: {
    flex: 1,
    textAlign: "left",
    fontFamily: "Pretendard",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 16,
    lineHeight: 19,
    color: "#999999",
  },
  inputFilled: {
    color: "#333333",
  }
});

export default SearchBar;
