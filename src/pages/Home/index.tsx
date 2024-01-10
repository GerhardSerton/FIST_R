import fistLogo from '../../assets/FIST Logo.png';
import './style.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import * as React from 'react';
import Button from '@mui/material/Button';

import KIAButton from '../../components/KIAButton/KIAButton';
import { Grid } from '@mui/material';

export function Home() {
	return (
		<div class="home">
			<Grid container>
				<Grid item xs={12}>
					<KIAButton onClick={() => {console.log("Clicked!")}}/>
				</Grid>
			</Grid>
		</div>
	);
}
