import propTypes from "prop-types";
import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { images } from "../images";
import { theme } from "../theme";
import IconButton from "./IconButton";

const Task = ({text}) => {
    return(
        <View style = {taskStyle.container}>
            <IconButton type={images.unchecked} />
            <Text style={taskStyle.contents}>{text}</Text>
            <IconButton type={images.edit} />
        </View>
    )
}

const taskStyle = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: theme.itemBackground,
        borderRadius: 10,
        padding: 5,
        marginTop: 3,
        marginLeft: 0,
    },

    contents: {
        flex: 1,
        fontSize: 24,
        color: theme.text,
    },
});

Task.propTypes = {
    text: propTypes.string.isRequired,
};

export default Task;