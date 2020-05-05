

import React, { useState } from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
  Button,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';

import CustomButton from "./components/ButtonComponent";


const  App=()=>{

  const [getText,setText] = useState("");
  const [getList,setList] = useState([]);
  const [buttontitle,setbuttontitle] = useState('Add');
  const [itemindex,setitemindex] = useState();
  
  


  const addItems=()=>{
    console.log(getText);
    if(buttontitle ==="Add"){
      if(getText==""){
        
      
      }else{
         
        setList([
          ...getList,
          {
            key:Math.random().toString(),
            data:getText,
  
          }
    ]);
    
        setText(''); 
      }
    }
    else if(buttontitle==="update"){
      if(getText==""){
        setbuttontitle("Add")
      }
      else{
        let newList =[...getList]
        newList[itemindex].data = getText
        setList(newList)
        setText("")
        setbuttontitle("Add")

      }
    }
  
    
  }

  const removeItems=(itemkey)=>{
     var list = getList.filter(item=>item.key!=itemkey);
     setList(list);
    
  }

  const updateItems = (itemkey,itemindex)=>{
    setbuttontitle("update")
    setText(itemkey.data)
      var num = itemindex;
      setitemindex(num)
  }

  return(
    
    <View 
    style = {styles.container}
         >
           <View style = {styles.topcontainer}>

         
       <Text style={styles.title}>To do</Text>    
     
      
      <View style= {styles.inputContainer}>
      <TextInput 
      placeholder = "Enter Item"
      style  ={styles.textInput}
      onChangeText = {text => setText(text)}
      value={getText}
       >
      
      </TextInput>

      <CustomButton
      onPressEvent = {addItems}
      text= {buttontitle}
      color = 'darkkhaki'
      textSize ={20}
      textColor = "white"
      

      />
      
      
      {/* <Button 
      onPress = {addItems}
      title = "Add"></Button>
      */}
      </View>


  <View style = {{fontSize: 26}}>

  <Text>{getText}</Text>
  </View>
  </View>

  <ScrollView style={styles.scrollviewstyle}>

  {getList.map((item,index)=> 
  <TouchableOpacity
  key={item.key}
  activeOpacity ={0.7}
  onPress={()=>updateItems(item,index)}
  >
    

    <View 
    key={item.key}
    style={styles.scrollviewItem}>

   <TouchableOpacity
   
   
   >
    <View style={styles.indexTextView}>
    <Text style={styles.indexText}>{index + 1}</Text>
    </View>
    </TouchableOpacity>

    <Text  style={styles.scrollviewText}>{item.data}</Text>

    <TouchableOpacity 
    onPress={()=>removeItems(item.key)}
    >
    <View style={styles.crossTextView}>
  <Text style={styles.crossText}>X</Text>
    </View>
    </TouchableOpacity>
    
    </View>
  </TouchableOpacity> 
    )}
    </ScrollView>  
     
     </View>
    
  );
  }

  const styles = StyleSheet.create({

   

    crossText:{
      fontSize:16,
      color:'white',
      fontWeight:'bold',


    },
    indexText:{
      fontSize:16,
      color:'white',
      fontWeight:'bold',


    },

    crossTextView:{
        backgroundColor:'red',
        color:'white',
        borderRadius:50,
        padding :5,
        width:30,
        justifyContent:'center',
        alignItems:'center',


    },
    indexTextView:{
      backgroundColor:'olive',
      color:'white',
      borderRadius:50,
      padding :5,
      width:30,
      justifyContent:'center',
      alignItems:'center',


  },


  scrollviewText:{
  fontSize:20,
  color:'white',

    },

    scrollviewItem:{
      backgroundColor:'darkkhaki',
      width:'80%',
      alignSelf:'center',
      padding:10, 
      margin:5,
      borderRadius:10,
      flexDirection:"row",
      justifyContent:'space-between',

    },

   


    container:{
      flex:1,
      backgroundColor:'lightseagreen',
      alignItems:'center',
      padding:60,

    },

    title:{
    fontSize:50,
    color:'grey',
    justifyContent:'center',
    },

    inputContainer:{
     
      flexDirection:'row',
      width:'80%',
      justifyContent:'space-between',
      paddingTop:20,
      alignItems:'center',
      color:'white'
      

      
    },
    
    textInput:{
    
      borderBottomWidth:2,
      borderColor:'green',
      width:'80%',
      //borderRadius:10,
      fontSize:20,
      color:'black'
    },

    image: {
      flex: 1,
      resizeMode: "cover",
      justifyContent: "center"
    },
    text: {
      color: "grey",
      fontSize: 30,
      fontWeight: "bold"
    }
    ,
    topcontainer:{
      flexDirection:'column',
      width:'90%',
      justifyContent:"space-around",
      paddingTop:20,
      alignItems:'center',
      color:'white',
      backgroundColor:'bisque',
      height:'40%',

    },
    scrollviewstyle:{
      flexDirection:'column',
      width:'90%',
      paddingTop:30,
      color:'white',
      backgroundColor:'bisque',
      height:'40%',
      margin:20,
    }


  

  });

  export default App;

