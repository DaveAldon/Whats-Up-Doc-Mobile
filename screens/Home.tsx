import * as React from "react";
import { StyleSheet } from "react-native";
import * as Diseases from "../constants/Diseases";
import { Text, View } from "../components/Themed";
import { useTheme } from "@react-navigation/native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import * as enums from "../constants/enums";
import { AntDesign } from "@expo/vector-icons";

interface IDisease {
  name: string;
  code: string;
}

export default function Home(props: any) {
  const { colors } = useTheme();
  return (
    <View style={styles.container}>
      <Text style={{ padding: 10 }}>
        Tap on a disease to see what providers specialize in it, according to the provider registry you can provide in the Settings. The default
        registry is HL7 FHIR's sample database.
      </Text>
      <ScrollView style={{ width: "100%", padding: 10 }}>
        {Diseases.DiseaseMapping.map((disease: IDisease, index: number) => (
          <TouchableOpacity
            key={index}
            onPress={async () => {
              props.navigation.navigate(enums.SCREENS.LISTING, {
                code: disease.code,
                disease: disease.name,
              });
            }}
          >
            <View style={[{ backgroundColor: colors.border }, styles.card]}>
              <Text style={{ color: colors.text }}>{disease.name}</Text>
              <AntDesign name="arrowright" size={24} color={colors.text} />
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
