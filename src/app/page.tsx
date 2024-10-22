import Image from "next/image";
// pages/index.js
import Layout from "./Components/Layout";

export default function Home() {
  return (
    <Layout>
      <div className="text-center py-16">
        <h1 className="text-4xl font-bold">Technology And Gadgets</h1>
        <p className="mt-4 text-lg text-gray-600">
          This is the home page where you can find the latest updates.
          </p>
          {/* Add the image here*/}
          <img src="/image.png" alt="Logo"  className="mx-auto w-64 h-auto"/>

        
      </div>
    </Layout>
  );
}
