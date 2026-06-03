import React from 'react'
import { useParams } from 'react-router-dom';

function ProductDetails() {
    const { id } = useParams();
    const BASE_URL = import.meta.env.VITE_DJANGO_BASE_URL?.replace(/\/$/, "") || "";

    return (
        <div className="min-h-screen bg-gray-100 p-6">
            <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md p-6">
                <h1 className="text-3xl font-bold mb-4">Product Details</h1>
                <p className="text-gray-600">Product ID: {id}</p>
                <p className="text-sm text-gray-400 mt-2">Details view is not implemented yet.</p>
                <p className="mt-6 text-gray-500">Use the product list to view available products.</p>
            </div>
        </div>
    );
}

export default ProductDetails

