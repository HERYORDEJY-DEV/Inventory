import React from 'react';
import {StyleSheet, Text, TextInput, TextInputProps, View} from 'react-native';
import {colors} from '../../utils/colors';

interface Props extends TextInputProps {
  label?: string;
}
export default function InputTextarea(props: Props) {
  const [state, setState] = React.useState({focused: false});

  const onFocus = (e: any) => {
    setState(prev => ({...prev, focused: true}));
    props?.onFocus?.(e);
  };
  const onBlur = (e: any) => {
    setState(prev => ({...prev, focused: false}));
    props?.onBlur?.(e);
  };

  return (
    <View style={styles.container}>
      {Boolean(props.label) && <Text style={styles.label}>{props.label}</Text>}
      <View
        style={[styles.textInputWrapper, {borderWidth: state.focused ? 2 : 0}]}>
        <TextInput
          multiline={true}
          style={[styles.textInput]}
          {...props}
          onFocus={onFocus}
          onBlur={onBlur}
          returnKeyLabel={'done'}
          returnKeyType={'done'}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {marginBottom: 30},
  label: {fontWeight: '600', marginBottom: 5, fontFamily: 'Poppins-Medium'},
  textInputWrapper: {
    flexDirection: 'row',
    height: 150,
    borderRadius: 10,
    width: '100%',
    backgroundColor: '#FFF',
    paddingHorizontal: 10,
    paddingTop: 10,
    borderColor: colors.blue,
    overflow: 'hidden',
  },
  textInput: {
    flex: 1,
    height: 150,
    width: '100%',
    backgroundColor: '#FFF',
    justifyContent: 'center',
    borderWidth: 0,
    textAlignVertical: 'top',
    fontFamily: 'Poppins-Regular',
  },
});
