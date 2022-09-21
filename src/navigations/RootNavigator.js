import * as React from "react";
import { NavigationContainer } from "@react-navigation/native"
import StackNavigation, { HomeStack } from "./StackNavigation";

export default function RootNavigator() {
    return (
        <NavigationContainer>
            <HomeStack />
        </NavigationContainer>
    )
}