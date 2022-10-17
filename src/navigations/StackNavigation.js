import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import LandingPage from "../screens/LandingPage";
import SignupPage from "../screens/SignupPage";
import LoginPage from "../screens/LoginPage";
import SignInPage from "../screens/SignInPage";
import PostPage from "../screens/PostPage";
import MyProfilePage from "../screens/MyProfilePage";
import ChatScreen from "../screens/ChatScreen";
import SearchUserPage from "../screens/SearchUserPage";

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
            <Home.Screen
                name="MyProfileScreen"
                component={MyProfilePage}
                options={{ headerShown: false }}
            />
            <Home.Screen
                name="ChatScreen"
                component={ChatScreen}
                options={{ headerShown: false }}
            />
            <Home.Screen
                name="SearchUserScreen"
                component={SearchUserPage}
                options={{ headerShown: false }}
            />
        </Home.Navigator>
    )
}