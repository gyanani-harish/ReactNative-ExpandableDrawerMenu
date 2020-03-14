import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import ManagerComponent from './ManagerDashboard'
import ManagerScreen2 from './ManagerScreen2'
import ExpandableViewSeparate from './ExpandableViewSeparate';

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
    <Drawer.Screen name="Permission1" component={ManagerComponent} />
    <Drawer.Screen name="Permission2" component={ManagerScreen2}  />
    </Drawer.Navigator>
    </NavigationContainer>
  );
}
