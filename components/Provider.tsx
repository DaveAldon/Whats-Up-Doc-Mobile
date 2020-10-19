import * as React from "react";
import { Linking, StyleSheet, TouchableOpacity } from "react-native";
import { Text, View } from "./Themed";
import * as enums from "../constants/enums";
import * as Device from "expo-device";

interface IPractitioner {
  name?: string;
  org?: string;
  orgID?: string;
  pID?: string;
  providerRole?: string;
  providerSpecialty?: string;
}

export const renderInner = (colors: any, practitioner: IPractitioner, providerData: any) => {
  const providerSpecific = {
    providerNPI: providerData?.identifier[0]?.value,
    phone: providerData?.telecom[1]?.value || "No phone number",
    email: providerData?.telecom[0]?.value || "No email",
  };
  return (
    <View style={[styles.panel, { backgroundColor: colors.border }]}>
      <View style={{ width: Device.modelName === "iPad" ? "50%" : "100%", backgroundColor: enums.colors.transparent }}>
        <Text style={styles.panelTitle}>{practitioner.name}</Text>
        <Text style={styles.panelSubtitle}>{practitioner.org}</Text>
        <Text style={styles.panelSubtitle}>Organization ID - {practitioner.orgID}</Text>

        <Text style={styles.panelSubtitle}>Provider NPI - {providerSpecific.providerNPI}</Text>

        <Text style={styles.panelSubtitle}>{practitioner.providerSpecialty}</Text>
        <Text style={styles.panelSubtitle}>Role ID - {practitioner.providerRole}</Text>

        <TouchableOpacity onPress={() => Linking.openURL(`mailto:${providerSpecific.email}`)}>
          <View style={[{ backgroundColor: colors.primary }, styles.panelButton]}>
            <Text style={styles.panelButtonTitle}>{providerSpecific.email}</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Linking.openURL(`tel:${providerSpecific.phone}`)}>
          <View style={[{ backgroundColor: colors.primary }, styles.panelButton]}>
            <Text style={styles.panelButtonTitle}>{providerSpecific.phone}</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export const renderHeader = (colors: any) => (
  <View style={[{ backgroundColor: colors.border }, styles.header]}>
    <View style={[{ backgroundColor: colors.border }, styles.panelHeader]}>
      <View style={[{ backgroundColor: colors.text }, styles.panelHandle]} />
    </View>
  </View>
);

const styles = StyleSheet.create({
  header: {
    shadowColor: "#000000",
    paddingTop: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  panelHeader: {
    alignItems: "center",
  },
  panelHandle: {
    width: 40,
    height: 8,
    borderRadius: 4,
    marginBottom: 10,
  },
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
  panel: {
    height: 600,
    padding: 20,
    alignItems: "center",
  },
  panelTitle: {
    fontSize: 27,
    height: 35,
  },
  panelSubtitle: {
    fontSize: 14,
    color: "gray",
    height: 20,
    marginVertical: 5,
  },
  panelButton: {
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
    marginVertical: 10,
  },
  panelButtonTitle: {
    fontSize: 14,
    fontWeight: "bold",
    color: "white",
  },
});
