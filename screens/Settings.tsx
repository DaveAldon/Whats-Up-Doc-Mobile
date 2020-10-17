import * as React from "react";
import { StyleSheet, TextInput, TouchableOpacity } from "react-native";
import * as FHIR from "../constants/FHIR";
import { Text, View } from "../components/Themed";
import { useTheme } from "@react-navigation/native";
import { useState } from "react";

export default function Settings() {
  const { colors } = useTheme();
  const [url, setUrl] = useState(FHIR.PATHS.FHIRBASE);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>FHIR Endpoint</Text>
      <TextInput
        style={[{ backgroundColor: colors.card, color: colors.text }, styles.inputBox]}
        value={url}
        onChangeText={(text: string) => {
          setUrl(text);
        }}
      ></TextInput>
      <TouchableOpacity style={{ width: "90%" }} onPress={() => (FHIR.PATHS.FHIRBASE = url)}>
        <View style={[{ backgroundColor: colors.primary }, styles.panelButton]}>
          <Text style={styles.panelButtonTitle}>Save</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={{ width: "90%" }}
        onPress={() => {
          FHIR.PATHS.FHIRBASE = FHIR.PATHS.FHIRBASE_DEFAULT;
          setUrl(FHIR.PATHS.FHIRBASE_DEFAULT);
        }}
      >
        <View style={[{ backgroundColor: colors.primary }, styles.panelButton]}>
          <Text style={styles.panelButtonTitle}>Reset to Default</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  panelButtonTitle: {
    fontSize: 14,
    fontWeight: "bold",
    color: "white",
  },
  panelButton: {
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
    marginVertical: 10,
    width: "100%",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 5,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  inputBox: {
    marginVertical: 10,
    height: 60,
    borderColor: "gray",
    borderWidth: 1,
    width: "90%",
    fontSize: 14,
    borderRadius: 10,
    textAlign: "center",
  },
});
