import React, { FormEvent, useState } from "react";
import { Post } from "../../types";
import { ethers } from "ethers";
import getContract from "../../utils/getContract";

const ReplyForm: React.FC<Post> = ({ id }) => {
	const [content, setContent] = useState("");

	const submitHandler = async (e: FormEvent) => {
		e.preventDefault();

		const provider = new ethers.providers.Web3Provider(
			(window as any).ethereum
		);
		const contract = getContract(provider.getSigner());
        await contract.post(content, id);
	};

	return (
		<form onSubmit={submitHandler}>
			<div>
				<textarea
					cols={30}
					rows={10}
					value={content}
					onChange={(e) => setContent(e.target.value)}
				></textarea>
			</div>
			<div>
				<button type="submit">Submit Reply</button>
			</div>
		</form>
	);
};

export default ReplyForm;
