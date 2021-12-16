import Head from "next/head";
import Card from "../components/Card";
import Layout from "../components/Layout";

export default function Home() {
  return (
    <Layout>
      <br />
      <div className="flex flex-wrap ">
        <Card />
        <Card />
        <Card />
      </div>
    </Layout>
  );
}
