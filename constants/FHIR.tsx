export const PATHS = {
  FHIRBASE: "https://hapi.fhir.org/baseR4/",
  ProviderQuery: "&_include=PractitionerRole:organization&_include=PractitionerRole:location",
  PractitionerRoleResource: "PractitionerRole?specialty=",
};

export const GetProviders = async (code: string) => {
  const response = await fetch(`${PATHS.FHIRBASE}${PATHS.PractitionerRoleResource}${code}${PATHS.ProviderQuery}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow",
    referrerPolicy: "no-referrer",
  });
  return response.json();
};
