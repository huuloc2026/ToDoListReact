import { Button, Drawer, notification } from "antd";
import React, { useState } from "react";
import apiService from "../../services/apiService";
const UserViewDetail = (props) => {
  const { loadUser, dataViewDetail, setDataViewDetail, openView, setOpenView } =
    props;

  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);

  const handleOnChangeFile = (e) => {
    if (e) {
      setFile(e);
      setPreview(URL.createObjectURL(e));
    } else {
      setPreview(null);
      setFile(null);
    }
  };

  const handleUpdateAvatar = async () => {
    const resUpload = await apiService.UpdateAvatarAPI(file, "avatar");
    if (resUpload.data) {
      const newAvatar = resUpload.data.fileUploaded;
      const resUpdateAvatar = await apiService.upDateFunctionAvatar(
        newAvatar,
        dataViewDetail._id,
        dataViewDetail.fullName,
        dataViewDetail.phone
      );

      if (resUpdateAvatar.data) {
        notification.success({
          message: "Success upload file",
          description: "Success upload file",
        });
      } else {
        {
          notification.error({
            message: "Error upload file",
            description: JSON.stringify(resUpdateAvatar.message),
          });
        }
      }
      handleDrawerClose();
      loadUser();
    } else {
      notification.error({
        message: "error upload file",
        description: JSON.stringify(resUpload.message),
      });
    }
  };

  const handleDrawerClose = () => {
    setOpenView(false);
    setDataViewDetail(null);
    setFile(null); // Reset file when drawer closes
    setPreview(null); // Reset preview when drawer closes
  };

  return (
    <>
      <Drawer
        title="User Information Detail"
        onClose={handleDrawerClose}
        open={openView}
      >
        {dataViewDetail ? (
          <div className="">
            <ul>
              <li>ID: {dataViewDetail._id}</li>
              <li>Name: {dataViewDetail.fullName}</li>
              <li>Email: {dataViewDetail.email}</li>
              <li>Phone: {dataViewDetail.phone}</li>
              <li>Role: {dataViewDetail.role}</li>
            </ul>
            <div className=" gap-4">
              <li>Avatar: </li>
              <img
                className="w-[150px] rounded-full  "
                src={`${import.meta.env.VITE_BACKEND_URL}/images/avatar/${
                  dataViewDetail.avatar
                }`}
                alt="User Avatar"
              />
              <label htmlFor="uploadavatar">
                <div className="border w-[200px] flex p-2 justify-center bg-green-500 text-white rounded-full object-fill cursor-pointer">
                  Upload avatar
                </div>
                <input
                  type="file"
                  hidden
                  id="uploadavatar"
                  onChange={(e) => {
                    handleOnChangeFile(e.target.files[0]);
                  }}
                />
              </label>
              {file ? (
                <>
                  <div>
                    <img
                      className="w-[150px] rounded-full object-contain "
                      src={preview}
                      alt="Preview Avatar"
                    />
                  </div>
                  <Button type="primary" onClick={() => handleUpdateAvatar()}>
                    Save
                  </Button>
                </>
              ) : null}
            </div>
          </div>
        ) : (
          <div>No data available</div>
        )}
      </Drawer>
    </>
  );
};

export default UserViewDetail;
