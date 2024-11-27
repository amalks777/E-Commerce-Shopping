import { Link } from "react-router-dom"

const products = [
    {
      id: 1,
      name: 'Mens Wear',
      href: '/products',
      price: '$48',
      imageSrc: '/images/tshirt/43.jpg',
      imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
    },
    {
      id: 2,
      name: 'Womens Wear',
      href: '/women',
      price: '$65',
      imageSrc: '/images/tshirt/25.jpg',
      imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
    },
    {
      id: 3,
      name: 'Mens Wear',
      href: '/products',
      price: '$79',
      imageSrc: '/images/tshirt/29.jpg',
      imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
    },
    {
      id: 4,
      name: 'Womens Wear',
      href: '/women',
      price: '$35',
      imageSrc: '/images/tshirt/37.jpg',
      imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    },
    {
      id: 5,
      name: 'Mens Wear',
      href: '/products',
      price: '$40',
      imageSrc: '/images/tshirt/18.jpg',
      imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
    },
    {
      id: 6,
      name: 'Womens Wear',
      href: '/women',
      price: '$38',
      imageSrc: '/images/tshirt/44.jpg',
      imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
    },
    {
      id: 7,
      name: 'Mens Wear',
      href: '/products',
      price: '$69',
      imageSrc: '/images/tshirt/72.jpg',
      imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
    },
    {
      id: 8,
      name: 'Womens Wear',
      href: '/women',
      price: '$45',
      imageSrc: '/images/tshirt/55.jpg',
      imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    }
  ]


  
  export default function PromoList() {
    return (
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="sr-only">Products</h2>
  
          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <Link key={product.id} to={product.href} className="group">
                <img
                  alt={product.imageAlt}
                  src={product.imageSrc}
                  className="aspect-square w-full rounded-lg bg-gray-200 object-cover group-hover:opacity-75 xl:aspect-[7/8]"
                />
                <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
                <p className="mt-1 text-lg font-medium text-gray-900">{product.price}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    )
  }
  
