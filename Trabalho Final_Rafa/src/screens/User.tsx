import { StyleSheet, Text, Image, TouchableOpacity } from "react-native";
import React, { useContext } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { UserContext } from "../contexts/UserContext";

const User = () => {
  const { user, logout } = useContext(UserContext);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>
        {user?.firstName.toUpperCase()} {user?.lastName.toUpperCase()}
      </Text>
      <Image
        resizeMode="contain"
        style={styles.thumb}
        source={{
          uri: user?.image,
        }}
      />
      <Text style={styles.description}>Usuário: {user?.username}</Text>
      <Text style={styles.description}>Email: {user?.email}</Text>

      <TouchableOpacity style={styles.button} onPress={() => logout()}>
        <Text style={styles.buttonText}>Sair</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default User;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#05171E", 
  },
  thumb: {
    width: 120, 
    height: 120, 
    borderRadius: 60, 
    borderWidth: 4,
    borderColor: "#003D5B",
    marginVertical: 20, 
  },
  title: {
    color: "#808080", 
    fontSize: 28, 
    fontWeight: "bold",
    marginVertical: 10,
  },
  description: {
    color: "#666", 
    fontSize: 18, 
    marginVertical: 5, 
  },
  button: {
    width: "80%", 
    height: 50,
    backgroundColor: "#003D5B",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    marginVertical: 20, 
  },
  buttonText: {
    color: "#FFF",
    fontSize: 18, 
  },
});