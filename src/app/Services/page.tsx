
import Layout from "../Components/Layout";

export default function Services() {

  throw new Error(`Services not available`)
  return (
    <Layout>
      <div className="py-16 bg-gray-100">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-6">Our Services</h1>
          <p className="text-lg text-gray-600 mb-12">
            We offer a range of services to cater to all your technology and gadget needs.
          </p>

          {/* Services grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            
            {/* Service 1 */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <img
                src="/image1.png"
                alt="Product Reviews"
                className="w-full h-48 object-cover rounded-md mb-6"
              />
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Product Reviews</h3>
              <p className="text-gray-600">
                We provide in-depth reviews of the latest gadgets to help you make informed decisions.
              </p>
            </div>

            {/* Service 2 */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <img
                src="/image2.png"
                alt="Tech Consultancy"
                className="w-full h-48 object-cover rounded-md mb-6"
              />
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Tech Consultancy</h3>
              <p className="text-gray-600">
                Our experts are here to advise you on your technology projects, from planning to execution.
              </p>
            </div>

            {/* Service 3 */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <img
                src="/image3.png"
                alt="Gadget Repair"
                className="w-full h-48 object-cover rounded-md mb-6"
              />
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Gadget Repair</h3>
              <p className="text-gray-600">
                We offer repair services for a wide range of gadgets, ensuring they work as good as new.
              </p>
            </div>

            {/* Add more services as needed */}

          </div>
        </div>
      </div>
    </Layout>
  );
}

