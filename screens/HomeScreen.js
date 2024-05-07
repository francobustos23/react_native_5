import React from "react";
import { Text, View, Image, TouchableOpacity} from "react-native";
import { useNavigation } from '@react-navigation/native';

export const HomeScreen = () => {

    const navigation = useNavigation();

    return (
        <View>
            <View style={{alignItems: "center", marginTop: 40, flexDirection:"row"}}>
                <Text
                    style={{
                        fontSize: 30,
                        textAlign: "center",
                        color: 'black',
                        marginTop: 7,
                        marginLeft: 30,
                    }}
                >
                 BEST NBA PLAYERS
                </Text>
                <Image
                    style={{
                        width: 50,
                        height: 50,
                        // marginLeft: 70,
                    }}
                    source={require('../img/nbalogo.png')}
                />
            </View>
            <TouchableOpacity 
                onPress={() => navigation.navigate('KobeScreen')}
                style={{
                    backgroundColor: 'purple',
                    padding: 10,
                    marginTop: "50%",
                    width:'50%',
                    alignSelf: 'center',
                    borderRadius: 10,
                    flexDirection: 'row',
                    justifyContent: 'space-evenly'
                }}
            >
                <Text 
                    style={{
                        fontSize: 15,
                        textAlign: 'center',
                        color: 'white'
                    }}
                >Kobe Bryant</Text>
            <Image source={require('../img/logokb.png')} style={{width:30, height:30}} />
            </TouchableOpacity>
           <Text
           style={{
                textAlign: 'center',
                marginTop: '10%',
                fontSize: 20
           }}
           >or</Text>
            <TouchableOpacity 
                onPress={() => navigation.navigate('JordanScreen')}
                style={{
                    backgroundColor: 'red',
                    padding: 10,
                    marginTop: "15%",
                    width:'50%',
                    alignSelf: 'center',
                    borderRadius: 10,
                    flexDirection: 'row',
                    justifyContent: 'space-evenly'
                }}
            >
                <Text 
                    style={{
                        fontSize: 15,
                        // textAlign: 'center',
                        color: 'white'
                    }}
                >Michael Jordan</Text>
                 <Image source={require('../img/logomj.png')} style={{width:30, height:30}} />
            </TouchableOpacity>
        </View>
    )
}
