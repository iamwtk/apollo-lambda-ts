import axios from "axios";

export default function handleContext(context) {
  const { event } = context;
  axios.defaults.headers.common.authorization =
    event.headers.authorization || "";
  return event;
}
