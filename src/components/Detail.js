import { useState, useEffect, Fragment } from "react";
import {
	Grid,
	List,
	ListItem,
	ListItemText,
	Divider,
	Button,
} from "@material-ui/core";
import Rating from "@material-ui/lab/Rating";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import * as action from "../redux/actionCreators";
import { connect } from "react-redux";

const useStyles = makeStyles((theme) => ({
	root: {
		"& .MuiTextField-root": {
			margin: theme.spacing(1),
			width: "50ch",
		},
	},
}));

function Detail(props) {
	const classes = useStyles();
	const [rating, setRating] = useState(3);
	const [name, setName] = useState("");
	const [review, setReview] = useState("");
	useEffect(() => {
		console.log(props.history.location.state.id);
		props.getOne(props.history.location.state.id);
		return () => {
			props.clearMemory();
		};
	}, []);
	const handleSubmit = (event) => {
		event.preventDefault();
		props.update(props.history.location.state.id, {
			name: name,
			comment: review,
			rating: rating,
		});
		props.getOne(props.history.location.state.id);
	};
	return (
		<div className="container" style={{ margin: "20px 20px 20px 20px " }}>
			<Grid container spacing={4}>
				<Grid item xs={12}>
					<Button
						variant="outlined"
						onClick={() => {
							props.history.push("/");
						}}
					>
						&lt;back
					</Button>
				</Grid>
				<Grid item xs={12}>
					<h1>{props.item.name}</h1>
					<Rating
						name="read-only"
						value={Number.parseFloat(props.item.rating)}
						precision={0.5}
						readOnly
					/>
				</Grid>
				<Grid item xs={12} sm={6}>
					<img
						src={props.item.photoPath}
						alt={props.item.name}
						style={{ width: "400px", height: "400px" }}
					/>
				</Grid>
				<Grid item xs={12} sm={6}>
					<Rating
						name="read-only"
						value={rating}
						onChange={(e, newValue) => {
							setRating(newValue);
						}}
					/>
					<form
						className={classes.root}
						noValidate
						autoComplete="off"
						onSubmit={(e) => handleSubmit(e)}
					>
						<TextField
							required
							id="standard-required"
							label="Name"
							value={name}
							onChange={(e) => {
								setName(e.target.value);
							}}
						/>
						<br />
						<br />
						<TextField
							required
							id="outlined-multiline-static"
							label="Your review"
							rows={7}
							multiline
							value={review}
							onChange={(e) => {
								setReview(e.target.value);
							}}
							variant="outlined"
						/>
						<br />
						<div style={{ marginLeft: "150px", marginTop: "20px" }}>
							<Button variant="contained" color="primary" type="submit">
								Submit review
							</Button>
						</div>
					</form>
				</Grid>
				<Grid item xs={12}>
					<h2>Customer Review</h2>
					<List className={classes.root}>
						{props.item.reviews &&
							props.item.reviews.map((review, index) => {
								return (
									<Fragment key={index}>
										<ListItem alignItems="flex-start">
											<ListItemText
												primary={review.name}
												secondary={review.comment}
											/>
										</ListItem>
										<Divider variant="inset" component="li" />
									</Fragment>
								);
							})}
					</List>
				</Grid>
			</Grid>
		</div>
	);
}
const mapStateToProps = (state) => {
	return {
		item: state.getOne_Reducer.data,
		update_Reducer: state.update_Reducer,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		getOne: (id) => {
			dispatch(action.getOne(id));
		},
		update: (id, review) => {
			dispatch(action.updateOne(id, review));
		},
		clearMemory: () => {
			dispatch(action.clearGetOneReducer());
		},
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Detail);
