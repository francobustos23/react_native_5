import React, { useState } from "react";
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import { useNavigation } from '@react-navigation/native'
import { Ionicons } from '@expo/vector-icons'; // Importa el icono de estrellas

export const KobeScreen = () => {
    const navigation = useNavigation();

    const [rating, setRating] = useState(0); // Estado para la puntuación, inicializado en 0

    const styles = StyleSheet.create({
        container: {
          paddingTop: 50,
        },
        tinyLogo: {
          width: 200,
          height: 300,
          alignSelf: 'center',
          borderRadius: 10
        },
        logo: {
          width: 66,
          height: 58,
        },
        ratingContainer: {
            flexDirection: 'row',
            justifyContent: 'center',
            marginTop: 20,
        },
      });

      const handleRating = (value) => {
        setRating(value); // Actualiza el estado de la puntuación
    };

    // Función para renderizar los iconos de estrellas según la puntuación
    const renderStars = () => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            stars.push(
                <TouchableOpacity key={i} onPress={() => handleRating(i)}>
                    <Ionicons name={i <= rating ? 'star' : 'star-outline'} size={30} color="gold" />
                </TouchableOpacity>
            );
        }
        return stars;
    };
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
            >Kobe Bryant</Text>
            <Image 
                 style={styles.tinyLogo}
                source={require('../img/Kobe2.jpg')}
            />
            <Text 
                style={{
                    fontSize: 17,
                    textAlign: 'center',
                    paddingHorizontal: 10,
                    marginTop: '10%'
                }}>
                Nombre completo: Kobe Bean Bryant
                </Text>
                <Text
                    style={{
                        fontSize: 17,
                        textAlign: 'center',
                        paddingHorizontal: 10
                    }}
                >Altura: 1,98 m (6′ 6″)
                </Text>
                <View style={styles.ratingContainer}>
                    {renderStars()}
                </View>
            <TouchableOpacity 
                onPress={() => navigation.navigate('InfoKb')}
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