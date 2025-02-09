// Import the PocketBase client
import PocketBase from 'pocketbase';

// Initialize PocketBase instance with your Render-deployed API
const pb = new PocketBase('https://pocketbase-app-vr.onrender.com');

// Example car data to populate
const carsData = [
  {
    brand: "Nissan",
    year: 2022,
    model: "Altima",
    category: "Luxury",
    body_type: "Sedan",
    fuel_type: "Petrol",
    color: "White",
    deposit: 300,
    seats: 5,
    KMs: 20000,
    additional_info: "Comfortable and efficient sedan.",
    daily_price: 100,
    weekly_price: 600,
    status: "Available"
  },
  {
    brand: "Toyota",
    year: 2021,
    model: "Corolla",
    category: "Economy",
    body_type: "Sedan",
    fuel_type: "Hybrid",
    color: "Blue",
    deposit: 250,
    seats: 5,
    KMs: 30000,
    additional_info: "Reliable and fuel-efficient vehicle.",
    daily_price: 80,
    weekly_price: 500,
    status: "Available"
  },
  {
    brand: "Tesla",
    year: 2023,
    model: "Model 3",
    category: "Luxury",
    body_type: "Sedan",
    fuel_type: "Electric",
    color: "Red",
    deposit: 500,
    seats: 5,
    KMs: 1000,
    additional_info: "Cutting-edge technology with autopilot features.",
    daily_price: 150,
    weekly_price: 900,
    status: "Available"
  }
];

// Function to create car records
async function createCarRecords() {
  try {
    for (const car of carsData) {
      const record = await pb.collection('cars').create(car);
      console.log(`Created record: ${record.id}`);
    }
    console.log('All car records created successfully.');
  } catch (error) {
    console.error('Error creating car records:', error);
  }
}

// Run the function
createCarRecords();

