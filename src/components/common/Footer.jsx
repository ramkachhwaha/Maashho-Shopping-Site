import {
    FaFacebook, FaInstagram, FaLinkedin,
    FaShoppingBag, FaHeadset, FaTruck, FaWallet, FaShieldAlt,
    FaCcVisa, FaCcMastercard, FaCcPaypal, FaCcAmazonPay,
    FaPhoneAlt, FaEnvelope, FaMapMarkerAlt
} from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { Link } from 'react-router';

export default function Footer() {
    return (
        <footer className="bg-white text-gray-700 dark:bg-gray-950 dark:text-gray-300 border-t border-gray-200 dark:border-gray-800 mt-auto transition-colors duration-300">

            {/* --- Section 1: Service Features (Highlights) --- */}
            <div className="border-b border-gray-200 dark:border-gray-800">
                <div className="max-w-[1320px] mx-auto px-4 py-8">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6  cursor-pointer ">

                        <FeatureItem icon={<FaTruck className="text-3xl text-indigo-600" />} title="Free Shipping" desc="On all orders over ₹500" />
                        <FeatureItem icon={<FaHeadset className="text-3xl text-indigo-600" />} title="24/7 Support" desc="Contact us anytime" />
                        <FeatureItem icon={<FaWallet className="text-3xl text-indigo-600" />} title="Secure Payment" desc="100% protected payment" />
                        <FeatureItem icon={<FaShieldAlt className="text-3xl text-indigo-600" />} title="Money Back" desc="30 days guarantee" />

                    </div>
                </div>
            </div>

            {/* --- Section 2: Main Footer Links --- */}
            <div className="max-w-[1320px] mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

                    {/* Col 1: Brand & Contact */}
                    <div>
                        <Link to="/" className="flex items-center gap-2 text-2xl font-bold text-indigo-600 dark:text-indigo-400 mb-6">
                            <FaShoppingBag />
                            <span>Maashho</span>
                        </Link>
                        <p className="text-sm text-gray-500 dark:text-gray-400 mb-6 leading-relaxed">
                            Your one-stop shop for all things lifestyle. We provide the best quality products at the most affordable prices.
                        </p>

                        <div className="space-y-3 text-sm">
                            <div className="flex items-center gap-3">
                                <FaMapMarkerAlt className="text-indigo-500" />
                                <span>123 Market Street, Indore, India</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <FaPhoneAlt className="text-indigo-500" />
                                <span>+91 98765 ***10</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <FaEnvelope className="text-indigo-500" />
                                <span>support@maashho.com</span>
                            </div>
                        </div>
                    </div>

                    {/* Col 2: Shopping Links */}
                    <div>
                        <h3 className="text-lg font-bold mb-6 text-gray-900 dark:text-white">Shop</h3>
                        <ul className="space-y-3 text-sm">
                            <FooterLink text="All Products" />
                            <FooterLink text="New Arrivals" />
                            <FooterLink text="Featured Items" />
                            <FooterLink text="Discounted" />
                            <FooterLink text="Electronics" />
                        </ul>
                    </div>

                    {/* Col 3: Information */}
                    <div>
                        <h3 className="text-lg font-bold mb-6 text-gray-900 dark:text-white">Information</h3>
                        <ul className="space-y-3 text-sm">
                            <FooterLink text="About Us" />
                            <FooterLink text="Contact Us" />
                            <FooterLink text="Privacy Policy" />
                            <FooterLink text="Terms & Conditions" />
                            <FooterLink text="FAQs" />
                        </ul>
                    </div>

                    {/* Col 4: Newsletter & Socials */}
                    <div>
                        <h3 className="text-lg font-bold mb-6 text-gray-900 dark:text-white">Stay Connected</h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                            Subscribe to our newsletter for exclusive offers.
                        </p>

                        <form className="mb-6">
                            <div className="flex rounded-md shadow-sm overflow-hidden border border-gray-300 dark:border-gray-700 focus-within:border-indigo-500">
                                <input type="email" placeholder="Enter Email" className="w-full px-3 py-2 bg-transparent outline-none text-sm dark:text-white" />
                                <button className="bg-indigo-600 text-white px-4 text-sm font-semibold hover:bg-indigo-500">Subscribe</button>
                            </div>
                        </form>

                        <h4 className="text-sm font-bold mb-3 text-gray-900 dark:text-white">Follow Us</h4>
                        <div className="flex gap-3">
                            <SocialIcon icon={<FaFacebook />} />
                            <SocialIcon icon={<FaXTwitter />} />
                            <SocialIcon icon={<FaInstagram />} />
                            <SocialIcon icon={<FaLinkedin />} />
                        </div>
                    </div>

                </div>
            </div>

            {/* --- Section 3: Bottom Bar (Copyright & Payment) --- */}
            <div className="bg-gray-100 dark:bg-gray-900 py-6 border-t border-gray-200 dark:border-gray-800">
                <div className="max-w-[1320px] mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-sm text-gray-500 dark:text-gray-400 text-center md:text-left">
                        © {new Date().getFullYear()} Maashho. All Rights Reserved. Designed by <a href="https://github.com/ramkachhwaha" className="text-indigo-600 hover:text-indigo-500">Raam </a>.
                    </p>

                    <div className="flex gap-4 text-2xl text-gray-400 dark:text-gray-500 cursor-pointer">
                        <FaCcVisa className="hover:text-blue-700 transition-colors cursor-pointer " />
                        <FaCcMastercard className="hover:text-red-600 transition-colors cursor-pointer" />
                        <FaCcPaypal className="hover:text-blue-500 transition-colors cursor-pointer" />
                        <FaCcAmazonPay className="hover:text-yellow-600 transition-colors cursor-pointer" />
                    </div>
                </div>
            </div>

        </footer>
    );
}

// --- Helper Components for cleaner code ---

function FeatureItem({ icon, title, desc }) {
    return (
        <div className="flex items-center gap-4 hover:-translate-y-1 transition-transform duration-300 p-2">
            <div className="bg-indigo-50 dark:bg-indigo-900/20 p-3 rounded-full">
                {icon}
            </div>
            <div>
                <h4 className="font-bold text-gray-900 dark:text-white text-sm">{title}</h4>
                <p className="text-xs text-gray-500 dark:text-gray-400">{desc}</p>
            </div>
        </div>
    )
}

function FooterLink({ text }) {
    return (
        <li>
            <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 hover:pl-2 transition-all duration-300 inline-block">
                {text}
            </a>
        </li>
    )
}

function SocialIcon({ icon }) {
    return (
        <a href="#" className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-200 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-indigo-600 hover:text-white transition-all duration-300">
            {icon}
        </a>
    )
}