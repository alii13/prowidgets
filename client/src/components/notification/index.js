import { notification } from "antd";

export default function (type, message, duration=3,description = "") {
	return notification[type]({
        duration,
		message,
		description,
	});
}
