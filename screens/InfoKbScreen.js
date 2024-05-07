import React from "react";
import { Text, StyleSheet, ScrollView, Image} from 'react-native';

export const InfoKbScreen = () => {
    return (
        <ScrollView contentContainerStyle={styles.scrollViewContent}>
            <Text style={styles.title}>
                Kobe Bryant
            </Text>
            <Text style={styles.text}>
                Kobe Bean Bryant (Filadelfia, Pensilvania, 23 de agosto de 1978-Calabasas, California, 26 de enero de 2020)5​ fue un baloncestista estadounidense que jugaba en la posición de escolta. Disputó veinte temporadas en la NBA, todas ellas en Los Angeles Lakers.
            </Text>
            <Image 
                style={{marginBottom:15}}
                source={require('../img/Kobe_Bryant_8.jpg')}
            />
            <Text style={styles.text}>
                Hijo del exjugador de baloncesto Joe Bryant,6​ está considerado como uno de los mejores baloncestistas de todos los tiempos. Ganó cinco campeonatos de la NBA con los Lakers y dos medallas de oro olímpicas con la selección estadounidense, fue dieciocho veces All-Star, quince veces All-NBA (once de ellas en el primer quinteto), doce veces miembro de los mejores quintetos defensivos, MVP de la Temporada en 2008,​ MVP de las Finales en 2009 y 2010 y máximo anotador de la liga en 2006 y 2007.​ En 2020 fue incluido de manera póstuma en el Salón de la Fama del Baloncesto.
            </Text>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    scrollViewContent: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 20,
    },
    title: {
        fontSize: 30,
        textAlign: 'center',
        marginBottom: 20,
    },
    text: {
        fontSize: 15,
        textAlign: 'center',
        paddingHorizontal: 15,
        marginBottom: 20,
    },
});
