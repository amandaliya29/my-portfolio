import cyaPayImg from '@/assets/images/cyaPay.png'
import foodMarketImg from '@/assets/images/foodMarket.png'

export const projects = [
  {
    id: 'cyapay',
    title: 'CyaPay',
    tags: ['React Native', 'Laravel', 'Firebase', 'AWS'],
    desc: 'Digital Payments & UPI Fintech App built to demonstrate modern payment workflows, secure authentication, and scalable backend architecture.',
    fullDesc: 'CyaPay is a UPI-based digital payments fintech prototype built to demonstrate modern payment workflows, secure authentication, and scalable backend architecture. The app closely simulates real-world fintech applications used for peer-to-peer payments and UPI transactions.',
    features: [
      'Send & receive money between app users',
      'UPI ID–based payments and bank transfers',
      'Transaction history with detailed records',
      'Secure phone number login using Firebase Authentication'
    ],
    advancedFeatures: {
      title: 'Advanced Fintech Capabilities',
      items: [
        {
          name: 'Credit UPI System',
          desc: 'Bank-approved credit limit assigned to users. Credit usable for bill payments and recharges. Repayment handled directly with the bank.'
        },
        {
          name: 'NBFC Credit UPI',
          desc: 'Credit-based UPI managed by an NBFC. Linked to a single mobile number. No traditional credit card required.'
        }
      ]
    },
    techStack: {
      frontend: ['React Native', 'JavaScript', 'REST API integration'],
      backend: ['Laravel (API & Business Logic)', 'Firebase Phone Authentication', 'AWS (Apache, SSL, Server Security)']
    },
    purpose: 'Demonstrate fintech-grade app architecture, simulate real UPI & credit-based payment workflows, and showcase React Native + Laravel integration.',
    links: { 
      live: 'https://github.com/amandaliya29/payment-app-frontend'
    },
    img: cyaPayImg,
    isSmall: false
  },
  {
    id: 'food-market',
    title: 'Food Market',
    tags: ['React Native', 'Laravel', 'Sanctum', 'Razorpay'],
    desc: 'Online Food Ordering App designed with a scalable backend and clean modular architecture, featuring secure payments via Razorpay.',
    fullDesc: 'Food Market is an online food ordering application designed with a scalable backend and a clean, modular architecture. The project focuses on secure authentication, order management, and seamless payment processing.',
    features: [
      'User authentication with Laravel Sanctum',
      'Browse food items & categories',
      'Add to cart & place orders',
      'Secure online payments using Razorpay',
      'Admin-ready CRUD architecture'
    ],
    advancedFeatures: {
      title: 'Payment Integration',
      items: [
        {
          name: 'Razorpay',
          desc: 'Secure transaction handling and smooth checkout flow using Razorpay payment gateway.'
        }
      ]
    },
    techStack: {
      frontend: ['React Native', 'JavaScript'],
      backend: ['Laravel', 'Laravel Sanctum (Auth)', 'Eloquent ORM', 'Razorpay API']
    },
    purpose: 'Clean and maintainable backend logic, secure authentication & authorization, scalable CRUD operations, and real-world payment flow.',
    links: { 
      live: 'https://github.com/amandaliya29/FoodMarket'
    },
    img: foodMarketImg,
    isSmall: false
  }
]
