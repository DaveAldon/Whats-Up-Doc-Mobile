import * as React from "react";
import { StyleSheet } from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { useQuery } from "react-query";
import { Text, View } from "../components/Themed";
import * as FHIR from "../constants/FHIR";
import { useTheme } from "@react-navigation/native";
import { useEffect, useRef, useState } from "react";
import * as enums from "../constants/enums";
import { Fontisto, Ionicons } from "@expo/vector-icons";
import BottomSheet from "reanimated-bottom-sheet";
import * as ProviderCard from "../components/Provider";
interface IProps {
  route: { params: any };
  navigation: any;
  response: any;
  error: any;
}

interface IPractitioner {
  name?: string;
  org?: string;
  orgID?: string;
  pID?: string;
  providerRole?: string;
  providerSpecialty?: string;
}

export default function Listing(props: IProps) {
  const { colors } = useTheme();
  const { code, disease } = props.route.params;
  const { navigation } = props;
  const [practitioner, setPractitioner] = useState<IPractitioner>({});
  const bottomSheetRef = useRef(null);

  const { isLoading, error, data: LISTdata } = useQuery("providerSearch", () => FHIR.GetProviders(code));
  const { isLoading: providerIsLoading, data, refetch } = useQuery("providerSpecific", () => FHIR.GetProviderSpecific(practitioner.pID), {
    enabled: false,
  });
  useEffect(() => {
    navigation.setOptions({
      headerTitle: disease || "Search Results",
    });
  });

  useEffect(() => {
    if (practitioner.pID) {
      refetch();
    }
  }, [practitioner.pID]);

  if (isLoading) return <Text>Loading...</Text>;
  if (error) return <Text>Error</Text>;
  return (
    <View style={styles.container}>
      <ScrollView style={{ width: "100%", padding: 10 }}>
        {LISTdata?.entry?.map((entries: any, index: number) => {
          const tempPractitioner = {
            name: entries?.resource?.practitioner?.display?.replace(/[0-9]/g, ""),
            org: entries?.resource?.organization?.display || "No associated organization",
            orgID: entries?.resource?.organization?.reference,
            pID: entries?.resource?.practitioner?.reference || "",
            providerRole: "",
            providerSpecialty: "",
          };
          try {
            tempPractitioner.providerRole = entries?.resource?.code[0]?.coding[0]?.code;
          } catch {
            tempPractitioner.providerRole = "No reported role";
          }
          try {
            tempPractitioner.providerSpecialty = entries?.resource?.speciality[0]?.coding[0]?.display;
          } catch {
            tempPractitioner.providerSpecialty = "No reported specialty";
          }

          if (tempPractitioner.name === undefined) return;

          return (
            <TouchableOpacity
              key={index}
              onPress={async () => {
                setPractitioner(tempPractitioner);
                bottomSheetRef.current.snapTo(0);
              }}
            >
              <View style={[{ backgroundColor: colors.border }, styles.card]}>
                <View style={{ flexDirection: "row", alignItems: "center", backgroundColor: enums.colors.transparent }}>
                  <Fontisto name="doctor" style={{ marginRight: 10 }} size={24} color={colors.text} />
                  <View style={{ backgroundColor: enums.colors.transparent }}>
                    <Text>{tempPractitioner.name}</Text>
                    <Text style={{ fontSize: 11, fontWeight: "200" }}>{tempPractitioner.org}</Text>
                  </View>
                </View>
                <Ionicons name="ios-medical" size={24} color={colors.notification} />
              </View>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
      <BottomSheet
        ref={bottomSheetRef}
        snapPoints={[500, 0]}
        initialSnap={1}
        borderRadius={0}
        renderHeader={() => ProviderCard.renderHeader(colors)}
        renderContent={() => ProviderCard.renderInner(colors, practitioner, data)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  bottomSheet: {
    height: 600,
    padding: 20,
  },
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
