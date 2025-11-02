import { Image } from 'expo-image';
import { Platform, Text, StyleSheet, TextProps } from 'react-native';
import { View } from 'react-native-reanimated/lib/typescript/Animated';
import { HelloWave } from '@/components/hello-wave';
import ParallaxScrollView from '@/components/parallax-scroll-view';
import { Link } from 'expo-router';


type CustomTextProps = TextProps & {
  type?: 'title' | 'body' | 'caption';
};


export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          
        />
      }>
      <View style={styles.titleContainer}>
        <Text >Welcome!</Text>
        <HelloWave />
      </View>
      <View style={styles.stepContainer}>
        <Text >Step 1: Try it</Text>
        <Text>
          Edit <Text>app/(tabs)/index.tsx</Text> to see changes.
          Press{' '}
          <Text >
            {Platform.select({
              ios: 'cmd + d',
              android: 'cmd + m',
              web: 'F12',
            })}
          </Text>{' '}
          to open developer tools.
        </Text>
      </View>
      <View style={styles.stepContainer}>
        <Link href="/modal">
          <Link.Trigger>
            <Text >Step 2: Explore</Text>
          </Link.Trigger>
          <Link.Preview />
          <Link.Menu>
            <Link.MenuAction title="Action" icon="cube" onPress={() => alert('Action pressed')} />
            <Link.MenuAction
              title="Share"
              icon="square.and.arrow.up"
              onPress={() => alert('Share pressed')}
            />
            <Link.Menu title="More" icon="ellipsis">
              <Link.MenuAction
                title="Delete"
                icon="trash"
                destructive
                onPress={() => alert('Delete pressed')}
              />
            </Link.Menu>
          </Link.Menu>
        </Link>

        <Text>
          {`Tap the Explore tab to learn more about what's included in this starter app.`}
        </Text>
      </View>
      <View style={styles.stepContainer}>
        <Text >Entry Screen - Awesome</Text>
        <Text>
          {`When you're ready, run `}
          <Text >npm run reset-project</Text> to get a fresh{' '}
          <Text >app</Text> directory. This will move the current{' '}
          <Text >app</Text> to{' '}
          <Text >app-example</Text>.
        </Text>
      </View>
      <View>
  <Text style={styles.largeText}>Typescript is great if you practice more</Text>
  <Text style={styles.mediumText}>React Native provides you a single codebase for cross platforms</Text>
  <Text style={styles.smallText}>ALX is awesome</Text>
</View>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
   stepContainer: {
    backgroundColor: "#90caf9",
  },
  largeText: {
    fontSize: 30,
    color: "#f44336",
    marginBottom: 5,
    fontWeight: "700",
    fontVariant: ["small-caps"],
  },
  mediumText: {
    fontSize: 20,
    color: "#9c27b0",
    marginBottom: 10,
    fontWeight: "500",
    textAlign: "right",
  },
  smallText: {
    fontSize: 15,
    color: "#2196f3",
    fontWeight: "400",
    textAlign: "center",
  },
});
