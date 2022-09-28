import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import LandingPage from "../screens/LandingPage";
import SignupPage from "../screens/SignupPage";
import LoginPage from "../screens/LoginPage";
import SignInPage from "../screens/SignInPage";
import PostPage from "../screens/PostPage";

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
            <Home.Screen
                name="LoginScreen"
                component={LoginPage}
                options={{ headerShown: false }}
            />
            <Home.Screen
                name="SignInScreen"
                component={SignInPage}
                options={{ headerShown: false }}
            />
             <Home.Screen
                name="PostScreen"
                component={PostPage}
                options={{ headerShown: false }}
            />

        </Home.Navigator>
    )
}