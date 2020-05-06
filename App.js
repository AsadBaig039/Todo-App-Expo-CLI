

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
import {todoItems} from "./constants/dummyTodoList";


const  App=()=>{

  const [getText,setText] = useState("");
  const [getList,setList] = useState(todoItems);
  const [buttontitle,setbuttontitle] = useState('Add');
  const [itemindex,setitemindex] = useState();
  
  


  const addItems=()=>{
    console.log(getText);
    if(buttontitle ==="Add"){
   
         
        setList([
          ...getList,
          {
            key:Math.random().toString(),
            data:getText,
  
          }
    ]);
    
        setText(''); 
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

  const scrollView = (
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

  );

  const emptyscrollView = (
    <View style = {{paddingTop:30}}>
    <Text style = {{fontSize:20,fontStyle:'italic',color:'grey'}}>Items list is empty </Text>
  </View>

  );

  return(
    
    <View 
    style = {styles.container}

         >
           <Text style={styles.title}>To do</Text>  
           <View style = {styles.topcontainer}>

         
         
     
      
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
      disabled = {getText.length<=0}
      

      />
      
      
      {/* <Button 
      onPress = {addItems}
      title = "Add"></Button>
      */}
      </View>

    

  </View>
 
  {getList.length<=0?emptyscrollView:scrollView}
  
     
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
      backgroundColor:'paleturquoise',
      alignItems:'center',
      padding:60,
      

    },

    title:{
    fontSize:50,
    color:'grey',
    justifyContent:'center',
    paddingBottom:20
    
    },

    inputContainer:{
     
      flexDirection:'row',
      width:'80%',
      justifyContent:"space-between",
      paddingTop:10,
      paddingBottom:10,
      alignItems:'center',
      color:'white'
      

      
    },
    
    textInput:{
    
      borderBottomWidth:3,
      borderColor:'green',
      width:'70%',
      //borderRadius:10,
      fontSize:20,
      color:'black',
      
      
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
      width:'100%',
      justifyContent:"space-around",
      paddingTop:20,
      alignItems:'center',
      color:'white',
      backgroundColor:'bisque',
      
  

    },
    scrollviewstyle:{
      flexDirection:'column',
      width:'100%',
      paddingTop:30,
      color:'white',
      backgroundColor:'bisque',
      
      margin:20,
    }


  

  });

  export default App;

