import React from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialIcons'

import styles from './styles';

export default class ConfirmCode extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            code: "",
        }
    }

    render() {
        return (
            <SafeAreaView style={styles.safeAreaContainer}>
                <View style={styles.container}>
                    <ScrollView
                        style={styles.scrollContainer}
                        contentContainerStyle={styles.scrollContainerSecond}>

                        <View style={{ width: "100%", alignItems: "center" }}>

                            <View style={styles.headerContainer}>
                                <View style={{ position: "absolute", left: 0 }}>
                                    <TouchableOpacity
                                        onPress={() => this.props.navigation.goBack()}
                                        style={styles.backButton}>
                                        <Icon name="keyboard-arrow-left" size={30} color="white" />
                                    </TouchableOpacity>
                                </View>
                                <Text style={styles.headerText}>Confirm Code</Text>
                            </View>
                            <Text style={styles.message}>Enter your email address and we will send you a verification code to reset your email.</Text>
                            <TextInput
                                value={this.state.email}
                                onChangeText={code => this.setState({ code })}
                                placeholder="Enter Code"
                                placeholderTextColor="white"
                                style={styles.textInput} />
                        </View>

                        <TouchableOpacity
                            onPress={() => this.props.navigation.navigate("ChangePassword")}
                            style={{ width: "100%", marginBottom: 50 }}>
                            <LinearGradient
                                start={{ x: 0, y: 0 }}
                                end={{ x: 1, y: 0 }}
                                colors={['#ed733d', '#ea465b', '#db3022']}
                                style={styles.button}>
                                <Text style={styles.buttonText}>CONFIRM</Text>
                            </LinearGradient>
                        </TouchableOpacity>
                    </ScrollView>
                </View>
            </SafeAreaView>
        );
    }
}
