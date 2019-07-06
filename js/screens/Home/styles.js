import { StyleSheet, Dimensions } from "react-native";
const { height, width } = Dimensions.get("window");
const styles = StyleSheet.create({
  heading:{
    marginTop:0.3*height,
    marginBottom:20,
    marginLeft:"auto",
    marginRight:"auto"
  },
    list: {
    height: 200,
  
  },
  image: {
    width: 200,
    height: 200
  }
});
export default styles;
