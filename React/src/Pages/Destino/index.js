import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

export default class Destino extends Component {
  render() {
    return (
      <View>
        <Text style={styles.novoDestino}>{this.props.data}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {},
  novoDestino: {
    color: "black",
    fontSize: 18,
    fontWeight: "bold",
  },
});
