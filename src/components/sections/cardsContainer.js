import { Grid } from "@mui/material"
import HomeCard from "../cards/homeCard"

export default function CardsContainer() {
    return (
        <Grid container gap={4} sx={{ p: 3, justifyContent: "center", bgcolor: "#ebebeb" }}>
            <Grid item xs={2}>
                <HomeCard />
            </Grid>
            <Grid item xs={2}>
                <HomeCard />
            </Grid>
            <Grid item xs={2}>
                <HomeCard />
            </Grid>
            <Grid item xs={2}>
                <HomeCard />
            </Grid>
            <Grid item xs={2}>
                <HomeCard />
            </Grid>
            <Grid item xs={2}>
                <HomeCard />
            </Grid>
            <Grid item xs={2}>
                <HomeCard />
            </Grid>
            <Grid item xs={2}>
                <HomeCard />
            </Grid>
            <Grid item xs={2}>
                <HomeCard />
            </Grid>
            <Grid item xs={2}>
                <HomeCard />
            </Grid>
            <Grid item xs={2}>
                <HomeCard />
            </Grid>
            <Grid item xs={2}>
                <HomeCard />
            </Grid>
        </Grid>
    )
}