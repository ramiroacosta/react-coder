const productos = [
    { id: 1, title: "Iphone14", description: "excelente equipo",imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg', price: "$1000",  stock: 10},
    { id: 2, title: "Iphone13", description: "excelente equipo",imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg', price: "$900" ,  stock: 10},
    { id: 3, title: "Iphone12", description: "excelente equipo", price: "$800" , imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg', stock: 10},
    { id: 4, title: "Iphone11", description: "excelente equipo", price: "$700" , imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg', stock: 10},
    { id: 5, title: "SamsungA30", description: "excelente equipo", price: "$700" , imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg', stock: 10},
    { id: 6, title: "SamsungA51", description: "excelente equipo", price: "$700" , imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg', stock: 10}
]
const product = {
    price: '$1000',
    href: '#',
    breadcrumbs: [
        { id: 1, name: 'Telefonos', href: '#' },
        { id: 2, name: 'Iphone', href: '#' },
    ],
    images: [
        {
            src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-secondary-product-shot.jpg',
            alt: 'Two each of gray, white, and black shirts laying flat.',
        },
        {
            src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg',
            alt: 'Model wearing plain black basic tee.',
        },
        {
            src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-02.jpg',
            alt: 'Model wearing plain gray basic tee.',
        },
        {
            src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-featured-product-shot.jpg',
            alt: 'Model wearing plain white basic tee.',
        },
    ],
    colors: [
        { name: 'Blanco', class: 'bg-white', selectedClass: 'ring-gray-400' },
        { name: 'Gris', class: 'bg-gray-200', selectedClass: 'ring-gray-400' },
        { name: 'Rojo', class: 'bg-red-500', selectedClass: 'ring-gray-900' },
    ],
    sizes: [
        { name: '1T', inStock: true },
        { name: '512GB', inStock: true },
        { name: '256GB', inStock: true },
        { name: '128GB', inStock: true },
        { name: '64GB', inStock: true },
        { name: '32GB', inStock: true },
        { name: '16GB', inStock: true },
    ],
    description:
        'Telefono esteticamente impecable, con una camara profesional y 4 sensores',
    highlights: [
        'Camara 200Mpx',
        'Bateria de litio',
        'Prosesador competitivo',
        '4 camaras',
    ],
    details:
        'The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.',
}
export {productos, product}