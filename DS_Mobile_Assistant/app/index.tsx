import React, { useEffect, useState } from "react";
import { Redirect } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";

const index = () => {
    const [isOnboarding, setIsOnboarding] = useState(true);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const checkOnboarding = async () => {
            const isOnboarding = await AsyncStorage.getItem("onboarding");
            if (isOnboarding) {
                setIsOnboarding(false);
            }
            setLoading(false);
        };
        checkOnboarding();
    }, []);

    if (loading) return null;

    // href property in the <Redirect> component expects a specific type of value, but the string values "/(routes)/onboarding" and "/(routes)/home" do not match the expected type.
    let route:any = isOnboarding ? "/(routes)/onboarding" : "/(routes)/home";

    return (
        <Redirect href={route} />
    )
}

export default index