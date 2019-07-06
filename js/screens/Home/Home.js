import React, { Component } from "react";
import { View, Text, Image, FlatList } from "react-native";
import styles from "./styles";
import PhotoItem from "../../components/PhotoItem";
export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: props.data
    };
  }

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
      </View>
    );
  }
}
