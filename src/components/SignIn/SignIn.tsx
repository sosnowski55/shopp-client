import { FC } from "react";
import { Box, Grid } from "@mui/material";
import { GithubLoginButton, GoogleLoginButton } from "react-social-login-buttons";
import { useSearchParams } from "react-router-dom";



const SignIn: FC = () => {
	const [searchParams] = useSearchParams()

	const handleRedirect = (url: string) => {
		if (searchParams.get("redirectPayment") != null && searchParams.get("redirectPayment") === "true") {
			localStorage.setItem("redirectUrl", "/payment")
		}
		window.location.assign(url)
	}

	return (
		<Box>
			<Grid
				container
				direction="column"
				justifyContent="center"
				alignItems="center"
				style={{minHeight: 600}}
				gap={5}
			>
				<GoogleLoginButton style={{width: 500}} onClick={() => handleRedirect("http://localhost:8080/login")}/>
				<GithubLoginButton style={{width: 500}} onClick={() => handleRedirect("http://localhost:8080/login/github")}/>
			</Grid>
		</Box>
	)

}


export default SignIn;