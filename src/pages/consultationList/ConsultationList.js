import { Table } from "antd";
import Button from "antd-button-color"
import moment from "moment";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Spinner from "../../components/Spinner";
import {
  getConsultations,
  reset,
} from "../../features/consultations/consultationSlice";
import "./consultation.css";

export default function ConsultationList() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //selectors
  const { user } = useSelector(state => state.auth);
  const { consultations, isLoading, isError, message } = useSelector(
    state => state.consultations
  );

  // const columns = [
  //   {
  //     field: "createdAt",
  //     headerName: "Date Created",
  //     width: 130,
  //     renderCell: params => {
  //       return (
  //         <div className="cellAction">
  //           <div className="">
  //             {format(new Date(params.row.createdAt), "MM/dd/yyyy")}
  //           </div>
  //         </div>
  //       );
  //     },
  //   },
  //   { field: "consultationType", headerName: "Type", width: 120 },
  //   { field: "gender", headerName: "Gender", width: 70 },
  //   {
  //     field: "name",
  //     headerName: "Name",
  //     width: 140,
  //     renderCell: params => {
  //       return (
  //         <div className="cellAction">
  //           <div className="">
  //             {params.row.firstName + " " + params.row.lastName}
  //           </div>
  //         </div>
  //       );
  //     },
  //   },
  //   { field: "phoneNo", headerName: "Phone Number", width: 120 },
  //   {
  //     field: "dateOfBirth",
  //     headerName: "DOB",
  //     width: 130,
  //     renderCell: params => {
  //       return (
  //         <div className="cellAction">
  //           <div className="">
  //             {format(new Date(params.row.dateOfBirth), "MM/dd/yyyy")}
  //           </div>
  //         </div>
  //       );
  //     },
  //   },
  //   { field: "email", headerName: "Email", width: 130 },
  //   { field: "symptoms", headerName: "Symptoms", width: 200 },
  //   {
  //     field: "status",
  //     headerName: "Status",
  //     width: 140,
  //     renderCell: params => {
  //       return (
  //         <div className="cellAction">
  //           {params.row.status === "Pending" ? (
  //             <div className="pending-btn">PENDING</div>
  //           ) : (
  //             <div className="completed-btn">COMPLETED</div>
  //           )}
  //         </div>
  //       );
  //     },
  //   },
  //   {
  //     field: "action",
  //     headerName: "Action",
  //     width: 140,
  //     renderCell: params => {
  //       return (
  //         <div className="cellAction">
  //           <Link
  //             to={`/dashboard/consultations/${params.row._id}`}
  //             style={{ textDecoration: "none" }}
  //           >
  //             <div className="viewButton">view</div>
  //           </Link>
  //         </div>
  //       );
  //     },
  //   },
  // ];

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
      render: (record) => {
        console.log("sta", record);
        if (record === "Pending") {
          return <Button type="primary">PENDING</Button>
        } else {
          return <Button type="success" >COMPLETED</Button>
        }
      },
    },
    {
      title: "Actions",
      dataIndex: "",
      key: "x",
      render: item => (
        <Link
          to={`/dashboard/consultations/${item._id}`}
        >
          <Button type="dashed" >view</Button>
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
    dispatch(getConsultations());
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
        <Table rowKey="_id" dataSource={consultations} columns={columns} />
      </div>
    </div>
  );
}
