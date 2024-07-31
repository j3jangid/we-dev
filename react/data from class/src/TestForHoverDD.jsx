import React from 'react'

const TestForHoverDD = () => {
  const DataformMens = [
    {
        heading : "Headgear",
        category : ["Hats", "Caps", "Bonnets", "Helmets", ]
    },
    {
        heading : "Topware",
        category : ["Shirt", "TShirt", "Sweatshirts", "Kurta", "Blazer", "Suite", "Coat"]
    },
    {
        heading : "Bottomware",
        category : ["Jeans", "Trouser", "Shorts", "Joggers", "Lower"]
    },
    {
        heading : "Footware",
        category : ["Formal", "casual", "Sneakers", "Sports", "Sandals", "Flip Flop & Slippers" ]
    },
    {
        heading : "Watches",
        category : []
    },
    {
        heading : "Accessories",
        category : ["Bags", "Belts", "Wallets"]
    }
]

    const menuItems = [
        {
          name: 'Mens',
          to: '/mens',
          conFile : DataformMens
        },
        {
          name: 'Womens',
          to: '/womens',
          conFile : ""
        },
        {
          name: 'Electronics & Accessories',
          to: '/electronics&accessories',
          conFile : ""
        },
        {
          name: 'Extra',
          to: '#',
          conFile : ""
        },
      ]

    return (
        <div className="hidden lg:block">
            <ul className="ml-12 inline-flex space-x-8">
                {menuItems.map((item) => (
                    <li key={item.name}>
                        <a
                            href={item.to}
                            className="inline-flex items-center text-sm font-semibold text-white-800"
                        >
                            {item.name}
                            {/* <span>
                                <ChevronDown className="ml-2 h-4 w-4" />
                            </span> */}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default TestForHoverDD
