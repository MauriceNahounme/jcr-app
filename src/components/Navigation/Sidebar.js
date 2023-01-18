import React, { useState } from "react";
import "./navigation.css";
import {
  HomeOutlined,
  FolderOpenOutlined,
  SettingOutlined,
  UsergroupDeleteOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";

function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}
const items = [
  getItem("Tableau de bord", "sub1", <HomeOutlined />, [
    getItem("Ajouter une âme", "1"),
    getItem("Statistiques", "2"),
  ]),
  getItem("Ma famille", "sub2", <UsergroupDeleteOutlined />, [
    getItem("Âmes", "3"),
    getItem("Statistiques", "4"),
  ]),
  getItem("Documents", "sub3", <FolderOpenOutlined />, [
    getItem("Xls", "5"),
    getItem("Pdf", "6"),
  ]),
  getItem("Compte", "sub4", <SettingOutlined />, [
    getItem("Mon Profil", "7"),
    getItem("Déconnexion", "8"),
  ]),
];

// submenu keys of first level
const rootSubmenuKeys = ["sub1", "sub2", "sub3", "sub4"];

const Sidebar = () => {
  const [openKeys, setOpenKeys] = useState(["sub1"]);

  const onOpenChange = (keys) => {
    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
    if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };

  const handleClick = (keys) => {
    if (keys.key === "1") {
      window.location = "/add_saul";
    }
  };

  return (
    <div className="sidebar col-2">
      <Menu
        mode="inline"
        openKeys={openKeys}
        onOpenChange={onOpenChange}
        onClick={handleClick}
        style={{ backgroundColor: "#F6F6FF" }}
        items={items}
      />
    </div>
  );
};

export default Sidebar;
