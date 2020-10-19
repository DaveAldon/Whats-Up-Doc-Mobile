# What's Up Doc

A React Native mobile app that lets you search for providers in your juristiction based on a disease specailty. Requires a FHIR provider registry endpoint, otherwise you can use the included HL7 FHIR demo database.

### Supports

[![supports iOS](https://img.shields.io/badge/iOS-4630EB.svg?style=for-the-badge&logo=APPLE&labelColor=000&logoColor=fff)](https://github.com/DaveAldon/Whats-Up-Doc) [![supports Android](https://img.shields.io/badge/Android-4630EB.svg?style=for-the-badge&logo=ANDROID&labelColor=000&logoColor=fff)](https://github.com/DaveAldon/Whats-Up-Doc)

## Architecture

- React Native
- Uses provider registries that are built on FHIR
- Matches a list of diseases (communicable and noncommunicable) to Specialty codes

## Requirements to Build

- React Native & Expo environment
- iOS development requires Mac OS

## Background

- This was originally created as part of the June 2020 HL7 FHIR DevDays Microsoft Hackathon. I built the original app using Xamarin, and after the hackathon I rewrote it using React Native. Ask me why I switched platforms! :smile:
- Slides from the original hackathon presentation available [here](https://docs.google.com/presentation/d/1X6qeCuRigvTkzUoinb5pg-8AWY9c05240loeVSkdVFo/edit?usp=sharing)
