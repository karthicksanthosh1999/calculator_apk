import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";

export default function App() {
  const [input, setInput] = useState('');
  const [result , setResult] = useState('')

  let numbers = [
    "7",
    "8",
    "9",
    "/",
    "4",
    "5",
    "6",
    "*",
    "1",
    "2",
    "3",
    "-",
    "0",
    "c",
    "=",
    "+",
  ]

  const onButtonPress = (value) => {
    if(value === "="){
      try{
        setResult(eval(input))
      }catch(error){
        setResult('error')
      }
    }else if(value === 'c'){
      setInput('')
      setResult('')
    }else {
      setInput(input + value)
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.resultContainer}>
        <Text style={styles.resultText}>{result}</Text>
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.inputText}
          value={input}
          onChange={()=>setInput()}
          keyboardType="numeric"
        />
      </View>
        <View style={styles.buttonContainer}>
          {numbers.map((item, index) => (
            <TouchableOpacity
              style={styles.button}
              key={index}
              onPress={() => onButtonPress(item)}>
              <Text style={styles.buttontext}>{item}</Text>
            </TouchableOpacity>
          ))}
        </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  resultContainer: {
    flex: 2,
    justifyContent: "center",
    alignItems: "flex-end",
  },
  resultText: {
    fontSize: 40,
  },
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-end",
  },
  inputText: {
    fontSize: 40,
  },
  buttonContainer: {
    flex: 7,
    flexDirection: "row",
    flexWrap: "wrap",
  },
  button: {
    fontSize: 24,
    width: "25%",
    height: "20%",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
  },
  buttontext : {
    fontSize : 24
  }
});
