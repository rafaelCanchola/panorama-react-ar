import React, {Component, Fragment} from "react";
import {Dimensions, StyleSheet, View, Platform, Image, ScrollView, Animated} from "react-native";
import {PinchGestureHandler, State} from "react-native-gesture-handler";
const ImagesArray = require('../../components/producto/ImagesArray').default

const screenHeight = Dimensions.get('window').height
const screenWidth = Dimensions.get("window").width
const screenContainer = screenWidth - 30

export default class ImagenInfografia extends Component{

    scale1 = new Animated.Value(1);
    scale2 = new Animated.Value(1);

    onZoomEvent1 = Animated.event(
        [
            {
                nativeEvent: { scale: this.scale1 }
            }
        ],
        {
            useNativeDriver: true
        }
    )

    onZoomStateChange1 = event => {
        if (event.nativeEvent.oldState === State.ACTIVE) {
            Animated.spring(this.scale1, {
                toValue: this.scale1,
                useNativeDriver: true
            }).start()
        }
    }

    onZoomEvent2 = Animated.event(
        [
            {
                nativeEvent: { scale: this.scale2 }
            }
        ],
        {
            useNativeDriver: true
        }
    )

    onZoomStateChange2 = event => {
        if (event.nativeEvent.oldState === State.ACTIVE) {
            if(Number.parseInt(JSON.stringify(this.scale2)) >=2){
                this.scale2 = new Animated.Value(2);
            }
            Animated.spring(this.scale2, {
                toValue: this.scale2,
                useNativeDriver: true
            }).start()
        }

    }
render(){
        const {route,navigation} = this.props;
    return(
        <View style={styles.container}>
            <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollViewContainer} pagingEnabled={true}>
                {route.params.image === 'info1' ?
                    <Fragment>
                        {Platform.OS === 'ios' ?
                            <Fragment>
                                <ScrollView horizontal={true} contentOffset={{x: screenWidth}} contentContainerStyle={{
                                    width: screenWidth*3,
                                    flexGrow: 1,
                                    justifyContent: 'center'}}>
                                    <PinchGestureHandler onGestureEvent={this.onZoomEvent1}
                                                         onHandlerStateChange={this.onZoomStateChange1}>
                                        <Animated.Image source={ImagesArray('info1_1')} resizeMode={'contain'} style={{
                                            width: screenWidth,
                                            height: screenHeight/1.12,
                                            transform: [{scale: this.scale1}]
                                        }}/>
                                    </PinchGestureHandler>
                                </ScrollView>
                                <ScrollView horizontal={true} contentOffset={{x: screenWidth}} contentContainerStyle={{
                                    width: screenWidth * 3,
                                    flexGrow: 1,
                                    justifyContent: 'center'}} >
                                    <PinchGestureHandler onGestureEvent={this.onZoomEvent2}
                                                         onHandlerStateChange={this.onZoomStateChange2}>
                                        <Animated.Image source={ImagesArray('info1_2')} resizeMode={'contain'} style={{
                                            width: screenWidth,
                                            height: screenHeight/1.1,
                                            transform: [{scale: this.scale2}]
                                        }}/>
                                    </PinchGestureHandler>
                                </ScrollView>
                            </Fragment>
                            : <Fragment>
                                <ScrollView horizontal={true} contentContainerStyle={{
                                    width: screenWidth*2,
                                    flexGrow: 1,
                                    justifyContent: 'center'
                                }}>
                                    <Image source={ImagesArray('info1_1')} resizeMode={'contain'} style={{
                                    width: screenWidth*2,
                                    height: screenHeight/1.1,}}/>
                                </ScrollView>
                                <ScrollView horizontal={true} contentContainerStyle={{
                                    width: screenWidth*2,
                                    flexGrow: 1,
                                    justifyContent: 'center'
                                }}>
                                    <Image source={ImagesArray('info1_2')} resizeMode={'contain'} style={{
                                        width: screenWidth*2,
                                        height: screenHeight/1.1,}}/>
                                </ScrollView>
                            </Fragment>
                        }
                    </Fragment>
                        :
                    <Fragment>
                        {Platform.OS === 'ios' ?
                            <Fragment>
                                <ScrollView horizontal={true}
                                            contentContainerStyle={{width: screenWidth * 3, flexGrow: 1, justifyContent: 'center'}}
                                            contentOffset={{x: screenWidth}}>
                                    <PinchGestureHandler onGestureEvent={this.onZoomEvent1} onHandlerStateChange={this.onZoomStateChange1}>
                                        <Animated.Image source={ImagesArray(route.params.image)} resizeMode={'contain'} style={{
                                            width: screenWidth,
                                            height: screenHeight/1.1,
                                            transform: [{scale: this.scale1}]
                                        }}/>
                                    </PinchGestureHandler>
                                </ScrollView>
                            </Fragment>
                            :
                            <Fragment>
                                <ScrollView horizontal={true} contentContainerStyle={{
                                    width: screenWidth*2,
                                    flexGrow: 1,
                                    justifyContent: 'center'
                                }}>
                                    <Image source={ImagesArray(route.params.image)} resizeMode={'contain'} style={{
                                        width: screenWidth*2,
                                        height: screenHeight/1.1,}}/>
                                </ScrollView>
                            </Fragment>
                        }
                    </Fragment>
                }
            </ScrollView>
        </View>
    );
}


}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems:"center",
    },
    scrollView: {
        width: screenWidth-15,
    },
    scrollViewContainer: {
        alignItems: 'center',
    },
    textoPrincipal: {
        fontFamily: "montserrat-regular",
        color: "#121212",
        width: screenContainer,
        fontSize: 16,
        margin:10,
        textAlign:'justify',
    },
});