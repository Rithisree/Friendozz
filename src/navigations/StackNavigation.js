import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import LandingPage from "../screens/LandingPage";
import SignupPage from "../screens/SignupPage";

const Home = createNativeStackNavigator();
export function HomeStack() {
    return (
        <Home.Navigator>

            <Home.Screen
                name="LandingScreen"
                component={LandingPage}
                options={{ headerShown: false }}
            />
            <Home.Screen
                name="SignupScreen"
                component={SignupPage}
                options={{ headerShown: false }}
            />



        </Home.Navigator>
    )
}