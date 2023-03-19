import React from 'react';
import {Pressable, PressableProps, StyleSheet, Text} from 'react-native';
import {COLORS} from '../../theme';
import {ms, vs} from '../../utils/scale';

interface ButtonType {
  title: string;
}

const Button = ({title, ...rest}: ButtonType & PressableProps) => {
  return (
    <Pressable {...rest} style={[styles.buttonContainer, rest.style]}>
      <Text style={styles.buttonText}>{title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: COLORS.primary,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: ms(5),
    paddingVertical: vs(5),
  },
  buttonText: {
    color: COLORS.white,
  },
});
export default Button;
