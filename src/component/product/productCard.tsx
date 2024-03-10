import React from 'react';

interface ProductCardProps {
    title: string;
    description: string;
    image: string;
    price: number;
    discountedPrice?: number;
    quantity: number;
}

export const ProductPage: React.FC<ProductCardProps> = ({
    title,
    description,
    image,
    price,
    discountedPrice,
    quantity,
}) => {
    return (
        <div className="bg-white rounded-lg shadow-md p-4">
            <img src={image} alt={title} className="h-48 object-cover mb-4 bg-white" />
            <h2 className="text-xl font-semibold mb-2">{title}</h2>
            <p className="text-gray-500 mb-4">{description}</p>
            <div className="flex justify-between items-center mb-4">
                {discountedPrice ? (
                    <>
                        <span className="text-gray-500 line-through">${price}</span>
                        <span className="text-green-500">${discountedPrice}</span>
                    </>
                ) : (
                    <span>${price}</span>
                )}
                <span className="text-gray-500">Quantity: {quantity}</span>
            </div>
            <div className="flex justify-between">
                <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
                    Add to Cart
                </button>
                <button className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded">
                    Buy Now
                </button>
            </div>
        </div>
    );
};
