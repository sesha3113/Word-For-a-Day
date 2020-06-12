import {StyleSheet} from 'react-native';
const WordForADayPageStyle = StyleSheet.create({
  container: {
    flex: 1,
  },
  TopBox: {
    flex: 1,
    backgroundColor: '#3C1C96',
    alignItems: 'center',
  },
  MiddleBox: {
    flex: 2,
    backgroundColor: 'green',
  },
  LowerBox: {
    flexDirection: 'column',
    backgroundColor: '#C4C4C4',
    width: 390,
    height: 550,
  },
  TopBoxText: {
    alignItems: 'center',
    marginTop: 50,
    fontSize: 30,
    fontFamily: '',
    color: '#DCD6D6',
  },
  InnerContainer: {
    // flex: 7,
    height: 650,
    backgroundColor: '#536580',
    justifyContent: 'center',
    alignItems: 'center',
  },
  MiddleWordForADay: {
    fontSize: 18,
    fontFamily: 'Galdeano',
    color: '#E7D4D4',
    marginTop: 20,
    marginLeft: 7,
  },
  Line: {
    borderBottomColor: 'white',
    borderBottomWidth: 1,
  },
  Word: {
    fontSize: 40,
    color: '#E7D4D4',
    justifyContent: 'center',
    alignItems: 'center',
  },
  LowerBoxHeader: {
    marginLeft: 15,
    marginTop: 20,
    fontSize: 22,
    color: 'black',
    fontFamily: 'arial',
  },
  MeaningAndExample: {
    marginTop: 10,
    marginLeft: 40,
    fontSize: 18,
  },
});
export default WordForADayPageStyle;
