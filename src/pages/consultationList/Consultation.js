import React, { useEffect } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { useDispatch, useSelector } from "react-redux";
import "react-tabs/style/react-tabs.css";
import { useHistory } from "react-router-dom";
import {
  getConsultation,
  reset,
} from "../../features/consultations/consultationSlice";

export default function Consultation({ match }) {
  const history = useHistory();
  const dispatch = useDispatch();
  let consultationId = match.params.id;

  const { user } = useSelector((state) => state.auth);
  const { consultation, isLoading, isError, message } = useSelector(
    (state) => state.consultation
  );

  useEffect(() => {
    if (isError) {
      console.log(message);
    }
    if (!user) {
      history.push("/login");
    }
    dispatch(getConsultation(consultationId));
    return () => {
      dispatch(reset());
    };
  }, [dispatch, history, message, isError]);
  return (
    <div className="consultation">
      <Tabs>
        <TabList>
          <Tab>Title 1</Tab>
          <Tab>Title 2</Tab>
        </TabList>

        <TabPanel>
          <h2>Any content 1</h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 2</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
}
