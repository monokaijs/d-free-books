"use client";
import { Badge, Button, Modal, Typography, theme } from "antd";
import styles from "./ViewAccountModal.module.scss";
import {
  CalendarOutlined,
  DeleteOutlined,
  EditOutlined,
  HomeOutlined,
  PhoneOutlined,
} from "@ant-design/icons";
import { useRouter } from "next/navigation";
import ModalDetailInfo from "@/app/dashboard/components/ModalDetailInfo";
import moment from "moment";
import { useContext } from "react";
import { SessionContext } from "@/components/shared/SessionContext";

interface ViewAccountModalProps {
  isOpen: boolean;
  onCancel: () => void;
  accountDetail?: Account;
}

export default function ViewAccountModal(props: ViewAccountModalProps) {
  const { isOpen, onCancel, accountDetail } = props;
  const { account } = useContext(SessionContext);
  const {
    token: { colorPrimary },
  } = theme.useToken();

  const router = useRouter();
  return (
    <Modal
      centered
      className={styles.modal}
      open={isOpen}
      onCancel={onCancel}
      footer={null}
      width={640}
    >
      <div className={"flex gap-9 items-center mb-4"}>
        <img src="/images/default-user-avatar.png" alt="avatar" />
        <div className={styles.info + " w-full"}>
          <div>
            <div className="flex w-full justify-between">
              <Typography>
                #{accountDetail?._id?.slice(-6)?.toUpperCase()} -{" "}
                {moment(accountDetail?.joinDate).format("DD/MM/YYYY")}
              </Typography>
              <Typography
                style={{
                  color: colorPrimary,
                  textDecoration: "underline",
                  cursor: "pointer",
                  marginRight: 20,
                }}
              >
                Lịch sử mượn sách
              </Typography>
            </div>
            <Typography className={styles.title}>
              {accountDetail?.fullName}
            </Typography>
            <Typography className={styles.label}>Bạn đọc</Typography>
          </div>
        </div>
      </div>
      <ModalDetailInfo
        records={[
          {
            fieldName: "Giới tính",
            value: accountDetail?.gender ?? "Chưa có thông tin",
          },
          {
            fieldName: "Email",
            value: accountDetail?.email,
          },
          {
            fieldName: "Số điện thoại",
            value: accountDetail?.phoneNumber ?? "Chưa có thông tin",
          },
          {
            fieldName: "Số CCCD/CMD",
            value: accountDetail?.identityNumber ?? "Chưa có thông tin",
          },
          {
            fieldName: "Địa chỉ",
            value: accountDetail?.address ?? "Chưa có thông tin",
          },
        ]}
      />
      <div className={"flex gap-9 mt-4 justify-end"}>
        <Button
          icon={<EditOutlined />}
          onClick={() => {
            router.push("/dashboard/manage-libs/1");
            onCancel();
          }}
        >
          Sửa tài khoản
        </Button>
        <Button
          danger
          disabled={account?._id == accountDetail?._id}
          icon={<DeleteOutlined />}
        >
          Xóa tài khoản
        </Button>
      </div>
    </Modal>
  );
}
