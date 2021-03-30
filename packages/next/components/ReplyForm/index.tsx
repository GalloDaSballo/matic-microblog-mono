import React, { FormEvent, useState } from "react";
import getContract from "../../utils/getContract";
import styles from "./ReplyForm.module.scss";
import { useUser } from "../../context/UserContext";

const ReplyForm: React.FC<{id: string; reloader: () => void}> = ({ id, reloader }) => {
	const [content, setContent] = useState("");
	const [loading, setLoading] = useState(false)
	const user = useUser()

	const submitHandler = async (e: FormEvent) => {
		e.preventDefault();

		if (!content.length) {
			return;
		}

		setLoading(true)

		const contract = getContract(user.provider.getSigner());
		await (await contract.post(content, id)).wait();

		setLoading(false)

		reloader()
	};

	return (
		<form onSubmit={submitHandler} className={styles.form}>
			{loading && <p>Sending your message</p>}
			<div>
				<textarea
					cols={30}
					rows={10}
					value={content}
					onChange={(e) => setContent(e.target.value)}
				></textarea>
			</div>
			<div>
				<button disabled={!user} type="submit">Submit Reply</button>
			</div>
		</form>
	);
};

export default ReplyForm;
