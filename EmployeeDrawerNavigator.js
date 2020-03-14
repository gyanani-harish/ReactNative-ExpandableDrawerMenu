import * as React from 'react';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import ExpandableViewSeparate from './ExpandableViewSeparate';
import EmployeeDashboard from './EmployeeDashboard';
import EmployeeScreen2 from './EmployeeScreen2';

const Drawer = createDrawerNavigator();

  
function getExpandableView(props){
    return (
        <ExpandableViewSeparate navObj={props.navigation}/>
      );
};
function CustomDrawerContent(props) {
    return (
      <DrawerContentScrollView {...props}>
        {getExpandableView(props)}
        <DrawerItem
          label="Help"
          onPress={() => Linking.openUrl('https://mywebsite.com/help')}
        />
      </DrawerContentScrollView>
    );
  }
export default function MeriApp() {
  return (
    <NavigationContainer>
    <Drawer.Navigator drawerContent={props => <CustomDrawerContent {...props} />}>
    {/* screens */}
    <Drawer.Screen name="Permission1" component={EmployeeDashboard} />
    <Drawer.Screen name="Permission2" component={EmployeeScreen2}  />
    </Drawer.Navigator>
    </NavigationContainer>
  );
}
