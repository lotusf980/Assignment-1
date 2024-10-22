// pages/about.js
import Layout from "../Components/Layout";

export default async function About() {

  await new Promise(resolve => {setTimeout (resolve,3000);
  })
  return (
    <Layout>
      <div className="max-w-4xl mx-auto py-16">
        <h1 className="text-4xl font-bold">About Us</h1>
        <p className="mt-4 text-lg text-gray-600">
          At Technology and gadgets ,we are passionate about exploring the latest tech trends and gadgets.Our
           mission is to provide you with expert reviews in depth guides, and the most up-to-date news to help
            you make informed decision.

            Whether you're a tech enthusiast or a casual user,we deliver unbiased, hands-on insight into the world of
            technology,stay ahead of the curve by following our updates and joining our growing community of gadgets lovers!
        </p>
      </div>
    </Layout>
  );
}
