import Link from "next/link";


const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-700 py-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Left Section */}
        <div>
          <h1 className="text-xl font-bold">Hekto</h1>
          <div className="flex items-center mt-4">
            <input
              type="email"
              placeholder="Enter Email Address"
              className="w-full px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none"
            />
            <button className="bg-pink-500 text-white px-4 py-2 rounded-r-md "><Link href="/signup"></Link>
              Sign Up
            </button>
          </div>
          <p className="mt-4 text-sm">
            Contact Info <br />
            17 Princess Road, London, Greater London NW1 8JR, Uk
          </p>
        </div>

        {/* Categories */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Categories</h2>
          <ul className="space-y-2">
            <li>Laptops & Computers</li>
            <li>Cameras & Photography</li>
            <li>Smart Phones & Tablets</li>
            <li>Video Games & Consoles</li>
            <li>Waterproof Headphones</li>
          </ul>
        </div>

        {/* Customer Care */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Customer Care</h2>
          <ul className="space-y-2">
            <li>My Account</li>
            <li>Discount</li>
            <li>Returns</li>
            <li>Orders History</li>
            <li>Order Tracking</li>
          </ul>
        </div>

        {/* Pages */}
        <div>
          <h2 className="text-lg font-semibold mb-4 ">Pages</h2>
          <ul className="space-y-2  text-blue-950 hover:underline">
            <li><Link href="/blog">Blog</Link></li>
            <Link href="/shopList"><li>Browse the Shop</li></Link>
            <li><Link href="">Category</Link></li>
            <li>Pre-Built Pages</li>
            <li>Visual Composer Elements</li>
            <li>WooCommerce Pages</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
