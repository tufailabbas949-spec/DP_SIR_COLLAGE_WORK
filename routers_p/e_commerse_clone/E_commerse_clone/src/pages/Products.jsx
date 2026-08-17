import React from 'react'
import { Card } from '../components/productcord/procard';
const products = [
  {
    id: 1,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBTdb_lPEh3rs5Dd0fVwiX3Gz5Vv3eYkUtEgC7mTgZkb8fYKWyillcXFuN&s=10",
    title: "Product 1",
    description: "High quality product with premium features.",
    price: 999
  },
  {
    id: 2,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBTdb_lPEh3rs5Dd0fVwiX3Gz5Vv3eYkUtEgC7mTgZkb8fYKWyillcXFuN&s=10",
    title: "Product 2",
    description: "Durable and stylish product for everyday use.",
    price: 1099
  },
  {
    id: 3,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBTdb_lPEh3rs5Dd0fVwiX3Gz5Vv3eYkUtEgC7mTgZkb8fYKWyillcXFuN&s=10",
    title: "Product 3",
    description: "Modern design with excellent performance.",
    price: 1199
  },
  {
    id: 4,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBTdb_lPEh3rs5Dd0fVwiX3Gz5Vv3eYkUtEgC7mTgZkb8fYKWyillcXFuN&s=10",
    title: "Product 4",
    description: "Premium quality product made for daily needs.",
    price: 1299
  },
  {
    id: 5,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBTdb_lPEh3rs5Dd0fVwiX3Gz5Vv3eYkUtEgC7mTgZkb8fYKWyillcXFuN&s=10",
    title: "Product 5",
    description: "Reliable product with a clean and attractive design.",
    price: 1399
  },
  {
    id: 6,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBTdb_lPEh3rs5Dd0fVwiX3Gz5Vv3eYkUtEgC7mTgZkb8fYKWyillcXFuN&s=10",
    title: "Product 6",
    description: "Comfortable, useful and easy to use product.",
    price: 1499
  },
  {
    id: 7,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBTdb_lPEh3rs5Dd0fVwiX3Gz5Vv3eYkUtEgC7mTgZkb8fYKWyillcXFuN&s=10",
    title: "Product 7",
    description: "Smart product with great value for money.",
    price: 1599
  },
  {
    id: 8,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBTdb_lPEh3rs5Dd0fVwiX3Gz5Vv3eYkUtEgC7mTgZkb8fYKWyillcXFuN&s=10",
    title: "Product 8",
    description: "Lightweight and durable product for regular use.",
    price: 1699
  },
  {
    id: 9,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBTdb_lPEh3rs5Dd0fVwiX3Gz5Vv3eYkUtEgC7mTgZkb8fYKWyillcXFuN&s=10",
    title: "Product 9",
    description: "Elegant product with dependable performance.",
    price: 1799
  },
  {
    id: 10,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBTdb_lPEh3rs5Dd0fVwiX3Gz5Vv3eYkUtEgC7mTgZkb8fYKWyillcXFuN&s=10",
    title: "Product 10",
    description: "Quality product designed for modern lifestyles.",
    price: 1899
  },
  {
    id: 11,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBTdb_lPEh3rs5Dd0fVwiX3Gz5Vv3eYkUtEgC7mTgZkb8fYKWyillcXFuN&s=10",
    title: "Product 11",
    description: "High quality product with premium features.",
    price: 1999
  },
  {
    id: 12,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBTdb_lPEh3rs5Dd0fVwiX3Gz5Vv3eYkUtEgC7mTgZkb8fYKWyillcXFuN&s=10",
    title: "Product 12",
    description: "Durable and stylish product for everyday use.",
    price: 2099
  },
  {
    id: 13,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBTdb_lPEh3rs5Dd0fVwiX3Gz5Vv3eYkUtEgC7mTgZkb8fYKWyillcXFuN&s=10",
    title: "Product 13",
    description: "Modern design with excellent performance.",
    price: 2199
  },
  {
    id: 14,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBTdb_lPEh3rs5Dd0fVwiX3Gz5Vv3eYkUtEgC7mTgZkb8fYKWyillcXFuN&s=10",
    title: "Product 14",
    description: "Premium quality product made for daily needs.",
    price: 2299
  },
  {
    id: 15,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBTdb_lPEh3rs5Dd0fVwiX3Gz5Vv3eYkUtEgC7mTgZkb8fYKWyillcXFuN&s=10",
    title: "Product 15",
    description: "Reliable product with a clean and attractive design.",
    price: 2399
  },
  {
    id: 16,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBTdb_lPEh3rs5Dd0fVwiX3Gz5Vv3eYkUtEgC7mTgZkb8fYKWyillcXFuN&s=10",
    title: "Product 16",
    description: "Comfortable, useful and easy to use product.",
    price: 2499
  },
  {
    id: 17,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBTdb_lPEh3rs5Dd0fVwiX3Gz5Vv3eYkUtEgC7mTgZkb8fYKWyillcXFuN&s=10",
    title: "Product 17",
    description: "Smart product with great value for money.",
    price: 2599
  },
  {
    id: 18,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBTdb_lPEh3rs5Dd0fVwiX3Gz5Vv3eYkUtEgC7mTgZkb8fYKWyillcXFuN&s=10",
    title: "Product 18",
    description: "Lightweight and durable product for regular use.",
    price: 2699
  },
  {
    id: 19,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBTdb_lPEh3rs5Dd0fVwiX3Gz5Vv3eYkUtEgC7mTgZkb8fYKWyillcXFuN&s=10",
    title: "Product 19",
    description: "Elegant product with dependable performance.",
    price: 2799
  },
  {
    id: 20,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBTdb_lPEh3rs5Dd0fVwiX3Gz5Vv3eYkUtEgC7mTgZkb8fYKWyillcXFuN&s=10",
    title: "Product 20",
    description: "Quality product designed for modern lifestyles.",
    price: 2899
  },

  {
    id: 21,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBTdb_lPEh3rs5Dd0fVwiX3Gz5Vv3eYkUtEgC7mTgZkb8fYKWyillcXFuN&s=10",
    title: "Product 21",
    description: "High quality product with premium features.",
    price: 2999
  },
  {
    id: 22,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBTdb_lPEh3rs5Dd0fVwiX3Gz5Vv3eYkUtEgC7mTgZkb8fYKWyillcXFuN&s=10",
    title: "Product 22",
    description: "Durable and stylish product for everyday use.",
    price: 3099
  },
  {
    id: 23,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBTdb_lPEh3rs5Dd0fVwiX3Gz5Vv3eYkUtEgC7mTgZkb8fYKWyillcXFuN&s=10",
    title: "Product 23",
    description: "Modern design with excellent performance.",
    price: 3199
  },
  {
    id: 24,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBTdb_lPEh3rs5Dd0fVwiX3Gz5Vv3eYkUtEgC7mTgZkb8fYKWyillcXFuN&s=10",
    title: "Product 24",
    description: "Premium quality product made for daily needs.",
    price: 3299
  },
  {
    id: 25,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBTdb_lPEh3rs5Dd0fVwiX3Gz5Vv3eYkUtEgC7mTgZkb8fYKWyillcXFuN&s=10",
    title: "Product 25",
    description: "Reliable product with a clean and attractive design.",
    price: 3399
  },
  {
    id: 26,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBTdb_lPEh3rs5Dd0fVwiX3Gz5Vv3eYkUtEgC7mTgZkb8fYKWyillcXFuN&s=10",
    title: "Product 26",
    description: "Comfortable, useful and easy to use product.",
    price: 3499
  },
  {
    id: 27,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBTdb_lPEh3rs5Dd0fVwiX3Gz5Vv3eYkUtEgC7mTgZkb8fYKWyillcXFuN&s=10",
    title: "Product 27",
    description: "Smart product with great value for money.",
    price: 3599
  },
  {
    id: 28,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBTdb_lPEh3rs5Dd0fVwiX3Gz5Vv3eYkUtEgC7mTgZkb8fYKWyillcXFuN&s=10",
    title: "Product 28",
    description: "Lightweight and durable product for regular use.",
    price: 3699
  },
  {
    id: 29,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBTdb_lPEh3rs5Dd0fVwiX3Gz5Vv3eYkUtEgC7mTgZkb8fYKWyillcXFuN&s=10",
    title: "Product 29",
    description: "Elegant product with dependable performance.",
    price: 3799
  },
  {
    id: 30,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBTdb_lPEh3rs5Dd0fVwiX3Gz5Vv3eYkUtEgC7mTgZkb8fYKWyillcXFuN&s=10",
    title: "Product 30",
    description: "Quality product designed for modern lifestyles.",
    price: 3899
  },

  {
    id: 31,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBTdb_lPEh3rs5Dd0fVwiX3Gz5Vv3eYkUtEgC7mTgZkb8fYKWyillcXFuN&s=10",
    title: "Product 31",
    description: "High quality product with premium features.",
    price: 3999
  },
  {
    id: 32,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBTdb_lPEh3rs5Dd0fVwiX3Gz5Vv3eYkUtEgC7mTgZkb8fYKWyillcXFuN&s=10",
    title: "Product 32",
    description: "Durable and stylish product for everyday use.",
    price: 4099
  },
  {
    id: 33,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBTdb_lPEh3rs5Dd0fVwiX3Gz5Vv3eYkUtEgC7mTgZkb8fYKWyillcXFuN&s=10",
    title: "Product 33",
    description: "Modern design with excellent performance.",
    price: 4199
  },
  {
    id: 34,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBTdb_lPEh3rs5Dd0fVwiX3Gz5Vv3eYkUtEgC7mTgZkb8fYKWyillcXFuN&s=10",
    title: "Product 34",
    description: "Premium quality product made for daily needs.",
    price: 4299
  },
  {
    id: 35,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBTdb_lPEh3rs5Dd0fVwiX3Gz5Vv3eYkUtEgC7mTgZkb8fYKWyillcXFuN&s=10",
    title: "Product 35",
    description: "Reliable product with a clean and attractive design.",
    price: 4399
  },
  {
    id: 36,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBTdb_lPEh3rs5Dd0fVwiX3Gz5Vv3eYkUtEgC7mTgZkb8fYKWyillcXFuN&s=10",
    title: "Product 36",
    description: "Comfortable, useful and easy to use product.",
    price: 4499
  },
  {
    id: 37,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBTdb_lPEh3rs5Dd0fVwiX3Gz5Vv3eYkUtEgC7mTgZkb8fYKWyillcXFuN&s=10",
    title: "Product 37",
    description: "Smart product with great value for money.",
    price: 4599
  },
  {
    id: 38,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBTdb_lPEh3rs5Dd0fVwiX3Gz5Vv3eYkUtEgC7mTgZkb8fYKWyillcXFuN&s=10",
    title: "Product 38",
    description: "Lightweight and durable product for regular use.",
    price: 4699
  },
  {
    id: 39,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBTdb_lPEh3rs5Dd0fVwiX3Gz5Vv3eYkUtEgC7mTgZkb8fYKWyillcXFuN&s=10",
    title: "Product 39",
    description: "Elegant product with dependable performance.",
    price: 4799
  },
  {
    id: 40,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBTdb_lPEh3rs5Dd0fVwiX3Gz5Vv3eYkUtEgC7mTgZkb8fYKWyillcXFuN&s=10",
    title: "Product 40",
    description: "Quality product designed for modern lifestyles.",
    price: 4899
  },

  {
    id: 41,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBTdb_lPEh3rs5Dd0fVwiX3Gz5Vv3eYkUtEgC7mTgZkb8fYKWyillcXFuN&s=10",
    title: "Product 41",
    description: "High quality product with premium features.",
    price: 4999
  },
  {
    id: 42,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBTdb_lPEh3rs5Dd0fVwiX3Gz5Vv3eYkUtEgC7mTgZkb8fYKWyillcXFuN&s=10",
    title: "Product 42",
    description: "Durable and stylish product for everyday use.",
    price: 5099
  },
  {
    id: 43,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBTdb_lPEh3rs5Dd0fVwiX3Gz5Vv3eYkUtEgC7mTgZkb8fYKWyillcXFuN&s=10",
    title: "Product 43",
    description: "Modern design with excellent performance.",
    price: 5199
  },
  {
    id: 44,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBTdb_lPEh3rs5Dd0fVwiX3Gz5Vv3eYkUtEgC7mTgZkb8fYKWyillcXFuN&s=10",
    title: "Product 44",
    description: "Premium quality product made for daily needs.",
    price: 5299
  },
  {
    id: 45,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBTdb_lPEh3rs5Dd0fVwiX3Gz5Vv3eYkUtEgC7mTgZkb8fYKWyillcXFuN&s=10",
    title: "Product 45",
    description: "Reliable product with a clean and attractive design.",
    price: 5399
  },
  {
    id: 46,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBTdb_lPEh3rs5Dd0fVwiX3Gz5Vv3eYkUtEgC7mTgZkb8fYKWyillcXFuN&s=10",
    title: "Product 46",
    description: "Comfortable, useful and easy to use product.",
    price: 5499
  },
  {
    id: 47,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBTdb_lPEh3rs5Dd0fVwiX3Gz5Vv3eYkUtEgC7mTgZkb8fYKWyillcXFuN&s=10",
    title: "Product 47",
    description: "Smart product with great value for money.",
    price: 5599
  },
  {
    id: 48,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBTdb_lPEh3rs5Dd0fVwiX3Gz5Vv3eYkUtEgC7mTgZkb8fYKWyillcXFuN&s=10",
    title: "Product 48",
    description: "Lightweight and durable product for regular use.",
    price: 5699
  },
  {
    id: 49,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBTdb_lPEh3rs5Dd0fVwiX3Gz5Vv3eYkUtEgC7mTgZkb8fYKWyillcXFuN&s=10",
    title: "Product 49",
    description: "Elegant product with dependable performance.",
    price: 5799
  },
  {
    id: 50,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBTdb_lPEh3rs5Dd0fVwiX3Gz5Vv3eYkUtEgC7mTgZkb8fYKWyillcXFuN&s=10",
    title: "Product 50",
    description: "Quality product designed for modern lifestyles.",
    price: 5899
  },

  {
    id: 51,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBTdb_lPEh3rs5Dd0fVwiX3Gz5Vv3eYkUtEgC7mTgZkb8fYKWyillcXFuN&s=10",
    title: "Product 51",
    description: "High quality product with premium features.",
    price: 5999
  },
  {
    id: 52,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBTdb_lPEh3rs5Dd0fVwiX3Gz5Vv3eYkUtEgC7mTgZkb8fYKWyillcXFuN&s=10",
    title: "Product 52",
    description: "Durable and stylish product for everyday use.",
    price: 6099
  },
  {
    id: 53,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBTdb_lPEh3rs5Dd0fVwiX3Gz5Vv3eYkUtEgC7mTgZkb8fYKWyillcXFuN&s=10",
    title: "Product 53",
    description: "Modern design with excellent performance.",
    price: 6199
  },
  {
    id: 54,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBTdb_lPEh3rs5Dd0fVwiX3Gz5Vv3eYkUtEgC7mTgZkb8fYKWyillcXFuN&s=10",
    title: "Product 54",
    description: "Premium quality product made for daily needs.",
    price: 6299
  },
  {
    id: 55,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBTdb_lPEh3rs5Dd0fVwiX3Gz5Vv3eYkUtEgC7mTgZkb8fYKWyillcXFuN&s=10",
    title: "Product 55",
    description: "Reliable product with a clean and attractive design.",
    price: 6399
  },
  {
    id: 56,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBTdb_lPEh3rs5Dd0fVwiX3Gz5Vv3eYkUtEgC7mTgZkb8fYKWyillcXFuN&s=10",
    title: "Product 56",
    description: "Comfortable, useful and easy to use product.",
    price: 6499
  },
  {
    id: 57,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBTdb_lPEh3rs5Dd0fVwiX3Gz5Vv3eYkUtEgC7mTgZkb8fYKWyillcXFuN&s=10",
    title: "Product 57",
    description: "Smart product with great value for money.",
    price: 6599
  },
  {
    id: 58,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBTdb_lPEh3rs5Dd0fVwiX3Gz5Vv3eYkUtEgC7mTgZkb8fYKWyillcXFuN&s=10",
    title: "Product 58",
    description: "Lightweight and durable product for regular use.",
    price: 6699
  },
  {
    id: 59,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBTdb_lPEh3rs5Dd0fVwiX3Gz5Vv3eYkUtEgC7mTgZkb8fYKWyillcXFuN&s=10",
    title: "Product 59",
    description: "Elegant product with dependable performance.",
    price: 6799
  },
  {
    id: 60,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBTdb_lPEh3rs5Dd0fVwiX3Gz5Vv3eYkUtEgC7mTgZkb8fYKWyillcXFuN&s=10",
    title: "Product 60",
    description: "Quality product designed for modern lifestyles.",
    price: 6899
  },

  {
    id: 61,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBTdb_lPEh3rs5Dd0fVwiX3Gz5Vv3eYkUtEgC7mTgZkb8fYKWyillcXFuN&s=10",
    title: "Product 61",
    description: "High quality product with premium features.",
    price: 6999
  },
  {
    id: 62,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBTdb_lPEh3rs5Dd0fVwiX3Gz5Vv3eYkUtEgC7mTgZkb8fYKWyillcXFuN&s=10",
    title: "Product 62",
    description: "Durable and stylish product for everyday use.",
    price: 7099
  },
  {
    id: 63,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBTdb_lPEh3rs5Dd0fVwiX3Gz5Vv3eYkUtEgC7mTgZkb8fYKWyillcXFuN&s=10",
    title: "Product 63",
    description: "Modern design with excellent performance.",
    price: 7199
  },
  {
    id: 64,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBTdb_lPEh3rs5Dd0fVwiX3Gz5Vv3eYkUtEgC7mTgZkb8fYKWyillcXFuN&s=10",
    title: "Product 64",
    description: "Premium quality product made for daily needs.",
    price: 7299
  },
  {
    id: 65,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBTdb_lPEh3rs5Dd0fVwiX3Gz5Vv3eYkUtEgC7mTgZkb8fYKWyillcXFuN&s=10",
    title: "Product 65",
    description: "Reliable product with a clean and attractive design.",
    price: 7399
  },
  {
    id: 66,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBTdb_lPEh3rs5Dd0fVwiX3Gz5Vv3eYkUtEgC7mTgZkb8fYKWyillcXFuN&s=10",
    title: "Product 66",
    description: "Comfortable, useful and easy to use product.",
    price: 7499
  },
  {
    id: 67,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBTdb_lPEh3rs5Dd0fVwiX3Gz5Vv3eYkUtEgC7mTgZkb8fYKWyillcXFuN&s=10",
    title: "Product 67",
    description: "Smart product with great value for money.",
    price: 7599
  },
  {
    id: 68,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBTdb_lPEh3rs5Dd0fVwiX3Gz5Vv3eYkUtEgC7mTgZkb8fYKWyillcXFuN&s=10",
    title: "Product 68",
    description: "Lightweight and durable product for regular use.",
    price: 7699
  },
  {
    id: 69,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBTdb_lPEh3rs5Dd0fVwiX3Gz5Vv3eYkUtEgC7mTgZkb8fYKWyillcXFuN&s=10",
    title: "Product 69",
    description: "Elegant product with dependable performance.",
    price: 7799
  },
  {
    id: 70,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBTdb_lPEh3rs5Dd0fVwiX3Gz5Vv3eYkUtEgC7mTgZkb8fYKWyillcXFuN&s=10",
    title: "Product 70",
    description: "Quality product designed for modern lifestyles.",
    price: 7899
  },

  {
    id: 71,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBTdb_lPEh3rs5Dd0fVwiX3Gz5Vv3eYkUtEgC7mTgZkb8fYKWyillcXFuN&s=10",
    title: "Product 71",
    description: "High quality product with premium features.",
    price: 7999
  },
  {
    id: 72,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBTdb_lPEh3rs5Dd0fVwiX3Gz5Vv3eYkUtEgC7mTgZkb8fYKWyillcXFuN&s=10",
    title: "Product 72",
    description: "Durable and stylish product for everyday use.",
    price: 8099
  },
  {
    id: 73,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBTdb_lPEh3rs5Dd0fVwiX3Gz5Vv3eYkUtEgC7mTgZkb8fYKWyillcXFuN&s=10",
    title: "Product 73",
    description: "Modern design with excellent performance.",
    price: 8199
  },
  {
    id: 74,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBTdb_lPEh3rs5Dd0fVwiX3Gz5Vv3eYkUtEgC7mTgZkb8fYKWyillcXFuN&s=10",
    title: "Product 74",
    description: "Premium quality product made for daily needs.",
    price: 8299
  },
  {
    id: 75,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBTdb_lPEh3rs5Dd0fVwiX3Gz5Vv3eYkUtEgC7mTgZkb8fYKWyillcXFuN&s=10",
    title: "Product 75",
    description: "Reliable product with a clean and attractive design.",
    price: 8399
  },
  {
    id: 76,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBTdb_lPEh3rs5Dd0fVwiX3Gz5Vv3eYkUtEgC7mTgZkb8fYKWyillcXFuN&s=10",
    title: "Product 76",
    description: "Comfortable, useful and easy to use product.",
    price: 8499
  },
  {
    id: 77,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBTdb_lPEh3rs5Dd0fVwiX3Gz5Vv3eYkUtEgC7mTgZkb8fYKWyillcXFuN&s=10",
    title: "Product 77",
    description: "Smart product with great value for money.",
    price: 8599
  },
  {
    id: 78,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBTdb_lPEh3rs5Dd0fVwiX3Gz5Vv3eYkUtEgC7mTgZkb8fYKWyillcXFuN&s=10",
    title: "Product 78",
    description: "Lightweight and durable product for regular use.",
    price: 8699
  },
  {
    id: 79,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBTdb_lPEh3rs5Dd0fVwiX3Gz5Vv3eYkUtEgC7mTgZkb8fYKWyillcXFuN&s=10",
    title: "Product 79",
    description: "Elegant product with dependable performance.",
    price: 8799
  },
  {
    id: 80,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBTdb_lPEh3rs5Dd0fVwiX3Gz5Vv3eYkUtEgC7mTgZkb8fYKWyillcXFuN&s=10",
    title: "Product 80",
    description: "Quality product designed for modern lifestyles.",
    price: 8899
  },

  {
    id: 81,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBTdb_lPEh3rs5Dd0fVwiX3Gz5Vv3eYkUtEgC7mTgZkb8fYKWyillcXFuN&s=10",
    title: "Product 81",
    description: "High quality product with premium features.",
    price: 8999
  },
  {
    id: 82,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBTdb_lPEh3rs5Dd0fVwiX3Gz5Vv3eYkUtEgC7mTgZkb8fYKWyillcXFuN&s=10",
    title: "Product 82",
    description: "Durable and stylish product for everyday use.",
    price: 9099
  },
  {
    id: 83,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBTdb_lPEh3rs5Dd0fVwiX3Gz5Vv3eYkUtEgC7mTgZkb8fYKWyillcXFuN&s=10",
    title: "Product 83",
    description: "Modern design with excellent performance.",
    price: 9199
  },
  {
    id: 84,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBTdb_lPEh3rs5Dd0fVwiX3Gz5Vv3eYkUtEgC7mTgZkb8fYKWyillcXFuN&s=10",
    title: "Product 84",
    description: "Premium quality product made for daily needs.",
    price: 9299
  },
  {
    id: 85,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBTdb_lPEh3rs5Dd0fVwiX3Gz5Vv3eYkUtEgC7mTgZkb8fYKWyillcXFuN&s=10",
    title: "Product 85",
    description: "Reliable product with a clean and attractive design.",
    price: 9399
  },
  {
    id: 86,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBTdb_lPEh3rs5Dd0fVwiX3Gz5Vv3eYkUtEgC7mTgZkb8fYKWyillcXFuN&s=10",
    title: "Product 86",
    description: "Comfortable, useful and easy to use product.",
    price: 9499
  },
  {
    id: 87,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBTdb_lPEh3rs5Dd0fVwiX3Gz5Vv3eYkUtEgC7mTgZkb8fYKWyillcXFuN&s=10",
    title: "Product 87",
    description: "Smart product with great value for money.",
    price: 9599
  },
  {
    id: 88,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBTdb_lPEh3rs5Dd0fVwiX3Gz5Vv3eYkUtEgC7mTgZkb8fYKWyillcXFuN&s=10",
    title: "Product 88",
    description: "Lightweight and durable product for regular use.",
    price: 9699
  },
  {
    id: 89,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBTdb_lPEh3rs5Dd0fVwiX3Gz5Vv3eYkUtEgC7mTgZkb8fYKWyillcXFuN&s=10",
    title: "Product 89",
    description: "Elegant product with dependable performance.",
    price: 9799
  },
  {
    id: 90,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBTdb_lPEh3rs5Dd0fVwiX3Gz5Vv3eYkUtEgC7mTgZkb8fYKWyillcXFuN&s=10",
    title: "Product 90",
    description: "Quality product designed for modern lifestyles.",
    price: 9899
  },

  {
    id: 91,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBTdb_lPEh3rs5Dd0fVwiX3Gz5Vv3eYkUtEgC7mTgZkb8fYKWyillcXFuN&s=10",
    title: "Product 91",
    description: "High quality product with premium features.",
    price: 9999
  },
  {
    id: 92,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBTdb_lPEh3rs5Dd0fVwiX3Gz5Vv3eYkUtEgC7mTgZkb8fYKWyillcXFuN&s=10",
    title: "Product 92",
    description: "Durable and stylish product for everyday use.",
    price: 10099
  },
  {
    id: 93,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBTdb_lPEh3rs5Dd0fVwiX3Gz5Vv3eYkUtEgC7mTgZkb8fYKWyillcXFuN&s=10",
    title: "Product 93",
    description: "Modern design with excellent performance.",
    price: 10199
  },
  {
    id: 94,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBTdb_lPEh3rs5Dd0fVwiX3Gz5Vv3eYkUtEgC7mTgZkb8fYKWyillcXFuN&s=10",
    title: "Product 94",
    description: "Premium quality product made for daily needs.",
    price: 10299
  },
  {
    id: 95,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBTdb_lPEh3rs5Dd0fVwiX3Gz5Vv3eYkUtEgC7mTgZkb8fYKWyillcXFuN&s=10",
    title: "Product 95",
    description: "Reliable product with a clean and attractive design.",
    price: 10399
  },
  {
    id: 96,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBTdb_lPEh3rs5Dd0fVwiX3Gz5Vv3eYkUtEgC7mTgZkb8fYKWyillcXFuN&s=10",
    title: "Product 96",
    description: "Comfortable, useful and easy to use product.",
    price: 10499
  },
  {
    id: 97,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBTdb_lPEh3rs5Dd0fVwiX3Gz5Vv3eYkUtEgC7mTgZkb8fYKWyillcXFuN&s=10",
    title: "Product 97",
    description: "Smart product with great value for money.",
    price: 10599
  },
  {
    id: 98,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBTdb_lPEh3rs5Dd0fVwiX3Gz5Vv3eYkUtEgC7mTgZkb8fYKWyillcXFuN&s=10",
    title: "Product 98",
    description: "Lightweight and durable product for regular use.",
    price: 10699
  },
  {
    id: 99,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBTdb_lPEh3rs5Dd0fVwiX3Gz5Vv3eYkUtEgC7mTgZkb8fYKWyillcXFuN&s=10",
    title: "Product 99",
    description: "Elegant product with dependable performance.",
    price: 10799
  },
  {
    id: 100,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBTdb_lPEh3rs5Dd0fVwiX3Gz5Vv3eYkUtEgC7mTgZkb8fYKWyillcXFuN&s=10",
    title: "Product 100",
    description: "Quality product designed for modern lifestyles.",
    price: 10899
  },

  {
    id: 101,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBTdb_lPEh3rs5Dd0fVwiX3Gz5Vv3eYkUtEgC7mTgZkb8fYKWyillcXFuN&s=10",
    title: "Product 101",
    description: "High quality product with premium features.",
    price: 10999
  },
  {
    id: 102,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBTdb_lPEh3rs5Dd0fVwiX3Gz5Vv3eYkUtEgC7mTgZkb8fYKWyillcXFuN&s=10",
    title: "Product 102",
    description: "Durable and stylish product for everyday use.",
    price: 11099
  },
  {
    id: 103,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBTdb_lPEh3rs5Dd0fVwiX3Gz5Vv3eYkUtEgC7mTgZkb8fYKWyillcXFuN&s=10",
    title: "Product 103",
    description: "Modern design with excellent performance.",
    price: 11199
  },
  {
    id: 104,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBTdb_lPEh3rs5Dd0fVwiX3Gz5Vv3eYkUtEgC7mTgZkb8fYKWyillcXFuN&s=10",
    title: "Product 104",
    description: "Premium quality product made for daily needs.",
    price: 11299
  },
  {
    id: 105,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBTdb_lPEh3rs5Dd0fVwiX3Gz5Vv3eYkUtEgC7mTgZkb8fYKWyillcXFuN&s=10",
    title: "Product 105",
    description: "Reliable product with a clean and attractive design.",
    price: 11399
  },
  {
    id: 106,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBTdb_lPEh3rs5Dd0fVwiX3Gz5Vv3eYkUtEgC7mTgZkb8fYKWyillcXFuN&s=10",
    title: "Product 106",
    description: "Comfortable, useful and easy to use product.",
    price: 11499
  },
  {
    id: 107,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBTdb_lPEh3rs5Dd0fVwiX3Gz5Vv3eYkUtEgC7mTgZkb8fYKWyillcXFuN&s=10",
    title: "Product 107",
    description: "Smart product with great value for money.",
    price: 11599
  },
  {
    id: 108,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBTdb_lPEh3rs5Dd0fVwiX3Gz5Vv3eYkUtEgC7mTgZkb8fYKWyillcXFuN&s=10",
    title: "Product 108",
    description: "Lightweight and durable product for regular use.",
    price: 11699
  },
  {
    id: 109,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBTdb_lPEh3rs5Dd0fVwiX3Gz5Vv3eYkUtEgC7mTgZkb8fYKWyillcXFuN&s=10",
    title: "Product 109",
    description: "Elegant product with dependable performance.",
    price: 11799
  },
  {
    id: 110,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBTdb_lPEh3rs5Dd0fVwiX3Gz5Vv3eYkUtEgC7mTgZkb8fYKWyillcXFuN&s=10",
    title: "Product 110",
    description: "Quality product designed for modern lifestyles.",
    price: 11899
  },

  {
    id: 111,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBTdb_lPEh3rs5Dd0fVwiX3Gz5Vv3eYkUtEgC7mTgZkb8fYKWyillcXFuN&s=10",
    title: "Product 111",
    description: "High quality product with premium features.",
    price: 11999
  },
  {
    id: 112,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBTdb_lPEh3rs5Dd0fVwiX3Gz5Vv3eYkUtEgC7mTgZkb8fYKWyillcXFuN&s=10",
    title: "Product 112",
    description: "Durable and stylish product for everyday use.",
    price: 12099
  },
  {
    id: 113,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBTdb_lPEh3rs5Dd0fVwiX3Gz5Vv3eYkUtEgC7mTgZkb8fYKWyillcXFuN&s=10",
    title: "Product 113",
    description: "Modern design with excellent performance.",
    price: 12199
  },
  {
    id: 114,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBTdb_lPEh3rs5Dd0fVwiX3Gz5Vv3eYkUtEgC7mTgZkb8fYKWyillcXFuN&s=10",
    title: "Product 114",
    description: "Premium quality product made for daily needs.",
    price: 12299
  },
  {
    id: 115,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBTdb_lPEh3rs5Dd0fVwiX3Gz5Vv3eYkUtEgC7mTgZkb8fYKWyillcXFuN&s=10",
    title: "Product 115",
    description: "Reliable product with a clean and attractive design.",
    price: 12399
  },
  {
    id: 116,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBTdb_lPEh3rs5Dd0fVwiX3Gz5Vv3eYkUtEgC7mTgZkb8fYKWyillcXFuN&s=10",
    title: "Product 116",
    description: "Comfortable, useful and easy to use product.",
    price: 12499
  },
  {
    id: 117,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBTdb_lPEh3rs5Dd0fVwiX3Gz5Vv3eYkUtEgC7mTgZkb8fYKWyillcXFuN&s=10",
    title: "Product 117",
    description: "Smart product with great value for money.",
    price: 12599
  },
  {
    id: 118,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBTdb_lPEh3rs5Dd0fVwiX3Gz5Vv3eYkUtEgC7mTgZkb8fYKWyillcXFuN&s=10",
    title: "Product 118",
    description: "Lightweight and durable product for regular use.",
    price: 12699
  },
  {
    id: 119,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBTdb_lPEh3rs5Dd0fVwiX3Gz5Vv3eYkUtEgC7mTgZkb8fYKWyillcXFuN&s=10",
    title: "Product 119",
    description: "Elegant product with dependable performance.",
    price: 12799
  },
  {
    id: 120,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBTdb_lPEh3rs5Dd0fVwiX3Gz5Vv3eYkUtEgC7mTgZkb8fYKWyillcXFuN&s=10",
    title: "Product 120",
    description: "Quality product designed for modern lifestyles.",
    price: 12899
  },

  {
    id: 121,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBTdb_lPEh3rs5Dd0fVwiX3Gz5Vv3eYkUtEgC7mTgZkb8fYKWyillcXFuN&s=10",
    title: "Product 121",
    description: "High quality product with premium features.",
    price: 12999
  },
  {
    id: 122,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBTdb_lPEh3rs5Dd0fVwiX3Gz5Vv3eYkUtEgC7mTgZkb8fYKWyillcXFuN&s=10",
    title: "Product 122",
    description: "Durable and stylish product for everyday use.",
    price: 13099
  },
  {
    id: 123,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBTdb_lPEh3rs5Dd0fVwiX3Gz5Vv3eYkUtEgC7mTgZkb8fYKWyillcXFuN&s=10",
    title: "Product 123",
    description: "Modern design with excellent performance.",
    price: 13199
  },
  {
    id: 124,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBTdb_lPEh3rs5Dd0fVwiX3Gz5Vv3eYkUtEgC7mTgZkb8fYKWyillcXFuN&s=10",
    title: "Product 124",
    description: "Premium quality product made for daily needs.",
    price: 13299
  },
  {
    id: 125,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBTdb_lPEh3rs5Dd0fVwiX3Gz5Vv3eYkUtEgC7mTgZkb8fYKWyillcXFuN&s=10",
    title: "Product 125",
    description: "Reliable product with a clean and attractive design.",
    price: 13399
  },
  {
    id: 126,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBTdb_lPEh3rs5Dd0fVwiX3Gz5Vv3eYkUtEgC7mTgZkb8fYKWyillcXFuN&s=10",
    title: "Product 126",
    description: "Comfortable, useful and easy to use product.",
    price: 13499
  },
  {
    id: 127,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBTdb_lPEh3rs5Dd0fVwiX3Gz5Vv3eYkUtEgC7mTgZkb8fYKWyillcXFuN&s=10",
    title: "Product 127",
    description: "Smart product with great value for money.",
    price: 13599
  },
  {
    id: 128,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBTdb_lPEh3rs5Dd0fVwiX3Gz5Vv3eYkUtEgC7mTgZkb8fYKWyillcXFuN&s=10",
    title: "Product 128",
    description: "Lightweight and durable product for regular use.",
    price: 13699
  },
  {
    id: 129,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBTdb_lPEh3rs5Dd0fVwiX3Gz5Vv3eYkUtEgC7mTgZkb8fYKWyillcXFuN&s=10",
    title: "Product 129",
    description: "Elegant product with dependable performance.",
    price: 13799
  },
  {
    id: 130,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBTdb_lPEh3rs5Dd0fVwiX3Gz5Vv3eYkUtEgC7mTgZkb8fYKWyillcXFuN&s=10",
    title: "Product 130",
    description: "Quality product designed for modern lifestyles.",
    price: 13899
  },

  {
    id: 131,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBTdb_lPEh3rs5Dd0fVwiX3Gz5Vv3eYkUtEgC7mTgZkb8fYKWyillcXFuN&s=10",
    title: "Product 131",
    description: "High quality product with premium features.",
    price: 13999
  },
  {
    id: 132,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBTdb_lPEh3rs5Dd0fVwiX3Gz5Vv3eYkUtEgC7mTgZkb8fYKWyillcXFuN&s=10",
    title: "Product 132",
    description: "Durable and stylish product for everyday use.",
    price: 14099
  },
  {
    id: 133,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBTdb_lPEh3rs5Dd0fVwiX3Gz5Vv3eYkUtEgC7mTgZkb8fYKWyillcXFuN&s=10",
    title: "Product 133",
    description: "Modern design with excellent performance.",
    price: 14199
  },
  {
    id: 134,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBTdb_lPEh3rs5Dd0fVwiX3Gz5Vv3eYkUtEgC7mTgZkb8fYKWyillcXFuN&s=10",
    title: "Product 134",
    description: "Premium quality product made for daily needs.",
    price: 14299
  },
  {
    id: 135,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBTdb_lPEh3rs5Dd0fVwiX3Gz5Vv3eYkUtEgC7mTgZkb8fYKWyillcXFuN&s=10",
    title: "Product 135",
    description: "Reliable product with a clean and attractive design.",
    price: 14399
  },
  {
    id: 136,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBTdb_lPEh3rs5Dd0fVwiX3Gz5Vv3eYkUtEgC7mTgZkb8fYKWyillcXFuN&s=10",
    title: "Product 136",
    description: "Comfortable, useful and easy to use product.",
    price: 14499
  },
  {
    id: 137,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBTdb_lPEh3rs5Dd0fVwiX3Gz5Vv3eYkUtEgC7mTgZkb8fYKWyillcXFuN&s=10",
    title: "Product 137",
    description: "Smart product with great value for money.",
    price: 14599
  },
  {
    id: 138,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBTdb_lPEh3rs5Dd0fVwiX3Gz5Vv3eYkUtEgC7mTgZkb8fYKWyillcXFuN&s=10",
    title: "Product 138",
    description: "Lightweight and durable product for regular use.",
    price: 14699
  },
  {
    id: 139,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBTdb_lPEh3rs5Dd0fVwiX3Gz5Vv3eYkUtEgC7mTgZkb8fYKWyillcXFuN&s=10",
    title: "Product 139",
    description: "Elegant product with dependable performance.",
    price: 14799
  },
  {
    id: 140,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBTdb_lPEh3rs5Dd0fVwiX3Gz5Vv3eYkUtEgC7mTgZkb8fYKWyillcXFuN&s=10",
    title: "Product 140",
    description: "Quality product designed for modern lifestyles.",
    price: 14899
  },

  {
    id: 141,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBTdb_lPEh3rs5Dd0fVwiX3Gz5Vv3eYkUtEgC7mTgZkb8fYKWyillcXFuN&s=10",
    title: "Product 141",
    description: "High quality product with premium features.",
    price: 14999
  },
  {
    id: 142,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBTdb_lPEh3rs5Dd0fVwiX3Gz5Vv3eYkUtEgC7mTgZkb8fYKWyillcXFuN&s=10",
    title: "Product 142",
    description: "Durable and stylish product for everyday use.",
    price: 15099
  },
  {
    id: 143,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBTdb_lPEh3rs5Dd0fVwiX3Gz5Vv3eYkUtEgC7mTgZkb8fYKWyillcXFuN&s=10",
    title: "Product 143",
    description: "Modern design with excellent performance.",
    price: 15199
  },
  {
    id: 144,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBTdb_lPEh3rs5Dd0fVwiX3Gz5Vv3eYkUtEgC7mTgZkb8fYKWyillcXFuN&s=10",
    title: "Product 144",
    description: "Premium quality product made for daily needs.",
    price: 15299
  },
  {
    id: 145,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBTdb_lPEh3rs5Dd0fVwiX3Gz5Vv3eYkUtEgC7mTgZkb8fYKWyillcXFuN&s=10",
    title: "Product 145",
    description: "Reliable product with a clean and attractive design.",
    price: 15399
  },
  {
    id: 146,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBTdb_lPEh3rs5Dd0fVwiX3Gz5Vv3eYkUtEgC7mTgZkb8fYKWyillcXFuN&s=10",
    title: "Product 146",
    description: "Comfortable, useful and easy to use product.",
    price: 15499
  },
  {
    id: 147,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBTdb_lPEh3rs5Dd0fVwiX3Gz5Vv3eYkUtEgC7mTgZkb8fYKWyillcXFuN&s=10",
    title: "Product 147",
    description: "Smart product with great value for money.",
    price: 15599
  },
  {
    id: 148,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBTdb_lPEh3rs5Dd0fVwiX3Gz5Vv3eYkUtEgC7mTgZkb8fYKWyillcXFuN&s=10",
    title: "Product 148",
    description: "Lightweight and durable product for regular use.",
    price: 15699
  },
  {
    id: 149,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBTdb_lPEh3rs5Dd0fVwiX3Gz5Vv3eYkUtEgC7mTgZkb8fYKWyillcXFuN&s=10",
    title: "Product 149",
    description: "Elegant product with dependable performance.",
    price: 15799
  },
  {
    id: 150,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBTdb_lPEh3rs5Dd0fVwiX3Gz5Vv3eYkUtEgC7mTgZkb8fYKWyillcXFuN&s=10",
    title: "Product 150",
    description: "Quality product designed for modern lifestyles.",
    price: 15899
  },

  {
    id: 151,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBTdb_lPEh3rs5Dd0fVwiX3Gz5Vv3eYkUtEgC7mTgZkb8fYKWyillcXFuN&s=10",
    title: "Product 151",
    description: "High quality product with premium features.",
    price: 15999
  },
  {
    id: 152,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBTdb_lPEh3rs5Dd0fVwiX3Gz5Vv3eYkUtEgC7mTgZkb8fYKWyillcXFuN&s=10",
    title: "Product 152",
    description: "Durable and stylish product for everyday use.",
    price: 16099
  },
  {
    id: 153,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBTdb_lPEh3rs5Dd0fVwiX3Gz5Vv3eYkUtEgC7mTgZkb8fYKWyillcXFuN&s=10",
    title: "Product 153",
    description: "Modern design with excellent performance.",
    price: 16199
  },
  {
    id: 154,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBTdb_lPEh3rs5Dd0fVwiX3Gz5Vv3eYkUtEgC7mTgZkb8fYKWyillcXFuN&s=10",
    title: "Product 154",
    description: "Premium quality product made for daily needs.",
    price: 16299
  },
  {
    id: 155,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBTdb_lPEh3rs5Dd0fVwiX3Gz5Vv3eYkUtEgC7mTgZkb8fYKWyillcXFuN&s=10",
    title: "Product 155",
    description: "Reliable product with a clean and attractive design.",
    price: 16399
  },
  {
    id: 156,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBTdb_lPEh3rs5Dd0fVwiX3Gz5Vv3eYkUtEgC7mTgZkb8fYKWyillcXFuN&s=10",
    title: "Product 156",
    description: "Comfortable, useful and easy to use product.",
    price: 16499
  },
  {
    id: 157,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBTdb_lPEh3rs5Dd0fVwiX3Gz5Vv3eYkUtEgC7mTgZkb8fYKWyillcXFuN&s=10",
    title: "Product 157",
    description: "Smart product with great value for money.",
    price: 16599
  },
  {
    id: 158,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBTdb_lPEh3rs5Dd0fVwiX3Gz5Vv3eYkUtEgC7mTgZkb8fYKWyillcXFuN&s=10",
    title: "Product 158",
    description: "Lightweight and durable product for regular use.",
    price: 16699
  },
  {
    id: 159,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBTdb_lPEh3rs5Dd0fVwiX3Gz5Vv3eYkUtEgC7mTgZkb8fYKWyillcXFuN&s=10",
    title: "Product 159",
    description: "Elegant product with dependable performance.",
    price: 16799
  },
  {
    id: 160,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBTdb_lPEh3rs5Dd0fVwiX3Gz5Vv3eYkUtEgC7mTgZkb8fYKWyillcXFuN&s=10",
    title: "Product 160",
    description: "Quality product designed for modern lifestyles.",
    price: 16899
  },

  {
    id: 161,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBTdb_lPEh3rs5Dd0fVwiX3Gz5Vv3eYkUtEgC7mTgZkb8fYKWyillcXFuN&s=10",
    title: "Product 161",
    description: "High quality product with premium features.",
    price: 16999
  },
  {
    id: 162,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBTdb_lPEh3rs5Dd0fVwiX3Gz5Vv3eYkUtEgC7mTgZkb8fYKWyillcXFuN&s=10",
    title: "Product 162",
    description: "Durable and stylish product for everyday use.",
    price: 17099
  },
  {
    id: 163,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBTdb_lPEh3rs5Dd0fVwiX3Gz5Vv3eYkUtEgC7mTgZkb8fYKWyillcXFuN&s=10",
    title: "Product 163",
    description: "Modern design with excellent performance.",
    price: 17199
  },
  {
    id: 164,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBTdb_lPEh3rs5Dd0fVwiX3Gz5Vv3eYkUtEgC7mTgZkb8fYKWyillcXFuN&s=10",
    title: "Product 164",
    description: "Premium quality product made for daily needs.",
    price: 17299
  },
  {
    id: 165,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBTdb_lPEh3rs5Dd0fVwiX3Gz5Vv3eYkUtEgC7mTgZkb8fYKWyillcXFuN&s=10",
    title: "Product 165",
    description: "Reliable product with a clean and attractive design.",
    price: 17399
  },
  {
    id: 166,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBTdb_lPEh3rs5Dd0fVwiX3Gz5Vv3eYkUtEgC7mTgZkb8fYKWyillcXFuN&s=10",
    title: "Product 166",
    description: "Comfortable, useful and easy to use product.",
    price: 17499
  },
  {
    id: 167,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBTdb_lPEh3rs5Dd0fVwiX3Gz5Vv3eYkUtEgC7mTgZkb8fYKWyillcXFuN&s=10",
    title: "Product 167",
    description: "Smart product with great value for money.",
    price: 17599
  },
  {
    id: 168,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBTdb_lPEh3rs5Dd0fVwiX3Gz5Vv3eYkUtEgC7mTgZkb8fYKWyillcXFuN&s=10",
    title: "Product 168",
    description: "Lightweight and durable product for regular use.",
    price: 17699
  },
  {
    id: 169,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBTdb_lPEh3rs5Dd0fVwiX3Gz5Vv3eYkUtEgC7mTgZkb8fYKWyillcXFuN&s=10",
    title: "Product 169",
    description: "Elegant product with dependable performance.",
    price: 17799
  },
  {
    id: 170,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBTdb_lPEh3rs5Dd0fVwiX3Gz5Vv3eYkUtEgC7mTgZkb8fYKWyillcXFuN&s=10",
    title: "Product 170",
    description: "Quality product designed for modern lifestyles.",
    price: 17899
  },

  {
    id: 171,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBTdb_lPEh3rs5Dd0fVwiX3Gz5Vv3eYkUtEgC7mTgZkb8fYKWyillcXFuN&s=10",
    title: "Product 171",
    description: "High quality product with premium features.",
    price: 17999
  },
  {
    id: 172,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBTdb_lPEh3rs5Dd0fVwiX3Gz5Vv3eYkUtEgC7mTgZkb8fYKWyillcXFuN&s=10",
    title: "Product 172",
    description: "Durable and stylish product for everyday use.",
    price: 18099
  },
  {
    id: 173,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBTdb_lPEh3rs5Dd0fVwiX3Gz5Vv3eYkUtEgC7mTgZkb8fYKWyillcXFuN&s=10",
    title: "Product 173",
    description: "Modern design with excellent performance.",
    price: 18199
  },
  {
    id: 174,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBTdb_lPEh3rs5Dd0fVwiX3Gz5Vv3eYkUtEgC7mTgZkb8fYKWyillcXFuN&s=10",
    title: "Product 174",
    description: "Premium quality product made for daily needs.",
    price: 18299
  },
  {
    id: 175,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBTdb_lPEh3rs5Dd0fVwiX3Gz5Vv3eYkUtEgC7mTgZkb8fYKWyillcXFuN&s=10",
    title: "Product 175",
    description: "Reliable product with a clean and attractive design.",
    price: 18399
  },
  {
    id: 176,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBTdb_lPEh3rs5Dd0fVwiX3Gz5Vv3eYkUtEgC7mTgZkb8fYKWyillcXFuN&s=10",
    title: "Product 176",
    description: "Comfortable, useful and easy to use product.",
    price: 18499
  },
  {
    id: 177,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBTdb_lPEh3rs5Dd0fVwiX3Gz5Vv3eYkUtEgC7mTgZkb8fYKWyillcXFuN&s=10",
    title: "Product 177",
    description: "Smart product with great value for money.",
    price: 18599
  },
  {
    id: 178,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBTdb_lPEh3rs5Dd0fVwiX3Gz5Vv3eYkUtEgC7mTgZkb8fYKWyillcXFuN&s=10",
    title: "Product 178",
    description: "Lightweight and durable product for regular use.",
    price: 18699
  },
  {
    id: 179,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBTdb_lPEh3rs5Dd0fVwiX3Gz5Vv3eYkUtEgC7mTgZkb8fYKWyillcXFuN&s=10",
    title: "Product 179",
    description: "Elegant product with dependable performance.",
    price: 18799
  },
  {
    id: 180,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBTdb_lPEh3rs5Dd0fVwiX3Gz5Vv3eYkUtEgC7mTgZkb8fYKWyillcXFuN&s=10",
    title: "Product 180",
    description: "Quality product designed for modern lifestyles.",
    price: 18899
  },

  {
    id: 181,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBTdb_lPEh3rs5Dd0fVwiX3Gz5Vv3eYkUtEgC7mTgZkb8fYKWyillcXFuN&s=10",
    title: "Product 181",
    description: "High quality product with premium features.",
    price: 18999
  },
  {
    id: 182,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBTdb_lPEh3rs5Dd0fVwiX3Gz5Vv3eYkUtEgC7mTgZkb8fYKWyillcXFuN&s=10",
    title: "Product 182",
    description: "Durable and stylish product for everyday use.",
    price: 19099
  },
  {
    id: 183,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBTdb_lPEh3rs5Dd0fVwiX3Gz5Vv3eYkUtEgC7mTgZkb8fYKWyillcXFuN&s=10",
    title: "Product 183",
    description: "Modern design with excellent performance.",
    price: 19199
  },
  {
    id: 184,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBTdb_lPEh3rs5Dd0fVwiX3Gz5Vv3eYkUtEgC7mTgZkb8fYKWyillcXFuN&s=10",
    title: "Product 184",
    description: "Premium quality product made for daily needs.",
    price: 19299
  },
  {
    id: 185,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBTdb_lPEh3rs5Dd0fVwiX3Gz5Vv3eYkUtEgC7mTgZkb8fYKWyillcXFuN&s=10",
    title: "Product 185",
    description: "Reliable product with a clean and attractive design.",
    price: 19399
  },
  {
    id: 186,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBTdb_lPEh3rs5Dd0fVwiX3Gz5Vv3eYkUtEgC7mTgZkb8fYKWyillcXFuN&s=10",
    title: "Product 186",
    description: "Comfortable, useful and easy to use product.",
    price: 19499
  },
  {
    id: 187,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBTdb_lPEh3rs5Dd0fVwiX3Gz5Vv3eYkUtEgC7mTgZkb8fYKWyillcXFuN&s=10",
    title: "Product 187",
    description: "Smart product with great value for money.",
    price: 19599
  },
  {
    id: 188,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBTdb_lPEh3rs5Dd0fVwiX3Gz5Vv3eYkUtEgC7mTgZkb8fYKWyillcXFuN&s=10",
    title: "Product 188",
    description: "Lightweight and durable product for regular use.",
    price: 19699
  },
  {
    id: 189,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBTdb_lPEh3rs5Dd0fVwiX3Gz5Vv3eYkUtEgC7mTgZkb8fYKWyillcXFuN&s=10",
    title: "Product 189",
    description: "Elegant product with dependable performance.",
    price: 19799
  },
  {
    id: 190,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBTdb_lPEh3rs5Dd0fVwiX3Gz5Vv3eYkUtEgC7mTgZkb8fYKWyillcXFuN&s=10",
    title: "Product 190",
    description: "Quality product designed for modern lifestyles.",
    price: 19899
  },

  {
    id: 191,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBTdb_lPEh3rs5Dd0fVwiX3Gz5Vv3eYkUtEgC7mTgZkb8fYKWyillcXFuN&s=10",
    title: "Product 191",
    description: "High quality product with premium features.",
    price: 19999
  },
  {
    id: 192,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBTdb_lPEh3rs5Dd0fVwiX3Gz5Vv3eYkUtEgC7mTgZkb8fYKWyillcXFuN&s=10",
    title: "Product 192",
    description: "Durable and stylish product for everyday use.",
    price: 20099
  },
  {
    id: 193,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBTdb_lPEh3rs5Dd0fVwiX3Gz5Vv3eYkUtEgC7mTgZkb8fYKWyillcXFuN&s=10",
    title: "Product 193",
    description: "Modern design with excellent performance.",
    price: 20199
  },
  {
    id: 194,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBTdb_lPEh3rs5Dd0fVwiX3Gz5Vv3eYkUtEgC7mTgZkb8fYKWyillcXFuN&s=10",
    title: "Product 194",
    description: "Premium quality product made for daily needs.",
    price: 20299
  },
  {
    id: 195,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBTdb_lPEh3rs5Dd0fVwiX3Gz5Vv3eYkUtEgC7mTgZkb8fYKWyillcXFuN&s=10",
    title: "Product 195",
    description: "Reliable product with a clean and attractive design.",
    price: 20399
  },
  {
    id: 196,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBTdb_lPEh3rs5Dd0fVwiX3Gz5Vv3eYkUtEgC7mTgZkb8fYKWyillcXFuN&s=10",
    title: "Product 196",
    description: "Comfortable, useful and easy to use product.",
    price: 20499
  },
  {
    id: 197,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBTdb_lPEh3rs5Dd0fVwiX3Gz5Vv3eYkUtEgC7mTgZkb8fYKWyillcXFuN&s=10",
    title: "Product 197",
    description: "Smart product with great value for money.",
    price: 20599
  },
  {
    id: 198,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBTdb_lPEh3rs5Dd0fVwiX3Gz5Vv3eYkUtEgC7mTgZkb8fYKWyillcXFuN&s=10",
    title: "Product 198",
    description: "Lightweight and durable product for regular use.",
    price: 20699
  },
  {
    id: 199,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBTdb_lPEh3rs5Dd0fVwiX3Gz5Vv3eYkUtEgC7mTgZkb8fYKWyillcXFuN&s=10",
    title: "Product 199",
    description: "Elegant product with dependable performance.",
    price: 20799
  },
  {
    id: 200,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBTdb_lPEh3rs5Dd0fVwiX3Gz5Vv3eYkUtEgC7mTgZkb8fYKWyillcXFuN&s=10",
    title: "Product 200",
    description: "Quality product designed for modern lifestyles.",
    price: 20899
  }
];
export const Products = () => {
  return (
   <>
      

     <div className="flex  flex-wrap gap-8 h-screen p-2  align-center justify-center">
        {
         products.map((product)=>{
               return(
                <div key={product.id} >
                     <Card img={product.img}
                    title={product.title}
                    description={product.description}
                    price={product.price}   
                />
                </div>
               )
         })
        }
    </div>
   
   </>
  )
}
export default Products