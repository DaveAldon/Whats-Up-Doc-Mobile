import { StatusBar } from "expo-status-bar";
import React from "react";
import { useEffect } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import * as SecureStore from "expo-secure-store";
import useCachedResources from "./hooks/useCachedResources";
import useColorScheme from "./hooks/useColorScheme";
import Navigation from "./navigation";
import * as FHIR from "./constants/FHIR";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";

const queryClient = new QueryClient();

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();
  useEffect(() => {
    (async () => {
      let base = await SecureStore.getItemAsync("FHIREndpoint");

      if (base === null || base === "" || base === undefined) {
        SecureStore.setItemAsync("FHIREndpoint", FHIR.PATHS.FHIRBASE_DEFAULT).then(async () => {
          FHIR.PATHS.FHIRBASE = await SecureStore.getItemAsync("FHIREndpoint");
        });
      } else FHIR.PATHS.FHIRBASE = await SecureStore.getItemAsync("FHIREndpoint");
    })();
  }, []);

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <QueryClientProvider client={queryClient}>
        <SafeAreaProvider>
          <Navigation colorScheme={colorScheme} />
          <StatusBar />
        </SafeAreaProvider>
      </QueryClientProvider>
    );
  }
}
