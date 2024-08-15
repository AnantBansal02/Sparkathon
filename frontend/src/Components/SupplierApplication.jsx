// src/components/SupplierApplication.jsx
import React from 'react';
import  './SupplierApplication.css';
import workimg from '../assets/work.jpg'
import NavBar from './NavBar';
const SupplierApplication = () => {
  return (
    <div className='w-full'>
    <NavBar />
    <div className="min-h-screen bg-white p-6 font-sans text-gray-800">
      {/* Header */}
      <header className="text-center mb-8">
        <h1 className="text-3xl font-bold">Apply to be a Supplier</h1>
      </header>

      {/* Image Section */}
      <div className="flex justify-center mb-8">
        <img
          src={workimg} 
          alt="Apply to be a Supplier"
          className="rounded-lg"
          width="600"
          height="400"
          />
      </div>

      {/* Supplier Information */}
      <section className="mb-8 text-center">
        <p>
          Our suppliers fit into multiple categories, and together, they make up a pool of over
          100,000 businesses worldwide. They’re how we provide the products our customers want and
          need. Check out the different types of suppliers to see where you fit. If your business is
          located in the United States, we ask you to complete our application process to be
          considered to sell products in stores or online.
        </p>
      </section>

      {/* Getting Started Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Getting Started for Store, Club or Online</h2>
        <p className="mb-4">
          No matter which type of supplier you are, use the below resources to assist you in
          expediting the onboarding process for becoming a qualified supplier for Walmart Inc.
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>
            <a 
           href="https://corporate.walmart.com/content/dam/corporate/documents/suppliers/apply-to-be-a-supplier/supplier-checklist.pdf"
           target="_blank" // This opens the link in a new tab
           rel="noopener noreferrer" // Security best practice
           
           className="text-blue-600 underline">
              Supplier Checklist
            </a>: Click here to learn what information is needed.
          </li>
          <li>
            <a href='/signup'
            target="_blank" // This opens the link in a new tab
            rel="noopener noreferrer"
            className="text-blue-600 underline">
              Account Creation </a>: Click here and "Create Account" to begin the qualification process.
          </li>
          <li>
            Self-registering your company does not guarantee you will be extended an agreement to do
            business with Walmart or its subsidiaries.
          </li>
        </ul>
      </section>

      {/* Marketplace Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Marketplace</h2>
        <p className="mb-4">
          Walmart Marketplace is available to select third-party retailers who would like to offer
          their products to more than 90 million unique visitors who shop on Walmart.com every
          month. Customers can find third-party Marketplace products by browsing or searching
          Walmart.com. Items sold by third-party sellers are noted in the item information in search
          results, online shelves, and on item pages.
        </p>
        Learn more about the 
        <a 
          href="https://marketplace.walmart.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline ml-2">
           Walmart Marketplace seller qualification process.
        </a>
      </section>

      {/* Services Section */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Services</h2>
        <p className="mb-4">
          Learn how to get started if you have a service or other non-retail product.
        </p>
        <a 
          href="https://leasing.walmart.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline">
          Learn more about in-store leasing.
        </a>
      </section>
    </div>
    </div>
  );
};

export default SupplierApplication;
