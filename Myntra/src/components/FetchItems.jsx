import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { itemActions } from "../store/itemSlice";
import { fecthingAction } from "../store/fetch";

const FetchItems = () => {
  const dispatch = useDispatch();
  const fetchingData = useSelector((state) => {
    return state.fetch;
  });

  console.log(fetchingData.fetchingDone);

  useEffect(() => {
    if (fetchingData.fetchingDone) return;
    // Create an AbortController instance
    const controller = new AbortController();
    // Obtain a reference to the AbortSignal
    const signal = controller.signal;
    dispatch(fecthingAction.markfetchingStarted());
    fetch("https://myntra-jlt5.onrender.com/items", { signal })
      .then((res) => res.json())
      .then(({ items }) => {
        console.log(items);
        dispatch(itemActions.addInitialItems(items));
        dispatch(fecthingAction.markfetchingFinished());
        dispatch(fecthingAction.markfetchDone());
      });

    return () => {
      console.log("Cleaning up");
      controller.abort();
    };
  }, [fetchingData]);

  //   console.log(fetchingData);
  //   console.log(fetchingData);
  //   console.log(fetchingData);

  return <div></div>;
};

export default FetchItems;
