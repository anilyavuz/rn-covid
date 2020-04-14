import React from "react";
import {
  Animated,
  Dimensions,
  Image,
  FlatList,
  Modal,
  StyleSheet,
  ScrollView
} from "react-native";
import { Block, Button, Text } from "expo-ui-kit";

const colors = {
  accent: "#F3534A",
  primary: "#0AC4BA",
  secondary: "#2BDA8E",
  tertiary: "#FFE358",
  black: "#323643",
  white: "#FFFFFF",
  gray: "#9DA3B4",
  gray2: "#C5CCD6"
};

const sizes = {
  // global sizes
  base: 16,
  font: 14,
  radius: 6,
  padding: 25,

  // font sizes
  h1: 26,
  h2: 20,
  h3: 18,
  title: 18,
  header: 16,
  body: 14,
  caption: 12
};

const fonts = {
  h1: {
    fontSize: sizes.h1
  },
  h2: {
    fontSize: sizes.h2
  },
  h3: {
    fontSize: sizes.h3
  },
  header: {
    fontSize: sizes.header
  },
  title: {
    fontSize: sizes.title
  },
  body: {
    fontSize: sizes.body
  },
  caption: {
    fontSize: sizes.caption
  }
};

const { width, height } = Dimensions.get('window');

class MainPage extends React.Component {
  static navigationOptions = {
    header: null,
  }

  scrollX = new Animated.Value(0);

  state = {
    showTerms: false,
  }

  renderTermsService() {
    return (
      <Modal animationType="slide" visible={this.state.showTerms}>
        <Block padding={sizes.padding * 2, sizes.padding} space="between" >
          <Text h2 light>
            Üyelik Koşulları
        </Text>
          <ScrollView style={{ paddingVertical: sizes.padding }}>
            <Text caption gray height={18}>
              acidThunderacidThunderacidThunderacidThunderacidThunderacidThunderacidThunderacidThunder acidThunderacidThunder acidThunder acidThunder acidThunder acidThunder acidThunder acidThunder
        </Text>
            <Text caption gray height={18}>
              Bak bu asansör türk
              Bak bu dolma normal
              Rakı ver masaya mualla
              Yağ gibiymiş mübarek
              Görez bilemez bu masa
              Nerede durduğunu
              Apartman boşluğuna bir aile kurduğunu
              Bak bu asansör türk
              Dura bas kalalım arada derede arada.
              Inicem ben burda.
              Vurdu yola Tayyar Ahmet
              Kırdı dümeni beyoğluna.
              Tekimiz bok hepimiz çok diye
              Selam verdi elin oğluna.
              Yolda burda bi yerde.
              Aklı rakıda ciğerde.Bak bu asansör türk
              Bak bu dolma normal
              Rakı ver masaya mualla
              Yağ gibiymiş mübarek
              Görez bilemez bu masa
              Nerede durduğunu
              Apartman boşluğuna bir aile kurduğunu
              Bak bu asansör türk
              Dura bas kalalım arada derede arada.
              Inicem ben burda.
              Vurdu yola Tayyar Ahmet
              Kırdı dümeni beyoğluna.
              Tekimiz bok hepimiz çok diye
              Selam verdi elin oğluna.
              Yolda burda bi yerde.
              Aklı rakıda ciğerde.Bak bu asansör türk
              Bak bu dolma normal
              Rakı ver masaya mualla
              Yağ gibiymiş mübarek
              Görez bilemez bu masa
              Nerede durduğunu
              Apartman boşluğuna bir aile kurduğunu
              Bak bu asansör türk
              Dura bas kalalım arada derede arada.
              Inicem ben burda.
              Vurdu yola Tayyar Ahmet
              Kırdı dümeni beyoğluna.
              Tekimiz bok hepimiz çok diye
              Selam verdi elin oğluna.
              Yolda burda bi yerde.
              Aklı rakıda ciğerde.Bak bu asansör türk
              Bak bu dolma normal
              Rakı ver masaya mualla
              Yağ gibiymiş mübarek
              Görez bilemez bu masa
              Nerede durduğunu
              Apartman boşluğuna bir aile kurduğunu
              Bak bu asansör türk
              Dura bas kalalım arada derede arada.
              Inicem ben burda.
              Vurdu yola Tayyar Ahmet
              Kırdı dümeni beyoğluna.
              Tekimiz bok hepimiz çok diye
              Selam verdi elin oğluna.
              Yolda burda bi yerde.
              Aklı rakıda ciğerde.
        </Text>
            <Text caption gray height={18}>
              Dön evine tayyar karın bekler.
              Niye diye sormaz
              Hazır yemekler.
              Dön evine tayyar karın bekler.
              Niye diye sormaz
              Hazır yemekler.
              Ye yemeyini bak televizyona.
              Şalalala lalala
              Kuyuya düşmüş it gibi
              Telaşlı aptal bitkinim
              Ama yine gelir beni bulur bu kafa.
              Moruk, yok böyle bi sinema.
              Görez bilemez bu masa
              Nerede durduğunu
              Apartman boşluğuna bir aile kurduğunu
              Kuyuya düşmüş it gibi
              Telaşlı aptal bitkinim
              Ama yine gelir beni bulur bu kafa.
              Moruk, yok böyle bi sinema.

      
        </Text>
          </ScrollView>
          <Button gradient onPress={() => this.setState({ showTerms: false })}>
            <Text center white>Kabul Ediyorum</Text>
          </Button>
        </Block>
      </Modal>
    )
  }

