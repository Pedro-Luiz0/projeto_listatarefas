import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-web';
import { useState } from 'react';



export default function App() {


  const [tarefas,setTarefas] = useState([
      {id: "1" , titulo: "Aprender Git" },
      {id: "2" , titulo: "Aprender fazer commit"},
      {id: "3" , titulo: "Aprender utilizar o GitHub"},
      {id: "4" , titulo: "Criar um Novo Commit"},
  ])

    const [novatarefa,setnovaTarefa] = useState ('');

    function addTarefa(){
      const task = [{
        id: String(Date.now()),
        titulo : novatarefa
      }]
    }

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
      <TextInput
      style={styles.input}
      value={novatarefa}
      onChangeText={(texto)=> setnovaTarefa(texto) }
      placeholder='Digite uma Tarefa'
      placeholderTextColor="#888"
      textAlign='center'/>
      <TouchableOpacity style={styles.btnAdicionar}><Text style={{color: 'white', fontWeight: 'bold'}}>Adicionar Tarefa</Text></TouchableOpacity>
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
    textAlign: 'center'
  },
  item:{
    padding :15,
    marginTop : 10,
    backgroundColor : '#e25858ff',
    borderRadius : 5,
    textAlign: 'center'
  },
  btnAdicionar: {
    width: "90%",
    backgroundColor: "#22ce55",  
    margin: 15,
    height: 40,
    borderRadius: 5,
    alignItems: 'center',      
    justifyContent: 'center',   
  },
  input: {
    borderWidth: 1,
    width: "90%",
    margin: 15,
    borderColor: "#ccc",
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
    backgroundColor: 'white',
    textAlign: 'center'
  },
});
