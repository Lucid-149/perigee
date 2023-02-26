import Providers from "./app/config/providers";
interface AppProps {
children: any;
}
function App({ children }: AppProps) {
return <Providers>
{children}
</Providers>;
}
export default App;
