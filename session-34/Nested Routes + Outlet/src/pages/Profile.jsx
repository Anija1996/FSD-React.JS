import React from "react";
import { useParams } from "react-router-dom";

const Profile = () => {
    const {id} = useParams();

	return (
		<main style={styles.page}>
            <p>User ID: {id}</p>
			<section style={styles.card} aria-labelledby="profile-title">
				<div style={styles.cover} />
				<div style={styles.content}>
					<div style={styles.header}>
						<div style={styles.avatar} aria-hidden="true">JD</div>
						<div style={styles.identity}>
							<h1 id="profile-title" style={styles.name}>Jordan Davis</h1>
							<p style={styles.role}>Frontend Developer</p>
							<p style={styles.location}>📍 Kochi, India</p>
						</div>
						<button type="button" style={styles.button}>Edit profile</button>
					</div>

					<div style={styles.divider} />
					<h2 style={styles.sectionTitle}>About</h2>
					<p style={styles.about}>
						Passionate developer who enjoys building accessible, responsive, and
						user-friendly web experiences with React.
					</p>

					<div style={styles.details}>
						<div><strong>Email</strong><span>jordan.davis@example.com</span></div>
						<div><strong>Member since</strong><span>January 2024</span></div>
					</div>
				</div>
			</section>
		</main>
	);
};

const styles = {
	page: {
		minHeight: "100vh",
		display: "grid",
		placeItems: "center",
		padding: "32px 16px",
		background: "#f4f7fb",
		fontFamily: "Arial, sans-serif",
		color: "#172033",
	},
	card: {
		width: "min(100%, 720px)",
		overflow: "hidden",
		borderRadius: "18px",
		background: "#fff",
		boxShadow: "0 12px 35px rgba(31, 48, 77, 0.12)",
	},
	cover: { height: "130px", background: "linear-gradient(135deg, #4f46e5, #7c3aed)" },
	content: { padding: "0 36px 36px" },
	header: { display: "flex", alignItems: "center", gap: "18px", marginTop: "-42px" },
	avatar: {
		width: "84px", height: "84px", borderRadius: "50%", display: "grid",
		placeItems: "center", flexShrink: 0, background: "#fff", color: "#4f46e5",
		border: "5px solid #fff", boxShadow: "0 3px 12px rgba(0,0,0,.15)",
		fontSize: "24px", fontWeight: "700",
	},
	identity: { flex: 1, paddingTop: "45px" },
	name: { margin: 0, fontSize: "25px" },
	role: { margin: "5px 0 2px", color: "#5b6475" },
	location: { margin: 0, color: "#7b8494", fontSize: "14px" },
	button: {
		marginTop: "45px", padding: "10px 17px", border: "0", borderRadius: "8px",
		background: "#4f46e5", color: "#fff", fontWeight: "600", cursor: "pointer",
	},
	divider: { height: "1px", margin: "30px 0 26px", background: "#e8ebf0" },
	sectionTitle: { margin: 0, fontSize: "18px" },
	about: { lineHeight: 1.6, color: "#5b6475" },
	details: {
		display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
		gap: "20px", marginTop: "28px", paddingTop: "22px", borderTop: "1px solid #e8ebf0",
	},
};

export default Profile;
