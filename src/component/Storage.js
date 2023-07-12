/*
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useDispatch, useSelector } from "react-redux";
import {SetOperations} from '../../redux/operationAction';

export const loadData = async(operation) => {

  const store = useSelector(state => state.Operations);
  const dispatch = useDispatch();
  try {
    const jsonValueData = await AsyncStorage.getItem('@Operations');
    const data = JSON.parse(jsonValueData);
    dispatch(SetOperations(data));
  } catch (error) {
    console.log(error);
  }
};
*/
