import React from 'react';
import {StyleSheet} from 'react-native';
import {Neomorph as Neo} from 'react-native-neomorph-shadows';

const Neomorph = ({children, style}) => {
  return <Neo style={{...s.container, ...style}}>{children}</Neo>;
};

const s = StyleSheet.create({
  container: {
    shadowRadius: 7,
    borderRadius: 8,
    backgroundColor: '#DEE9FD',
    width: 300,
    height: 40,
    paddingHorizontal: 10,
    marginTop: 20,
    justifyContent: 'center',
  },
});
export default Neomorph;
