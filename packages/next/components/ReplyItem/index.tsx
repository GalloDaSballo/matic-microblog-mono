import React, { useEffect, useState } from "react";
import { Post } from "../../types";
import getContract from "../../utils/getContract";
import { ethers } from "ethers";
import styles from "./RepyItem.module.scss";

const ReplyItem: React.FC<Post> = ({
	author,
	content,
	dislikes,
	likes,
	id,
}) => {
	const [likesCount, setLikesCount] = useState(0);
	const [dislikesCount, setDislikesCount] = useState(0);

	useEffect(() => {
		setLikesCount(likes);
		setDislikesCount(dislikes);
	}, [likes, dislikes]);

	const handleRating = async (type: "like" | "dislike") => {
		const provider = new ethers.providers.Web3Provider(
			(window as any).ethereum
		);
		const contract = getContract(provider.getSigner());

		if (type === "like") {
			await contract.like(id);
			setLikesCount((oldLikes) => oldLikes + 1);
		}

		if (type === "dislike") {
			await contract.dislike(id);
			setDislikesCount((oldLikes) => oldLikes + 1);
		}
	};

	return (
		<li className={styles.reply}>
			<div className={styles.main}>
				<span>{author}</span>
				<p>{content}</p>
			</div>
			<div className={styles.rating}>
				<button onClick={() => handleRating("like")}>
					<span>Likes: {likesCount}</span>
				</button>
				<button onClick={() => handleRating("dislike")}>
					<span>Dislikes: {dislikesCount}</span>
				</button>
			</div>
		</li>
	);
};

export default ReplyItem;
