import { createStackNavigator } from "react-navigation";
import PhoneAuthTest from "../screens/phoneauth";
import Create from "../screens/createevent";

const App = createStackNavigator({
  Home: { screen: HomeScreen },
  Profile: { screen: ProfileScreen },
  Phone: { screen: PhoneAuthTest },
  Creating: { screen: Create }
});

export default App;
