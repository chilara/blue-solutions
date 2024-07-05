import Body from "@/component/custom/body";
import { ApiProvider } from "@/context/apiContext";

export default function Home() {
  return (
    <ApiProvider>
      <main className="min-h-screen">
        <Body />
      </main>
    </ApiProvider>
  );
}
