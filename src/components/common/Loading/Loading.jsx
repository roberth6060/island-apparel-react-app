import { useEffect, useState } from "react";
import PuffLoader from "react-spinners/PuffLoader";
const Loading = () => {
  /**TODO - loading animation with react spinners */
  //   const [loading, setLoading] = useState(false);
  //   useEffect(() => {
  //     setLoading(true);
  //     setTimeout(() => {
  //       setLoading(false);
  //     }, 2000);
  //   }, []);

  return <PuffLoader />;
};
export default Loading;
