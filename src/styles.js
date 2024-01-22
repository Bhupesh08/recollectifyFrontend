import { makeStyles } from "@material-ui/core/styles";

const customFontRule = {
  "@font-face": {
    fontFamily: "AwesomeFont", // The font family name you want to use
    src: "url('./fonts/font.tff')", // The path to your font file
    /* Additional font properties such as font-weight and font-style can be specified here. */
  },
};

export default makeStyles(() => ({
  appBar: {
    borderRadius: 15,
    margin: "30px 0",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  heading: {
    color: "#cc5577",
    fontFamily: "AwesomeFont",
    //color: "#5a082d",
  },
  image1: {
    marginLeft: "15px",
  },
  image2: {
    marginRight: "15px",
  },
}));
