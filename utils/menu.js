const menu = {
    prompt: 'Hi! I\'m your Barista Bot! What would you like to order?',
    items: {
        coffee: {
            name: 'Coffee',
            items: {
                onTheSpotRoast: {
                    name: 'On the Spot Roast',
                    price: '2.50',
                },
                espressoShot: {
                    name: 'Espresso Shot',
                    price: '2.50',
                },
                macchiato: {
                    name: 'Macchiato',
                    price: '3.00',
                },
                cappuccino: {
                    name: 'Cappucino',
                    price: '3.50',
                },
                lattes: {
                    name: 'Lattes',
                    items: {
                        latte: {
                            hot: {
                                name: 'Hot Latte',
                                price: '4.00',
                            },
                            iced: {
                                name: 'Iced Latte',
                                price: '4.00',
                            }
                        },
                        mochaLatte: {
                            hot: {
                                name: 'Hot Mocha Latte',
                                price: '4.00',
                            },
                            iced: {
                                name: 'Iced Mocha Latte',
                                price: '4.00',
                            }
                        },
                        honeyLatte: {
                            name: 'Honey Latte',
                            price: '3.50',
                        },
                    },
                }
            },
        },
        teasAndChai: {
            name: 'Teas + Chai',
            tea: {
                name: 'Tea',
                items: {
                    moroccanMint: {
                        name: 'Moroccan Mint',
                        price: '3.00',
                    },
                    londonBlack: {
                        name: 'London Black',
                        price: '3.00',
                    },
                },
            },
            chai: {
                name: 'chai',
                items: {
                    elephantVanilla: {
                        name: 'Elephant Vanilla',
                        price: '4.50',
                    },
                    tortoiseGreen: {
                        name: 'Tortoise Green',
                        price: '4.50',
                    },
                    whiteShark: {
                        name: 'White Shark',
                        price: '4.50',
                    },
                    toucanMango: {
                        name: 'Toucan Mango',
                        price: '4.50',
                    },
                    tigerSpice: {
                        name: 'Tiger Spice',
                        price: '4.50',
                    },
                }
            },
        },
        otherDrinks: {
            name: 'other drinks',
            items: {
                juices: {
                    name: 'juices',
                    mango: {
                        name: 'Mango',
                        price: '6.00',
                    },
                    strawberryBanana: {
                        name: 'Strawberry Banana',
                        price: '6.00',
                    },
                    pomegranateBloodOrange: {
                        name: 'Pomegranate Blood Orange',
                        price: '6.00',
                    },
                },
                hotCocoa: {
                    name: 'Beligian Hot Cocoa',
                    items: {
                        toastedMarshmallow: {
                            name: 'Toasted Marshmallow',
                            price: '4.00',
                        },
                        whiteChocolate: {
                            name: 'White Chocolate',
                            price: '4.00',
                        },
                    },
                },
                soda: {
                    name: 'Sugar-Cane Soda',
                    items: {
                        cocaCola: {
                            name: 'Sugar-Cane Coca Cola',
                            price: '2.50',
                        },
                        sprite: {
                            name: 'Sugar-Cane Sprite',
                            price: '2.50',
                        },
                        fanta: {
                            name: 'Sugar-Cane Fanta',
                            price: '2.50',
                        },
                    }
                },
                lifeWater: {
                    name: 'Life-Water',
                    price: '2.50',
                },
            },
        },
        otherDesserts: {
            name: 'other desserts',
            items: {
                macaroons: {
                    name: 'Macaroons',
                    price: '1.50',
                },
                tiramisu: {
                    name: 'Tiramisu',
                    price: '7.00',
                },
                chocolateMousse: {
                    name: 'Chocolate Mousse',
                    price: '7.00',
                },
                copaThreeChocolate: {
                    name: 'Copa Three Chocolate',
                    price: '7.00',
                },
                cremeBrulee: {
                    name: 'Creme Brulee + Italian Berries',
                    price: '7.00',
                },
            },
        },
    },
    fullList: {
        "coffee": true,
        'on the spot roast': true,

    }
}

module.exports = menu;