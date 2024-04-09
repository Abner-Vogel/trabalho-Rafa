import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import React, { FC } from "react";
import { Category } from "../types/Task";

interface Props {
  item: Category;
  handleSelectCategory: (type: string) => void;
  selectedCategory: string;
}

const CategoryItem: FC<Props> = ({
  item,
  handleSelectCategory,
  selectedCategory,
}) => {
  return (
    <TouchableOpacity onPress={() => handleSelectCategory(item.value)}>
      <View style={styles.categoryContainer}>
        <MaterialIcons
          name="arrow-back-ios"
          size={16}
          color={item.value === selectedCategory ? "#fff" : item.color}
          style={styles.icon}
        />
        <Text style={[styles.categoryText, { backgroundColor: item.color, borderColor: item.value === selectedCategory ? "#fff" : item.color }]}>
          {item.label.toUpperCase()}
        </Text>
        <MaterialIcons
          name="arrow-forward-ios"
          size={16}
          color={item.value === selectedCategory ? "#fff" : item.color}
          style={styles.icon}
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  categoryContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 8,
    marginHorizontal: 10,
    borderRadius: 10,
    overflow: "hidden",
  },
  categoryText: {
    color: "#fff",
    fontSize: 16,
    paddingVertical: 10,
    paddingHorizontal: 25,
    fontWeight: "bold",
    borderWidth: 2,
    borderRadius: 10,
    textAlign: "center",
    flex: 1,
  },
  icon: {
    marginHorizontal: 10,
  },
});

export default CategoryItem;