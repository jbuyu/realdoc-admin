import { Table } from "antd";
import Button from "antd-button-color";
import moment from "moment";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Spinner from "../../components/Spinner";
import {
  getCompletedConsultations,
  getConsultations,
  getPendingConsultations,
  reset,
} from "../../features/consultations/consultationSlice";
import "./completed-list.css";

export default function CompletedList() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //selectors
  const { user } = useSelector(state => state.auth);
  const { consultations, isLoading, isError, message } = useSelector(
    state => state.consultations
  );

  const columns = [
    {
      title: "Date Created",
      sorter: true,
      key: "createdAt",
      render: item =>
        item.createdAt
          ? moment(item.createdAt).format("MM-DD-YYYY")
          : "<Never>",
    },
    {
      title: "First Name",
      dataIndex: "firstName",
      key: "fistName",
    },
    {
      title: "Last Name",
      dataIndex: "lastName",
      key: "lastName",
    },
    {
      title: "Type",
      dataIndex: "consultationType",
      key: "consultationType",
    },
    {
      title: "Gender",
      dataIndex: "gender",
      key: "gender",
    },

    {
      title: "Contact",
      dataIndex: "phoneNo",
      key: "contact",
    },
    {
      title: "Age",
      dataIndex: "dateOfBirth",
      key: "dateOfBirth",
    },
    // {
    //   title: "Email",
    //   dataIndex: "email",
    //   key: "email",
    // },
    {
      title: "Symptoms",
      dataIndex: "symptoms",
      key: "symptoms",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: record => {
        if (record === "Pending") {
          return (
            <Button shape="round" size="small" type="primary">
              PENDING
            </Button>
          );
        } else {
          return (
            <Button shape="round" size="small" type="success">
              COMPLETED
            </Button>
          );
        }
      },
    },
    {
      title: "Actions",
      dataIndex: "",
      key: "x",
      render: item => (
        <Link to={`/dashboard/consultations/${item._id}`}>
          <Button size="small" type="dashed">
            view
          </Button>
        </Link>
      ),
    },
  ];
  useEffect(() => {
    if (isError) {
      console.log(message);
    }
    if (!user) {
      navigate("/");
    }
    dispatch(getCompletedConsultations());
    return () => {
      dispatch(reset());
    };
  }, [dispatch, navigate, message, isError]);

  if (isLoading) {
    return <Spinner />;
  }
  return (
    <div className="consultationsList">
      <div style={{ height: 800, width: "100%" }}>
        <Table
          size="small"
          rowKey="_id"
          dataSource={consultations}
          columns={columns}
        />
      </div>
    </div>
  );
}
