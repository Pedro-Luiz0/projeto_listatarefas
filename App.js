import { StyleSheet, Text, View, FlatList } from 'react-native';

export default function App() {

  const tarefas =[
    {id: "1" , titulo: "Aprender Git" },
    {id: "2" , titulo: "Aprender fazer commit"},
    {id: "3" , titulo: "Aprender utilizar o GitHub"},
    {id: "4" , titulo: "Criar um Novo Commit"},
  ]

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Lista de Tarefas</Text>
      <FlatList
        data={tarefas}
        keyExtractor={(item)=>item.id}
        renderItem={({item}) => (
          <Text style={styles.item}> {item.titulo} </Text>
        )}      
      
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f172a',
  },
  titulo: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 20,
  },
  item:{
    padding :15,
    marginTop : 10,
    backgroundColor : '#e25858ff',
    borderRadius : 5
  }
});
