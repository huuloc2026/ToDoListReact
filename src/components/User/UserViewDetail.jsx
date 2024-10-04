import { Drawer, Button } from "antd";

import React, { useState } from "react";

const UserViewDetail = (props) => {
  const { dataViewDetail, setDataViewDetail, openView, setOpenView } = props;

  //   const view = dataViewDetail.record;

  return (
    <>
      <Drawer
        title="User Information Detail"
        onClose={() => {
          setOpenView(false);
          setDataViewDetail(null);
        }}
        open={openView}
      >
        {dataViewDetail ? (
          <>
            <div>{dataViewDetail._id}</div>
            <div>{dataViewDetail.fullName}</div>
            <div>{dataViewDetail.email}</div>
            <div>{dataViewDetail.phone}</div>
            <div>{dataViewDetail.role}</div>
          </>
        ) : (
          <div> khong co du lieu </div>
        )}
      </Drawer>
    </>
  );
};

export default UserViewDetail;