  renderIllustrations() {
    const { illustrations } = this.props;
    return (
      <FlatList
        horizontal
        pagingEnabled
        scrollEnabled
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={16}
        snapToAlignment="center"
        data={illustrations}
        extractDate={this.state}
        keyExtractor={(item, index) => '${item.id}'}
        renderItem={({ item }) => (
          <Image
            source={item.source}
            resizeMode="contain"
            style={{ width, height: height / 3, overflow: 'visible' }}
          />
        )}
        onScroll={Animated.event([
          {
            nativeEvent: { contentOffset: { x: this.scrollX } }
          }
        ])}
      />
    );
  }

  renderSteps() {
    const { illustrations } = this.props;
    const stepPosition = Animated.divide(this.scrollX, width);
    return (
      <Block row center middle style={styles.stepsContainer}>
        {illustrations.map((item, index) => {
          const opacity = stepPosition.interpolate({
            inputRange: [index - 1, index, index + 1],
            outputRange: [0.4, 1, 0.4],
            extrapolate: "clamp"
          });
          return (<Block animated flex={false} key={'step-${index}'} color="gray" style={[styles.steps, { opacity }]} />
          )
        })}

      </Block>
    )
  }

  render() {
    return (
      <Block>
        <Block center middle flex={0.8}>
          <Text h1 center bold>
            Corona
            <Text h1 primary>
              Takip.
            </Text>
          </Text>
          <Text h3 gray2 style={{ marginTop: sizes.padding / 2 }}>#EvdeKalTürkiye</Text>
        </Block>
        <Block center middle>
          {this.renderIllustrations()}
          {this.renderSteps()}
        </Block>
        <Block middle flex={0.1} margin={[0, sizes.padding * 2]}>
          <Button gradient onPress={() => navigation.navigate('Signup')}>
            <Text center semibold white>Giriş Yap</Text>
          </Button>
        </Block>
        <Block middle flex={0.2} margin={[0, sizes.padding * 2]}>
          <Button onPress={() => this.setState({ showTerms: true })}>
            <Text center caption white>Üyelik Koşulları</Text>
          </Button>

        </Block>
        {this.renderTermsService()}
      </Block>
    )
  }
}

MainPage.defaultProps = {
  illustrations: [
    { id: 1, source: require('/Users/anilyavuz/rn-covid/assets/img_1.png') },
    { id: 2, source: require('/Users/anilyavuz/rn-covid/assets/vitamins_1.png') },
  ],
};

export default MainPage;

const styles = StyleSheet.create({
  stepsContainer: {
    position: "absolute",
    bottom: sizes.base * 3,
    right: 0,
    left: 0
  },
  steps: {
    width: 5,
    height: 5,
    borderRadius: 5,
    marginHorizontal: 2.5
  }
});