import React from "react";
import { Text, StyleSheet, View } from "react-native";
import api from "./src/services/Api";
//import Destino from "./src/Pages/Destino";

export default function App() {
  const [destinos, setDestinos] = React.useState([]);

  React.useEffect(() => {
    api.get("/Destino").then((response) => {
      console.log(response.data);
      setDestinos(response.data);
    });
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Destinos:</Text>
      {destinos.map((destino) => {
        return (
          <View>
            <Text style={styles.destino}>Destino: {destino.nome}</Text>
            <Text style={styles.destino}>Preço: {destino.preco}</Text>
            <Text style={styles.destino}>Desconto%:{destino.descontoPor}</Text>
            <Text>-------------------------</Text>
          </View>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  destino: {
    fontSize: 14,
  },
  titulo: {
    fontSize: 20,
    fontWeight: "Bold",
  },
});
