import React from 'react';
import {StyleSheet, Text, TextInput, TextInputProps, View} from 'react-native';
import {colors} from '../../utils/colors';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

interface Props extends TextInputProps {
  label?: string;
}
export default function ValueInput(props: Props) {
  const [state, setState] = React.useState({focused: false, error: ''});

  const onSetState = (key: string, value: string) =>
    setState(prevState => ({...prevState, [key]: value}));

  const onFocus = (e: any) => {
    setState(prev => ({...prev, focused: true}));
    props?.onFocus?.(e);
  };
  const onBlur = (e: any) => {
    setState(prev => ({...prev, focused: false}));
    props?.onBlur?.(e);
  };

  const onChangeText = (value: string) => {
    onSetState('error', '');

    if (isNaN(Number(value))) {
      return true;
    }
    if (Number(value) > 40000) {
      onSetState('error', 'Maximum allowed total value is €40,000');
    }
    props?.onChangeText?.(value);
  };

  return (
    <View style={styles.container}>
      {Boolean(props.label) && <Text style={styles.label}>{props.label}</Text>}
      <View
        style={[
          styles.textInputWrapper,
          {
            borderWidth: state.focused || Boolean(state.error) ? 2 : 0,
            borderColor: Boolean(state.error) ? colors.red : colors.blue,
          },
        ]}>
        <TextInput
          style={[
            styles.textInput,
            {
              color: Boolean(state.error) ? colors.red : '#000000',
            },
          ]}
          {...props}
          onFocus={onFocus}
          onBlur={onBlur}
          onChangeText={onChangeText}
          value={Boolean(Number(props.value)) ? props.value : ''}
          keyboardType={'numeric'}
        />
        <MaterialIcons
          name={'euro-symbol'}
          size={15}
          color={Boolean(state.error) ? colors.red : '#000000'}
        />
      </View>
      {Boolean(state.error) && <Text style={styles.error}>{state.error}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {marginBottom: 30},
  label: {fontWeight: '600', marginBottom: 5, fontFamily: 'Poppins-Medium'},
  error: {marginBottom: 5, fontFamily: 'Poppins-Regular', color: colors.red},
  textInputWrapper: {
    flexDirection: 'row',
    height: 56,
    borderRadius: 10,
    width: '100%',
    backgroundColor: '#FFF',
    paddingHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: colors.blue,
    overflow: 'hidden',
  },
  textInput: {
    flex: 1,
    height: 56,
    borderRadius: 10,
    width: '100%',
    backgroundColor: '#FFF',
    justifyContent: 'center',
    borderWidth: 0,
    fontFamily: 'Poppins-Regular',
  },
});
