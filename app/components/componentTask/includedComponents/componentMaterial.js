import React,{Component} from 'react';
import {AppRegistry, Text,View,StyleSheet,Navigator,TouchableHighlight} from 'react-native';
import SingleMaterial from './componentSingleMaterial';
import AddMaterial from './componentAddMaterial';

const mockData=[
  {name:'Keyboard',unit:5,price:5},
  {name:'Mouse',unit:5,price:6},
  {name:'Monitor',unit:10,price:25},
]


export default class Material extends Component{
  constructor(props){
    super(props);
    this.state = {
        productData:[],
        totalSum:0,
    }
  }
  componentDidMount(){
    this.setState({productData:mockData});
    let sum=0;
    mockData.map((material, i) => {
      sum+=material.unit*material.price;
    });
    this.setState({
      totalSum:sum,
    })
  }
  renderScene(route, navigator){
   switch(route.id){
    case 'Material':
      return(
        <View style={styles.Navig}>
          <View>
          {
            this.state.productData.map((material, i) => (
              <SingleMaterial
              name={material.name}
              unit={material.unit}
              price={material.price}
              odd={i%2==1}
              />
            ))
        }

        <Text>Total price:{this.state.totalSum}</Text>
        </View>
        <View style={styles.addButton}>
        <TouchableHighlight
          style={styles.pressableButton}
          onPress={()=>navigator.push({
              id:'addMaterial'
          })}>
            <Text>Add item</Text>
          </TouchableHighlight>
        </View>
      </View>
      )
    case 'addMaterial':
      return (
        <View style={styles.Navig}>
            <AddMaterial navigator={navigator}/>
        </View>)
   }
 }

render(){
  return(
      <Navigator
          style={styles.Navig}
          initialRoute={{id: 'Material'}}
          renderScene={this.renderScene.bind(this)}
          configureScreen={(route, routeStack) => Navigator.SceneConfigs.FloatFromRight}
        />
  )


  }
}

AppRegistry.registerComponent('Material',()=> Material);
const styles = StyleSheet.create({
  Navig: {
    flex:1,
  },
  pressableButton:{
    flex:1,
  },
  addButton:{
    position: 'absolute',
    right:10,
    bottom:10,
    padding:3,
    borderWidth:2,
    borderColor: "#000000",
  }
});