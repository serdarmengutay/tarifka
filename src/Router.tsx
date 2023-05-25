import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import AllFood from "./pages/AllFood/AllFood";
import FoodsByCategorie from "./pages/FoodsByCategorie/FoodsByCategorie";
import Details from "./pages/Details/Details";

const Stack = createStackNavigator();

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Categories"
          component={AllFood}
          options={{
            headerTitleAlign: "center",
            headerTitleStyle: { color: "orange" },
          }}
        />
        <Stack.Screen
          name="Meals"
          component={FoodsByCategorie}
          options={{
            headerTitleAlign: "center",
            headerTitleStyle: { color: "orange" },
          }}
        />
        <Stack.Screen
          name="Details"
          component={Details}
          options={{
            headerTitleAlign: "center",
            headerTitleStyle: { color: "orange" },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
