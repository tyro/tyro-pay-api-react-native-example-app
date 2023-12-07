This is a new [**React Native**](https://reactnative.dev) project, an example app of the tyro-pay-api-react-native integration simulating a merchant checkout page, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

# Prerequisites

Must have:

- Xcode
- Android Studio
- Ruby v3.0.0+ (use rbenv to manage ruby versions)
- react-native-cli (npm install react-native-cli)

# Getting Started

Github Personal Access Token (PAT) is required to download the tyro sdk package `@tyro/tyro-pay-api-react-native`.

Steps to setup the PAT:

- Navigate to GitHub page, **Profile** -> **Settings** -> **Developer Settings**
- On the left panel, select **Personal Access Token** -> **Token(classic)**
- Generate a new token with `read:package` permission
- Configure the token: authorise it for organisation `tyro`
- Store the new token as a environment variable: `export GITHUB_PACKAGES_TOKEN={YOUR_GITHUB_TOKEN}`

install dependencies by running:

- npm run install:all

# Run the Example app

- npm run android - for starting android emulator with debug build of example app
- npm run android:release - for starting android emulator with release build of example app

- npm run ios - for starting ios emulator with debug build of example app
- npm run ios:release - for starting ios simulator with release build of example app

# Running e2e Integration tests

Install Maestro:

- curl -Ls "https://get.maestro.mobile.dev" | bash
- brew tap facebook/fb
- brew install facebook/fb/idb-companion
  Note: Xcode must be v14+
