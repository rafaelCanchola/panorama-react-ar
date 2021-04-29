import React from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { useNavigation } from '@react-navigation/native';

function FooterInicio(props) {
    const navigation = useNavigation();
    return (
        <View style={[styles.container, props.style]}>
            <TouchableOpacity
                onPress={() => navigation.navigate('Ayuda')}
                style={styles.botonAyuda}
            >
                <Text style={styles.textoAyuda}>Ayuda</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => console.log("Navigate to Home")}
                style={styles.botonInicio}
            >
                <Icon name="book-open-variant" style={styles.iconoInicio}></Icon>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => navigation.navigate('Contacto')}
                style={styles.botonContacto}
            >
                <Text style={styles.textoContacto}>Contacto</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#FFF",
        flexDirection: "row",
        shadowColor: "#111",
        shadowOffset: {
            width: 0,
            height: -2
        },
        shadowOpacity: 0.2,
        shadowRadius: 1.2,
        elevation: 3,
        alignItems: "center"
    },
    botonAyuda: {
        flex: 1,
        paddingTop: 8,
        paddingBottom: 10,
        paddingHorizontal: 12,
        minWidth: 80,
        maxWidth: 168,
        alignItems: "center"
    },
    textoAyuda: {
        fontFamily: "montserrat-regular",
        fontSize: 16,
        color: "#9E9E9E",
        backgroundColor: "transparent",
        paddingTop: 4
    },
    botonInicio: {
        flex: 1,
        paddingTop: 6,
        paddingBottom: 10,
        paddingHorizontal: 12,
        minWidth: 80,
        maxWidth: 168,
        alignItems: "center"
    },
    iconoInicio: {
        backgroundColor: "transparent",
        color: "rgba(84,88,89,1)",
        fontSize: 24,
        opacity: 0.8
    },
    botonContacto: {
        flex: 1,
        paddingTop: 8,
        paddingBottom: 10,
        paddingHorizontal: 12,
        minWidth: 80,
        maxWidth: 168,
        alignItems: "center"
    },
    textoContacto: {
        fontFamily: "montserrat-regular",
        fontSize: 16,
        color: "#9E9E9E",
        backgroundColor: "transparent",
        paddingTop: 4
    }
});

export default FooterInicio;
