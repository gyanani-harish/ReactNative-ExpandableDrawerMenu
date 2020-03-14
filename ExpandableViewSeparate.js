import * as React from 'react';
import {
    LayoutAnimation,
    StyleSheet,
    View,
    Text,
    ScrollView,
    UIManager,
    TouchableOpacity,
    Platform,
  } from 'react-native';
class ExpandableItemComponent extends React.Component {
    //Custom Component for the Expandable List
    constructor() {
      super();
      this.state = {
        layoutHeight: 0,
      };
    }
    componentWillReceiveProps(nextProps) {
      if (nextProps.item.isExpanded) {
        this.setState(() => {
          return {
            layoutHeight: null,
          };
        });
      } else {
        this.setState(() => {
          return {
            layoutHeight: 0,
          };
        });
      }
    }
    shouldComponentUpdate(nextProps, nextState) {
      if (this.state.layoutHeight !== nextState.layoutHeight) {
        return true;
      }
      return false;
    }
  
    render() {
        const context = this;
      return (
        <View>
          {/*Header of the Expandable List Item*/}
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={this.props.onClickFunction}
            style={styles.header}>
            <Text style={styles.headerText}>{this.props.item.category_name}</Text>
          </TouchableOpacity>
          <View
            style={{
              height: this.state.layoutHeight,
              overflow: 'hidden',
            }}>
            {/*Content under the header of the Expandable List Item*/}
            {this.props.item.subcategory.map((item, key) => (
              <TouchableOpacity
                key={key}
                style={styles.content}
                onPress={() => context.props.navObj.navigate('Permission2')}>
                <Text style={styles.text}>
                  {key}. {item.val}
                </Text>
                <View style={styles.separator} />
              </TouchableOpacity>
            ))}
          </View>
        </View>
      );
    }
  }
export default class ExpandableViewSeparate extends React.Component {
    //Main View defined under this Class
    constructor() {
      super();
      if (Platform.OS === 'android') {
        UIManager.setLayoutAnimationEnabledExperimental(true);
      }
      this.state = { listDataSource: CONTENT };
    }
  
    updateLayout = index => {
      LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
      const array = [...this.state.listDataSource];
      array[index]['isExpanded'] = !array[index]['isExpanded'];
      this.setState(() => {
        return {
          listDataSource: array,
        };
      });
    };
  
    render() {
      return (
        <View style={styles.container}>
          <Text style={styles.topHeading}>Expandable List View</Text>
          <ScrollView>
            {this.state.listDataSource.map((item, key) => (
              <ExpandableItemComponent
                key={item.category_name}
                onClickFunction={this.updateLayout.bind(this, key)}
                item={item}
                navObj={this.props.navObj}
              />
            ))}
          </ScrollView>
        </View>
      );
    }
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 30,
      backgroundColor: '#F5FCFF',
    },
    topHeading: {
      paddingLeft: 10,
      fontSize: 20,
    },
    header: {
      backgroundColor: '#F5FCFF',
      padding: 16,
    },
    headerText: {
      fontSize: 16,
      fontWeight: '500',
    },
    separator: {
      height: 0.5,
      backgroundColor: '#808080',
      width: '95%',
      marginLeft: 16,
      marginRight: 16,
    },
    text: {
      fontSize: 16,
      color: '#606070',
      padding: 10,
    },
    content: {
      paddingLeft: 10,
      paddingRight: 10,
      backgroundColor: '#fff',
    },
  });
  
  //Dummy content to show
  //You can also use dynamic data by calling webservice
  const CONTENT = [
    {
      isExpanded: false,
      category_name: 'Item 1',
      subcategory: [{ id: 1, val: 'Sub Cat 1' }, { id: 3, val: 'Sub Cat 3' }],
    },
    {
      isExpanded: false,
      category_name: 'Item 2',
      subcategory: [{ id: 4, val: 'Sub Cat 4' }, { id: 5, val: 'Sub Cat 5' }],
    },
    {
      isExpanded: false,
      category_name: 'Item 3',
      subcategory: [{ id: 7, val: 'Sub Cat 7' }, { id: 9, val: 'Sub Cat 9' }],
    },
    {
      isExpanded: false,
      category_name: 'Item 4',
      subcategory: [{ id: 10, val: 'Sub Cat 10' }, { id: 12, val: 'Sub Cat 2' }],
    },
    {
      isExpanded: false,
      category_name: 'Item 5',
      subcategory: [{ id: 13, val: 'Sub Cat 13' }, { id: 15, val: 'Sub Cat 5' }],
    },
    {
      isExpanded: false,
      category_name: 'Item 6',
      subcategory: [{ id: 17, val: 'Sub Cat 17' }, { id: 18, val: 'Sub Cat 8' }],
    },
    {
      isExpanded: false,
      category_name: 'Item 7',
      subcategory: [{ id: 20, val: 'Sub Cat 20' }],
    },
    {
      isExpanded: false,
      category_name: 'Item 8',
      subcategory: [{ id: 22, val: 'Sub Cat 22' }],
    },
    {
      isExpanded: false,
      category_name: 'Item 9',
      subcategory: [{ id: 26, val: 'Sub Cat 26' }, { id: 27, val: 'Sub Cat 7' }],
    },
    {
      isExpanded: false,
      category_name: 'Item 10',
      subcategory: [{ id: 28, val: 'Sub Cat 28' }, { id: 30, val: 'Sub Cat 0' }],
    },
    {
      isExpanded: false,
      category_name: 'Item 11',
      subcategory: [{ id: 31, val: 'Sub Cat 31' }],
    },
    {
      isExpanded: false,
      category_name: 'Item 12',
      subcategory: [{ id: 34, val: 'Sub Cat 34' }],
    },
    {
      isExpanded: false,
      category_name: 'Item 13',
      subcategory: [{ id: 38, val: 'Sub Cat 38' }, { id: 39, val: 'Sub Cat 9' }],
    },
    {
      isExpanded: false,
      category_name: 'Item 14',
      subcategory: [{ id: 40, val: 'Sub Cat 40' }, { id: 42, val: 'Sub Cat 2' }],
    },
    {
      isExpanded: false,
      category_name: 'Item 15',
      subcategory: [{ id: 43, val: 'Sub Cat 43' }, { id: 44, val: 'Sub Cat 44' }],
    },
  ];