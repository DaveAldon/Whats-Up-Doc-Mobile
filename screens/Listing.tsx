import * as React from "react";
import { StyleSheet } from "react-native";
import { useQuery, QueryCache, ReactQueryCacheProvider } from "react-query";
import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";
import * as FHIR from "../constants/FHIR";

interface IProps {
  route: { params: any };
  navigation: any;
  response: any;
  error: any;
}

const queryCache = new QueryCache();

export default function Listing(props: IProps) {
  const { code } = props.route.params;
  const { isLoading, error, data } = useQuery("providerSearch", () => FHIR.GetProviders(code));
  console.log(data);
  if (isLoading) return "Loading...";
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{code}</Text>
      <Text style={styles.title}>{isLoading}</Text>
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
