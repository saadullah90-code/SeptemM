
import Layout from "@/components/common/Layout";
import "@/styles/main.scss";
import dynamic from "next/dynamic";

// SpeedInsights ko dynamically import kar rahe hain taake client side pe hi render ho
const SpeedInsights = dynamic(
  () => import("@vercel/speed-insights/react").then((mod) => mod.SpeedInsights),
  { ssr: false }
);

export default function App({ Component, pageProps }) {
  console.log("SpeedInsights component loaded ✅");

  return (
    <Layout>
      <Component {...pageProps} />
      <SpeedInsights debug />
    </Layout>
  );
}
