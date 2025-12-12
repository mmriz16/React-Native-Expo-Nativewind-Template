# React Native + Expo + Nativewind Template

A modern React Native template built with Expo and Nativewind (Tailwind CSS for React Native).

## 🚀 Tech Stack

- **React Native** - Mobile app framework
- **Expo** - Development platform and toolchain
- **Expo Router** - File-based routing for React Native
- **Nativewind** - Tailwind CSS for React Native
- **TypeScript** - Type-safe JavaScript

## 📌 Current Versions

This template is built with the following versions:

- **Expo SDK**: `~54.0.27`
- **React Native**: `0.81.5`
- **React**: `19.1.0`
- **Nativewind**: `^4.2.1`
- **Expo Router**: `~6.0.17`
- **TypeScript**: `~5.9.2`
- **React Native Reanimated**: `~4.1.1`
- **React Native Safe Area Context**: `~5.6.0`
- **Tailwind CSS**: `^3.4.18`

## � Checking & Updating Dependencies

### Check for Outdated Packages

To see which packages have newer versions available:

```bash
npm outdated
```

This will show a table with current, wanted, and latest versions.

### Update All Dependencies

**Using npm-check-updates (recommended):**

```bash
# Install npm-check-updates globally
npm install -g npm-check-updates

# Check for updates (preview only)
ncu

# Update all dependencies in package.json
ncu -u

# Install updated packages
npm install
```

**Using npm update:**

```bash
# Update packages within semver range
npm update
```

### Update Expo SDK

Expo has a dedicated command to upgrade SDK versions:

```bash
# Check current Expo version
npx expo --version

# Upgrade to latest SDK
npx expo install --fix

# Or upgrade to specific SDK version
npx expo install expo@latest
```

> ⚠️ **Important**: When upgrading Expo SDK, always check the [Expo Changelog](https://docs.expo.dev/changelog/) for breaking changes.

### Update Specific Packages

```bash
# Update a specific package
npm install <package-name>@latest

# Examples:
npm install nativewind@latest
npm install react-native@latest
npm install expo-router@latest
```

### Best Practices

1. **Always test after updating** - Run `npm start` and test on all platforms
2. **Update incrementally** - Don't update all major versions at once
3. **Check compatibility** - Verify Expo SDK compatibility with React Native version
4. **Backup first** - Commit your changes before major updates
5. **Read changelogs** - Check for breaking changes before updating

## �📋 Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v18 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- [Expo CLI](https://docs.expo.dev/get-started/installation/) (optional, but recommended)
- For iOS development: [Xcode](https://developer.apple.com/xcode/) (macOS only)
- For Android development: [Android Studio](https://developer.android.com/studio)

## 🛠️ Installation

1. **Clone the repository** (or use this as a template)

   ```bash
   git clone <your-repo-url>
   cd <created-folder-name>
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

   or

   ```bash
   yarn install
   ```

## 🏃 Running the App

### Start the development server

```bash
npm start
```

or

```bash
npx expo start
```

This will start the Expo development server. You can then:

- Press `a` to open on Android emulator
- Press `i` to open on iOS simulator
- Press `w` to open in web browser
- Scan the QR code with Expo Go app on your physical device

### Platform-specific commands

```bash
# Android
npm run android

# iOS
npm run ios

# Web
npm run web
```

## 📁 Project Structure

```
.
├── app/                   # App directory (Expo Router)
│   ├── _layout.tsx        # Root layout
│   ├── index.tsx          # Home screen
│   └── global.css         # Global styles
├── assets/                # Images, fonts, and other assets
├── components/            # Reusable components
├── app.json               # Expo configuration
├── babel.config.js        # Babel configuration
├── tailwind.config.js     # Tailwind CSS configuration
├── metro.config.js        # Metro bundler configuration
└── package.json           # Dependencies and scripts
```

## 🎨 Using Nativewind

This template uses Nativewind v4, which brings Tailwind CSS to React Native.

### Basic Usage

```tsx
import { Text, View } from "react-native";

export default function MyComponent() {
  return (
    <View className="flex-1 justify-center items-center bg-white">
      <Text className="text-2xl font-bold text-blue-500">
        Hello Nativewind!
      </Text>
    </View>
  );
}
```

### Styling with className

You can use Tailwind utility classes directly on React Native components:

```tsx
<View className="flex-1 p-4 bg-gray-100">
  <Text className="text-lg font-semibold text-gray-800">
    Styled with Nativewind
  </Text>
</View>
```

### Custom Configuration

Edit `tailwind.config.js` to customize your theme:

```js
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        // Add your custom colors
      },
    },
  },
};
```

## 📱 Expo Router

This project uses Expo Router for file-based routing. Learn more at [Expo Router Documentation](https://docs.expo.dev/router/introduction/).

### Creating a new screen

Create a new file in the `app` directory:

```tsx
// app/about.tsx
import { View, Text } from "react-native";

export default function About() {
  return (
    <View className="flex-1 justify-center items-center">
      <Text>About Screen</Text>
    </View>
  );
}
```

Navigate to it using:

```tsx
import { Link } from "expo-router";

<Link href="/about">Go to About</Link>
```

## 🔧 Configuration Files

- **`app.json`** - Expo app configuration
- **`tailwind.config.js`** - Tailwind CSS configuration
- **`babel.config.js`** - Babel configuration for Nativewind
- **`metro.config.js`** - Metro bundler configuration
- **`tsconfig.json`** - TypeScript configuration

## 📦 Key Dependencies

- `expo` - Expo SDK
- `expo-router` - File-based routing
- `nativewind` - Tailwind CSS for React Native
- `react-native-safe-area-context` - Safe area handling
- `react-native-reanimated` - Animations
- `react-native-gesture-handler` - Gesture handling

## 🧪 Linting

Run the linter:

```bash
npm run lint
```

## 📚 Learn More

- [Expo Documentation](https://docs.expo.dev/)
- [React Native Documentation](https://reactnative.dev/)
- [Nativewind Documentation](https://www.nativewind.dev/)
- [Expo Router Documentation](https://docs.expo.dev/router/introduction/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

Made with ❤️ using React Native, Expo, and Nativewind
