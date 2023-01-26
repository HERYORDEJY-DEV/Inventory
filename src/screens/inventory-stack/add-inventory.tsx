import React from 'react';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import {AppContextTypes} from '../../types/context';
import {AppContext} from '../../context';
import {colors} from '../../utils/colors';
import Ionicons from 'react-native-vector-icons/Ionicons';
import InputText from '../../components/input/input-text';
import ValueInput from '../../components/input/value-input';
import {InventoryTypes} from '../../types/inventory';
import {useNavigation} from '@react-navigation/native';
import InputTextarea from '../../components/input/input-textarea';
import SelectInput from '../../components/input/select-input';
import ImagePicker, {
  Image as ImagePickProps,
} from 'react-native-image-crop-picker';
import ActionSheet, {ActionSheetRef} from 'react-native-actions-sheet';
import {SafeAreaView} from 'react-native-safe-area-context';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

const imageOptions = {
  width: 300,
  height: 400,
  cropping: true,
  includeBase64: true,
  forceJpg: true,
};
export default function AddInventory() {
  const navigation = useNavigation();
  const actionSheetRef = React.useRef<ActionSheetRef>(null);

  const {
    onAddInventories,
    state: {inventoryCategory, inventories},
  } = React.useContext(AppContext) as AppContextTypes;

  const [form, setForm] = React.useState<InventoryTypes>({
    purchasePrice: 0,
    photo: '',
    type: '',
    id: 0,
    name: '',
    description: '',
  });

  const onSetForm = (key: string, value: unknown) =>
    setForm(prevState => ({...prevState, [key]: value}));

  const onAdd = () => {
    onAddInventories({...form, id: inventories.length + 1});
    navigation.goBack();
  };

  const cleanupImages = () =>
    ImagePicker.clean()
      .then(() => {})
      .catch(() => {});

  const onCancel = () => navigation.goBack();

  const onSelectCamera = () =>
    ImagePicker.openCamera(imageOptions)
      .then((image: ImagePickProps) => {
        onSetForm('photo', `data:${image.mime};base64,${image.data}`);
        actionSheetRef.current?.hide();
      })
      .catch(() => {})
      .finally(() => cleanupImages());

  const onSelectLibrary = () =>
    ImagePicker.openPicker(imageOptions)
      .then((image: ImagePickProps) => {
        onSetForm('photo', `data:${image.mime};base64,${image.data}`);
        actionSheetRef.current?.hide();
      })
      .catch(() => {})
      .finally(() => cleanupImages());

  const renderOptionModal = (
    <ActionSheet ref={actionSheetRef}>
      <View style={styles.modalButtonSpacer} />
      <SafeAreaView style={styles.modalWrapper}>
        <Pressable style={styles.modalButton} onPress={onSelectCamera}>
          <Text style={styles.modalButonText}>Choose Camera</Text>
        </Pressable>
        <View style={styles.modalButtonSpacer} />
        <Pressable style={styles.modalButton} onPress={onSelectLibrary}>
          <Text style={styles.modalButonText}>Choose Library</Text>
        </Pressable>
      </SafeAreaView>
      <View style={styles.modalButtonSpacer} />
    </ActionSheet>
  );

  const renderPhoto = (
    <View style={styles.photoWrapper}>
      <View style={{height: 200, width: 200}}>
        <Image
          source={{uri: form.photo}}
          style={{
            height: 200,
            width: 200,
            borderRadius: 100,
          }}
        />
        <Pressable
          style={styles.updatePhotoBtn}
          onPress={() => actionSheetRef.current?.show()}>
          <Ionicons name={'camera'} color={'#FFFFFF'} size={30} />
        </Pressable>
      </View>
    </View>
  );

  const checkIfAllValidated = () =>
    Boolean(form.name) &&
    Boolean(form.purchasePrice) &&
    Number(form.purchasePrice) <= 40000 &&
    Boolean(form.type) &&
    Boolean(form.photo);

  const renderHeader = (
    <View style={styles.header}>
      <Pressable style={styles.cancelBtn} onPress={onCancel}>
        <Text style={styles.cancelText}>Cancel</Text>
      </Pressable>

      <Pressable
        style={styles.addBtn}
        onPress={onAdd}
        disabled={!checkIfAllValidated()}>
        <Text
          style={[styles.addText, {opacity: !checkIfAllValidated() ? 0.5 : 1}]}>
          Add
        </Text>
      </Pressable>
    </View>
  );

  return (
    <>
      {renderHeader}
      <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          {Boolean(form.photo) ? (
            renderPhoto
          ) : (
            <View style={styles.addPhotoWrapper}>
              <Pressable
                style={{alignItems: 'center'}}
                onPress={() => actionSheetRef.current?.show()}>
                <Ionicons name={'camera'} color={colors.blue} size={50} />
                <Text style={styles.addPhotoText}>Add photo</Text>
              </Pressable>
            </View>
          )}

          <View style={styles.formWrapper}>
            <InputText
              label={'Name'}
              placeholder={'Bracelet'}
              onChangeText={value => onSetForm('name', value)}
              value={String(form.name)}
            />

            <ValueInput
              label={'Value'}
              placeholder={'700'}
              onChangeText={value => onSetForm('purchasePrice', value)}
              value={String(form.purchasePrice)}
            />

            <SelectInput
              data={inventoryCategory}
              label={'Category'}
              value={form.type}
              placeholder={'Select a category'}
              onChangeValue={value => onSetForm('type', value)}
            />

            <InputTextarea
              label={'Description'}
              placeholder={'Optional'}
              onChangeText={value => onSetForm('description', value)}
              value={String(form.description)}
            />
          </View>
          {renderOptionModal}
        </View>
      </KeyboardAwareScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  safeAreaView: {},
  container: {
    paddingHorizontal: 10,
  },
  text: {
    fontSize: 20,
    fontWeight: '500',
    fontFamily: 'Poppins-SemiBold',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#f1f1f1',
  },
  cancelBtn: {padding: 20, paddingLeft: 10},
  cancelText: {
    fontWeight: '600',
    fontSize: 16,
    color: colors.blue,
    fontFamily: 'Poppins-SemiBold',
  },
  addBtn: {
    padding: 20,
    paddingRight: 10,
  },
  addText: {
    fontWeight: '600',
    fontFamily: 'Poppins-SemiBold',
    fontSize: 16,
    color: colors.blue,
  },
  addPhotoWrapper: {
    alignItems: 'center',
    paddingVertical: 50,
  },
  photoWrapper: {
    alignItems: 'center',
    paddingVertical: 10,
  },
  addPhotoText: {
    fontSize: 16,
    color: colors.blue,
    fontFamily: 'Poppins-SemiBold',
  },
  formWrapper: {},
  modalWrapper: {
    padding: 20,
  },
  modalButton: {
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalButonText: {
    fontSize: 16,
    fontWeight: '500',
    fontFamily: 'Poppins-Medium',
  },
  modalButtonSpacer: {
    margin: 20,
  },
  updatePhotoBtn: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    height: 50,
    width: 50,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.red,
  },
  contentContainer: {
    flexGrow: 1,
    paddingBottom: 40,
  },
});
