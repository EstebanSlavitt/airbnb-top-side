import axios from "axios";
import { useState, useEffect } from "react";
import { ListingsIndex } from "./ListingsIndex.jsx"; // Ensure correct import

export function ListingsPage() {
  const [listings, setListings] = useState([]);

  const fetchListings = () => {
    console.log("Fetching listings...");
    axios.get("http://localhost:3000/listings.json").then((response) => {
      console.log(response.data);
      setListings(response.data);
    });
  };

  useEffect(fetchListings, []);

  return (
    <main className="p-6">
      <ListingsIndex listings={listings} />
    </main>
  );
}
