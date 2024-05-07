import React from "react";
import { Text, StyleSheet, ScrollView, Image} from 'react-native';

export const InfoMjScreen = () => {
    return (
        <ScrollView contentContainerStyle={styles.scrollViewContent}>
            <Text style={styles.title}>
                Michael Jordan
            </Text>
            <Text style={styles.text}>
             Michael Jeffrey Jordan (Nueva York, 17 de febrero de 1963) es un exjugador de baloncesto estadounidense. Con 1,98 metros de altura, 
             jugaba en la posición de escolta. Es considerado por la mayoría de aficionados y especialistas como el mejor jugador de baloncesto de todos los tiempos.
             Se retiró definitivamente a los cuarenta años en 2003 en los Washington Wizards, tras haberlo hecho en dos ocasiones anteriores,
             en 1993 y 1998, después de haber jugado 13 temporadas en los Chicago Bulls.
            </Text>
            <Image 
                style={{marginBottom:15, width:260, height:500}}
                source={require('../img/mj.jpg')}
            />
            <Text style={styles.text}>
            Ganó 6 anillos con Chicago Bulls, promediando 30,1 puntos por partido en toda su carrera deportiva, el mayor promedio en la historia de la liga. También ganó
            10 títulos de máximo anotador, 5 MVP de la temporada, 6 MVP de las Finales; fue nombrado en el mejor quinteto de la NBA en diez ocasiones, en el defensivo nueve
            veces, líder en robos de balón durante tres años y un premio al mejor defensor de la temporada.
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
