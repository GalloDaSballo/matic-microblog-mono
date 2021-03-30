import React, { useState } from "react";
import { ethers } from "ethers";

import styles from "./NewPostForm.module.scss";
import getContract from "../../utils/getContract";
import { useRouter } from "next/router";

const NewPostForm: React.FC = () => {
	const [content, setContent] = useState("");
	const router = useRouter();

	const handleFormSubmit = async (e: Event) => {
		e.preventDefault();
		
		if (!content.length) {
			return;
		}

		const provider = new ethers.providers.Web3Provider(
			(window as any).ethereum
		);

		const contract = getContract(provider.getSigner());
		await contract.post(content, "");
		router.push("/");
	};

	return (
		<form onSubmit={handleFormSubmit}>
			<div className={styles.formControl}>
				<h2>New Post</h2>
				<textarea
					cols={30}
					rows={10}
					value={content}
					onChange={(e) => setContent(e.target.value)}
				></textarea>
			</div>

			<div className={styles.formControl}>
				<button type="submit">Submit</button>
			</div>
		</form>
	);
};

export default NewPostForm;
