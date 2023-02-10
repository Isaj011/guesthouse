import img5 from '../assets/img/jpeg/room-5.jpeg'
import room2 from '../assets/img/jpeg/details-2.jpeg'
import room3 from '../assets/img/jpeg/details-3.jpeg'
import room4 from '../assets/img/jpeg/details-4.jpeg'

const data = {
  sys: {
    id: '5'
  },
  fields: {
    name: 'explore',
    slug: 'explore',
    type: 'explore',
    price: 200,
    size: 300,
    capacity: 2,
    pets: false,
    breakfast: false,
    featured: false,
    description:
      'Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag vice, sartorial before they sold out pok pok health goth trust fund cray.',
    extras: [
      'Plush pillows and breathable bed linens',
      'Soft, oversized bath towels',
      'Full-sized, pH-balanced toiletries',
      'Complimentary refreshments',
      'Adequate safety/security',
      'Internet',
      'Comfortable beds'
    ],
    images: [
      {
        fields: {
          file: {
            url: img5
          }
        }
      },
      {
        fields: {
          file: {
            url: room2
          }
        }
      },
      {
        fields: {
          file: {
            url: room3
          }
        }
      },
      {
        fields: {
          file: {
            url: room4
          }
        }
      }
    ]
  }
}
