import { useState } from "react";

function Settings() {
	const [darkMode, setDarkMode] = useState(false);
	const [notifications, setNotifications] = useState(true);

	return (
		<main style={styles.page}>
			<section style={styles.card}>
				<h1 style={styles.title}>Settings</h1>
				<p style={styles.subtitle}>Manage your account preferences.</p>

				<div style={styles.section}>
					<h2 style={styles.heading}>Preferences</h2>
					<label style={styles.option}>
						<span>
							<strong>Dark mode</strong>
							<small style={styles.description}>Use a darker appearance</small>
						</span>
						<input
							type="checkbox"
							checked={darkMode}
							onChange={(event) => setDarkMode(event.target.checked)}
						/>
					</label>
					<label style={styles.option}>
						<span>
							<strong>Email notifications</strong>
							<small style={styles.description}>Receive updates by email</small>
						</span>
						<input
							type="checkbox"
							checked={notifications}
							onChange={(event) => setNotifications(event.target.checked)}
						/>
					</label>
				</div>

				<div style={styles.section}>
					<h2 style={styles.heading}>Account</h2>
					<button type="button" style={styles.button}>Change password</button>
					<button type="button" style={{ ...styles.button, ...styles.danger }}>
						Sign out
					</button>
				</div>
			</section>
		</main>
	);
}

const styles = {
	page: { minHeight: "100vh", padding: "40px 20px", background: "#f4f6f8", fontFamily: "Arial, sans-serif" },
	card: { maxWidth: "640px", margin: "0 auto", padding: "32px", background: "#fff", borderRadius: "12px", boxShadow: "0 4px 16px rgba(0,0,0,.08)" },
	title: { margin: 0, color: "#1f2937" },
	subtitle: { margin: "8px 0 28px", color: "#6b7280" },
	section: { padding: "20px 0", borderTop: "1px solid #e5e7eb" },
	heading: { margin: "0 0 16px", fontSize: "18px", color: "#374151" },
	option: { display: "flex", justifyContent: "space-between", alignItems: "center", gap: "20px", padding: "14px 0", color: "#111827", cursor: "pointer" },
	description: { display: "block", marginTop: "4px", color: "#6b7280", fontWeight: "normal" },
	button: { marginRight: "12px", padding: "10px 16px", border: "0", borderRadius: "6px", background: "#2563eb", color: "#fff", cursor: "pointer" },
	danger: { background: "#dc2626" },
};

export default Settings;
