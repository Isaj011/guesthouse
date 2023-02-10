import room22 from '../assets/img/jpeg/details-22.jpeg'
import room21 from '../assets/img/jpeg/details-21.jpeg'
import room33 from '../assets/img/jpeg/details-33.jpeg'
import room31 from '../assets/img/jpeg/details-31.jpeg'
import room4 from '../assets/img/jpeg/details-4.jpeg'
import img1 from '../assets/img/jpeg/room-1.jpeg'
import img21 from '../assets/img/jpeg/room-21.jpeg'
import img32 from '../assets/img/jpeg/room-32.jpeg'

const data = [
  {
    sys: {
      id: '1'
    },
    fields: {
      name: 'single bed rooms',
      slug: 'single-bed-rooms',
      type: 'single',
      price: 4000,
      size: 200,
      capacity: 1,
      pets: false,
      breakfast: true,
      featured: false,
      description:
        "Welcome, Our guesthouse offers a comfortable and inviting atmosphere, with rooms that are both stylish and comfortable. Each room is equipped with plush bedding, ensuring that you'll get a good night's sleep and wake up refreshed.",
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
              url: img1
            }
          }
        },
        {
          fields: {
            file: {
              url: room21
            }
          }
        },
        {
          fields: {
            file: {
              url: img1
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
  },
  {
    sys: {
      id: '2'
    },
    fields: {
      name: 'twin bed room',
      slug: 'twin-bed-room',
      type: 'twin',
      price: 6000,
      size: 250,
      capacity: 2,
      pets: false,
      breakfast: true,
      featured: true,
      description:
        'Our friendly and helpful staff is always on hand to assist with anything you need, and we offer personalized services to help you make the most of your stay, such as customized tours and restaurant recommendations. We believe that staying at our guesthouse will provide you with a unique and unforgettable experience, immersing you in the local culture and offering one-of-a-kind activities.',
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
              url: img21
            }
          }
        },
        {
          fields: {
            file: {
              url: room22
            }
          }
        },
        {
          fields: {
            file: {
              url: room31
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
  },
  {
    sys: {
      id: '3'
    },
    fields: {
      name: 'executive rooms',
      slug: 'executive-rooms',
      type: 'executive',
      price: 6000,
      size: 300,
      capacity: 2,
      pets: true,
      breakfast: true,
      featured: true,
      description:
        'Our guesthouse offers a relaxed and tranquil atmosphere, with rooms that are spacious, elegant, and tastefully decorated making it the perfect place to relax and unwind.',
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
              url: img32
            }
          }
        },
        {
          fields: {
            file: {
              url: img32
            }
          }
        },
        {
          fields: {
            file: {
              url: room33
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
  // {
  //   sys: {
  //     id: '4'
  //   },
  //   fields: {
  //     name: 'surrounding environment',
  //     slug: 'surrounding-environment',
  //     type: 'surrounding',
  //     price: null,
  //     size: '',
  //     capacity: '',
  //     pets: 'true',
  //     breakfast: true,
  //     featured: false,
  //     description:
  //       'Missionary sisters of the Precious Blood Guesthouse has its aim of supporting its mission in Kenya. The guesthouse provides quality service to its customers guided by our policy that is in line with the international standards. Well furnished single, double rooms and executive room taken care by well trained housekeepers, quality kitchen, excellent dining services and spacious conference room and highly motivated waiters.',
  //     extras: [
  //       'Plush pillows and breathable bed linens',
  //       'Soft, oversized bath towels',
  //       'Full-sized, pH-balanced toiletries',
  //       'Complimentary refreshments',
  //       'Adequate safety/security',
  //       'Internet',
  //       'Comfortable beds'
  //     ],
  //     images: [
  //       {
  //         fields: {
  //           file: {
  //             url: img41
  //           }
  //         }
  //       },
  //       {
  //         fields: {
  //           file: {
  //             url: img41
  //           }
  //         }
  //       },
  //       {
  //         fields: {
  //           file: {
  //             url: img42
  //           }
  //         }
  //       },
  //       {
  //         fields: {
  //           file: {
  //             url: room44
  //           }
  //         }
  //       }
  //     ]
  //   }
  // }
  // {
  //   sys: {
  //     id: '5'
  //   },
  //   fields: {
  //     name: 'explore',
  //     slug: 'explore',
  //     type: 'explore',
  //     price: 200,
  //     size: 300,
  //     capacity: 2,
  //     pets: false,
  //     breakfast: false,
  //     featured: false,
  //     description:
  //       'Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag vice, sartorial before they sold out pok pok health goth trust fund cray.',
  //     extras: [
  //       'Plush pillows and breathable bed linens',
  //       'Soft, oversized bath towels',
  //       'Full-sized, pH-balanced toiletries',
  //       'Complimentary refreshments',
  //       'Adequate safety/security',
  //       'Internet',
  //       'Comfortable beds'
  //     ],
  //     images: [
  //       {
  //         fields: {
  //           file: {
  //             url: img5
  //           }
  //         }
  //       },
  //       {
  //         fields: {
  //           file: {
  //             url: room2
  //           }
  //         }
  //       },
  //       {
  //         fields: {
  //           file: {
  //             url: room3
  //           }
  //         }
  //       },
  //       {
  //         fields: {
  //           file: {
  //             url: room4
  //           }
  //         }
  //       }
  //     ]
  //   }
  // }
  // {
  //   sys: {
  //     id: "6",
  //   },
  //   fields: {
  //     name: "double basic",
  //     slug: "double-basic",
  //     type: "double",
  //     price: 250,
  //     size: 350,
  //     capacity: 2,
  //     pets: false,
  //     breakfast: false,
  //     featured: false,
  //     description:
  //       "Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag vice, sartorial before they sold out pok pok health goth trust fund cray.",
  //     extras: [
  //       "Plush pillows and breathable bed linens",
  //       "Soft, oversized bath towels",
  //       "Full-sized, pH-balanced toiletries",
  //       "Complimentary refreshments",
  //       "Adequate safety/security",
  //       "Internet",
  //       "Comfortable beds",
  //     ],
  //     images: [
  //       {
  //         fields: {
  //           file: {
  //             url: img6,
  //           },
  //         },
  //       },
  //       {
  //         fields: {
  //           file: {
  //             url: room2,
  //           },
  //         },
  //       },
  //       {
  //         fields: {
  //           file: {
  //             url: room3,
  //           },
  //         },
  //       },
  //       {
  //         fields: {
  //           file: {
  //             url: room4,
  //           },
  //         },
  //       },
  //     ],
  //   },
  // },
  // {
  //   sys: {
  //     id: "7",
  //   },
  //   fields: {
  //     name: "double standard",
  //     slug: "double-standard",
  //     type: "double",
  //     price: 300,
  //     size: 400,
  //     capacity: 2,
  //     pets: true,
  //     breakfast: false,
  //     featured: false,
  //     description:
  //       "Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag vice, sartorial before they sold out pok pok health goth trust fund cray.",
  //     extras: [
  //       "Plush pillows and breathable bed linens",
  //       "Soft, oversized bath towels",
  //       "Full-sized, pH-balanced toiletries",
  //       "Complimentary refreshments",
  //       "Adequate safety/security",
  //       "Internet",
  //       "Comfortable beds",
  //     ],
  //     images: [
  //       {
  //         fields: {
  //           file: {
  //             url: img7,
  //           },
  //         },
  //       },
  //       {
  //         fields: {
  //           file: {
  //             url: room2,
  //           },
  //         },
  //       },
  //       {
  //         fields: {
  //           file: {
  //             url: room3,
  //           },
  //         },
  //       },
  //       {
  //         fields: {
  //           file: {
  //             url: room4,
  //           },
  //         },
  //       },
  //     ],
  //   },
  // },
  // {
  //   sys: {
  //     id: "8",
  //   },
  //   fields: {
  //     name: "double deluxe",
  //     slug: "double-deluxe",
  //     type: "double",
  //     price: 400,
  //     size: 500,
  //     capacity: 2,
  //     pets: true,
  //     breakfast: true,
  //     featured: true,
  //     description:
  //       "Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag vice, sartorial before they sold out pok pok health goth trust fund cray.",
  //     extras: [
  //       "Plush pillows and breathable bed linens",
  //       "Soft, oversized bath towels",
  //       "Full-sized, pH-balanced toiletries",
  //       "Complimentary refreshments",
  //       "Adequate safety/security",
  //       "Internet",
  //       "Comfortable beds",
  //     ],
  //     images: [
  //       {
  //         fields: {
  //           file: {
  //             url: img8,
  //           },
  //         },
  //       },
  //       {
  //         fields: {
  //           file: {
  //             url: room2,
  //           },
  //         },
  //       },
  //       {
  //         fields: {
  //           file: {
  //             url: room3,
  //           },
  //         },
  //       },
  //       {
  //         fields: {
  //           file: {
  //             url: room4,
  //           },
  //         },
  //       },
  //     ],
  //   },
  // },
  // {
  //   sys: {
  //     id: "9",
  //   },
  //   fields: {
  //     name: "family economy",
  //     slug: "family-economy",
  //     type: "family",
  //     price: 300,
  //     size: 500,
  //     capacity: 3,
  //     pets: false,
  //     breakfast: false,
  //     featured: false,
  //     description:
  //       "Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag vice, sartorial before they sold out pok pok health goth trust fund cray.",
  //     extras: [
  //       "Plush pillows and breathable bed linens",
  //       "Soft, oversized bath towels",
  //       "Full-sized, pH-balanced toiletries",
  //       "Complimentary refreshments",
  //       "Adequate safety/security",
  //       "Internet",
  //       "Comfortable beds",
  //     ],
  //     images: [
  //       {
  //         fields: {
  //           file: {
  //             url: img9,
  //           },
  //         },
  //       },
  //       {
  //         fields: {
  //           file: {
  //             url: room2,
  //           },
  //         },
  //       },
  //       {
  //         fields: {
  //           file: {
  //             url: room3,
  //           },
  //         },
  //       },
  //       {
  //         fields: {
  //           file: {
  //             url: room4,
  //           },
  //         },
  //       },
  //     ],
  //   },
  // },
  // {
  //   sys: {
  //     id: "10",
  //   },
  //   fields: {
  //     name: "family basic",
  //     slug: "family-basic",
  //     type: "family",
  //     price: 350,
  //     size: 550,
  //     capacity: 4,
  //     pets: false,
  //     breakfast: false,
  //     featured: false,
  //     description:
  //       "Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag vice, sartorial before they sold out pok pok health goth trust fund cray.",
  //     extras: [
  //       "Plush pillows and breathable bed linens",
  //       "Soft, oversized bath towels",
  //       "Full-sized, pH-balanced toiletries",
  //       "Complimentary refreshments",
  //       "Adequate safety/security",
  //       "Internet",
  //       "Comfortable beds",
  //     ],
  //     images: [
  //       {
  //         fields: {
  //           file: {
  //             url: img10,
  //           },
  //         },
  //       },
  //       {
  //         fields: {
  //           file: {
  //             url: room2,
  //           },
  //         },
  //       },
  //       {
  //         fields: {
  //           file: {
  //             url: room3,
  //           },
  //         },
  //       },
  //       {
  //         fields: {
  //           file: {
  //             url: room4,
  //           },
  //         },
  //       },
  //     ],
  //   },
  // },
  // {
  //   sys: {
  //     id: "11",
  //   },
  //   fields: {
  //     name: "family standard",
  //     slug: "family-standard",
  //     type: "family",
  //     price: 400,
  //     size: 600,
  //     capacity: 5,
  //     pets: true,
  //     breakfast: false,
  //     featured: false,
  //     description:
  //       "Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag vice, sartorial before they sold out pok pok health goth trust fund cray.",
  //     extras: [
  //       "Plush pillows and breathable bed linens",
  //       "Soft, oversized bath towels",
  //       "Full-sized, pH-balanced toiletries",
  //       "Complimentary refreshments",
  //       "Adequate safety/security",
  //       "Internet",
  //       "Comfortable beds",
  //     ],
  //     images: [
  //       {
  //         fields: {
  //           file: {
  //             url: img11,
  //           },
  //         },
  //       },
  //       {
  //         fields: {
  //           file: {
  //             url: room2,
  //           },
  //         },
  //       },
  //       {
  //         fields: {
  //           file: {
  //             url: room3,
  //           },
  //         },
  //       },
  //       {
  //         fields: {
  //           file: {
  //             url: room4,
  //           },
  //         },
  //       },
  //     ],
  //   },
  // },
  // {
  //   sys: {
  //     id: "12",
  //   },
  //   fields: {
  //     name: "family deluxe",
  //     slug: "family-deluxe",
  //     type: "family",
  //     price: 500,
  //     size: 700,
  //     capacity: 6,
  //     pets: true,
  //     breakfast: true,
  //     featured: true,
  //     description:
  //       "Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag vice, sartorial before they sold out pok pok health goth trust fund cray.",
  //     extras: [
  //       "Plush pillows and breathable bed linens",
  //       "Soft, oversized bath towels",
  //       "Full-sized, pH-balanced toiletries",
  //       "Complimentary refreshments",
  //       "Adequate safety/security",
  //       "Internet",
  //       "Comfortable beds",
  //     ],
  //     images: [
  //       {
  //         fields: {
  //           file: {
  //             url: img12,
  //           },
  //         },
  //       },
  //       {
  //         fields: {
  //           file: {
  //             url: room2,
  //           },
  //         },
  //       },
  //       {
  //         fields: {
  //           file: {
  //             url: room3,
  //           },
  //         },
  //       },
  //       {
  //         fields: {
  //           file: {
  //             url: room4,
  //           },
  //         },
  //       },
  //     ],
  //   },
  // },
  // {
  //   sys: {
  //     id: "13",
  //   },
  //   fields: {
  //     name: "presidential",
  //     slug: "presidential-room",
  //     type: "presidential",
  //     price: 600,
  //     size: 1000,
  //     capacity: 10,
  //     pets: true,
  //     breakfast: true,
  //     featured: true,
  //     description:
  //       "Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag vice, sartorial before they sold out pok pok health goth trust fund cray.",
  //     extras: [
  //       "Plush pillows and breathable bed linens",
  //       "Soft, oversized bath towels",
  //       "Full-sized, pH-balanced toiletries",
  //       "Complimentary refreshments",
  //       "Adequate safety/security",
  //       "Internet",
  //       "Comfortable beds",
  //     ],
  //     images: [
  //       {
  //         fields: {
  //           file: {
  //             url: room1,
  //           },
  //         },
  //       },
  //       {
  //         fields: {
  //           file: {
  //             url: room2,
  //           },
  //         },
  //       },
  //       {
  //         fields: {
  //           file: {
  //             url: room3,
  //           },
  //         },
  //       },
  //       {
  //         fields: {
  //           file: {
  //             url: room4,
  //           },
  //         },
  //       },
  //     ],
  //   },
  // },
]

export default data
