import React, { useEffect, useState } from "react";
import { LogBox, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import packageJson from "../package.json";

LogBox.ignoreLogs([
  "SafeAreaView has been deprecated",
]);

// Define technologies with package name and current version
const technologies = [
  { name: "Expo", pkg: "expo", current: packageJson.dependencies.expo },
  { name: "React", pkg: "react", current: packageJson.dependencies.react },
  { name: "React Native", pkg: "react-native", current: packageJson.dependencies["react-native"] },
  { name: "NativeWind", pkg: "nativewind", current: packageJson.dependencies.nativewind },
  { name: "TailwindCSS", pkg: "tailwindcss", current: packageJson.dependencies.tailwindcss },
  { name: "Expo Router", pkg: "expo-router", current: packageJson.dependencies["expo-router"] },
  { name: "TypeScript", pkg: "typescript", current: packageJson.devDependencies.typescript },
];

type LatestMap = Record<string, string>;

// Helper to strip semver prefix (~, ^, >=, etc.)
const stripSemverPrefix = (version: string) => version.replace(/^[~^>=<]+/, "");

const Index = () => {
  const [latestVersions, setLatestVersions] = useState<LatestMap>({});

  useEffect(() => {
    const fetchLatest = async () => {
      const results: LatestMap = {};
      await Promise.all(
        technologies.map(async (tech) => {
          try {
            const response = await fetch(`https://registry.npmjs.org/${tech.pkg}/latest`);
            if (response.ok) {
              const data = await response.json();
              results[tech.name] = data.version;
            } else {
              results[tech.name] = "-";
            }
          } catch {
            results[tech.name] = "-";
          }
        })
      );
      setLatestVersions(results);
    };
    fetchLatest();
  }, []);

  return (
    <SafeAreaView className="flex-1 justify-center items-center bg-[#f7f7f7]">
      <ScrollView contentContainerClassName="flex-1 justify-center items-center p-6">
        <Text className="text-2xl font-bold mb-6 text-gray-800">
          Current & Latest Versions
        </Text>

        <View className="bg-white rounded-2xl p-6 w-full max-w-sm">
          {technologies.map((tech, index) => {
            const latest = latestVersions[tech.name];
            const currentClean = stripSemverPrefix(tech.current);
            const isNew = latest && latest !== currentClean;
            const displayVersion = isNew ? latest : currentClean;
            return (
              <View
                key={tech.name}
                className={`flex-row justify-between py-3 ${index < technologies.length - 1 ? "border-b border-gray-100" : ""}`}
              >
                <Text className="text-gray-600 font-medium">{tech.name}</Text>
                <View className="flex-row items-center">
                  {isNew ? (
                    <>
                      <Text className="text-yellow-600 font-mono text-sm">{currentClean}</Text>
                      <Text className="text-gray-400 font-mono text-sm"> → </Text>
                      <Text className="text-green-600 font-mono text-sm">{latest}</Text>
                    </>
                  ) : (
                    <Text className="text-blue-600 font-mono text-sm">{currentClean}</Text>
                  )}
                  {isNew && (
                    <View className="ml-2 bg-green-200 rounded-full px-2 py-0.5">
                      <Text className="text-xs font-medium text-green-800">New!</Text>
                    </View>
                  )}
                </View>
              </View>
            );
          })}
        </View>

        <Text className="text-xs text-gray-400 mt-6">
          Versions from package.json • Auto-updates on dependency change
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Index;
