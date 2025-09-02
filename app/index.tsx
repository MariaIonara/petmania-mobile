import { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";

export default function Index() {

  const [pets, setPets] = useState([]);

  useEffect(() => {    
    fetchPets();
  }, []);

  const fetchPets = async () => {
    try {
      const response = await fetch('https://00fvcqqh-3000.brs.devtunnels.ms/api/pets');      
      const data = await response.json();      
      setPets(data);
    } catch (error) {
      console.error(error);
    }
    
  }

  const Item = ({pet}) => (    
    <View style={styles.item}>
      <Text>{pet.nomedopet}</Text>
    </View>
  );

  return (
    <View
      style={styles.container}
    >
      <FlatList
        data={pets}
        renderItem={ ({item}) => <Item pet={item} />}
        ItemSeparatorComponent={ () => <View style={{height: 2}} />}
        style={{ width: "100%" }}
      />
    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 10
  },

  item: {
    padding: 20,
    backgroundColor: "green"
  }

})