import React, { Component } from 'react';
import {
    Animated,
    Dimensions,
    StyleSheet,
} from 'react-native';
const ImagesArray = require('../../components/producto/ImagesArray').default

const { width: screenWidth } = Dimensions.get('window');
const width = screenWidth/2;
const height = screenWidth/2;

export class ProductoAnimado extends Component {
    static WIDTH = width;

    render = () => {
        const { animatedValue, product, index } = this.props;

        return (
            <Animated.View style={styles.container}>
                <Animated.Image
                    style={[
                        {width:width,height:width,
                            transform: [
                                {
                                    scale: animatedValue.interpolate({
                                        inputRange: [index - 1, index, index + 1],
                                        outputRange: [0.8, 1.0, 0.8],
                                        extrapolate: 'clamp',
                                    }),
                                },
                                {
                                    rotate: animatedValue.interpolate({
                                        inputRange: [index - 1, index, index + 1],
                                        outputRange: ['-90deg', '0deg', '90deg'],
                                        extrapolate: 'clamp',
                                    }),
                                },
                            ],
                        },
                    ]}
                    resizeMode={"contain"}
                    source={ImagesArray(product.imagen_producto)}
                />
                <Animated.Text
                    style={[
                        styles.title,
                        {
                            opacity: animatedValue.interpolate({
                                inputRange: [index - 1, index, index + 1],
                                outputRange: [0, 1, 0],
                            }),
                            transform: [
                                {
                                    translateY: animatedValue.interpolate({
                                        inputRange: [index - 1, index, index + 1],
                                        outputRange: [-30, 0, -30],
                                        extrapolate: 'clamp',
                                    }),
                                },
                            ],
                        },
                    ]}>
                    {product.producto.toUpperCase()}
                </Animated.Text>
            </Animated.View>
        );
    };
}


const styles = StyleSheet.create({
    container: {
        width: width,
        alignItems: 'center',
        overflow: 'visible',
    },
    planet:{
        height: screenWidth/3.5,

    }
    ,
    title: {
        fontFamily: 'roboto-700',
        fontSize: 20,
        textAlign: 'center',
        fontWeight: 'bold',
        letterSpacing: 1.2,
        color: 'white',
        backgroundColor: 'transparent',
    },
});
