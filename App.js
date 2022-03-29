import Navigation from "./Navigation";
import { ContextProvider } from "./context/Main";

export default function App() {
  return (
    <ContextProvider>
      <Navigation />
    </ContextProvider>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
