import * as React from "react";
import { StyleSheet, Image, ScrollView, TouchableOpacity } from "react-native";
import * as Diseases from "../constants/Diseases";
import { Text, View } from "../components/Themed";
import { useTheme } from "@react-navigation/native";
import * as enums from "../constants/enums";
import { AntDesign } from "@expo/vector-icons";
import { useEffect } from "react";
import * as Device from "expo-device";
import ErrorBoundary from "../components/ErrorBoundary";

interface IDisease {
  name: string;
  code: string;
}

export default function Home(props: any) {
  const navImg = require("../assets/images/icon.png");
  const { colors } = useTheme();
  const { navigation } = props;

  // Set a custom header
  useEffect(() => {
    navigation.setOptions({
      headerTitle: () => (
        <View
          style={{
            flexDirection: "row",
            width: "100%",
            backgroundColor: enums.colors.transparent,
            justifyContent: "center",
            alignItems: "center",
            paddingBottom: 10,
          }}
        >
          <View
            style={{ flexDirection: "row", justifyContent: "center", width: 40, backgroundColor: enums.colors.transparent, height: 40, margin: 5 }}
          >
            <Image source={navImg} style={{ height: 40, width: 40, resizeMode: "cover", borderRadius: 10 }} />
          </View>
          <View style={{ backgroundColor: enums.colors.transparent, flexDirection: "row", justifyContent: "center", margin: 5 }}>
            <Text style={{ fontSize: 18, fontWeight: "500", color: colors.text }}>What's Up Doc</Text>
          </View>
        </View>
      ),
      headerBackTitle: " ",
      headerStyle: {
        backgroundColor: colors.background,
      },
    });
  });

  return (
    <View style={styles.container}>
      <Text style={{ padding: 10 }}>
        Tap on a disease to search for providers that specialize in that area, according to the provider registry you can provide in the Settings. The
        default registry is HL7 FHIR's sample database.
      </Text>
      <ScrollView style={{ width: Device.modelName === "iPad" ? "50%" : "100%", padding: 10 }}>
        {Diseases.DiseaseMapping.map((disease: IDisease, index: number) => (
          <TouchableOpacity
            key={index}
            onPress={async () => {
              navigation.navigate(enums.SCREENS.LISTING, {
                code: disease.code,
                disease: disease.name,
              });
            }}
          >
            <View style={[{ backgroundColor: colors.border }, styles.card]}>
              <Text style={{ color: colors.text }}>{disease.name}</Text>
              <ErrorBoundary>
                <AntDesign name="arrowright" size={24} color={colors.text} />
              </ErrorBoundary>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    height: 50,
    marginBottom: 10,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    justifyContent: "space-between",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
