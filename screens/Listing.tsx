import * as React from "react";
import { StyleSheet } from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { useQuery, QueryCache } from "react-query";
import { Text, View } from "../components/Themed";
import * as FHIR from "../constants/FHIR";
import { useTheme } from "@react-navigation/native";
import { useEffect } from "react";
import * as enums from "../constants/enums";
import { AntDesign } from "@expo/vector-icons";

interface IProps {
  route: { params: any };
  navigation: any;
  response: any;
  error: any;
}

const queryCache = new QueryCache();

export default function Listing(props: IProps) {
  const { colors } = useTheme();
  const { code, disease } = props.route.params;
  const { navigation } = props;
  const { isLoading, error, data } = useQuery("providerSearch", () => FHIR.GetProviders(code));

  useEffect(() => {
    navigation.setOptions({
      headerTitle: disease || "Search Results",
    });
  });

  if (isLoading) return "Loading...";
  return (
    <View style={styles.container}>
      <ScrollView style={{ width: "100%", padding: 10 }}>
        {data.entry.map((entries: any, index: number) => {
          const name = entries?.resource?.practitioner?.display?.replace(/[0-9]/g, "");
          if (name === undefined) return;
          return (
            <TouchableOpacity
              key={index}
              onPress={async () => {
                props.navigation.navigate(enums.SCREENS.HOME, {});
              }}
            >
              <View style={[{ backgroundColor: colors.border }, styles.card]}>
                <Text>{name}</Text>
                <AntDesign name="arrowright" size={24} color={colors.text} />
              </View>
            </TouchableOpacity>
          );
        })}
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
