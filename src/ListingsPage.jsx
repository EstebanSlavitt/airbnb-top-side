import { useEffect, useState } from "react";
import axios from "axios";

export function ListingsPage() {
  const [listings, setListings] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/listings.json")
      .then((response) => setListings(response.data))
      .catch((error) => console.error("Error fetching listings:", error));
  }, []);

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">Available Listings</h1>
      <ul>
        {listings.length > 0 ? (
          listings.map((listing) => (
            <li key={listing.id} className="border p-4 mb-2 rounded shadow-lg">
              <h2 className="text-xl font-semibold">{listing.title}</h2>
              <p>{listing.description}</p>
              <p className="text-gray-600">Price: ${listing.price_per_night} / night</p>
            </li>
          ))
        ) : (
          <p className="text-gray-500">No listings available.</p>
        )}
      </ul>
    </main>
  );
}
