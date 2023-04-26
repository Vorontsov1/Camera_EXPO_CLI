import * as React from 'react';
import { View, Text,  StyleSheet,  TouchableOpacity } from 'react-native';
import {Entypo} from '@expo/vector-icons';




const Button = ({onPress, title, color, icon}) => {
  return (
      <TouchableOpacity onPress={onPress} style={styles.button}>
          <Entypo
              name={icon}
              color={color ? color : '#bb0a21'}
              size={28}
          />
          <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

export default Button;

const styles = StyleSheet.create({
    button: {
        flexDirection: 'row',
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 16,
        fontWeight: 'bold',
        marginLeft: 10,
        color: '#bb0a21',
    },
            
});