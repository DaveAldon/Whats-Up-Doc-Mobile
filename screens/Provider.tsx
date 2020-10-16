import * as React from "react";
import { StyleSheet } from "react-native";

import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";

interface IProps {
  route: { params: any };
  navigation: any;
  response: any;
  error: any;
}

export default function Provider(props: IProps) {
  const { code } = props.route.params;
  //console.log(await FHIR.GetProviders(disease.code));
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{code}</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="/screens/TabTwoScreen.js" />
    </View>
  );
}

const styles = StyleSheet.create({
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
