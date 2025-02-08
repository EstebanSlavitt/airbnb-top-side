export function ListingsIndex({ listings }) {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">All Listings</h1>
      {listings.length > 0 ? (
        listings.map((listing) => (
          <div key={listing.id} className="border p-4 mb-2 rounded shadow-lg">
            <h2 className="text-xl font-semibold">{listing.title}</h2>
            <p>{listing.description}</p>
            <p className="text-gray-600">Price: ${listing.price_per_night} / night</p>
          </div>
        ))
      ) : (
        <p className="text-gray-500">No listings available.</p>
      )}
    </div>
  );
}
