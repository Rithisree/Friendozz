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
import ChatmessageScreen from "../screens/ChatmessageScreen";
import EditProfileScreen from "../screens/EditProfileScreen";
import NotificationScreen from "../screens/NotificationScreen";
import PartnerProfileScreen from "../screens/PartnerProfileScreen";
import GroupProfileScreen from "../screens/GroupProfileScreen";
import PersonalViewScreen from "../screens/PersonalViewScreen";
import GangsChatScreen from "../screens/GangsChatScreen";
import PrivatePartnerScreen from "../screens/PrivatePartnerScreen";
import AddGangScreen from "../screens/AddGangScreen";

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
            <Home.Screen
                name="AddGangScreen"
                component={AddGangScreen}
                options={{ headerShown: false }}
            />
            <Home.Screen
                name="GangsChatScreen"
                component={GangsChatScreen}

                options={{ headerShown: false }}
            />
            <Home.Screen
                name="PrivatePartnerScreen"
                component={PrivatePartnerScreen}
                options={{ headerShown: false }}
            />
            <Home.Screen
                name="ChatmessageScreen"
                component={ChatmessageScreen}
                options={{ headerShown: false }}
            />
            <Home.Screen
                name="EditProfileScreen"
                component={EditProfileScreen}
                options={{ headerShown: false }}
            />
            <Home.Screen
                name="NotificationScreen"
                component={NotificationScreen}
                options={{ headerShown: false }}
            />
            <Home.Screen
                name="PartnerProfileScreen"
                component={PartnerProfileScreen}
                options={{ headerShown: false }}
            />
            <Home.Screen
                name="GroupProfileScreen"
                component={GroupProfileScreen}
                options={{ headerShown: false }}
            />
            <Home.Screen
                name="PersonalViewScreen"
                component={PersonalViewScreen}
                options={{ headerShown: false }}
            />
        </Home.Navigator>
    )
}