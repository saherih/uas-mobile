import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Products from '../pages/Products';
import Checkout from '../pages/Checkout';
import Receipt from '../pages/Receipt';
import Login from '../pages/Login';
import Register from '../pages/Register';
const Stack = createStackNavigator();

const Route = () => {
	return (
	
			<Stack.Navigator initialRouteName='Login'>
				<Stack.Screen
					name="Login"
					component={Login}
				/>
				<Stack.Screen
					name="Register"
					component={Register}
				/>
				<Stack.Screen
					name="Products"
					component={Products}
				/>
				<Stack.Screen
					name="Checkout"
					component={Checkout}
				/>
				
				<Stack.Screen
					name="Receipt"
					component={Receipt}
				/>
			</Stack.Navigator>
	
	)
}
export default Route;