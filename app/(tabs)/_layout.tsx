import { Tabs } from "expo-router";
import React from "react";
import { StyleSheet } from "react-native";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faNewspaper, faTrophy } from '@fortawesome/free-solid-svg-icons';

export default function TabLayout() {
    return (
        <Tabs screenOptions={{tabBarStyle:{paddingVertical: 15, height: 70, paddingBottom: 11}}}>
            <Tabs.Screen 
                name="index" 
                options={{ 
                    title: "Lista de Empregos", 
                    headerShown: false,
                    tabBarIcon: ({ color, focused }) => (
                        <FontAwesomeIcon size={28} icon={faNewspaper} color={color} />
                    )
                }}
            />
            <Tabs.Screen 
                name="mainPage" 
                options={{ 
                    title: "Ranking", 
                    headerShown: false,
                    tabBarIcon: ({ color, focused }) => (
                        <FontAwesomeIcon size={28} icon={faTrophy} color={color} />
                    ) 
                }}
            />
        </Tabs>
    );
}
