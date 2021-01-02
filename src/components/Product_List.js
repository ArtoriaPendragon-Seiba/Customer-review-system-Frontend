import { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
	Card,
	CardActionArea,
	CardContent,
	CardMedia,
	Typography,
	Box,
	Grid,
	TextField,
	Button,
} from "@material-ui/core";
import { Rating, Pagination } from "@material-ui/lab";
import * as action from "../redux/actionCreators";
import { connect } from "react-redux";

const useStyles = makeStyles({
	root: {
		maxWidth: 345,
	},
});

function Product_List(props) {
	const [searchKey, setSearchKey] = useState("");
	const [curPage, setCurPage] = useState(1);
	useEffect(() => {
		props.getList(searchKey, curPage);
	}, []);
	const handleClick = (id) => {
		props.history.push({ pathname: `/detail/${id}`, state: { id: id } });
	};
	const classes = useStyles();

	const handleSearch = (e) => {
		e.preventDefault();
		setCurPage(1);
		props.getList(searchKey, 1);
	};
	return (
		<div
			className="List-container"
			style={{ margin: "20px 20px  20px  20px " }}
		>
			<Grid container spacing={3}>
				<Grid item xs={12}>
					<div
						style={{ width: "100%", display: "flex", justifyContent: "center" }}
					>
						<form
							className="Search_bar"
							noValidate
							autoComplete="off"
							onSubmit={handleSearch}
						>
							<TextField
								id="standard-basic"
								label="Search"
								onChange={(e) => {
									setSearchKey(e.target.value);
								}}
								style={{ width: "500px" }}
							/>
							<Button variant="contained" color="primary" type="submit">
								Search
							</Button>
						</form>
					</div>
				</Grid>
				{props.items.data.map((item) => {
					return (
						<Grid item xs={2}>
							<Card className={classes.root} key={item._id}>
								<CardActionArea onClick={() => handleClick(item._id)}>
									<CardMedia
										component="img"
										alt={item.name}
										height="200"
										image={item.photoPath}
										title={item.name}
									/>
									<CardContent>
										<Typography gutterBottom variant="h5" component="h2">
											{item.name}
										</Typography>
									</CardContent>
								</CardActionArea>
								<CardContent>
									<Box component="fieldset" mb={3} borderColor="transparent">
										<Typography component="legend">Rating</Typography>
										<Rating
											name="half-rating-read"
											value={item.rating}
											precision={0.5}
											readOnly
										/>
									</Box>
								</CardContent>
							</Card>
						</Grid>
					);
				})}
			</Grid>
			<div style={{ display: "table", margin: "0 auto" }}>
				<Pagination
					count={20}
					onChange={(e, pageNum) => {
						props.getList(searchKey, pageNum);
					}}
				/>
			</div>
		</div>
	);
}

const mapStateToProps = (state) => {
	return {
		items: state.getList_Reducer,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		getList: (search_key = "", pageNum = 1) => {
			dispatch(action.getList(search_key, pageNum));
		},
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Product_List);
