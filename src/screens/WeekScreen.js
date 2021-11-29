import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

class WeekScreen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>WeekScreen</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default WeekScreen;
