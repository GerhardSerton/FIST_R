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
import SheetSections from '../../components/SheetSections/SheetSections';
import Barcode from '../../components/Barcode/Barcode';

export function Home() {
	return (
		<div class="home">
			<Grid container className='sideLogo'>
				<Grid direction={'column'} xs={12} className='sideLogoItem'>
					<Barcode/>
				</Grid>
			</Grid>
			<div>
			<Grid container>
				<Grid item xs={12}>
						<KIAButton onClick={() => {console.log("Clicked!")}}/>
				</Grid>
			</Grid>
			<Grid container direction={'column'} className="container">
				<Grid item xs={6} className="sector">
					<SheetSections title='' long={false}/>
				</Grid>
				<Grid item xs={6} className="sector">
					<SheetSections title='Inventory' long={false}/>
				</Grid>
				<Grid item xs={6} className="sector traits">
					<SheetSections title='Traits' long={true}/>
				</Grid>
			</Grid>
			</div>
		</div>
	);
}
