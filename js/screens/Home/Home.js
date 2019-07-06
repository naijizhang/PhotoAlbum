import React, { Component } from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import styles from "./styles";
import PhotoItem from "../../components/PhotoItem";
export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: props.data
    };
  }
  reorder = () => {
    const currentArr = this.state.dataSource;
    currentArr.sort(function() {
      return 0.5 - Math.random();
    });
    this.setState({
      dataSource: currentArr
    });
  };
  render() {
    return (
      <View>
        <Text style={styles.heading}>---> Scroll ---></Text>
        <FlatList
          style={styles.list}
          horizontal={true}
          data={this.state.dataSource}
          initialNumToRender={20}
          maxToRenderPerBatch={20}
          updateCellsBatchingPeriod={30}
          getItemLayout={(data, index) => ({
            length: 200,
            offset: 200 * index,
            index
          })}
          renderItem={({ item }) => (
            <PhotoItem url={item.url} title={item.title} />
          )}
          keyExtractor={(item, index) => index.toString()}
        />
        <TouchableOpacity style={styles.button} onPress={this.reorder}>
          <Text style={styles.buttonText}>Reorder the list</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
