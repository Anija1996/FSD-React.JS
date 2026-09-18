import React from "react";

const orders = [
	{ id: "#1001", date: "Jun 12, 2024", status: "Delivered", total: "$89.99" },
	{ id: "#1002", date: "Jun 15, 2024", status: "Processing", total: "$42.50" },
	{ id: "#1003", date: "Jun 18, 2024", status: "Shipped", total: "$124.00" },
];

function Orders() {
	return (
		<main style={styles.container}>
			<div style={styles.header}>
				<div>
					<h1 style={styles.title}>My Orders</h1>
					<p style={styles.subtitle}>View and track your recent orders.</p>
				</div>
				<button style={styles.shopButton} type="button">
					Continue Shopping
				</button>
			</div>

			<section style={styles.card} aria-label="Order history">
				<div style={styles.tableHeader}>
					<span>Order</span>
					<span>Date</span>
					<span>Status</span>
					<span>Total</span>
					<span aria-hidden="true" />
				</div>
				{orders.map((order) => (
					<div style={styles.orderRow} key={order.id}>
						<strong>{order.id}</strong>
						<span>{order.date}</span>
						<span style={{ ...styles.status, ...statusStyles[order.status] }}>
							{order.status}
						</span>
						<strong>{order.total}</strong>
						<button style={styles.detailsButton} type="button">
							View Details
						</button>
					</div>
				))}
			</section>
		</main>
	);
}

const statusStyles = {
	Delivered: { color: "#15803d", background: "#dcfce7" },
	Processing: { color: "#b45309", background: "#fef3c7" },
	Shipped: { color: "#1d4ed8", background: "#dbeafe" },
};

const styles = {
	container: { maxWidth: 1000, margin: "0 auto", padding: "40px 24px", fontFamily: "Arial, sans-serif", color: "#1f2937" },
	header: { display: "flex", justifyContent: "space-between", alignItems: "center", gap: 20, marginBottom: 28 },
	title: { margin: 0, fontSize: 32 },
	subtitle: { margin: "8px 0 0", color: "#6b7280" },
	shopButton: { border: 0, borderRadius: 6, padding: "12px 18px", background: "#2563eb", color: "white", cursor: "pointer", fontWeight: 600 },
	card: { overflow: "hidden", border: "1px solid #e5e7eb", borderRadius: 10, background: "white", boxShadow: "0 2px 8px rgba(0,0,0,.05)" },
	tableHeader: { display: "grid", gridTemplateColumns: "1fr 1.4fr 1.2fr 1fr 1.2fr", padding: "16px 20px", background: "#f9fafb", color: "#6b7280", fontSize: 13, fontWeight: 700 },
	orderRow: { display: "grid", gridTemplateColumns: "1fr 1.4fr 1.2fr 1fr 1.2fr", alignItems: "center", padding: "18px 20px", borderTop: "1px solid #e5e7eb", fontSize: 14, gap: 10 },
	status: { justifySelf: "start", borderRadius: 999, padding: "5px 10px", fontSize: 12, fontWeight: 700 },
	detailsButton: { justifySelf: "start", border: 0, background: "none", color: "#2563eb", cursor: "pointer", fontWeight: 600 },
};

export default Orders;
