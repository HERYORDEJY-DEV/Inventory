import React from 'react';
import {StyleSheet, Text, TextInputProps, View} from 'react-native';
import {colors} from '../../utils/colors';
import {Dropdown} from 'react-native-element-dropdown';
import Feather from 'react-native-vector-icons/Feather';

interface Props extends TextInputProps {
  label?: string;
  data: Array<{label: string; value: string | number}>;
  onChangeValue: (value: string) => void;
}
export default function SelectInput(props: Props) {
  const [state, setState] = React.useState({focused: false});

  const onFocus = (e?: any) => {
    setState(prev => ({...prev, focused: true}));
    props?.onFocus?.(e);
  };
  const onBlur = (e?: any) => {
    setState(prev => ({...prev, focused: false}));
    props?.onBlur?.(e);
  };

  const onChange = (value: {_index: number; label: string; value: string}) => {
    if (!value.value) {
      return true;
    }
    props?.onChangeValue?.(value.value);
  };

  return (
    <View style={styles.container}>
      {Boolean(props.label) && <Text style={styles.label}>{props.label}</Text>}
      <View
        style={[styles.textInputWrapper, {borderWidth: state.focused ? 2 : 0}]}>
        <Dropdown
          style={[styles.dropdown]}
          itemTextStyle={styles.itemTextStyle}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={props.data}
          search={false}
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder={props.placeholder}
          value={props.value ? props.value : ''}
          onFocus={onFocus}
          onBlur={onBlur}
          onChange={onChange}
          renderRightIcon={() => (
            <Feather color={'#999999'} name="chevron-down" size={20} />
          )}
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
    height: 56,
    borderRadius: 10,
    width: '100%',
    backgroundColor: '#FFF',
    paddingHorizontal: 10,
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
  dropdown: {
    height: 56,
    borderColor: colors.blue,
    borderWidth: 0,
    borderRadius: 8,
    paddingHorizontal: 8,
    width: '100%',
  },

  placeholderStyle: {
    fontSize: 14,
    color: '#999',
    fontFamily: 'Poppins-Regular',
  },
  selectedTextStyle: {
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
  },
  itemTextStyle: {
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});
