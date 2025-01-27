"use client"
import { PrivyProvider } from "@privy-io/react-auth";


export default function Providers({ children }) {
	return (
		<PrivyProvider
			appId="cm6awn2ev0119ccddkhh0s4tg"
			config={{
				// Customize Privy's appearance in your app
				appearance: {
					theme: "light",
					accentColor: "#676FFF",
					logo: "https://i.ibb.co.com/LtGbmvx/apple-touch-icon.png",
				},
				// Create embedded wallets for users who don't have a wallet
				embeddedWallets: {
					createOnLogin: "users-without-wallets",
				},
				loginMethods: ["email", "wallet", "google", "apple", "farcaster"],
			}}
		>
			{children}
		</PrivyProvider>
	);
}
