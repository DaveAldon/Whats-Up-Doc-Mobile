# What's Up Doc

[![supports iOS](https://img.shields.io/badge/iOS-4630EB.svg?style=for-the-badge&logo=APPLE&labelColor=000&logoColor=fff)](https://github.com/DaveAldon/Whats-Up-Doc) [![supports Android](https://img.shields.io/badge/Android-4630EB.svg?style=for-the-badge&logo=ANDROID&labelColor=000&logoColor=fff)](https://github.com/DaveAldon/Whats-Up-Doc) <image src="https://img.shields.io/badge/Coverage-54.23%25-yellowgreen">

<p float="left">
<a href="https://play.google.com/store/apps/details?id=com.davealdon.whatsupdoc"><img alt="Get it on Google Play" src="https://lh3.googleusercontent.com/cjsqrWQKJQp9RFO7-hJ9AfpKzbUb_Y84vXfjlP0iRHBvladwAfXih984olktDhPnFqyZ0nu9A5jvFwOEQPXzv7hr3ce3QVsLN8kQ2Ao=s0" height="50"></a>
<a href="https://apps.apple.com/us/app/whats-up-doc/id1519077039"><img alt="Download on the App Store" src="https://developer.apple.com/app-store/marketing/guidelines/images/badge-example-preferred_2x.png" height="50"></a></p>

A React Native mobile app that lets you search for providers in your juristiction based on a disease specialty. Requires a FHIR provider registry endpoint, otherwise you can use the included HL7 FHIR demo database.

### Screenshots

<p float="left">
<img src="https://lh3.googleusercontent.com/2fnQyXgGvRZzscD_6CaHRLoXQPGxPBYgRPXT9eO69VrVALq2CWJtwYEb88KF1MjEtKN0=w720-h310-rw">
<img src="https://lh3.googleusercontent.com/M9pPo4qLsqTL9sXWcaqN1JHgD84lOjcj42w1kIERS7uQ4V07tTMsDx4r__6SyNt4jJ8=w720-h310-rw">
<img src="https://lh3.googleusercontent.com/cXm9C-o-GQwHtSW1_iyA5rGMddDzOfoR__Rg0SZxxTGPwVkfOPNjpzxro4qKriykRg=w720-h310-rw">
<img src="https://lh3.googleusercontent.com/2ClVgM2eFw9phavJw-l1jhtwLDxieGJM49VB0FElQfV9swvzT-fYZ-aClmkMriLsisoi=w720-h310-rw">
</p>

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
- Original Xamarin repo is [here](https://github.com/DaveAldon/Whats-Up-Doc)
