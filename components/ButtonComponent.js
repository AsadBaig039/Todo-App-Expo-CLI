import React from 'react';
import{
TouchableOpacity,
View,
Text,
StyleSheet
    
}
from 'react-native'

const CustomButton=(props)=>{
    if(props.disabled){
        var btncolor = 'grey'
    }
   else{
      var btncolor = props.color!=undefined?props.color:'blue'
   }
    

    return(
<TouchableOpacity
      onPress = {props.onPressEvent}
      activeOpacity={0.5}
      style = {styles.styleButton}
      disabled ={props.disabled}
      
      >
        <View 
        
        style={{marginLeft:10,borderRadius:50, backgroundColor:btncolor}}>
    <Text style={{
        fontSize:props.textSize,
        color:props.textColor,
        textAlign:'center',
     
    }} >{props.text}</Text>
        </View>
      </TouchableOpacity>

    );
}

const styles = StyleSheet.create({

    custombuttonView:{
       
       // padding:10,
        //borderRadius:10,
        //paddingHorizontal:15,
        //marginLeft:10,
    
      },
      custombuttonText:{
       color:'white',
       fontSize:20,
     
  
      },

      styleButton:{
          width:'25%',
      
          
      }

})

export default  CustomButton;

