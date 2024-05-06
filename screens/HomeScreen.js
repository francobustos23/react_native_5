import React from "react";
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import { useNavigation } from '@react-navigation/native'

export const HomeScreen = () => {
    const navigation = useNavigation();

    const styles = StyleSheet.create({
        container: {
          paddingTop: 50,
        },
        tinyLogo: {
          width: 300,
          height: 300,
          alignSelf: 'center',
        },
        logo: {
          width: 66,
          height: 58,
        },
      });

    return (
        <View>
            <Text
                style={{
                    fontSize:30,
                    textAlign: "center",
                    marginTop: "20%",
                    color: 'purple',
                    marginBottom: '10%'
                }}
            >KB</Text>
            <Image 
                 style={styles.tinyLogo}
                source={require('../img/kb.jpg')}
            />
            <Text 
                style={{
                    fontSize: 14,
                    textAlign: 'center',
                    paddingHorizontal: 10,
                    marginTop: '10%'
                }}>
                    Nombre completo: Kobe Bean Bryant
                </Text>
                <Text
                    style={{
                        fontSize: 14,
                        textAlign: 'center',
                        paddingHorizontal: 10
                    }}
                >Altura: 1,98 m (6′ 6″)
                </Text>
            <TouchableOpacity 
                onPress={() => navigation.navigate('Stack')}
                style={{
                    backgroundColor: 'purple',
                    padding: 10,
                    marginTop: '20%',
                    width:'50%',
                    alignSelf: 'center',
                    borderRadius: 10
                }}
            >
                <Text 
                    style={{
                        fontSize: 15,
                        textAlign: 'center',
                        color: 'white'
                    }}
                >More Info</Text>
            </TouchableOpacity>
            
        </View>
    )
}