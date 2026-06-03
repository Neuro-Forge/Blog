function ProductCard({ product }) {
    const BASE_URL = import.meta.env.VITE_DJANGO_BASE_URL?.replace(/\/$/, "") || "";
    const imageSrc = product.image
        ? product.image.toString().startsWith("http")
            ? product.image
            : `${BASE_URL}/media/${product.image.replace(/^\/+/, "")}`
        : "https://via.placeholder.com/400x300?text=No+Image";

    return (
        <div className="bg-white rounded-xl shadow-md hover:shadow-lg hover:scale-105 transition-transform p-4">
            <img
                src={imageSrc}
                alt={product.name || "Product image"}
                className="w-full h-56 object-cover mb-4 rounded-lg"
            />
            <h2 className="text-lg font-semibold mb-2">{product.name}</h2>
            <p className="text-gray-600 mb-4">{product.description}</p>
            <p className="text-lg font-bold text-green-500">${product.price}</p>
        </div>
    );
}

export default ProductCard